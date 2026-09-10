(() => {
 'use strict';
 const validBoards=['menu','choice','route','character','ending'];
 const params=new URLSearchParams(location.search);
 const caseId=Object.hasOwn(CASES,params.get('case'))?params.get('case'):'c01';
 const story=CASES[caseId];
 let board=validBoards.includes(params.get('board'))?params.get('board'):'menu';
 const stage=document.getElementById('stage');
 const viewport=document.getElementById('viewport');
 const announce=document.getElementById('announcer');
 const stack=[];
 const state={choice:0,route:story.routeSelected,character:story.initialCharacter,music:false};
 const music=new Audio(`assets/${caseId}/bgm.wav`);music.loop=true;music.volume=.3;
 const asset=name=>`assets/${caseId}/${name}`;
 const escapeHTML=str=>String(str).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const textLines=str=>escapeHTML(str).replace(/\n/g,'<br>');
 const icon=name=>`<img class="icon" src="icons/${name}.svg" alt="">`;
 const setMessage=message=>{announce.textContent=message;};

 function artButton(kind,index,label,attributes=''){
  const prefix=index===null?kind:`${kind}-${index}`;
  return `<button class="art-button ${kind}-button" ${attributes} aria-label="${escapeHTML(label.replace(/\n/g,''))}"><img class="art normal" src="${asset(prefix+'-0.png')}" alt=""><img class="art active" src="${asset(prefix+'-1.png')}" alt=""><span class="sr-only">${escapeHTML(label)}</span></button>`;
 }
 function staticArt(name,label,className){return `<div class="static-art ${className}" role="heading" aria-level="2" aria-label="${escapeHTML(label)}"><img src="${asset(name+'.png')}" alt="${escapeHTML(label)}"></div>`;}
 function toolbar(){
  return `<nav class="utilities" aria-label="页面操作">${board!=='menu'?`<button class="icon-button" data-action="back" aria-label="返回主菜单" title="返回主菜单">${icon('arrow-left')}</button>`:''}<button class="icon-button" data-action="music" aria-label="${state.music?'关闭':'播放'}背景音乐" aria-pressed="${state.music}" title="背景音乐">${icon(state.music?'volume-2':'volume-x')}</button></nav>`;
 }
 function renderMenu(){
  return `<h1 class="mobile-title">${escapeHTML(story.title)}</h1><nav class="menu-options" aria-label="主菜单">${['开始游戏','故事路线','角色列表'].map((x,i)=>artButton('menu',i,x,`data-go="${['choice','route','character'][i]}" ${i===0?'data-initial="true"':''}`)).join('')}</nav>`;
 }
 function renderChoice(){
  return `${staticArt('question',story.question,'question')}<div class="choices" aria-label="剧情选择">${story.choices.map((x,i)=>artButton('choice',i,x,`data-choice="${i}" aria-pressed="${state.choice===i}" ${state.choice===i?'data-selected="true"':''}`)).join('')}</div>`;
 }
 function renderRoute(){
  return `<section class="route-layer" aria-label="故事路线"><svg class="connections" aria-hidden="true"><defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="context-stroke"/></marker></defs><g class="wires"></g></svg>${story.routes.map((title,i)=>{
   const [x,y,w,h]=story.nodes[i];const [hx,hy,hw,hh]=story.hole;const [lx,ly,lw,lh]=story.label;
   return `<button class="route-node" style="--x:${x}%;--y:${y}%;--w:${w}%;--h:${h}%;--hx:${hx}%;--hy:${hy}%;--hw:${hw}%;--hh:${hh}%;--lx:${lx}%;--ly:${ly}%;--lw:${lw}%;--lh:${lh}%" data-node="${i}" aria-label="${escapeHTML(title)}" aria-pressed="${i===state.route}" data-selected="${i===state.route}"><img class="node-frame normal" src="${asset('route-0.png')}" alt=""><img class="node-frame active" src="${asset('route-1.png')}" alt="">${i===0?`<img class="route-thumb" src="${asset('choice-background.jpg')}" alt="">`:''}<span class="route-title">${escapeHTML(title)}</span><span class="node-stamp" aria-hidden="true">${caseId==='c03'?String(i+1).padStart(2,'0'):caseId==='c05'?'●':caseId==='c04'?'◉':'⊕'}</span></button>`;
  }).join('')}</section>`;
 }
 function detailMarkup(c){
  const showHeading=caseId!=='c01';
  return `${showHeading?`<h2>${textLines(c.role)}</h2>`:''}${c.relations?c.relations.map(r=>`<p class="relation">${textLines(r)}</p>`).join(''):`<p>${textLines(c.text)}</p>`}`;
 }
 function renderCharacters(){
  return `<section class="characters" aria-label="角色列表">${story.characters.map((c,i)=>{
   const open=state.character===i;const completeArt=['c04','c05'].includes(caseId);
   return `<article class="character-unit ${open?'expanded':''}" data-character-unit="${i}"><button class="portrait-button ${completeArt?'complete-art':''}" data-character="${i}" aria-label="${c.name}，${c.role.replace(/\n/g,'')}" aria-expanded="${open}" aria-controls="details-${i}">${completeArt?`<img class="complete-portrait" src="${asset('portrait-'+i+'.png')}" alt="${c.name}"><span class="art-identity ${i===0?'first-identity':''}" aria-hidden="true">${textLines(c.role)}</span>`:`<span class="card-rod" aria-hidden="true"></span><span class="portrait-window"><img src="${asset('portrait-'+i+'.png')}" alt="${c.name}"></span><span class="character-name">${c.name}</span><span class="character-role">${textLines(c.role)}</span><span class="card-fastener" aria-hidden="true"></span>`}</button><section class="character-details" id="details-${i}" aria-label="${c.name}的详情" ${open?'':'hidden'}><div class="detail-content">${detailMarkup(c)}</div></section></article>`;
  }).join('')}</section>`;
 }
 function recommendation(i){
  const label=story.recommendations[i];
  if(['c02','c06'].includes(caseId))return `<button class="recommendation rebuilt-rec" data-rec="${i}" data-selected="${i===0}" aria-label="${label}"><img class="recommendation-image" src="${asset('rec-image-'+i+'.png')}" alt=""><span>${label}</span><i class="rec-indicator" aria-hidden="true"></i></button>`;
  return artButton('rec',i,label,`data-rec="${i}" data-selected="${i===(['c04','c05'].includes(caseId)?1:0)}"`);
 }
 function renderEnding(){
  return `${staticArt('completion','恭喜你 完成该结局！','completion')}${artButton('other',null,'去看看其它结局','data-go="route"')}<section class="recommendations" aria-label="其它推荐"><h2>其它推荐</h2><div class="recommendation-list">${story.recommendations.map((_,i)=>recommendation(i)).join('')}</div></section>`;
 }
 function render(){
  while(stack.length)popModal();
  stage.className=`stage ${caseId} ${story.theme} board-${board}`;
  stage.style.setProperty('--paper',`url("${asset('paper.png')}")`);
  stage.innerHTML=`<img class="scene" src="${asset(board+'-background.jpg')}" alt=""><div class="screen" id="screen">${({menu:renderMenu,choice:renderChoice,route:renderRoute,character:renderCharacters,ending:renderEnding})[board]()}</div>${toolbar()}<div id="overlays"></div>`;
  document.title=`${story.title} · ${{menu:'主菜单',choice:'剧情选择',route:'故事路线',character:'角色列表',ending:'结局完成'}[board]}`;
  fit();
  const initial=stage.querySelector(board==='menu'?'[data-initial]':board==='choice'?'[data-choice="0"]':board==='route'?`[data-node="${state.route}"]`:board==='character'?`[data-character="${state.character}"]`:'[data-go="route"]');
  initial?.focus({preventScroll:true});
  requestAnimationFrame(()=>{stage.classList.add('ready');drawConnections();});
 }
 function navigate(next,push=true){
  if(!validBoards.includes(next))return;
  board=next;
  if(push){try{history.pushState({board},'',`?case=${caseId}&board=${board}`);}catch{}}
  render();window.scrollTo(0,0);
 }
 function fit(){
  const portrait=matchMedia('(max-width: 700px) and (orientation: portrait)').matches;
  document.body.classList.toggle('portrait-layout',portrait);
  if(portrait){stage.style.transform='';viewport.style.width='';viewport.style.height='';}
  else{const scale=Math.min(innerWidth/1920,innerHeight/1080);stage.style.transform=`scale(${scale})`;viewport.style.width=`${1920*scale}px`;viewport.style.height=`${1080*scale}px`;}
  drawConnections();
 }
 function drawConnections(){
  const layer=stage.querySelector('.route-layer');if(!layer)return;
  const svg=layer.querySelector('svg'),base=layer.getBoundingClientRect();
  if(!base.width||!base.height)return;
  const scale=layer.offsetWidth/base.width, width=layer.offsetWidth,height=layer.offsetHeight;
  svg.setAttribute('viewBox',`0 0 ${width} ${height}`);
  const mobile=document.body.classList.contains('portrait-layout');
  const rects=[...layer.querySelectorAll('.route-node')].map(e=>{const r=e.getBoundingClientRect();return{x:(r.left-base.left)*scale,y:(r.top-base.top)*scale,w:r.width*scale,h:r.height*scale};});
  svg.querySelector('.wires').innerHTML=story.edges.map(([a,b],i)=>{
   const from=rects[a],to=rects[b];let x1=from.x+from.w-3,y1=from.y+from.h*.5,x2=to.x+3,y2=to.y+to.h*.5;
   if(mobile){x1=from.x+from.w*.5;y1=from.y+from.h;x2=to.x+to.w*.5;y2=to.y;}
   let d=`M${x1} ${y1} L${x2} ${y2}`;
   if(caseId==='c01'&&!mobile){const mid=(x1+x2)/2;d=`M${x1} ${y1}H${mid-28}Q${mid} ${y1} ${mid} ${y1+(y2>y1?28:-28)}V${y2+(y2>y1?-28:28)}Q${mid} ${y2} ${mid+28} ${y2}H${x2}`;if(Math.abs(y2-y1)<30)d=`M${x1} ${y1}L${x2} ${y2}`;}
   if(caseId==='c03'&&!mobile){d=`M${x1} ${y1}H${x1+(x2-x1)*.35}L${x1+(x2-x1)*.65} ${y2}H${x2}`;}
   const active=state.route===story.routeSelected?i===story.edgeSelected:b===state.route;
   return `<path class="wire ${active?'selected':''}" d="${d}" marker-end="url(#arrow)" data-edge="${i}"/>`;
  }).join('');
 }
 function selectRoute(i){
  if(state.route===i){pushModal(story.routes[i],`<div class="chapter-preview"><img src="${asset((i===0?'choice':'route')+'-background.jpg')}" alt=""></div>`,[{text:'进入剧情',action:()=>navigate(i>=3?'ending':'choice')},{text:'返回路线',action:popModal}]);return;}
  state.route=i;
  stage.querySelectorAll('[data-node]').forEach(e=>{const selected=Number(e.dataset.node)===i;e.dataset.selected=selected;e.setAttribute('aria-pressed',selected);});
  drawConnections();setMessage(`已选择：${story.routes[i]}`);
 }
 function expandCharacter(i,toggle=false){
  const next=toggle&&state.character===i?-1:i;
  if(next===state.character)return;state.character=next;
  stage.querySelectorAll('[data-character-unit]').forEach(unit=>{const open=Number(unit.dataset.characterUnit)===next;unit.classList.toggle('expanded',open);unit.querySelector('button').setAttribute('aria-expanded',open);unit.querySelector('.character-details').hidden=!open;});
  if(next>=0)setMessage(`${story.characters[next].name}，${story.characters[next].role.replace(/\n/g,'')}`);
 }
 function pushModal(title,content,actions){
  const previous=document.activeElement;
  const overlay=document.createElement('div');overlay.className='modal-backdrop';
  overlay.innerHTML=`<section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHTML(title)}"><button class="modal-close icon-button" aria-label="关闭" title="关闭">${icon('x')}</button><h2>${escapeHTML(title)}</h2>${content}<div class="modal-actions">${actions.map((a,i)=>`<button class="command" data-modal-action="${i}">${escapeHTML(a.text)}</button>`).join('')}</div></section>`;
  stage.querySelector('#screen').inert=true;stage.querySelector('.utilities').inert=true;
  if(stack.length)stack.at(-1).overlay.inert=true;
  stage.querySelector('#overlays').append(overlay);stack.push({overlay,previous});
  overlay.querySelector('.modal-close').addEventListener('click',popModal);
  overlay.addEventListener('click',e=>{if(e.target===overlay)popModal();});
  overlay.querySelectorAll('[data-modal-action]').forEach(el=>el.addEventListener('click',()=>actions[Number(el.dataset.modalAction)].action()));
  overlay.querySelector('.command')?.focus();
 }
 function popModal(){
  const top=stack.pop();if(!top)return;top.overlay.remove();
  if(stack.length)stack.at(-1).overlay.inert=false;
  else{stage.querySelector('#screen').inert=false;stage.querySelector('.utilities').inert=false;}
  if(top.previous?.isConnected)top.previous.focus({preventScroll:true});
 }
 stage.addEventListener('click',event=>{
  const button=event.target.closest('button');if(!button)return;
  if(button.dataset.go){navigate(button.dataset.go);return;}
  if(button.dataset.action==='back'){navigate('menu');return;}
  if(button.dataset.action==='music'){
   state.music=!state.music;if(state.music)music.play().catch(()=>{state.music=false;setMessage('背景音乐未能播放');});else music.pause();
   button.innerHTML=icon(state.music?'volume-2':'volume-x');button.setAttribute('aria-pressed',state.music);button.setAttribute('aria-label',`${state.music?'关闭':'播放'}背景音乐`);return;
  }
  if(button.dataset.choice!==undefined){
   const i=Number(button.dataset.choice);state.choice=i;
   stage.querySelectorAll('[data-choice]').forEach(e=>{const selected=Number(e.dataset.choice)===i;e.dataset.selected=selected;e.setAttribute('aria-pressed',selected);});
   pushModal(story.choices[i].replace(/\n/g,''),`<p class="choice-dialog-question">${escapeHTML(story.question)}</p>`,[{text:'继续',action:()=>navigate('ending')},{text:'重新选择',action:popModal}]);return;
  }
  if(button.dataset.node!==undefined){selectRoute(Number(button.dataset.node));return;}
  if(button.dataset.character!==undefined){expandCharacter(Number(button.dataset.character),event.detail!==0);return;}
  if(button.dataset.rec!==undefined){const i=Number(button.dataset.rec);pushModal(story.recommendations[i],`<img class="recommendation-preview" src="${asset('rec-image-'+i+'.png')}" alt="${story.recommendations[i]}">`,[{text:'故事路线',action:()=>navigate('route')},{text:'返回结局',action:popModal}]);}
 });
 stage.addEventListener('pointerover',e=>{
  if(e.pointerType==='touch')return;
  const button=e.target.closest('[data-character]');if(button)expandCharacter(Number(button.dataset.character));
 });
 stage.addEventListener('focusin',e=>{if(e.target.matches('[data-character]'))expandCharacter(Number(e.target.dataset.character));});
 document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){e.preventDefault();if(stack.length)popModal();else if(board==='character'&&state.character>=0)expandCharacter(state.character,true);else if(board!=='menu')navigate('menu');return;}
  const root=stack.length?stack.at(-1).overlay:stage;
  const controls=[...root.querySelectorAll('button:not(:disabled),input,a[href]')].filter(x=>x.offsetWidth&&x.offsetHeight&&!x.closest('[inert]'));
  const index=controls.indexOf(document.activeElement);
  if(stack.length&&e.key==='Tab'){if(e.shiftKey&&index<=0){e.preventDefault();controls.at(-1)?.focus();}else if(!e.shiftKey&&index===controls.length-1){e.preventDefault();controls[0]?.focus();}}
  if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Home','End'].includes(e.key)){
   e.preventDefault();let next=e.key==='Home'?0:e.key==='End'?controls.length-1:(index+(['ArrowUp','ArrowLeft'].includes(e.key)?-1:1)+controls.length)%controls.length;
   controls[next]?.focus({preventScroll:!document.body.classList.contains('portrait-layout')});
  }
 });
 window.addEventListener('resize',fit);
 window.addEventListener('popstate',()=>{const b=new URLSearchParams(location.search).get('board');navigate(validBoards.includes(b)?b:'menu',false);});
 // Controller input is polled only while a controller is connected; visual state remains event driven.
 let gamepadFrame=0,held=new Set();
 function pollGamepad(){
  const pad=[...navigator.getGamepads()].find(Boolean);if(!pad){gamepadFrame=0;held.clear();return;}
  const mapping=[[0,'Enter'],[1,'Escape'],[12,'ArrowUp'],[13,'ArrowDown'],[14,'ArrowLeft'],[15,'ArrowRight']];const current=new Set();
  mapping.forEach(([i,key])=>{if(pad.buttons[i]?.pressed)current.add(key);});
  if(pad.axes[0]<-.6)current.add('ArrowLeft');if(pad.axes[0]>.6)current.add('ArrowRight');if(pad.axes[1]<-.6)current.add('ArrowUp');if(pad.axes[1]>.6)current.add('ArrowDown');
  current.forEach(key=>{if(!held.has(key)){if(key==='Enter')document.activeElement?.click();else document.dispatchEvent(new KeyboardEvent('keydown',{key,bubbles:true}));}});held=current;gamepadFrame=requestAnimationFrame(pollGamepad);
 }
 window.addEventListener('gamepadconnected',()=>{if(!gamepadFrame)pollGamepad();});
 render();
})();
