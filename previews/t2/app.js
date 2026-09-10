(() => {
  'use strict';
  const stages=['menu','choice','route','character','ending'];
  const stage=document.getElementById('stage');
  const viewport=document.getElementById('viewport');
  const dialog=document.getElementById('dialog');
  const live=document.getElementById('live');
  const portrait=()=>matchMedia('(max-width:700px) and (orientation:portrait)').matches;
  let c,board,selectedRoute,selectedEdge,expanded,selectedChoice,selectedRecommendation;
  let audio,lastFocus,utilityTimer,previousPad={},pointerFocus=false;
  document.addEventListener('pointerdown',()=>{pointerFocus=true;setTimeout(()=>pointerFocus=false,0);},true);
  const saved={get(key){try{return localStorage.getItem(key);}catch{return null;}},set(key,value){try{localStorage.setItem(key,String(value));}catch{}}};
  function el(tag,attrs={},children=[]){
    const element=document.createElement(tag);
    for(const [key,value] of Object.entries(attrs)){
      if(key==='class')element.className=value;
      else if(key==='text')element.textContent=value;
      else element.setAttribute(key,String(value));
    }
    for(const child of children)element.append(child);
    return element;
  }
  function announce(text){live.textContent=text;}
  function asset(name){return c.assets[name].src;}
  function project(rect,type=board){
    const [ox,oy,w,h]=c.previews[type];
    return [(rect[0]-ox)*1920/w,(rect[1]-oy)*1080/h,rect[2]*1920/w,rect[3]*1080/h];
  }
  function position(element,rect,type=board,ratio=1){
    const [x,y,w,h]=project(rect,type).map(n=>n*ratio);
    Object.assign(element.style,{left:x+'px',top:y+'px',width:w+'px',height:h+'px'});
  }
  function image(name,classes=''){return el('img',{src:asset(name),alt:'',class:classes,draggable:'false'});}
  function icon(name){return el('i',{'data-lucide':name});}
  function icons(){window.lucide.createIcons();}
  function sprite(spec,{static:fixed=false,className=''}={}){
    const node=el(fixed?'div':'button',{class:`sprite ${fixed?'static':''} ${spec.selectedArt?'has-selected-art':''} ${className}`,'aria-label':spec.label});
    if(!fixed)node.type='button';
    else node.setAttribute('role','img');
    node.dataset.asset=spec.name;
    position(node,spec.rect);
    node.append(image(spec.name,'art-normal'));
    if(spec.selectedArt)node.append(image(spec.selectedArt,'art-selected'));
    if(!fixed)node.append(el('span',{class:'sr-only',text:spec.label}));
    return node;
  }
  function chooseVisual(nodes,index,preview=false){
    nodes.forEach((node,i)=>{
      node.classList.toggle('is-selected',!preview&&i===index);
      node.classList.toggle('is-preview',preview&&i===index);
      if(!preview)node.setAttribute('aria-pressed',String(i===index));
    });
  }
  function hoverSelection(node,nodes,index,getSelected){
    node.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')chooseVisual(nodes,index,true);});
    node.addEventListener('pointerleave',()=>chooseVisual(nodes,getSelected()));
    node.addEventListener('focus',()=>chooseVisual(nodes,index,true));
    node.addEventListener('blur',()=>chooseVisual(nodes,getSelected()));
  }
  function navigate(next,extra={}){
    dialog.close();
    const url=new URL(location.href);
    url.search='';url.searchParams.set('case',c.id);url.searchParams.set('board',next);
    for(const [key,value] of Object.entries(extra))url.searchParams.set(key,value);
    try{history.pushState({game:true},'',url);render();}catch{location.href=url.href;}
  }
  function resize(){
    if(portrait()){stage.style.transform='none';return;}
    const scale=Math.min(innerWidth/1920,innerHeight/1080);
    stage.style.transform=`scale(${scale})`;
  }
  function renderMenu(){
    const group=el('div',{class:'layer menu-items'}),nodes=[];
    c.menu.forEach((spec,index)=>{
      const node=sprite(spec,{className:'menu-item'});nodes.push(node);group.append(node);
      node.addEventListener('click',()=>navigate(['choice','route','character'][index]));
      hoverSelection(node,nodes,index,()=>0);
    });
    chooseVisual(nodes,0);stage.append(group);
  }
  function renderChoice(){
    const group=el('div',{class:'layer choice-items'}),nodes=[];
    const q=sprite(c.question,{static:true,className:'question'});
    group.append(q);
    selectedChoice=c.choiceInitial??0;
    c.choice.forEach((spec,index)=>{
      const node=sprite(spec,{className:'choice-item'});nodes.push(node);group.append(node);
      hoverSelection(node,nodes,index,()=>selectedChoice);
      node.addEventListener('click',()=>{
        selectedChoice=index;chooseVisual(nodes,index);saved.set(`${c.id}:choice`,index);
        announce('已选择：'+spec.label);
        showDialog(c.question.label,[el('p',{text:spec.label})],[
          {label:'返回选择',icon:'arrow-left',action:()=>dialog.close()},
          {label:'继续故事',icon:'arrow-right',primary:true,action:()=>navigate('ending',{branch:index})}
        ]);
      });
    });
    chooseVisual(nodes,selectedChoice);stage.append(group);
  }
  function svgEl(tag,attrs){
    const node=document.createElementNS('http://www.w3.org/2000/svg',tag);
    for(const [key,value]of Object.entries(attrs))node.setAttribute(key,String(value));
    return node;
  }
  function linePath(line){
    const p=c.previews.route;
    const [x1,y1,x2,y2]=[ (line[0]-p[0])*1920/p[2],(line[1]-p[1])*1080/p[3],(line[2]-p[0])*1920/p[2],(line[3]-p[1])*1080/p[3] ];
    if(c.route.kind==='letter'&&Math.abs(y2-y1)>20){
      const mid=(x1+x2)/2,r=Math.min(45,Math.abs(y2-y1)/2,Math.abs(x2-x1)/5),sign=Math.sign(y2-y1);
      return `M ${x1} ${y1} H ${mid-r} Q ${mid} ${y1} ${mid} ${y1+sign*r} V ${y2-sign*r} Q ${mid} ${y2} ${mid+r} ${y2} H ${x2}`;
    }
    if(c.route.kind==='evidence'&&Math.abs(y2-y1)>20){
      return `M ${x1} ${y1} H ${x1+(x2-x1)*.38} L ${x1+(x2-x1)*.7} ${y2} H ${x2}`;
    }
    return `M ${x1} ${y1} L ${x2} ${y2}`;
  }
  function renderRoute(){
    const scroll=el('div',{class:'route-scroll'});
    const group=el('div',{class:`layer route route-${c.route.kind}`});
    const svg=svgEl('svg',{class:'route-lines',viewBox:'0 0 1920 1080','aria-label':'故事路线连接'});
    const defs=svgEl('defs',{});
    ['normal','active'].forEach(kind=>{
      const marker=svgEl('marker',{id:'arrow-'+kind,markerWidth:8,markerHeight:8,refX:7,refY:4,orient:'auto',markerUnits:'userSpaceOnUse'});
      marker.append(svgEl('path',{d:'M0 0 L8 4 L0 8 Z',fill:kind==='active'?'var(--accent)':'#687879'}));defs.append(marker);
    });svg.append(defs);
    const nodes=[],lines=[];
    const update=()=>{
      chooseVisual(nodes,selectedRoute);
      lines.forEach((l,i)=>{l.line.classList.toggle('active',i===selectedEdge);l.line.setAttribute('marker-end',`url(#arrow-${i===selectedEdge?'active':'normal'})`);l.hit.setAttribute('aria-pressed',String(i===selectedEdge));});
    };
    c.route.edges.forEach(([from,to],index)=>{
      const path=linePath(c.route.lines[index]);
      const line=svgEl('path',{d:path,class:'route-line','marker-end':'url(#arrow-normal)'});
      const hit=svgEl('path',{d:path,class:'route-line-hit',tabindex:0,role:'button','aria-label':`路线：${c.route.nodes[from][0]} → ${c.route.nodes[to][0]}`});
      const activate=()=>{selectedRoute=from;selectedEdge=index;update();announce(hit.getAttribute('aria-label'));};
      hit.addEventListener('click',activate);hit.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate();}});
      hit.addEventListener('pointerenter',()=>line.classList.add('active'));
      hit.addEventListener('pointerleave',update);
      lines.push({line,hit});svg.append(line,hit);
    });group.append(svg);
    c.route.nodes.forEach(([name,rect],index)=>{
      const node=el('button',{type:'button',class:'route-node','aria-label':name,'data-node':index});
      position(node,rect,'route',portrait()?.5:1);
      if(index===0){
        const img=image('route-photo','route-image');
        const [x,y,w,h]=c.route.photoWindow||c.route.window;Object.assign(img.style,{left:x*100+'%',top:y*100+'%',width:w*100+'%',height:h*100+'%'});node.append(img);
      }
      node.append(image('route-frame','route-frame art-normal'),image('route-frame-selected','route-frame art-selected'));
      const caption=el('span',{class:'route-caption',text:name});
      const [x,y,w,h]=c.route.label;Object.assign(caption.style,{left:x*100+'%',top:y*100+'%',width:w*100+'%',height:h*100+'%'});node.append(caption);
      if(c.route.kind==='evidence')node.append(el('span',{class:'node-number',text:String(index+1).padStart(2,'0'),'aria-hidden':true}));
      node.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')node.classList.add('is-preview');});
      node.addEventListener('pointerleave',()=>node.classList.remove('is-preview'));
      node.addEventListener('click',()=>{
        if(selectedRoute===index){openNode(index);return;}
        selectedRoute=index;
        const incoming=c.route.edges.findIndex(([,to])=>to===index);
        selectedEdge=incoming>=0?incoming:c.route.edges.findIndex(([from])=>from===index);
        update();announce('当前选择：'+name);
      });
      nodes.push(node);group.append(node);
    });
    update();scroll.append(group);stage.append(scroll);
    requestAnimationFrame(()=>fitLabels());
  }
  function fitLabels(){
    for(const label of stage.querySelectorAll('.route-caption')){
      let size=parseFloat(getComputedStyle(label).fontSize);
      while(label.scrollWidth>label.clientWidth+1&&size>16){size-=1;label.style.fontSize=size+'px';}
    }
  }
  function openNode(index){
    const terminal=!c.route.edges.some(([from])=>from===index);
    const scene=el('img',{src:asset((terminal?'ending':'choice')+'-background'),alt:c.route.nodes[index][0],class:'dialog-scene'});
    showDialog(c.route.nodes[index][0],[scene],[
      {label:'返回路线',icon:'arrow-left',action:()=>dialog.close()},
      {label:terminal?'查看结局':'进入故事',icon:'arrow-right',primary:true,action:()=>navigate(terminal?'ending':'choice',{node:index})}
    ]);
  }
  function characterGeometry(){
    const cfg=c.character;
    if(expanded===cfg.expanded)return {fronts:c.characters.map(p=>p.rect),detail:cfg.detailRect};
    const [fx,fy,fw,fh]=cfg.flow;
    const fronts=c.characters.map(p=>{
      let w=p.rect[2],h=p.rect[3];
      if(p.closed){h=fh;w=h*c.assets[p.closed].width/c.assets[p.closed].height;}
      return [0,fy+fh-h,w,h];
    });
    const detailWidth=expanded<0?0:cfg.detailRect[2];
    const gap=Math.max(4,Math.min(cfg.gap,(fw-fronts.reduce((s,r)=>s+r[2],0)-detailWidth)/(fronts.length-1)));
    const total=fronts.reduce((s,r)=>s+r[2],0)+gap*(fronts.length-1)+detailWidth;
    let x=fx+Math.max(0,(fw-total)/2),detail=null;
    fronts.forEach((r,i)=>{r[0]=x;x+=r[2];if(i===expanded){detail=[x-3,fy+fh-cfg.detailRect[3],detailWidth,cfg.detailRect[3]];x+=detailWidth-3;}x+=gap;});
    return {fronts,detail};
  }
  function renderCharacters(){
    stage.querySelector('.characters')?.remove();
    const group=el('div',{class:'layer characters','aria-label':'角色列表'});
    const geometry=characterGeometry();
    c.characters.forEach((person,index)=>{
      const open=expanded===index;
      const front=el('button',{type:'button',class:'character-front'+(open?' expanded':''),'aria-label':person.name+'，'+person.role.replaceAll('\n',''),'aria-expanded':open,'data-person':index});
      position(front,geometry.fronts[index],'character');
      const art=person.closed&&!open?person.closed:person.front;
      front.append(image(art));
      let hoverTimer;
      front.addEventListener('pointerenter',event=>{
        if(event.pointerType==='touch'||!matchMedia('(hover:hover)').matches||portrait()||expanded===index)return;
        hoverTimer=setTimeout(()=>setExpanded(index,false),160);
      });
      front.addEventListener('pointerleave',()=>clearTimeout(hoverTimer));
      front.addEventListener('focus',()=>{if(!pointerFocus&&!portrait()&&expanded!==index)setExpanded(index,true);});
      front.addEventListener('click',()=>{clearTimeout(hoverTimer);setExpanded(expanded===index?-1:index,true);});
      group.append(front);
    });
    if(expanded>=0){
      const person=c.characters[expanded];
      const original=expanded===c.character.expanded;
      const panel=el('section',{class:'character-detail','aria-label':person.name+'：'+person.role+'。'+person.bio});
      position(panel,geometry.detail,'character');
      panel.append(image('detail-blank','detail-art'));
      if(original)panel.append(image('detail','detail-art default-detail-art'));
      const copy=el('div',{class:'detail-copy'+(original?' mobile-character-copy':'')},[
        el('h2',{text:person.role}),el('p',{text:person.bio})
      ]);panel.append(copy);
      const close=el('button',{type:'button',class:'detail-close','aria-label':'收起'+person.name+'的详情',title:'收起详情'},[icon('x')]);
      close.addEventListener('click',()=>setExpanded(-1,true));panel.append(close);group.append(panel);
    }
    stage.append(group);icons();
  }
  function setExpanded(index,restore){
    const focusIndex=index>=0?index:expanded;
    expanded=index;renderCharacters();
    if(restore){const target=stage.querySelector(`[data-person="${focusIndex}"]`);if(target){target.dataset.restoring='true';ignoreFocus=true;target.focus({preventScroll:true});ignoreFocus=false;}}
    announce(index<0?'角色详情已收起':'已展开'+c.characters[index].name+'的详情');
  }
  let ignoreFocus=false;
  // Keep a restored keyboard focus from reopening the page that was just closed.
  stage.addEventListener('focus',event=>{if(ignoreFocus)event.stopImmediatePropagation();},true);
  function renderEnding(){
    const group=el('div',{class:'layer ending-items'});
    group.append(sprite(c.complete,{static:true,className:'complete'}));
    const other=sprite(c.other,{className:'other-ending'});
    if(['c01','c03','c04','c05'].includes(c.id))other.classList.add('is-selected');
    other.addEventListener('pointerenter',()=>other.classList.add('is-preview'));
    other.addEventListener('pointerleave',()=>other.classList.remove('is-preview'));
    other.addEventListener('click',()=>navigate('route'));group.append(other);
    if(c.recommendationLabel.name)group.append(sprite(c.recommendationLabel,{static:true,className:'recommendation-label'}));
    else {const label=el('h2',{class:'recommendation-label',text:c.recommendationLabel.label});position(label,c.recommendationLabel.rect);group.append(label);}
    const nodes=[];
    c.recommendations.forEach((spec,index)=>{
      const node=sprite(spec,{className:'recommendation'});nodes.push(node);
      hoverSelection(node,nodes,index,()=>selectedRecommendation);
      node.addEventListener('click',()=>{
        selectedRecommendation=index;chooseVisual(nodes,index);
        showDialog(spec.label,[el('img',{src:asset(spec.selectedArt||spec.name),alt:spec.label,class:'dialog-art'})],[
          {label:'返回结局',icon:'arrow-left',action:()=>dialog.close()},
          {label:'返回主菜单',icon:'house',primary:true,action:()=>navigate('menu')}
        ]);
      });group.append(node);
    });chooseVisual(nodes,selectedRecommendation);stage.append(group);
  }
  function showDialog(title,content,actions){
    lastFocus=document.activeElement;
    document.getElementById('dialog-title').textContent=title;
    document.getElementById('dialog-content').replaceChildren(...content);
    const footer=document.getElementById('dialog-actions');footer.replaceChildren();
    actions.forEach(item=>{
      const button=el('button',{type:'button',class:item.primary?'primary':''},[icon(item.icon),el('span',{text:item.label})]);
      button.addEventListener('click',item.action);footer.append(button);
    });
    icons();dialog.showModal();footer.querySelector('button.primary')?.focus();
  }
  dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{if(lastFocus?.isConnected){ignoreFocus=true;lastFocus.focus({preventScroll:true});ignoreFocus=false;}});
  function back(){
    if(dialog.open){dialog.close();return;}
    if(board==='character'&&expanded>=0){setExpanded(-1,true);return;}
    if(board!=='menu')navigate('menu');
  }
  function render(){
    const params=new URLSearchParams(location.search),id=params.get('case');
    c=window.GAME_DATA[id]||window.GAME_DATA.c01;
    board=stages.includes(params.get('board'))?params.get('board'):'menu';
    stage.replaceChildren();stage.className=`stage case-${c.id} board-${board}`;
    stage.style.backgroundImage=`url("${asset(board+'-background')}")`;
    const titles={menu:'主菜单',choice:'剧情选择',route:'故事路线',character:'角色列表',ending:'结局完成'};
    document.title=c.title+' · '+titles[board];
    stage.append(el('h1',{class:'scene-title',text:c.title+' · '+titles[board]}));
    selectedRoute=c.route.selected;selectedEdge=c.route.activeEdge;expanded=c.character.expanded;selectedRecommendation=c.endingSelected;
    if(!audio||!audio.src.endsWith(c.audio)){
      audio?.pause();audio=new Audio(c.audio);audio.loop=true;audio.volume=.32;
      document.getElementById('sound').setAttribute('aria-pressed','false');
    }
    ({menu:renderMenu,choice:renderChoice,route:renderRoute,character:renderCharacters,ending:renderEnding})[board]();
    document.getElementById('back').disabled=board==='menu';
    document.getElementById('home').disabled=board==='menu';
    viewport.scrollTo(0,0);resize();icons();
    window.__game={caseId:c.id,board,get selectedRoute(){return selectedRoute;},get selectedEdge(){return selectedEdge;},get expanded(){return expanded;}};
  }
  document.getElementById('back').addEventListener('click',back);
  document.getElementById('home').addEventListener('click',()=>navigate('menu'));
  document.getElementById('sound').addEventListener('click',async()=>{
    const button=document.getElementById('sound');
    try{
      if(audio.paused){await audio.play();button.setAttribute('aria-label','暂停音乐');button.title='暂停音乐';button.replaceChildren(icon('volume-2'));button.setAttribute('aria-pressed','true');}
      else{audio.pause();button.setAttribute('aria-label','播放音乐');button.title='播放音乐';button.replaceChildren(icon('volume-x'));button.setAttribute('aria-pressed','false');}
      icons();
    }catch{announce('音乐暂时无法播放');}
  });
  document.getElementById('screen').addEventListener('click',async()=>{
    try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{announce('此浏览器暂不支持全屏');}
  });
  function focusables(){return Array.from((dialog.open?dialog:stage).querySelectorAll('button:not(:disabled),[role="button"][tabindex]')).filter(n=>n.getBoundingClientRect().width&&getComputedStyle(n).visibility!=='hidden');}
  function moveFocus(direction){
    const all=focusables(),current=document.activeElement;
    if(!all.length)return;
    if(!all.includes(current)){all[0].focus();return;}
    const r=current.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
    let candidate=null,best=Infinity;
    for(const node of all){
      if(node===current)continue;
      const b=node.getBoundingClientRect(),dx=b.left+b.width/2-cx,dy=b.top+b.height/2-cy;
      const primary=direction==='ArrowRight'?dx:direction==='ArrowLeft'?-dx:direction==='ArrowDown'?dy:-dy;
      if(primary<2)continue;
      const secondary=(direction==='ArrowRight'||direction==='ArrowLeft')?Math.abs(dy):Math.abs(dx);
      const score=primary+secondary*2.5;
      if(score<best){candidate=node;best=score;}
    }
    (candidate||all[(all.indexOf(current)+(direction==='ArrowLeft'||direction==='ArrowUp'?-1:1)+all.length)%all.length]).focus();
  }
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&!dialog.open){event.preventDefault();back();}
    if(event.key.startsWith('Arrow')){event.preventDefault();moveFocus(event.key);}
    if(event.key==='Tab'){document.body.classList.add('show-utility');}
  });
  document.addEventListener('pointermove',event=>{
    if(event.clientY<80){document.body.classList.add('show-utility');clearTimeout(utilityTimer);utilityTimer=setTimeout(()=>document.body.classList.remove('show-utility'),2000);}
  });
  window.addEventListener('popstate',render);
  let wasPortrait=portrait();
  window.addEventListener('resize',()=>{if(wasPortrait!==portrait()){wasPortrait=portrait();render();}else resize();});
  function pollGamepad(){
    const gamepad=Array.from(navigator.getGamepads?.()||[]).find(Boolean);
    if(gamepad){
      const actions={0:'confirm',1:'back',12:'ArrowUp',13:'ArrowDown',14:'ArrowLeft',15:'ArrowRight'};
      for(const [index,action]of Object.entries(actions)){
        const pressed=gamepad.buttons[index]?.pressed;
        if(pressed&&!previousPad[index]){if(action==='confirm'){const focused=document.activeElement;if(focused?.matches('button,[role="button"]'))focused.dispatchEvent(new MouseEvent('click',{bubbles:true}));else focusables()[0]?.focus();}else if(action==='back')back();else moveFocus(action);}
        previousPad[index]=pressed;
      }
    }else previousPad={};
    requestAnimationFrame(pollGamepad);
  }
  render();pollGamepad();
})();
