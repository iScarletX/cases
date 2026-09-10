(() => {
 'use strict';
 const stage=document.getElementById('stage'),viewport=document.getElementById('viewport');
 const dialog=document.getElementById('dialog'),dialogBody=document.getElementById('dialog-body');
 const boardNames={menu:'主菜单',choice:'剧情选择',route:'故事路线',character:'角色列表',ending:'结局完成'};
 let caseId,board,config,selectedRoute,selectedCharacter,pinnedCharacter,lastFocus,selectedChoice=0;
 const asset=name=>`assets/${caseId}/${name}`;
 const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const lines=s=>escape(s).replace(/\n/g,'<br>');
 const announce=s=>document.getElementById('announcement').textContent=s;
 function box(rect){const p=config.previews[board];return [(rect[0]-p[0])*1920/p[2],(rect[1]-p[1])*1080/p[3],rect[2]*1920/p[2],rect[3]*1080/p[3]];}
 function place(el,rect){const [x,y,w,h]=box(rect);Object.assign(el.style,{left:x+'px',top:y+'px',width:w+'px',height:h+'px'});el.classList.add('positioned');return el;}
 function element(tag,cls,html=''){const e=document.createElement(tag);e.className=cls;e.innerHTML=html;return e;}
 function button(cls,label,handler){const e=element('button',cls);e.type='button';e.setAttribute('aria-label',label);e.addEventListener('click',handler);return e;}
 function sprite(name,label,rect,handler,selected=false){
  const e=handler?button('sprite',label,handler):element('div','sprite static');
  e.innerHTML=`<img class="state-off" src="${asset(name+'-off.png')}" alt=""><img class="state-on" src="${asset(name+'-on.png')}" alt=""><span class="sr-only">${escape(label)}</span>`;
  if(selected)e.classList.add('selected');
  place(e,rect);stage.append(e);return e;
 }
 function staticArt(name,label,rect){const el=element('div','static-art',`<img src="${asset(name+'.png')}" alt="${escape(label)}">`);place(el,rect);stage.append(el);return el;}
 function groupedHover(elements){
  elements.forEach(e=>{
   e.addEventListener('pointerenter',()=>elements.forEach(x=>x.classList.toggle('previewed',x===e)));
   e.addEventListener('pointerleave',()=>elements.forEach(x=>x.classList.remove('previewed')));
   e.addEventListener('focus',()=>elements.forEach(x=>x.classList.toggle('previewed',x===e)));
   e.addEventListener('blur',()=>elements.forEach(x=>x.classList.remove('previewed')));
  });
 }
 function renderMenu(){
  const destinations=['choice','route','character'],labels=['开始游戏','故事路线','角色列表'];
  const controls=labels.map((label,i)=>{
   const e=sprite('menu-'+i,label,config.menu[i],()=>navigate(destinations[i]),i===0);
   if(caseId==='c02'||caseId==='c06'){
    e.querySelector('.state-off').src=asset('menu-'+i+'-on.png');
    e.classList.add('clean-menu');
   }
   return e;
  });groupedHover(controls);
 }
 function renderChoice(){
  staticArt('question-clean',config.question,config.questionBox);
  const controls=config.choices.map((label,i)=>{
   const choose=()=>{
    selectedChoice=i;controls.forEach((c,n)=>{c.classList.toggle('selected',n===i);c.setAttribute('aria-pressed',String(n===i));});
    try{localStorage.setItem('story-choice-'+caseId,String(i));}catch{}
    openDialog(config.question,`<p class="choice-confirm">${lines(label)}</p><div class="dialog-actions"><button type="button" data-dialog-action="close">返回</button><button type="button" data-dialog-action="finish">继续</button></div>`);
   };
   let e;
   if(caseId==='c01'||caseId==='c06'){
    e=button('paper-choice selected-'+i,label,choose);
    e.innerHTML=`<span>${lines(label)}</span><i class="fold" aria-hidden="true"></i>`;place(e,config.choiceBoxes[i]);stage.append(e);
   }else e=sprite('choice-'+i,label,config.choiceBoxes[i],choose);
   e.classList.add('choice-control');e.classList.toggle('selected',i===selectedChoice);e.setAttribute('aria-pressed',String(i===selectedChoice));return e;
  });groupedHover(controls);
 }
 function routeFrame(title,i){
  const e=button('route-node',title,()=>selectRoute(i,true));e.dataset.node=i;e.setAttribute('aria-pressed',String(i===selectedRoute));
  e.innerHTML=`<div class="route-shell"><div class="route-window">${i===0?`<img src="${asset('route-photo.png')}" alt="">`:''}</div><span class="route-title">${escape(title)}</span><i class="route-stamp" aria-hidden="true">${caseId==='c03'?String(i+1).padStart(2,'0'):caseId==='c05'?'●':caseId==='c04'?'◉':'⊕'}</i></div><i class="top-clip one" aria-hidden="true"></i><i class="top-clip two" aria-hidden="true"></i>`;
  if(caseId==='c04'||caseId==='c05'){
   const frame=element('img','sculpted-frame');frame.src=asset('route-frame.png');frame.alt='';e.prepend(frame);
  }
  place(e,config.routeBoxes[i]);e.addEventListener('pointerenter',()=>highlightRoute(i));e.addEventListener('pointerleave',()=>highlightRoute(selectedRoute));
  e.addEventListener('focus',()=>highlightRoute(i));e.addEventListener('blur',()=>highlightRoute(selectedRoute));
  e.addEventListener('dblclick',()=>chapterDialog(i));return e;
 }
 function edgePath(a,b){
  const A=box(config.routeBoxes[a]),B=box(config.routeBoxes[b]);
  const start=[A[0]+A[2],A[1]+A[3]*.52],end=[B[0],B[1]+B[3]*.52];
  if(caseId==='c01')return `M ${start} H ${start[0]+(end[0]-start[0])*.36} Q ${start[0]+(end[0]-start[0])*.5} ${start[1]} ${start[0]+(end[0]-start[0])*.5} ${start[1]+Math.sign(end[1]-start[1])*25} V ${end[1]-Math.sign(end[1]-start[1])*25} Q ${start[0]+(end[0]-start[0])*.5} ${end[1]} ${start[0]+(end[0]-start[0])*.64} ${end[1]} H ${end[0]-5}`;
  if(caseId==='c03')return `M ${start} H ${start[0]+(end[0]-start[0])*.35} L ${start[0]+(end[0]-start[0])*.65} ${end[1]} H ${end[0]-5}`;
  return `M ${start} L ${end[0]-6} ${end[1]}`;
 }
 function renderRoute(){
  const ns='http://www.w3.org/2000/svg';const svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox','0 0 1920 1080');svg.classList.add('routes');svg.setAttribute('aria-hidden','true');
  svg.innerHTML=`<defs><marker id="arrow-off" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10Z" fill="var(--line)"/></marker><marker id="arrow-on" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10Z" fill="var(--accent)"/></marker></defs>`;
  config.edges.forEach(([a,b],i)=>{const p=document.createElementNS(ns,'path');p.setAttribute('d',edgePath(a,b));p.dataset.edge=i;p.setAttribute('marker-end','url(#arrow-off)');svg.append(p);});stage.append(svg);
  config.routeTitles.forEach((title,i)=>stage.append(routeFrame(title,i)));highlightRoute(selectedRoute);
 }
 function highlightRoute(i){
  stage.querySelectorAll('.route-node').forEach((e,n)=>e.classList.toggle('selected',i===n));
  let edge=config.selectedEdge;if(i!==config.selectedRoute){const incoming=config.edges.findIndex(([a,b])=>b===i);edge=incoming>=0?incoming:0;}
  stage.querySelectorAll('[data-edge]').forEach((e,n)=>{e.classList.toggle('selected',n===edge);e.setAttribute('marker-end',n===edge?'url(#arrow-on)':'url(#arrow-off)');});
 }
 function selectRoute(i,open){const previous=selectedRoute;selectedRoute=i;highlightRoute(i);stage.querySelectorAll('.route-node').forEach((e,n)=>e.setAttribute('aria-pressed',String(n===i)));announce('已选择：'+config.routeTitles[i]);if(open&&previous===i)chapterDialog(i);}
 function chapterDialog(i){openDialog(config.routeTitles[i],`<div class="chapter-image"><img src="${asset((i===0?'choice':'route')+'-background.jpg')}" alt=""></div><div class="dialog-actions"><button type="button" data-dialog-action="close">返回路线</button><button type="button" data-dialog-action="${i>=3?'finish':'start'}">从这里开始</button></div>`);}
 function renderCharacters(){
  const layout=config.characterLayout;const group=element('div','characters');place(group,layout.box);stage.append(group);
  config.characters.forEach((c,i)=>{
   const item=element('article','character');item.dataset.character=i;
   const front=button('character-front',c.name+'，'+c.role.replace(/\n/g,''),()=>{pinnedCharacter=i;expandCharacter(i);});
   front.setAttribute('aria-controls','character-detail-'+i);front.setAttribute('aria-expanded',String(i===selectedCharacter));
   if(caseId==='c04'||caseId==='c05'){
    front.innerHTML=`<img class="char-art" src="${asset('char-art-'+i+'.png')}" alt=""><span class="sr-only">${escape(c.name)} ${escape(c.role)}</span>`;
    if(caseId==='c05'&&i===0)front.insertAdjacentHTML('beforeend',`<span class="missing-role">${lines(c.role)}</span>`);
   }else front.innerHTML=`<div class="portrait-window"><img src="${asset('portrait-'+i+'.png')}" alt="${escape(c.name)}"></div><strong class="character-name">${escape(c.name)}</strong><span class="character-role">${lines(c.role)}</span><i class="character-hardware" aria-hidden="true"></i>`;
   const detail=element('div','character-detail',`<h2>${lines(c.detailRole||c.role)}</h2><p>${lines(c.description)}</p>`);detail.id='character-detail-'+i;
   item.append(front,detail);
   if((caseId==='c04'||caseId==='c05')&&i===0){const open=element('img','char-open-art');open.src=asset('char-open.png');open.alt='';item.append(open);}
   const collapse=button('character-collapse','收起'+c.name+'的详情',()=>{pinnedCharacter=-1;front.focus({preventScroll:true});expandCharacter(-1);});collapse.textContent='×';collapse.title='收起详情';item.append(collapse);
   group.append(item);
   item.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')expandCharacter(i);});
   item.addEventListener('pointerleave',e=>{if(e.pointerType!=='touch')expandCharacter(pinnedCharacter);});
   front.addEventListener('focus',()=>expandCharacter(i));
  });
  expandCharacter(selectedCharacter);
 }
 function expandCharacter(i){
  selectedCharacter=i;
  const layout=config.characterLayout,p=config.previews.character,scale=1920/p[2];
  const extra=layout.expanded-layout.widths[config.selectedCharacter];let offset=0;
  stage.querySelectorAll('.character').forEach((item,n)=>{
   const expanded=n===i,w=layout.widths[n]+(expanded?extra:0);
   item.style.left=offset*scale+'px';item.style.width=w*scale+'px';item.style.setProperty('--front-width',layout.widths[n]*scale+'px');
   item.classList.toggle('expanded',expanded);item.querySelector('button').setAttribute('aria-expanded',String(expanded));item.querySelector('.character-detail').setAttribute('aria-hidden',String(!expanded));item.querySelector('.character-collapse').tabIndex=expanded?0:-1;
   offset+=w+(layout.gaps?layout.gaps[n]||0:layout.gap);
  });
 }
 function renderEnding(){
  if(caseId==='c04'||caseId==='c05')staticArt('complete','恭喜你 完成该结局！',config.completeBox);
  else {
   const completed=element('div','complete paper-surface',caseId==='c01'||caseId==='c03'?'恭喜你<br>完成该结局！':'恭喜你 完成该结局！');place(completed,config.completeBox);stage.append(completed);
  }
  if(caseId==='c04'||caseId==='c05')sprite('other','去看看其它结局',config.otherBox,()=>navigate('route'),true);
  else {const other=button('other-ending paper-surface','去看看其它结局',()=>navigate('route'));other.innerHTML='<span>去看看其它结局</span><i aria-hidden="true"></i>';place(other,config.otherBox);stage.append(other);}
  const label=element('div','recommend-heading','其它推荐');place(label,config.recommendLabel);stage.append(label);
  const controls=config.recommendations.map((title,i)=>{
   if(caseId==='c04'||caseId==='c05')return sprite('recommend-'+i,title,config.recommendBoxes[i],()=>recommendDialog(i),i===config.selectedRecommendation);
   const e=button('recommendation paper-surface',title,()=>recommendDialog(i));
   e.innerHTML=`<img class="recommend-photo" src="${asset('recommend-photo-'+i+'.png')}" alt=""><strong>${escape(title)}</strong><i class="recommend-light" aria-hidden="true"></i>${caseId==='c03'?`<i class="file-number" aria-hidden="true">0${i+1}</i>`:''}`;
   e.classList.toggle('selected',i===config.selectedRecommendation);place(e,config.recommendBoxes[i]);stage.append(e);return e;
  });groupedHover(controls);
 }
 function recommendDialog(i){
  const src=asset((caseId==='c04'||caseId==='c05'?'recommend-'+i+'-on':'recommend-photo-'+i)+'.png');
  openDialog(config.recommendations[i],`<div class="recommend-preview"><img src="${src}" alt="${escape(config.recommendations[i])}"></div><div class="dialog-actions"><button type="button" data-dialog-action="close">返回</button><button type="button" data-dialog-action="route">故事路线</button></div>`);
 }
 function openDialog(title,body){
  lastFocus=document.activeElement;dialogBody.innerHTML=`<h1 id="dialog-title">${escape(title)}</h1>${body}`;
  dialog.style.setProperty('--accent',config.accent);dialog.style.setProperty('--ink',config.ink);dialog.style.setProperty('--paper',config.paper);
  if(!dialog.open)dialog.showModal();dialog.querySelector('.dialog-close').focus();
 }
 function closeDialog(){dialog.close();if(lastFocus&&lastFocus.isConnected)lastFocus.focus();}
 dialog.querySelector('.dialog-close').addEventListener('click',closeDialog);
 dialog.addEventListener('click',e=>{
  const action=e.target.closest('[data-dialog-action]')?.dataset.dialogAction;if(!action)return;
  closeDialog();if(action==='finish')navigate('ending');else if(action==='start')navigate('choice');else if(action==='route')navigate('route');
 });
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog();}});
 dialog.addEventListener('cancel',e=>{e.preventDefault();closeDialog();});
 function addBack(){if(board==='menu')return;const e=button('back-button','返回主菜单',()=>navigate('menu'));e.title='返回主菜单';e.innerHTML='<span aria-hidden="true">‹</span>';stage.append(e);}
 function navigate(next){const url=new URL(location.href);url.searchParams.set('case',caseId);url.searchParams.set('board',next);try{history.pushState({},'',url);}catch{location.href=url.href;return;}render();}
 function resize(){
  const portrait=innerWidth<700&&innerHeight>innerWidth;
  const scale=portrait?.5:Math.min(innerWidth/1920,innerHeight/1080);
  const width=1920*scale,height=1080*scale;
  stage.style.transform=`scale(${scale})`;
  const frame=document.getElementById('scene-frame');Object.assign(frame.style,{width:width+'px',height:height+'px',marginLeft:portrait?'0':Math.max(0,(innerWidth-width)/2)+'px',marginTop:Math.max(0,(innerHeight-height)/2)+'px'});
  viewport.style.setProperty('--scene-width',width+'px');viewport.style.setProperty('--scene-height',height+'px');viewport.classList.toggle('pan-scene',portrait);
 }
 function render(){
  const params=new URLSearchParams(location.search);caseId=Object.hasOwn(CASES,params.get('case'))?params.get('case'):'c01';board=Object.hasOwn(boardNames,params.get('board'))?params.get('board'):'menu';config=CASES[caseId];
  selectedRoute=config.selectedRoute;selectedCharacter=config.selectedCharacter;pinnedCharacter=selectedCharacter;selectedChoice=0;
  if(dialog.open)dialog.close();stage.replaceChildren();stage.className=caseId+' board-'+board;
  stage.style.setProperty('--accent',config.accent);stage.style.setProperty('--ink',config.ink);stage.style.setProperty('--paper',config.paper);stage.style.setProperty('--paper-image',`url("${asset('paper.png')}")`);
  stage.style.backgroundImage=`url("${asset(board+'-background.jpg')}")`;stage.setAttribute('aria-label',config.title+'：'+boardNames[board]);document.title=config.title+' · '+boardNames[board];
  ({menu:renderMenu,choice:renderChoice,route:renderRoute,character:renderCharacters,ending:renderEnding})[board]();addBack();resize();
  requestAnimationFrame(()=>{viewport.scrollLeft=viewport.classList.contains('pan-scene')&&board==='menu'&&(caseId==='c04'||caseId==='c05')?viewport.scrollWidth-viewport.clientWidth:0;});
 }
 document.addEventListener('keydown',e=>{
  if(dialog.open)return;
  if(e.key==='Escape'){if(board==='character'&&selectedCharacter>=0){pinnedCharacter=-1;expandCharacter(-1);}else if(board!=='menu')navigate('menu');e.preventDefault();}
  if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key)){
   const buttons=[...stage.querySelectorAll('button:not(.back-button)')].filter(b=>b.tabIndex!==-1&&b.offsetWidth>0);const i=buttons.indexOf(document.activeElement);if(!buttons.length)return;
   let next=e.key==='Home'?0:e.key==='End'?buttons.length-1:(i+(e.key==='ArrowLeft'||e.key==='ArrowUp'?-1:1)+buttons.length)%buttons.length;
   e.preventDefault();buttons[next].focus({preventScroll:false});
  }
 });
 addEventListener('resize',resize);addEventListener('popstate',render);render();
})();
