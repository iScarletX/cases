(()=>{
 if(window.parent===window)return;
 const channel='board-benchmark-v1';
 let applying=false,pointer,hovered=[],lastEvent,queued=false;
 const send=payload=>window.parent.postMessage({channel,...payload},'*');
 const selector='button,a,[role="button"],[role="tab"],input,select,[tabindex]';
 const text=el=>(el?.getAttribute('aria-label')||el?.textContent||'').replace(/\s+/g,'').trim().slice(0,120);
 function setUp(){
  const style=document.createElement('style');style.dataset.benchmarkBridge='true';
  function translate(rules){return Array.from(rules||[]).map(rule=>{
   if(rule.selectorText?.includes(':hover'))return rule.selectorText.replace(/:hover/g,'[data-benchmark-hover]')+'{'+rule.style.cssText+'}';
   if(rule.cssRules){const nested=translate(rule.cssRules);if(nested)return rule.cssText.slice(0,rule.cssText.indexOf('{'))+'{'+nested+'}';}
   return '';
  }).join('\n');}
  style.textContent=Array.from(document.styleSheets).map(sheet=>{try{return translate(sheet.cssRules);}catch{return '';}}).join('\n');
  document.head.append(style);
  pointer=document.createElement('span');pointer.dataset.benchmarkPointer='true';pointer.style.cssText='position:fixed;width:13px;height:13px;border:2px solid white;background:#617856;border-radius:50%;box-shadow:0 0 0 1px #22332270;pointer-events:none;z-index:2147483647;display:none;transform:translate(-50%,-50%)';document.documentElement.append(pointer);
  send({type:'ready'});
 }
 function clear(){for(const el of hovered)el.removeAttribute('data-benchmark-hover');hovered=[];if(pointer)pointer.style.display='none';}
 function locate(data){const candidates=Array.from(document.querySelectorAll(selector)).filter(el=>el.getClientRects().length);return(data.label&&candidates.find(el=>text(el)===data.label))||document.elementFromPoint(data.x*innerWidth,data.y*innerHeight);}
 function details(e){const target=e.target.closest?.(selector);return {x:e.clientX/innerWidth,y:e.clientY/innerHeight,label:text(target)};}
 document.addEventListener('pointermove',e=>{if(applying||!e.isTrusted)return;clear();lastEvent=details(e);if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;if(lastEvent){send({type:'pointer',...lastEvent});lastEvent=null;}});},{passive:true});
 document.addEventListener('pointerleave',()=>{if(!applying)send({type:'clear'});});
 document.addEventListener('mouseout',e=>{if(!e.relatedTarget&&!applying)send({type:'clear'});});
 document.addEventListener('click',e=>{if(!applying&&e.isTrusted)send({type:'click',...details(e)});},true);
 window.addEventListener('message',e=>{
  const data=e.data;if(e.source!==window.parent||data?.channel!==channel)return;
  if(data.type==='clear'){clear();return;}
  if(!['pointer','click'].includes(data.type)||!Number.isFinite(data.x)||!Number.isFinite(data.y))return;
  applying=true;
  try{
   const target=locate(data);if(!target)return;
   if(data.type==='click'){const actionable=target.closest?.(selector)||target;actionable.click?.();return;}
   clear();for(let el=target;el&&el!==document.documentElement;el=el.parentElement){el.setAttribute('data-benchmark-hover','');hovered.push(el);}
   if(pointer){pointer.style.display='block';pointer.style.left=data.x*innerWidth+'px';pointer.style.top=data.y*innerHeight+'px';}
   target.dispatchEvent(new PointerEvent('pointerover',{bubbles:true,clientX:data.x*innerWidth,clientY:data.y*innerHeight}));target.dispatchEvent(new MouseEvent('mouseover',{bubbles:true,clientX:data.x*innerWidth,clientY:data.y*innerHeight}));
  }finally{applying=false;}
 });
 if(document.readyState==='complete')setUp();else window.addEventListener('load',setUp,{once:true});
})();
