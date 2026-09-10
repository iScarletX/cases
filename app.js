(()=>{
 'use strict';
 const D=window.BENCHMARK_DATA,M=window.BenchmarkMetrics;
 const TYPES=['menu','choice','route','character','ending'],LABELS={menu:'Menu',choice:'Choice',route:'Route',character:'Character',ending:'Ending'};
 const $=s=>document.querySelector(s),esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const icon=name=>`<i data-lucide="${name}"></i>`,icons=()=>window.lucide?.createIcons();
 const KEY='board-study-v1-'+D.inputSha256.slice(0,12);
 const keys=D.cases.flatMap(c=>TYPES.map(b=>c.id+':'+b));
 let saved;try{saved=JSON.parse(localStorage.getItem(KEY));}catch{}
 const session={seed:Number.isInteger(saved?.seed)?saved.seed:Math.floor(Math.random()*4294967295),votes:{},revealed:{},overrides:{}};
 for(const [key,value] of Object.entries(saved?.votes||{}))if(keys.includes(key)&&D.trials.some(t=>t.id===value?.trialId))session.votes[key]=value;
 for(const key of Object.keys(saved?.revealed||{}))if(session.votes[key])session.revealed[key]=true;
 for(const [key,value] of Object.entries(saved?.overrides||{})){try{if(M.total(value)!=null&&D.trials.some(t=>t.id===value.trialId)&&keys.includes(value.caseId+':'+value.board))session.overrides[key]=value;}catch{}}
 const order=M.balancedOrder(D.trials.map(t=>t.id),keys.length,session.seed);
 const state={caseId:D.cases[0].id,board:'menu',blind:false,sync:true,syncClicks:false,view:'compare',focusId:D.trials[0].id,immersive:false};
 let timer,resizeObserver;
 function toast(text){$('#toast').textContent=text;$('#toast').classList.add('visible');clearTimeout(timer);timer=setTimeout(()=>$('#toast').classList.remove('visible'),2600);}
 function persist(){try{localStorage.setItem(KEY,JSON.stringify(session));}catch{toast('浏览器未允许本地保存，记录可通过导出保留');}}
 persist();
 const boardKey=()=>state.caseId+':'+state.board;
 const trial=id=>D.trials.find(t=>t.id===id);
 const currentCase=()=>D.cases.find(c=>c.id===state.caseId);
 const hidden=()=>state.blind&&!session.revealed[boardKey()];
 const displayedIds=()=>state.blind?order[keys.indexOf(boardKey())]:D.trials.map(t=>t.id);
 const letter=id=>'ABC'[displayedIds().indexOf(id)];
 const label=id=>hidden()?`版本 ${letter(id)}`:trial(id).name;
 const rowKey=(id,c,b)=>id+':'+c+':'+b;
 function row(id,c=state.caseId,b=state.board){return session.overrides[rowKey(id,c,b)]||D.scores.find(r=>r.trialId===id&&r.caseId===c&&r.board===b);}
 const allRows=()=>D.trials.flatMap(t=>D.cases.flatMap(c=>TYPES.map(b=>row(t.id,c.id,b)).filter(Boolean)));
 const number=(n,d=1)=>n==null?'—':Number(n).toFixed(d).replace(/\.0$/,'');
 const percent=n=>n==null?'—':number(n)+'%';
 function duration(sec){if(!Number.isFinite(sec))return '—';const h=Math.floor(sec/3600),m=Math.floor(sec%3600/60),s=Math.round(sec%60);return(h?h+'时 ':'')+(m?m+'分 ':'')+s+'秒';}
 function time(date){if(!date)return '—';return new Date(date).toLocaleTimeString('zh-CN',{hour12:false,timeZone:'Asia/Shanghai'});}
 function color(value){if(value==null)return '#edf0e9';const stops=[[215,130,120],[238,211,139],[131,174,137]],v=Math.max(0,Math.min(100,value))/50,i=Math.min(1,Math.floor(v)),f=v-i;return `rgb(${stops[i].map((n,k)=>Math.round(n+(stops[i+1][k]-n)*f)).join(',')})`;}
 const components=(r,compact=false)=>[['visual','视觉还原',40],['interaction','交互效果',40],['usability','完整可用',20]].map(([k,n,max])=>compact?`<div class="component-row"><span>${n}</span><div class="component-track"><i style="width:${r?.[k]==null?0:r[k]/max*100}%"></i></div><b>${number(r?.[k])}/${max}</b></div>`:`<div class="detail-score-row"><span>${n}</span><meter value="${r?.[k]||0}" min="0" max="${max}"></meter><span>${number(r?.[k])}/${max}</span></div>`).join('');
 function footer(){return `<footer class="site-footer"><span>BOARD STUDY · ${D.cases.length} CASES / ${D.boardCount} BOARDS / ${D.trials.length} SKILLS</span><span>同模型 · 单轮独立生成 · ${esc(D.model)}</span></footer>`;}
 function navigate(c,b){state.caseId=c;state.board=b;state.immersive=false;document.body.classList.remove('immersive');const hash='#compare?case='+c+'&board='+b;if(location.hash===hash)render();else location.hash=hash;}
 function overview(){
  const rows=allRows(),voted=Object.keys(session.votes).length;
  $('#app').innerHTML=`<div class="page-heading"><div><div class="eyebrow">BENCHMARK / 001</div><h1>游戏界面评测</h1></div><div class="heading-meta"><span><strong>${D.cases.length}</strong> 个案例</span><span><strong>${D.boardCount}</strong> 张 Board</span><span><strong>${D.trials.length}</strong> 种 Skill</span><span class="status">${D.scores.length===90?'已完成评测':'生成与评测中'}</span></div></div>
   <section class="summary-grid" aria-label="Skill 综合评分">${D.trials.map(t=>{const s=M.summarize(rows,t.id,D.cases,TYPES),pref=M.preference(session.votes,t.id,D.boardCount);return `<article class="summary-item"><div class="summary-top"><h2><i class="trial-dot"></i>${esc(t.name)}</h2><span class="status">${s.count}/${s.expected}</span></div><div class="summary-number"><strong>${number(s.overall)}</strong><span>综合评分 / 100</span></div><div class="summary-stats"><div><b>${percent(s.passRate)}</b><small>通过率 · ≥ 80</small></div><div><b>${number(s.lowest)}</b><small>最低 Board</small></div><div><b>${pref==null?duration(t.run?.durationSeconds):percent(pref)}</b><small>${pref==null?'单轮用时':'盲选偏好率'}</small></div></div><div class="summary-bottom">${components(s.components,true)}</div></article>`;}).join('')}</section>
   <div class="section-heading"><h2>逐张评分</h2><div class="heat-legend"><span>0</span><span class="ramp"></span><span>100</span></div></div>
   <section class="heatmap-grid" aria-label="三种 Skill 评分热力图">${D.trials.map(t=>`<article><div class="heatmap-title"><h3>${esc(t.name)}</h3><span>满分 100</span></div><div class="heat-table"><span></span>${TYPES.map(b=>`<span class="column">${LABELS[b]}</span>`).join('')}${D.cases.map(c=>`<span class="row-label">${esc(c.name)}</span>${TYPES.map(b=>{const r=row(t.id,c.id,b),v=M.total(r);return `<button class="heat-cell ${v==null?'empty':''} ${r?.crossCase?'failed':''}" style="background:${color(v)}" data-score="${t.id}|${c.id}|${b}" aria-label="${esc(t.name)} ${esc(c.name)} ${LABELS[b]} ${v==null?'待评':v+'分'}">${number(v,0)}</button>`;}).join('')}`).join('')}</div></article>`).join('')}</section>
   <div class="score-footnote"><span>视觉 40 / 交互 40 / 完整可用 20 · 五张 Board 等权组成 Case，六个 Case 等权组成总分</span><span>${voted?`人工盲选 ${voted}/${D.boardCount} · 偏好率分母 ${D.boardCount}`:'评测者：模型评审 · 支持本机人工复核'}</span></div>
   <div class="section-heading"><h2>运行记录</h2><p>耗时不计入评分 · 北京时间</p></div><div class="table-scroll"><table class="timing-table"><thead><tr><th>Skill</th><th>开始时间</th><th>结束时间</th><th>总耗时</th><th>平均每张 Board</th><th>运行轮次</th></tr></thead><tbody>${D.trials.map(t=>`<tr><td>${esc(t.name)}</td><td title="${esc(t.run?.startedAt)}">${time(t.run?.startedAt)}</td><td title="${esc(t.run?.finishedAt)}">${time(t.run?.finishedAt)}</td><td>${duration(t.run?.durationSeconds)}</td><td>${duration(t.run?.meanSecondsPerBoard)}</td><td>1 次 / ${t.ready?'已结束':'进行中'}</td></tr>`).join('')}</tbody></table></div>
   <details class="details-block"><summary>测试协议与输入校验</summary><div class="protocol-grid"><div><strong>统一输入</strong><p>30 张标准 Board，三个相同素材快照。${D.excludedCases.length} 个未完成 Case 未纳入。</p><a href="input-manifest.json" target="_blank">素材清单与哈希</a></div><div><strong>原包状态</strong><p>game-ui-frontend 缺少 5 个包外引用。game-ui-design 的 description 为 1137 字符；另两份通过格式校验。全部按原包显式读取。</p><a href="protocol.json" target="_blank">完整测试协议</a></div><div><strong>评审范围</strong><p>视觉评分由模型逐张审阅。交互和可用性结合浏览器证据。原始提交保留，比较层统一增加同步适配。进程共享主机，目录限制通过任务约束执行。</p><a href="task.md" target="_blank">统一任务文本</a></div></div></details>${footer()}`;
  $('[data-nav="overview"]').classList.add('active');
 }
 function gameStage(id){const t=trial(id);if(!t.ready&&!t.previewPath)return `<div class="stage"><div class="empty-stage">${icon('loader-circle')}<span>该次运行尚未完成</span></div></div>`;const folder=t.ready?'trials/'+id:t.previewPath;return `<div class="stage"><iframe data-trial="${id}" src="${folder}/index.html?case=${state.caseId}&board=${state.board}" title="${esc(label(id))} ${esc(currentCase().name)} ${LABELS[state.board]}" allow="autoplay; fullscreen"></iframe></div>`;}
 function voteControl(id){const vote=session.votes[boardKey()];if(!state.blind)return `<button class="text-button" data-score="${id}|${state.caseId}|${state.board}">${icon('list-filter')}评分详情</button>`;return `<button class="vote-button ${vote?.trialId===id?'voted':''}" data-vote="${id}" ${!trial(id).ready||session.revealed[boardKey()]?'disabled':''}>${icon(vote?.trialId===id?'check':'heart')} ${vote?.trialId===id?'已选择':'偏好 '+letter(id)}</button>`;}
 function caption(id){const value=M.total(row(id)),pending=!trial(id).ready&&trial(id).previewPath;return `<div class="preview-caption"><div class="score-mini"><b>${hidden()?'—':number(value)}</b><span>${pending?'原样预览 · 运行未结束':hidden()?'评分已隐藏':'/ 100'}</span></div>${voteControl(id)}</div>`;}
 function preview(){
  const ids=displayedIds();
  if(state.view==='compare')$('#preview-body').innerHTML=`<div class="compare-grid">${ids.map(id=>`<article class="compare-item"><div class="compare-item-header"><span class="letter">${letter(id)}</span><h2>${esc(label(id))}</h2><button class="icon-button" data-focus="${id}" title="大图预览 ${letter(id)}" aria-label="大图预览 ${letter(id)}">${icon('maximize-2')}</button></div>${gameStage(id)}${caption(id)}</article>`).join('')}</div>`;
  else $('#preview-body').innerHTML=`<div class="focus-stage-wrap">${gameStage(state.focusId)}<div class="focus-caption"><span>${letter(state.focusId)} · ${esc(label(state.focusId))}</span>${voteControl(state.focusId)}</div></div>`;
  resizeObserver?.disconnect();resizeObserver=new ResizeObserver(entries=>{for(const entry of entries){const frame=entry.target.querySelector('iframe');if(frame)frame.style.transform=`scale(${entry.contentRect.width/1600})`;}});document.querySelectorAll('.stage').forEach(s=>resizeObserver.observe(s));
  icons();
 }
 function compare(){
  const c=currentCase(),idx=keys.indexOf(boardKey()),vote=session.votes[boardKey()];
  $('#app').innerHTML=`<div class="page-heading compare-heading"><div><div class="eyebrow">BOARD COMPARISON / ${String(idx+1).padStart(2,'0')}</div><h1>${esc(c.name)} <span class="board-count">/ ${LABELS[state.board]}</span></h1></div><div class="case-picker"><label for="case-select">当前案例</label><select id="case-select">${D.cases.map(c=>`<option value="${c.id}" ${c.id===state.caseId?'selected':''}>${esc(c.name)}</option>`).join('')}</select></div></div>
  <div class="compare-controls"><div class="board-tabs" role="tablist" aria-label="Board 类型">${TYPES.map(b=>`<button role="tab" aria-selected="${b===state.board}" data-board="${b}">${LABELS[b]}</button>`).join('')}</div><div class="toolbar-actions"><label class="toggle-label"><input type="checkbox" id="sync-toggle" ${state.sync?'checked':''}>同步鼠标</label><label class="toggle-label"><input type="checkbox" id="click-toggle" ${state.syncClicks?'checked':''}>同步点击</label><label class="toggle-label"><input type="checkbox" id="blind-toggle" ${state.blind?'checked':''}>盲测</label></div></div>
  <section class="preview-workspace" aria-label="游戏网页比较"><div class="preview-toolbar"><div class="view-tabs"><button data-view="compare" class="${state.view==='compare'?'active':''}">${icon('columns-3')}三版同屏</button><button data-view="focus" class="${state.view==='focus'?'active':''}">${icon('square')}大图预览</button></div><div class="toolbar-actions"><span class="sync-status" id="sync-status"></span><button class="text-button" id="show-reference">${icon('image')}<span>查看原图</span></button><button class="icon-button" id="reset-previews" title="重置当前预览" aria-label="重置当前预览">${icon('rotate-ccw')}</button><button class="text-button" id="immersive-toggle">${icon(state.immersive?'minimize':'expand')}<span>${state.immersive?'退出沉浸':'沉浸预览'}</span></button></div></div><div id="preview-body"></div></section>
  ${state.view==='focus'?`<div class="focus-thumbnails">${displayedIds().map(id=>`<button data-focus="${id}" class="${id===state.focusId?'active':''}"><span class="letter">${letter(id)}</span>${esc(label(id))}</button>`).join('')}</div>`:''}
  <div class="compare-bottom"><p>${state.blind?`人工盲选 ${Object.keys(session.votes).length}/${D.boardCount}${vote?' · 本张已记录':''}`:'参考原图与三个独立网页 · 统一 16 : 9 预览'}</p><div class="toolbar-actions">${state.blind?`<button class="text-button outline" id="reveal" ${vote?'':'disabled'}>${icon('eye')}${session.revealed[boardKey()]?'已揭晓':'揭晓 Skill'}</button>`:''}<div class="board-nav"><button class="icon-button" data-step="-1" title="上一张" aria-label="上一张" ${idx===0?'disabled':''}>${icon('arrow-left')}</button><span>${idx+1} / ${keys.length}</span><button class="icon-button" data-step="1" title="下一张" aria-label="下一张" ${idx===keys.length-1?'disabled':''}>${icon('arrow-right')}</button></div></div></div>
  ${hidden()?'':`<section class="evidence-section"><h2>本张评审记录</h2><div class="evidence-list">${displayedIds().map(id=>`<div><strong>${esc(trial(id).name)}</strong><p>${(row(id)?.notes||['待运行结束后评审。']).map(esc).join('<br>')}</p></div>`).join('')}</div></section>`}${footer()}`;
  $('[data-nav="compare"]').classList.add('active');preview();
 }
 function render(){
  const [route,query]=location.hash.slice(1).split('?');
  if(route==='compare'){const p=new URLSearchParams(query);if(D.cases.some(c=>c.id===p.get('case')))state.caseId=p.get('case');if(TYPES.includes(p.get('board')))state.board=p.get('board');}
  document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));
  if(route==='compare')compare();else{state.immersive=false;document.body.classList.remove('immersive');overview();}
  document.title=(route==='compare'?currentCase().name+' · '+LABELS[state.board]:'游戏界面评测')+' | Board Study';icons();
 }
 function showScore(id,c,b){
  const r=row(id,c,b),value=M.total(r),caseName=D.cases.find(x=>x.id===c).name;
  $('#detail-content').innerHTML=`<div class="dialog-top"><h2>${esc(caseName)} · ${LABELS[b]}</h2><button class="icon-button" data-close="detail-dialog" aria-label="关闭评分" title="关闭">${icon('x')}</button></div><div class="detail-body"><div class="detail-total">${number(value)}<span>/ 100 · ${esc(trial(id).name)}</span></div>${components(r)}<ul class="detail-notes">${(r?.notes||['尚未评分']).map(n=>`<li>${esc(n)}</li>`).join('')}</ul><p class="detail-meta">${r?.reviewer==='manual'?'人工复核 · 本机保存':'模型评审 · 视觉审阅与浏览器验证'}${r?.crossCase?' · 跨 Case 素材，判定不通过':''}</p>${r?.evidence?.desktop?`<p class="detail-meta"><a href="${esc(r.evidence.desktop)}" target="_blank">桌面截图</a> · <a href="${esc(r.evidence.mobile)}" target="_blank">移动端截图</a></p>`:''}<details class="manual-form"><summary>人工复核</summary><form id="manual-score" data-target="${id}|${c}|${b}"><div class="manual-fields">${[['visual','视觉',40],['interaction','交互',40],['usability','可用',20]].map(([key,title,max])=>`<label>${title} / ${max}<input type="number" name="${key}" required min="0" max="${max}" step="1" value="${r?.[key]??''}"></label>`).join('')}</div><button class="text-button outline" type="submit">保存复核评分</button></form></details></div><div class="dialog-footer"><span class="detail-meta">通过线 80 分</span><button class="text-button primary" data-go="${c}|${b}">进入网页对比 ${icon('arrow-right')}</button></div>`;
  icons();$('#detail-dialog').showModal();
 }
 document.addEventListener('submit',e=>{if(e.target.id!=='manual-score')return;e.preventDefault();const [id,c,b]=e.target.dataset.target.split('|'),f=new FormData(e.target),record={...(row(id,c,b)||{}),trialId:id,caseId:c,board:b,visual:Number(f.get('visual')),interaction:Number(f.get('interaction')),usability:Number(f.get('usability')),reviewer:'manual',reviewedAt:new Date().toISOString(),status:'scored'};try{M.total(record);}catch{return toast('评分超出允许范围');}session.overrides[rowKey(id,c,b)]=record;persist();$('#detail-dialog').close();render();toast('复核评分已保存');});
 document.addEventListener('change',e=>{if(e.target.id==='case-select')navigate(e.target.value,state.board);if(e.target.id==='sync-toggle'){state.sync=e.target.checked;if(!state.sync)broadcast({type:'clear'});}if(e.target.id==='click-toggle')state.syncClicks=e.target.checked;if(e.target.id==='blind-toggle'){state.blind=e.target.checked;render();}});
 document.addEventListener('click',e=>{
  const el=e.target.closest('button');if(!el||el.disabled)return;
  if(el.dataset.close)$('#'+el.dataset.close).close();
  if(el.dataset.score)showScore(...el.dataset.score.split('|'));
  if(el.dataset.go){$('#detail-dialog').close();navigate(...el.dataset.go.split('|'));}
  if(el.dataset.board)navigate(state.caseId,el.dataset.board);
  if(el.dataset.step){const next=keys[keys.indexOf(boardKey())+Number(el.dataset.step)];if(next)navigate(...next.split(':'));}
  if(el.dataset.focus){state.focusId=el.dataset.focus;state.view='focus';render();}
  if(el.dataset.view){state.view=el.dataset.view;if(state.view==='compare'){state.immersive=false;document.body.classList.remove('immersive');}render();}
  if(el.dataset.vote){session.votes[boardKey()]={trialId:el.dataset.vote,letter:letter(el.dataset.vote),at:new Date().toISOString()};persist();render();toast('本张盲选已记录');}
  if(el.id==='reveal'){session.revealed[boardKey()]=true;persist();render();}
  if(el.id==='show-reference'){$('#reference-title').textContent=currentCase().name+' · '+LABELS[state.board]+' Board';$('#reference-image').src='references/'+state.caseId+'/'+state.board+'.png';$('#reference-image-wrap').classList.remove('zoom');$('#reference-dialog').showModal();}
  if(el.id==='image-zoom')$('#reference-image-wrap').classList.add('zoom');
  if(el.id==='image-fit')$('#reference-image-wrap').classList.remove('zoom');
  if(el.id==='reset-previews')preview();
  if(el.id==='immersive-toggle'){state.immersive=!state.immersive;state.view='focus';document.body.classList.toggle('immersive',state.immersive);render();}
  if(el.id==='export-data'){const data={exportedAt:new Date().toISOString(),dataset:D.inputSha256,protocol:D.protocol,scores:allRows(),manualOverrides:session.overrides,blind:{seed:session.seed,order,votes:session.votes,revealed:session.revealed,coverage:Object.keys(session.votes).length,denominator:D.boardCount}},url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='board-study-results.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 });
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&state.immersive){state.immersive=false;document.body.classList.remove('immersive');render();}});
 for(const dialog of document.querySelectorAll('dialog'))dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 function frames(){return [...document.querySelectorAll('iframe[data-trial]')];}
 function broadcast(payload,except){for(const frame of frames())if(frame.contentWindow!==except)frame.contentWindow.postMessage({channel:'board-benchmark-v1',...payload},'*');}
 window.addEventListener('message',e=>{if(e.data?.channel!=='board-benchmark-v1'||!frames().some(f=>f.contentWindow===e.source))return;if(e.data.type==='ready'){const s=$('#sync-status');if(s)s.textContent='同步已连接';return;}if(e.data.type==='pointer'&&state.sync)broadcast(e.data,e.source);if(e.data.type==='click'&&state.syncClicks)broadcast(e.data,e.source);if(e.data.type==='clear')broadcast(e.data,e.source);});
 window.addEventListener('hashchange',render);render();
})();
