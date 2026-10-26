(function(){
const $=s=>document.querySelector(s);
const fmt=f=>f.replace(/(\d+)/g,'<sub>$1</sub>');
const reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const KEY='khtn8-b5-progress-v1';
const blank=()=>({name:'',cls:'',kt:false,lab:[],solved:[],revealed:[],probs:[],quizBest:-1,quizTries:0,quizFirst:-1,probsSeen:[],real:[],min:0,dev:'',rs:0});
let S=blank();
try{const raw=localStorage.getItem(KEY);if(raw)S=Object.assign(blank(),JSON.parse(raw));}catch(e){}
if(!S.dev)S.dev=Math.random().toString(36).slice(2,10);
if(S.quizTries>0&&S.quizFirst<0)S.quizFirst=S.quizBest;
const N_EQ=12,N_PROB=5,N_Q=13,N_REAL=5,N_LAB=3;
function parts(){return [
  {k:'Kiến thức và thực tiễn',v:(S.kt?1:0)+S.real.length,t:1+N_REAL,w:5,txt:(S.kt?'Đã học · ':'')+S.real.length+'/'+N_REAL+' câu thực tiễn'},
  {k:'Thí nghiệm ảo',v:S.lab.length,t:N_LAB,w:5,txt:S.lab.length+'/'+N_LAB+' thí nghiệm'},
  {k:'Cân bằng PTHH (tự làm đúng)',v:S.solved.length,t:N_EQ,w:30,txt:S.solved.length+'/'+N_EQ+' phương trình'},
  {k:'Tính khối lượng (tự làm đúng)',v:S.probs.length,t:N_PROB,w:20,txt:S.probs.length+'/'+N_PROB+' bài'},
  {k:'Trắc nghiệm (lần nộp đầu)',v:Math.max(0,S.quizFirst),t:N_Q,w:40,txt:S.quizFirst<0?'Chưa làm':S.quizFirst+'/'+N_Q+' câu đúng'}
];}
const pctOf=p=>Math.round(p.reduce((a,x)=>a+x.w*Math.min(1,x.v/x.t),0));
function save(){
  try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}
  const pc=pctOf(parts());
  $('#pctTop').textContent=pc+'%';$('#barTop').style.width=pc+'%';
  renderProg();
}
function renderProg(){
  const el=$('#progList');if(!el)return;
  el.innerHTML=parts().map(p=>`<div class="it"><span>${p.k}</span><span>${p.txt}</span><div class="bar"><i style="width:${Math.round(100*Math.min(1,p.v/p.t))}%"></i></div></div>`).join('')+
   `<div class="it"><span>Thời gian ôn tập</span><span>${Math.round(S.min)} phút</span></div>`;
}
const addOnce=(arr,v)=>{if(!arr.includes(v)){arr.push(v);return true}return false};
let lastAct=Date.now();
['click','keydown','input','scroll','touchstart'].forEach(ev=>addEventListener(ev,()=>{lastAct=Date.now()},{passive:true}));
setInterval(()=>{if(document.visibilityState==='visible'&&Date.now()-lastAct<120000){S.min+=0.5;save();}},30000);

const tabs=[...document.querySelectorAll('[role=tab]')];
function show(id){
  if(!document.getElementById('p-'+id)||(id==='giaovien'&&document.getElementById('teacherTab').hidden)) id='kienthuc';
  tabs.forEach(t=>t.setAttribute('aria-selected',t.dataset.tab===id));
  document.querySelectorAll('section.panel').forEach(p=>p.hidden=p.id!=='p-'+id);
  try{history.replaceState(null,'','#'+id)}catch(e){}
}
tabs.forEach(t=>t.addEventListener('click',()=>{show(t.dataset.tab);window.scrollTo({top:0})}));
show((location.hash||'').slice(1)||'kienthuc');

document.getElementById('goSubmit').addEventListener('click',()=>{show('nopbai');document.querySelector('nav.tabs').scrollIntoView({behavior:'smooth'});});

const mol=atoms=>'<span class="mol">'+atoms.map(a=>`<span class="atom ${a}">${a}</span>`).join('')+'</span>';
$('#molBefore').innerHTML=mol(['H','H'])+mol(['H','H'])+'<span class="op">+</span>'+mol(['O','O']);
$('#molAfter').innerHTML='<span class="op">→</span>'+mol(['H','O','H'])+mol(['H','O','H']);

const svg=$('#labSvg');
const scen={
  A:{start:152.40,end:152.40,res:'Số chỉ của cân <b>không đổi</b> (152,40 g). Xuất hiện kết tủa trắng barium sulfate: BaCl<sub>2</sub> + Na<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub>↓ + 2NaCl. Phản ứng không tạo chất khí nên tổng khối lượng các chất trước và sau phản ứng bằng nhau.'},
  B:{start:185.60,end:183.40,res:'Số chỉ của cân <b>giảm 2,20 g</b>. Đá vôi tác dụng với hydrochloric acid tạo khí carbon dioxide: CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + CO<sub>2</sub>↑ + H<sub>2</sub>O. Khí thoát ra khỏi cốc hở nên cân không ghi nhận khối lượng khí. Định luật vẫn đúng: 2,20 g chính là khối lượng CO<sub>2</sub> đã bay đi.'},
  C:{start:191.20,end:191.20,res:'Số chỉ của cân <b>không đổi</b> (191,20 g). Cốc được đậy kín nên khí CO<sub>2</sub> sinh ra không thoát ra ngoài. So sánh với cốc hở: khối lượng chỉ "mất đi" khi có chất khí thoát ra.'}
};
let cur='A',timer=null,running=false;
const fmtMass=v=>v.toFixed(2).replace('.',',')+' g';
function drawLab(s){
  const beaker=(x,w,top)=>`<path d="M${x} ${top} L${x} 228 L${x+w} 228 L${x+w} ${top}" fill="none" stroke="var(--glass)" stroke-width="3" stroke-linejoin="round"/>`;
  let g=`
  <rect x="60" y="230" width="400" height="12" rx="4" fill="var(--metal)"/>
  <path d="M110 242 L410 242 L430 292 L90 292 Z" fill="var(--metal)" opacity=".85"/>
  <rect x="200" y="252" width="120" height="30" rx="5" fill="var(--screen)"/>
  <text id="reading" x="260" y="273" text-anchor="middle" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="17" font-weight="700" fill="var(--digit)">${fmtMass(scen[s].start)}</text>`;
  if(s==='A'){
    g+=`<rect id="liq1" x="122" y="168" width="96" height="60" fill="var(--liquid)"/>
    <rect id="ppt1" x="122" y="228" width="96" height="0" fill="var(--ppt)" stroke="var(--glass)" stroke-width=".5"/>
    <rect id="cloud" x="122" y="168" width="96" height="60" fill="var(--ppt)" opacity="0"/>
    ${beaker(120,100,98)}
    <rect id="liq2" x="292" y="168" width="76" height="60" fill="var(--liquid2)"/>
    ${beaker(290,80,128)}
    <text x="170" y="90" text-anchor="middle" font-size="13" fill="var(--ink)" font-family="var(--font-body)">dd BaCl₂</text>
    <text x="330" y="120" text-anchor="middle" font-size="13" fill="var(--ink)" font-family="var(--font-body)" id="lab2">dd Na₂SO₄</text>`;
  } else {
    g+=`<rect x="122" y="158" width="96" height="70" fill="var(--liquid)"/>
    <g id="bubbles"></g>
    ${beaker(120,100,98)}
    ${s==='C'?'<rect x="114" y="90" width="112" height="9" rx="3" fill="var(--metal)"/>':''}
    <ellipse cx="340" cy="224" rx="44" ry="6" fill="none" stroke="var(--glass)" stroke-width="3"/>
    <g id="stones"><polygon points="318,222 324,208 334,212 333,222" fill="var(--muted)"/><polygon points="336,222 342,206 354,209 356,222" fill="var(--muted)"/><polygon points="356,222 360,212 368,214 366,222" fill="var(--muted)"/></g>
    <text x="170" y="${s==='C'?82:90}" text-anchor="middle" font-size="13" fill="var(--ink)" font-family="var(--font-body)">dd HCl${s==='C'?' (có nắp)':''}</text>
    <text x="340" y="198" text-anchor="middle" font-size="13" fill="var(--ink)" font-family="var(--font-body)">đá vôi</text>`;
  }
  svg.innerHTML=g;
  $('#startMass').textContent=fmtMass(scen[s].start);
  const r=$('#labResult');r.classList.remove('show');
  r.innerHTML='Số chỉ của cân trước phản ứng: <b>'+fmtMass(scen[s].start)+'</b>. Em dự đoán sau phản ứng số chỉ sẽ thay đổi thế nào?';
  $('#runBtn').disabled=false;
}
function tween(ms,fn,done){
  ms=reduce?Math.min(ms,300):ms;const t0=performance.now();
  (function step(now){const t=Math.min(1,(now-t0)/ms);fn(t);if(t<1)requestAnimationFrame(step);else done&&done();})(t0);
}
function run(){
  if(running)return;running=true;$('#runBtn').disabled=true;
  const s=cur,S=scen[s];
  const finish=()=>{running=false;if(addOnce(S.lab,s))save();const r=$('#labResult');r.classList.add('show');r.innerHTML=S.res;};
  if(s==='A'){
    const l1=$('#liq1'),l2=$('#liq2'),cl=$('#cloud'),p=$('#ppt1');
    tween(1600,t=>{const h2=60*(1-t),h1=60+50*t;
      l2.setAttribute('height',h2);l2.setAttribute('y',228-h2);
      l1.setAttribute('height',h1);l1.setAttribute('y',228-h1);
      cl.setAttribute('height',h1);cl.setAttribute('y',228-h1);cl.setAttribute('opacity',.75*t);
    },()=>tween(1800,t=>{cl.setAttribute('opacity',.75*(1-t));p.setAttribute('height',14*t);p.setAttribute('y',228-14*t);},finish));
  } else {
    const st=$('#stones'),rd=$('#reading'),bub=$('#bubbles');
    tween(900,t=>st.setAttribute('transform',`translate(${-172*t},${-4*t+ (t<.5? -40*t : -40*(1-t))})`),()=>{
      let html='';for(let i=0;i<12;i++){const x=135+Math.random()*70,y=212-Math.random()*20,d=(Math.random()*1.4).toFixed(2);
        html+=`<circle class="${s==='B'?'bub':'bubin'}" style="animation-delay:${d}s" cx="${x}" cy="${y}" r="${2+Math.random()*3}" fill="none" stroke="var(--ink)" stroke-width="1.2"/>`;}
      bub.innerHTML=html;
      tween(3200,t=>{const v=S.start+(S.end-S.start)*t;rd.textContent=fmtMass(v);st.setAttribute('opacity',1-.35*t);},()=>{setTimeout(()=>{bub.innerHTML='';},reduce?0:800);finish();});
    });
  }
}
document.querySelectorAll('#scenBtns button').forEach(b=>b.addEventListener('click',()=>{
  if(running)return;cur=b.dataset.s;
  document.querySelectorAll('#scenBtns button').forEach(x=>x.setAttribute('aria-pressed',x===b));drawLab(cur);}));
$('#runBtn').addEventListener('click',run);
$('#resetBtn').addEventListener('click',()=>{if(!running)drawLab(cur)});
drawLab('A');

function parse(f){let i=0;
  const num=()=>{let s='';while(i<f.length&&/\d/.test(f[i]))s+=f[i++];return s?+s:1};
  const group=()=>{const m={};while(i<f.length){const c=f[i];
    if(c==='('){i++;const g=group();i++;const n=num();for(const k in g)m[k]=(m[k]||0)+g[k]*n;}
    else if(c===')')break;
    else{let el=f[i++];while(i<f.length&&/[a-z]/.test(f[i]))el+=f[i++];const n=num();m[el]=(m[el]||0)+n;}}
    return m};
  return group();}
const EQS=[
  {r:['H2','O2'],p:['H2O'],a:[2,1,2],lv:'Dễ',h:'Vế phải chỉ có 1 nguyên tử O. Thêm hệ số 2 trước H₂O rồi cân bằng H.'},
  {r:['Mg','HCl'],p:['MgCl2','H2'],a:[1,2,1,1],lv:'Dễ',h:'Vế phải có 2 nguyên tử Cl trong MgCl₂, vậy cần 2 phân tử HCl.'},
  {r:['Fe','Cl2'],p:['FeCl3'],a:[2,3,2],lv:'Dễ',h:'Cl ở vế trái là 2, vế phải là 3. Bội chung nhỏ nhất của 2 và 3 là 6.'},
  {r:['BaCl2','Na2SO4'],p:['BaSO4','NaCl'],a:[1,1,1,2],lv:'Dễ',h:'Coi nhóm SO₄ như một đơn vị. Chỉ cần cân bằng Na và Cl.'},
  {r:['Al','O2'],p:['Al2O3'],a:[4,3,2],lv:'Trung bình',h:'O: vế trái 2, vế phải 3 → BCNN là 6. Thêm 3 trước O₂ và 2 trước Al₂O₃, rồi cân bằng Al.'},
  {r:['P','O2'],p:['P2O5'],a:[4,5,2],lv:'Trung bình',h:'O: vế trái 2, vế phải 5 → BCNN là 10.'},
  {r:['Na','H2O'],p:['NaOH','H2'],a:[2,2,2,1],lv:'Trung bình',h:'Thử đặt hệ số 2 trước NaOH, khi đó số H ở vế phải là 2 + 2 = 4.'},
  {r:['CH4','O2'],p:['CO2','H2O'],a:[1,2,1,2],lv:'Trung bình',h:'Cân bằng C, rồi H, cuối cùng mới cân bằng O.'},
  {r:['KClO3'],p:['KCl','O2'],a:[2,2,3],lv:'Trung bình',h:'O: vế trái 3, vế phải 2 → BCNN là 6.'},
  {r:['NaOH','CuSO4'],p:['Cu(OH)2','Na2SO4'],a:[2,1,1,1],lv:'Khó',h:'Coi nhóm OH và nhóm SO₄ là các đơn vị. Cu(OH)₂ có 2 nhóm OH.'},
  {r:['Al','HCl'],p:['AlCl3','H2'],a:[2,6,2,3],lv:'Khó',h:'Cl ở AlCl₃ là 3, H ở H₂ là 2. Hãy thử cho HCl hệ số 6.'},
  {r:['Fe2O3','H2'],p:['Fe','H2O'],a:[1,3,2,3],lv:'Khó',h:'Fe₂O₃ có 3 nguyên tử O, nên cần 3 phân tử H₂O.'}
];
let ei=0;const solved={has:i=>S.solved.includes(i),get size(){return S.solved.length}};
function renderList(){
  $('#eqList').innerHTML=EQS.map((e,i)=>`<button data-i="${i}" class="${i===ei?'cur':''} ${solved.has(i)?'done':''}" aria-label="Phương trình ${i+1}">${i+1}</button>`).join('');
  $('#eqList').querySelectorAll('button').forEach(b=>b.onclick=()=>{ei=+b.dataset.i;renderEq();});
}
function renderEq(){
  const e=EQS[ei];renderList();
  const sp=(f,k)=>`<span class="species"><input id="c${k}" inputmode="numeric" maxlength="2" aria-label="Hệ số của ${f}" autocomplete="off"><span>${fmt(f)}</span></span>`;
  let h='',k=0;
  e.r.forEach((f,i)=>{if(i)h+='<span class="op">+</span>';h+=sp(f,k++);});
  h+='<span class="op">→</span>';
  e.p.forEach((f,i)=>{if(i)h+='<span class="op">+</span>';h+=sp(f,k++);});
  $('#equation').innerHTML=h;
  const lt=$('#eqLevel');lt.textContent='Mức: '+e.lv;lt.className='tag'+(e.lv==='Trung bình'?' th':e.lv==='Khó'?' vd':'');
  $('#eqPos').textContent=`Phương trình ${ei+1}/${EQS.length} · Đã đúng ${solved.size}`;
  $('#eqMsg').hidden=true;
  $('#equation').querySelectorAll('input').forEach(inp=>inp.addEventListener('input',()=>{inp.value=inp.value.replace(/[^0-9]/g,'');updateAtoms();$('#eqMsg').hidden=true;}));
  updateAtoms();
}
function coefs(){const e=EQS[ei],n=e.r.length+e.p.length;const c=[];for(let k=0;k<n;k++){const v=$('#c'+k).value.trim();c.push(v===''?1:+v);}return c;}
function sides(c){const e=EQS[ei];const L={},R={};
  e.r.forEach((f,i)=>{const m=parse(f);for(const el in m)L[el]=(L[el]||0)+m[el]*c[i];});
  e.p.forEach((f,i)=>{const m=parse(f);for(const el in m)R[el]=(R[el]||0)+m[el]*c[e.r.length+i];});
  return [L,R];}
function updateAtoms(){
  const [L,R]=sides(coefs());const els=Object.keys(L);
  $('#atomTable').innerHTML='<tr><th>Nguyên tố</th><th>Vế trái</th><th>Vế phải</th></tr>'+els.map(el=>{const ok=L[el]===R[el];return `<tr><td><b>${el}</b></td><td class="${ok?'ok':'no'}">${L[el]}</td><td class="${ok?'ok':'no'}">${R[el]}</td></tr>`}).join('');
}
const gcd=(a,b)=>b?gcd(b,a%b):a;
function msg(t,cls){const m=$('#eqMsg');m.hidden=false;m.className='msg '+cls;m.innerHTML=t;}
$('#checkBtn').onclick=()=>{
  const c=coefs();
  if(c.some(v=>!v)){msg('Hệ số phải là số nguyên dương, không được bằng 0.','bad');return;}
  const [L,R]=sides(c);const bal=Object.keys(L).every(el=>L[el]===R[el]);
  if(!bal){const wrong=Object.keys(L).filter(el=>L[el]!==R[el]);msg('Chưa cân bằng. Kiểm tra lại nguyên tố: <b>'+wrong.join(', ')+'</b>.','bad');return;}
  const g=c.reduce(gcd);
  if(g>1){msg(`Số nguyên tử đã bằng nhau nhưng hệ số chưa tối giản. Hãy chia tất cả hệ số cho ${g}.`,'info');return;}
  if(S.revealed.includes(ei)&&!solved.has(ei)){msg('Đúng rồi. Vì em đã xem đáp án nên câu này chưa được tính vào tiến độ. Hãy tự làm các phương trình khác nhé.','info');return;}
  addOnce(S.solved,ei);save();renderList();$('#eqPos').textContent=`Phương trình ${ei+1}/${EQS.length} · Đã đúng ${solved.size}`;
  msg('Chính xác! Phương trình đã cân bằng'+(solved.size===EQS.length?'. Em đã hoàn thành cả 12 phương trình.':'.'),'good');
};
$('#hintBtn').onclick=()=>msg('Gợi ý: '+EQS[ei].h,'info');
$('#ansBtn').onclick=()=>{const e=EQS[ei];if(!solved.has(ei)&&addOnce(S.revealed,ei))save();e.a.forEach((v,k)=>$('#c'+k).value=v===1?'':v);updateAtoms();
  const all=[...e.r,...e.p];let s='';all.forEach((f,i)=>{if(i===e.r.length)s+=' → ';else if(i)s+=' + ';s+=(e.a[i]>1?e.a[i]:'')+fmt(f);});
  msg('Đáp án: '+s+'. Hãy thử tự làm lại câu này sau nhé.','info');};
$('#nextBtn').onclick=()=>{ei=(ei+1)%EQS.length;renderEq();};
renderEq();

const PROBS=[
  {lv:'th',q:'Đốt cháy hết 4,8 g magnesium (Mg) trong không khí thu được 8 g magnesium oxide (MgO). Tính khối lượng oxygen đã phản ứng.',u:'g',a:3.2,s:'2Mg + O₂ → 2MgO. Theo định luật: m<sub>Mg</sub> + m<sub>O₂</sub> = m<sub>MgO</sub> ⇒ m<sub>O₂</sub> = 8 − 4,8 = <b>3,2 g</b>.'},
  {lv:'th',q:'Nung 100 kg đá vôi (CaCO₃) thu được 56 kg vôi sống (CaO) và khí carbon dioxide (CO₂). Tính khối lượng CO₂ tạo thành.',u:'kg',a:44,s:'CaCO₃ → CaO + CO₂. m<sub>CO₂</sub> = m<sub>CaCO₃</sub> − m<sub>CaO</sub> = 100 − 56 = <b>44 kg</b>.'},
  {lv:'vd',q:'Cho 5,6 g iron (Fe) phản ứng vừa đủ với 3,2 g sulfur (S) khi đun nóng, thu được iron(II) sulfide (FeS). Tính khối lượng FeS.',u:'g',a:8.8,s:'Fe + S → FeS. m<sub>FeS</sub> = 5,6 + 3,2 = <b>8,8 g</b>.'},
  {lv:'vd',q:'Cho 13 g zinc (Zn) tác dụng vừa đủ với 14,6 g hydrochloric acid (HCl), thu được 27,2 g zinc chloride (ZnCl₂) và khí hydrogen. Tính khối lượng khí hydrogen thoát ra.',u:'g',a:0.4,s:'Zn + 2HCl → ZnCl₂ + H₂. m<sub>H₂</sub> = (13 + 14,6) − 27,2 = <b>0,4 g</b>.'},
  {lv:'vd',q:'Đốt cháy hoàn toàn 3 kg carbon (than) cần dùng 8 kg oxygen. Tính khối lượng khí carbon dioxide sinh ra.',u:'kg',a:11,s:'C + O₂ → CO₂. m<sub>CO₂</sub> = 3 + 8 = <b>11 kg</b>.'}
];
$('#probs').innerHTML=PROBS.map((p,i)=>`<div class="prob">
  <div class="row"><span class="tag ${p.lv}">${p.lv==='th'?'Thông hiểu':'Vận dụng'}</span><b>Bài ${i+1}</b></div>
  <p>${p.q}</p>
  <div class="row"><label for="pa${i}">Đáp số:</label><input id="pa${i}" inputmode="decimal" autocomplete="off"><span>${p.u}</span><button class="btn primary" data-i="${i}" data-act="check">Kiểm tra</button><button class="btn" data-i="${i}" data-act="sol">Xem lời giải</button></div>
  <div id="pm${i}" hidden></div></div>`).join('');
$('#probs').addEventListener('click',ev=>{
  const b=ev.target.closest('button');if(!b)return;const i=+b.dataset.i,p=PROBS[i],out=$('#pm'+i);out.hidden=false;
  if(b.dataset.act==='sol'){if(!S.probs.includes(i)&&addOnce(S.probsSeen,i))save();out.className='msg info';out.innerHTML=p.s+(S.probs.includes(i)?'':'<br><i>Em đã xem lời giải nên bài này không được tính điểm.</i>');return;}
  const v=parseFloat($('#pa'+i).value.replace(',','.'));
  if(isNaN(v)){out.className='msg bad';out.textContent='Em hãy nhập một số.';return;}
  if(Math.abs(v-p.a)<0.01){if(S.probsSeen.includes(i)&&!S.probs.includes(i)){out.className='msg info';out.textContent='Đúng rồi, nhưng em đã xem lời giải trước nên bài này không được tính điểm.';return;}if(addOnce(S.probs,i))save();out.className='msg good';out.innerHTML='Đúng rồi! '+p.s;}
  else{out.className='msg bad';out.textContent='Chưa đúng. Gợi ý: viết biểu thức tổng khối lượng chất tham gia = tổng khối lượng sản phẩm, rồi tìm đại lượng chưa biết.';}
});

const Q=[
  {lv:'nb',q:'Nội dung của định luật bảo toàn khối lượng là:',o:['Tổng khối lượng sản phẩm lớn hơn tổng khối lượng chất tham gia.','Tổng khối lượng sản phẩm bằng tổng khối lượng các chất tham gia phản ứng.','Tổng khối lượng sản phẩm nhỏ hơn tổng khối lượng chất tham gia.','Khối lượng mỗi chất không thay đổi trong phản ứng.'],a:1,e:'Trong một phản ứng hóa học, tổng khối lượng các chất sản phẩm bằng tổng khối lượng các chất tham gia.'},
  {lv:'nb',q:'Trong một phản ứng hóa học, yếu tố nào sau đây thay đổi?',o:['Số nguyên tử của mỗi nguyên tố.','Khối lượng của mỗi nguyên tử.','Liên kết giữa các nguyên tử.','Tên các nguyên tố hóa học.'],a:2,e:'Chỉ có liên kết giữa các nguyên tử thay đổi, làm phân tử này biến đổi thành phân tử khác.'},
  {lv:'nb',q:'Định luật bảo toàn khối lượng do những nhà khoa học nào tìm ra?',o:['Newton và Galileo.','Lomonosov và Lavoisier.','Mendeleev và Dalton.','Rutherford và Bohr.'],a:1,e:'Lomonosov (Nga) và Lavoisier (Pháp) tìm ra định luật độc lập với nhau.'},
  {lv:'nb',q:'Bước đầu tiên khi lập phương trình hóa học là:',o:['Cân bằng số nguyên tử mỗi nguyên tố.','Viết sơ đồ phản ứng.','Viết phương trình hóa học.','Tính khối lượng các chất.'],a:1,e:'Ba bước: viết sơ đồ phản ứng → cân bằng số nguyên tử → viết PTHH.'},
  {lv:'th',q:'Khi cân bằng phương trình hóa học, việc nào sau đây <b>không được</b> làm?',o:['Thêm hệ số trước công thức hóa học.','Thay đổi chỉ số trong công thức hóa học.','Cân bằng cả nhóm nguyên tử như một đơn vị.','Đếm số nguyên tử mỗi nguyên tố ở hai vế.'],a:1,e:'Thay đổi chỉ số là biến chất này thành chất khác, ví dụ H₂O thành H₂O₂.'},
  {lv:'th',q:'Phương trình hóa học nào sau đây được viết <b>đúng</b>?',o:['H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O<sub>2</sub>','H<sub>2</sub> + O → H<sub>2</sub>O','2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O','2H + O → H<sub>2</sub>O'],a:2,e:'Hydrogen và oxygen tồn tại dạng phân tử H₂, O₂; sản phẩm là nước H₂O. Phương án A sai vì đã đổi chỉ số.'},
  {lv:'th',q:'Bộ hệ số đúng cho sơ đồ: Al + O<sub>2</sub> → Al<sub>2</sub>O<sub>3</sub> là:',o:['2, 3, 1','4, 3, 2','4, 2, 2','2, 1, 1'],a:1,e:'4Al + 3O₂ → 2Al₂O₃: vế trái 4 Al, 6 O; vế phải 4 Al, 6 O.'},
  {lv:'th',q:'Trong phương trình 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O, tỉ lệ số phân tử H<sub>2</sub> : O<sub>2</sub> : H<sub>2</sub>O là:',o:['1 : 1 : 1','2 : 1 : 1','2 : 1 : 2','1 : 2 : 2'],a:2,e:'Tỉ lệ bằng tỉ lệ các hệ số: 2 : 1 : 2.'},
  {lv:'th',q:'Đốt cháy cây nến, khối lượng nến giảm dần. Giải thích nào đúng?',o:['Định luật bảo toàn khối lượng không đúng với phản ứng cháy.','Các chất sản phẩm (khí carbon dioxide, hơi nước) bay vào không khí.','Nến bị biến thành năng lượng.','Oxygen làm giảm khối lượng nến.'],a:1,e:'Sản phẩm là chất khí và hơi nước thoát ra ngoài nên không còn trên giá nến; định luật vẫn đúng.'},
  {lv:'vd',q:'Đốt cháy 2,4 g magnesium trong oxygen thu được 4 g magnesium oxide. Khối lượng oxygen đã phản ứng là:',o:['1,6 g','6,4 g','2,4 g','0,8 g'],a:0,e:'m<sub>O₂</sub> = 4 − 2,4 = 1,6 g.'},
  {lv:'vd',q:'Nung 10 g CaCO<sub>3</sub> thu được 5,6 g CaO và khí CO<sub>2</sub>. Khối lượng CO<sub>2</sub> là:',o:['15,6 g','5,6 g','4,4 g','4,6 g'],a:2,e:'m<sub>CO₂</sub> = 10 − 5,6 = 4,4 g.'},
  {lv:'vd',q:'Hệ số của HCl trong phương trình: Al + HCl → AlCl<sub>3</sub> + H<sub>2</sub> (sau khi cân bằng với hệ số tối giản) là:',o:['2','3','4','6'],a:3,e:'2Al + 6HCl → 2AlCl₃ + 3H₂.'},
  {lv:'vd',q:'Một thanh sắt để lâu ngoài không khí ẩm bị gỉ. So với ban đầu, khối lượng thanh sắt sau khi gỉ:',o:['Giảm','Không đổi','Tăng','Lúc tăng lúc giảm'],a:2,e:'Sắt kết hợp thêm oxygen và hơi nước từ không khí nên khối lượng tăng.'}
];
const LV={nb:['Nhận biết',''],th:['Thông hiểu','th'],vd:['Vận dụng','vd']};
function renderQuiz(){
  $('#quiz').innerHTML=Q.map((q,i)=>`<div class="q" id="q${i}">
    <div class="qh"><span class="num">Câu ${i+1}.</span><span class="tag ${LV[q.lv][1]}">${LV[q.lv][0]}</span></div>
    <p>${q.q}</p>
    <div class="opts">${q.o.map((o,j)=>`<label><input type="radio" name="q${i}" id="q${i}o${j}" value="${j}"><span><b>${'ABCD'[j]}.</b>${o}</span></label>`).join('')}</div>
    <p class="explain" hidden></p></div>`).join('');
  const so=$('#scoreOut');so.className='explain';so.innerHTML=S.quizFirst<0?'Chưa nộp bài. Chỉ lần nộp đầu tiên được tính điểm.':`Điểm được tính (lần đầu): <b>${S.quizFirst}/${N_Q}</b>. Lần làm này là luyện lại, không tính điểm.`;
  const sb=$('#submitQuiz');sb.disabled=false;sb.dataset.done='';$('#resetQuiz').hidden=true;submitArm=0;
}
function lockQuiz(lock){document.querySelectorAll('#quiz input').forEach(x=>x.disabled=lock);}
let submitArm=0;
$('#submitQuiz').onclick=()=>{
  const btn=$('#submitQuiz');if(btn.dataset.done==='1')return;
  const first=S.quizFirst<0,out=$('#scoreOut');
  const blankN=Q.filter((q,i)=>!$('#q'+i).querySelector('input:checked')).length;
  if(first&&Date.now()-submitArm>6000){submitArm=Date.now();out.className='msg info';out.innerHTML=(blankN?`Em còn <b>${blankN}</b> câu chưa chọn. `:'')+'Chỉ <b>lần nộp đầu tiên</b> được tính điểm. Bấm <b>Nộp bài</b> lần nữa để xác nhận.';return;}
  let right=0;
  Q.forEach((q,i)=>{const box=$('#q'+i);const sel=box.querySelector('input:checked');
    box.querySelectorAll('label').forEach((l,j)=>{l.classList.remove('right','wrong');if(j===q.a)l.classList.add('right');});
    if(sel){if(+sel.value===q.a)right++;else sel.closest('label').classList.add('wrong');}
    const ex=box.querySelector('.explain');ex.hidden=false;ex.innerHTML='Giải thích: '+q.e;});
  lockQuiz(true);btn.dataset.done='1';btn.disabled=true;$('#resetQuiz').hidden=false;
  S.quizTries++;S.quizBest=Math.max(S.quizBest,right);if(first)S.quizFirst=right;save();
  const d=x=>(x/Q.length*10).toFixed(1).replace('.',',');
  out.className='';
  out.innerHTML=first?`<span class="big">${right}/${Q.length}</span> câu đúng · Điểm: <b>${d(right)}</b> · Đã ghi nhận điểm lần đầu.`
    :`Lần luyện lại: <b>${right}/${Q.length}</b> câu đúng (không tính điểm). Điểm được tính vẫn là lần đầu: <b>${S.quizFirst}/${Q.length}</b>.`;
};
$('#resetQuiz').onclick=()=>{renderQuiz();$('#quiz').scrollIntoView({behavior:reduce?'auto':'smooth'});};
renderQuiz();

const ktBtn=$('#ktDone');
const paintKt=()=>{ktBtn.classList.toggle('on',S.kt);ktBtn.textContent=S.kt?'✓ Đã học xong phần kiến thức':'Em đã học xong phần kiến thức';};
ktBtn.onclick=()=>{S.kt=!S.kt;save();paintKt();};paintKt();
document.querySelectorAll('#p-thuctien details').forEach((d,i)=>d.addEventListener('toggle',()=>{if(d.open&&addOnce(S.real,i))save();}));
const nameIn=$('#stName'),clsIn=$('#stClass');
nameIn.value=S.name;clsIn.value=S.cls;
nameIn.addEventListener('input',()=>{S.name=nameIn.value;save();});
clsIn.addEventListener('input',()=>{S.cls=clsIn.value.toUpperCase().replace(/\s+/g,'');clsIn.value=S.cls;save();});

const SALT='khtn8|bai5|bao-toan-khoi-luong';
function fnv(str){let h=0x811c9dc5;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0;}return h.toString(16).padStart(8,'0');}
const b64e=s=>btoa(unescape(encodeURIComponent(s))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
const b64d=s=>{s=s.replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';return decodeURIComponent(escape(atob(s)));};
function makeCode(){
  const p={v:2,z:S.rs||0,f:S.quizFirst,s:S.probsSeen.length,x:S.dev,n:S.name.trim().replace(/\s+/g,' '),l:S.cls.trim(),k:S.kt?1:0,e:S.lab.length,c:S.solved.length,a:S.revealed.length,p:S.probs.length,q:S.quizBest,t:S.quizTries,r:S.real.length,m:Math.round(S.min),d:Math.floor(Date.now()/60000)};
  const body=b64e(JSON.stringify(p));return 'KHTN8B5-'+body+'.'+fnv(SALT+body);
}
function readCode(code){
  const m=/^KHTN8B5-([A-Za-z0-9_-]+)\.([0-9a-f]{8})$/.exec(code);if(!m)return null;
  if(fnv(SALT+m[1])!==m[2])return null;
  try{const p=JSON.parse(b64d(m[1]));if(!p||typeof p.n!=='string'||typeof p.l!=='string')return null;return p;}catch(e){return null;}
}
function cmsg(t,cls){const m=$('#codeMsg');m.hidden=false;m.className='msg '+cls;m.textContent=t;}
let lastCode='';
$('#makeCode').onclick=()=>{
  if(S.name.trim().length<3){cmsg('Em hãy điền họ và tên ở đầu trang trước khi tạo mã.','bad');nameIn.focus();return;}
  if(!S.cls.trim()){cmsg('Em hãy điền lớp ở đầu trang trước khi tạo mã.','bad');clsIn.focus();return;}
  lastCode=makeCode();$('#codeBox').hidden=false;$('#codeBox').textContent=lastCode;$('#copyCode').hidden=false;
  cmsg(`Đã tạo mã cho ${S.name.trim()} – lớp ${S.cls}. Mức hoàn thành: ${pctOf(parts())}%.`,'good');
};
$('#copyCode').onclick=()=>{
  const sel=()=>{const r=document.createRange();r.selectNodeContents($('#codeBox'));const s=getSelection();s.removeAllRanges();s.addRange(r);};
  try{navigator.clipboard.writeText(lastCode).then(()=>cmsg('Đã sao chép mã. Em dán vào tin nhắn gửi giáo viên nhé.','good'),()=>{sel();cmsg('Mã đã được bôi đen, em nhấn giữ hoặc Ctrl+C để sao chép.','info');});}
  catch(e){sel();cmsg('Mã đã được bôi đen, em nhấn giữ hoặc Ctrl+C để sao chép.','info');}
};
let resetArm=0;
$('#resetAll').onclick=()=>{
  const b=$('#resetAll');
  if(Date.now()-resetArm>4000){resetArm=Date.now();b.textContent='Bấm lần nữa để xác nhận xóa';setTimeout(()=>{b.textContent='Xóa tiến độ trên máy này'},4000);return;}
  const dv=S.dev,rs=(S.rs||0)+1;S=blank();S.dev=dv;S.rs=rs;save();nameIn.value='';clsIn.value='';paintKt();renderEq();renderQuiz();$('#codeBox').hidden=true;$('#copyCode').hidden=true;
  b.textContent='Xóa tiến độ trên máy này';cmsg('Đã xóa tiến độ. Em có thể bắt đầu lại từ đầu.','info');
};
save();

let bonusRules=[{min:90,pts:1},{min:70,pts:0.5}];
const bonusOf=pc=>{for(const r of [...bonusRules].sort((a,b)=>b.min-a.min))if(pc>=r.min)return r.pts;return 0;};
const fmtPts=x=>String(Math.round(x*100)/100).replace('.',',');
function paintBonusInputs(){const rs=[...bonusRules].sort((a,b)=>b.min-a.min);for(let i=0;i<3;i++){$('#bm'+i).value=rs[i]?rs[i].min:'';$('#bp'+i).value=rs[i]?fmtPts(rs[i].pts):'';}}
$('#saveBonus').onclick=async()=>{
  const out=[];
  for(let i=0;i<3;i++){const a=$('#bm'+i).value.trim(),b=$('#bp'+i).value.trim();if(!a&&!b)continue;
    const m=Number(a),p=Number(b);
    if(isNaN(m)||m<0||m>100){$('#bonusMsg').textContent=`Dòng ${i+1}: mức phần trăm phải từ 0 đến 100.`;return;}
    if(isNaN(p)||p<0||p>10){$('#bonusMsg').textContent=`Dòng ${i+1}: điểm cộng phải là số từ 0 đến 10.`;return;}
    out.push({min:m,pts:p});}
  bonusRules=out;
  if(db){try{await db.doc('config/bonus').set({rules:out});}catch(e){$('#bonusMsg').textContent='Chưa lưu được, hãy thử lại.';return;}}
  paintBonusInputs();renderTeacher();$('#bonusMsg').textContent=db?'Đã lưu. Bảng và file tải về dùng mức mới.':'Đã áp dụng cho lần mở này.';
};

const fqOf=r=>(typeof r.f==='number'&&r.f>=0)?r.f:(r.t>0?r.q:-1);
const pctFromPayload=p=>pctOf([{v:p.k+p.r,t:1+N_REAL,w:5},{v:p.e,t:N_LAB,w:5},{v:p.c,t:N_EQ,w:30},{v:p.p,t:N_PROB,w:20},{v:Math.max(0,fqOf(p)),t:N_Q,w:40}]);
const slug=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'hs';
let rows=new Map(),db=null,downloads=null;
const fmtTime=d=>{const t=new Date(d*60000);return t.toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit'})+' '+t.toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'});};
function viewRows(){const f=$('#clsFilter').value;return [...rows.values()].filter(r=>!f||r.l===f).sort((a,b)=>a.l.localeCompare(b.l,'vi')||a.n.split(' ').pop().localeCompare(b.n.split(' ').pop(),'vi')||a.n.localeCompare(b.n,'vi'));}
function renderTeacher(){
  const sel=$('#clsFilter'),keep=sel.value,classes=[...new Set([...rows.values()].map(r=>r.l))].sort((a,b)=>a.localeCompare(b,'vi'));
  sel.innerHTML='<option value="">Tất cả các lớp</option>'+classes.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');
  sel.value=classes.includes(keep)?keep:'';
  const v=viewRows(),n=v.length;
  const avg=f=>n?v.reduce((a,r)=>a+f(r),0)/n:0;
  const quizzed=v.filter(r=>fqOf(r)>=0);
  const qAvg=quizzed.length?quizzed.reduce((a,r)=>a+fqOf(r),0)/quizzed.length/N_Q*10:0;
  $('#tiles').innerHTML=[
    ['Học sinh đã gửi',n],['Mức hoàn thành TB',Math.round(avg(r=>pctFromPayload(r)))+'%'],
    ['Được cộng điểm',v.filter(r=>bonusOf(pctFromPayload(r))>0).length],['Điểm TN trung bình',quizzed.length?qAvg.toFixed(1).replace('.',','):'–']
  ].map(([k,val])=>`<div class="tile"><div class="k">${k}</div><div class="v">${val}</div></div>`).join('');
  if(!n){$('#resTable').innerHTML='<tr><td class="explain">Chưa có kết quả nào. Dán mã học sinh gửi vào ô phía trên để bắt đầu.</td></tr>';return;}
  $('#resTable').innerHTML='<tr><th>#</th><th>Họ và tên</th><th>Lớp</th><th>Mức hoàn thành</th><th>Điểm cộng</th><th>Cân bằng</th><th>Tính KL</th><th>TN lần đầu</th><th>Xem đáp án</th><th>Thời gian</th><th>Gửi lúc</th><th></th></tr>'+
    v.map((r,i)=>{const pc=pctFromPayload(r),cls=pc>=80?'g':pc>=40?'m':'b';
      const fq=fqOf(r),qd=fq>=0?`${fq}/${N_Q} <span class="explain">(${(fq/N_Q*10).toFixed(1).replace('.',',')}đ${r.t>1?' · luyện thêm '+(r.t-1)+' lần':''})</span>`:'<span class="explain">chưa làm</span>';
      return `<tr><td>${i+1}</td><td><b>${esc(r.n)}</b>${(r.devs||[]).length>1?` <span class="pill m" title="Gửi mã từ nhiều máy khác nhau, có thể đã làm lại trắc nghiệm">${r.devs.length} máy</span>`:''}${r.z>0?` <span class="pill m" title="Học sinh đã bấm xóa tiến độ rồi làm lại">xóa làm lại ${r.z} lần</span>`:''}</td><td>${esc(r.l)}</td><td><span class="minibar"><i style="width:${pc}%"></i></span><span class="pill ${cls}">${pc}%</span></td><td class="n"><b>+${fmtPts(bonusOf(pc))}</b></td><td class="n">${r.c}/${N_EQ}</td><td class="n">${r.p}/${N_PROB}</td><td>${qd}</td><td class="n">${r.a}</td><td class="n">${r.m} ph</td><td>${fmtTime(r.d)}</td><td><button class="linkbtn" data-del="${esc(r.id)}">Xóa</button></td></tr>`;}).join('');
}
$('#clsFilter').addEventListener('change',renderTeacher);
$('#resTable').addEventListener('click',async ev=>{
  const b=ev.target.closest('[data-del]');if(!b)return;
  if(b.dataset.arm!=='1'){b.dataset.arm='1';b.textContent='Xác nhận?';setTimeout(()=>{b.dataset.arm='';b.textContent='Xóa'},4000);return;}
  const id=b.dataset.del;
  if(db){try{await db.collection('results').doc(id).delete();}catch(e){$('#addMsg').textContent='Chưa xóa được, hãy thử lại sau.';return;}}
  rows.delete(id);renderTeacher();
});
$('#addCodes').onclick=async()=>{
  const txt=$('#pasteBox').value,found=txt.match(/KHTN8B5-[A-Za-z0-9_-]+\.[0-9a-f]{8}/g)||[];
  if(!found.length){$('#addMsg').textContent='Không tìm thấy mã nào. Mã bắt đầu bằng KHTN8B5-';return;}
  let added=0,bad=0,older=0;
  for(const code of found){
    const p=readCode(code);if(!p){bad++;continue;}
    p.id=slug(p.l)+'_'+slug(p.n);
    const old=rows.get(p.id);
    const devs=[...new Set([...(old&&old.devs?old.devs:[]),...(p.x?[p.x]:[])])];
    if(old&&old.d>p.d){if(devs.length>(old.devs||[]).length){const o2=Object.assign({},old,{devs});if(db){try{await db.collection('results').doc(p.id).set(o2);}catch(e){}}rows.set(p.id,o2);}older++;continue;}
    p.devs=devs;
    if(old&&(old.z||0)>(p.z||0))p.z=old.z;
    if(old&&fqOf(old)>=0)p.f=fqOf(old);
    if(db){try{await db.collection('results').doc(p.id).set(p);}catch(e){bad++;continue;}}
    rows.set(p.id,p);added++;
  }
  $('#addMsg').textContent=`Đã thêm hoặc cập nhật ${added} kết quả`+(older?`, bỏ qua ${older} mã cũ hơn`:'')+(bad?`, ${bad} mã không hợp lệ (bị sửa hoặc thiếu ký tự)`:'')+'.';
  if(added)$('#pasteBox').value='';
  renderTeacher();
};
$('#exportCsv').onclick=async()=>{
  const v=viewRows();if(!v.length){$('#exportMsg').textContent='Chưa có dữ liệu để tải.';return;}
  const q=s=>'"'+String(s).replace(/"/g,'""')+'"';
  const head=['STT','Họ và tên','Lớp','Mức hoàn thành (%)','Điểm cộng','Kiến thức','Thí nghiệm ảo (/3)','Cân bằng PTHH (/12)','Số lần xem đáp án','Tính khối lượng (/5)','Trắc nghiệm lần đầu (/13)','Điểm trắc nghiệm lần đầu (/10)','Số lần làm trắc nghiệm','Liên hệ thực tiễn (/5)','Thời gian (phút)','Gửi lúc','Số máy đã gửi'];
  const lines=[head.map(q).join(',')].concat(v.map((r,i)=>[i+1,r.n,r.l,pctFromPayload(r),bonusOf(pctFromPayload(r)),r.k?'Đã học':'Chưa',r.e,r.c,r.a,r.p,fqOf(r)>=0?fqOf(r):'',fqOf(r)>=0?(fqOf(r)/N_Q*10).toFixed(1):'',r.t,r.r,r.m,fmtTime(r.d),(r.devs||[]).length||1].map(q).join(',')));
  if(!downloads){$('#exportMsg').textContent='Trình xem này không cho tải tệp.';return;}
  try{await downloads.save({filename:'ket-qua-bai5-khtn8'+($('#clsFilter').value?'-'+$('#clsFilter').value:'')+'.csv',data:'﻿'+lines.join('\r\n')});$('#exportMsg').textContent='';}
  catch(e){$('#exportMsg').textContent=e&&e.code==='declined'?'Đã hủy tải.':'Chưa tải được tệp.';}
};
(async()=>{
  if(!window.claude||!claude.use)return;
  const user=await claude.use('user');
  if(!(user&&await user.isOwner()))return;
  $('#teacherTab').hidden=false;paintBonusInputs();
  if((location.hash||'').slice(1)==='giaovien')show('giaovien');
  downloads=await claude.use('downloads');
  if(!downloads)$('#exportCsv').hidden=true;
  db=await claude.use('db');
  if(!db){$('#dbNote').textContent='Lưu ý: lần mở này không kết nối được kho lưu trữ, kết quả chỉ giữ đến khi đóng trang.';renderTeacher();return;}
  db.doc('config/bonus').onSnapshot(sn=>{const d=sn.exists&&sn.data();if(d&&Array.isArray(d.rules)){bonusRules=d.rules.map(r=>({min:+r.min,pts:+r.pts}));paintBonusInputs();renderTeacher();}},()=>{});
  $('#dbNote').textContent='Kết quả được lưu lại cho lần mở sau và chỉ giáo viên xem được.';
  db.collection('results').onSnapshot(snap=>{rows=new Map(snap.docs.map(d=>[d.id,Object.assign({},d.data(),{id:d.id})]));renderTeacher();},()=>{$('#dbNote').textContent='Mất kết nối kho lưu trữ. Hãy tải lại trang để xem dữ liệu mới nhất.';});
  renderTeacher();
})();
})();