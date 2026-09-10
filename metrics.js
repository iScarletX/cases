(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.BenchmarkMetrics=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 function total(row){
  if(!row)return null;
  const limits={visual:40,interaction:40,usability:20};
  for(const [key,max] of Object.entries(limits))if(row[key]!=null&&(!Number.isFinite(row[key])||row[key]<0||row[key]>max))throw new RangeError(key+' out of range');
  if(Object.keys(limits).some(key=>row[key]==null))return null;
  return row.visual+row.interaction+row.usability;
 }
 function summarize(rows,trialId,cases,boards){
  const selected=cases.flatMap(c=>boards.map(board=>rows.find(r=>r.trialId===trialId&&r.caseId===c.id&&r.board===board))).filter(r=>r&&total(r)!=null);
  const count=selected.length,expected=cases.length*boards.length;
  const caseMeans=cases.map(c=>{const r=selected.filter(r=>r.caseId===c.id);return r.length===boards.length?r.reduce((s,r)=>s+total(r),0)/boards.length:null;});
  return {count,expected,overall:count===expected?caseMeans.reduce((a,b)=>a+b,0)/cases.length:null,passRate:count?selected.filter(r=>total(r)>=80&&!r.crossCase).length/expected*100:null,lowest:count?Math.min(...selected.map(total)):null,components:Object.fromEntries(['visual','interaction','usability'].map(k=>[k,count?selected.reduce((s,r)=>s+r[k],0)/count:null])),caseMeans};
 }
 function balancedOrder(ids,count,seed){
  let state=seed>>>0;
  const random=()=>{state=(Math.imul(1664525,state)+1013904223)>>>0;return state/4294967296;};
  const permutations=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
  const result=Array.from({length:count},(_,i)=>permutations[i%6].map(n=>ids[n]));
  for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
  return result;
 }
 function preference(votes,trialId,count){const entries=Object.values(votes);return entries.length?entries.filter(v=>v.trialId===trialId).length/count*100:null;}
 return {summarize,total,balancedOrder,preference};
});
