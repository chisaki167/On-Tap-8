(function(){
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=s=>parseFloat(String(s).trim().replace(',','.'));
const fmtTime=d=>{const t=new Date(d*60000);return t.toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit'})+' '+t.toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'});};

const CONFIGS={
  'KHTN8B5': {salt:'khtn8|bai5|bao-toan-khoi-luong', calcPct: p => Math.round(( (p.k+p.r)/(1+5)*10 + (p.e/12)*30 + (p.p/6)*20 + (Math.max(0, (typeof p.f==='number'&&p.f>=0)?p.f:(p.t>0?p.q:-1))/13)*40 )) },
  'KHTN8B6': {salt:'khtn8|bai6|tinh-theo-pthh', calcPct: p => Math.round(( ((p.k+p.r)/(1+5))*5 + (p.g/4)*20 + (Math.min(p.w,10)/10)*10 + (p.p/6)*25 + (Math.max(0, (typeof p.f==='number'&&p.f>=0)?p.f:(p.t>0?p.q:-1))/13)*40 )) }
};

function fnv(str){let h=0x811c9dc5;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0;}return h.toString(16).padStart(8,'0');}
const b64d=s=>{s=s.replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';return decodeURIComponent(escape(atob(s)));};

function readCode(code){
  for(const prefix of ['KHTN8B5', 'KHTN8B6']){
    if(code.startsWith(prefix+'-')){
      const m=new RegExp('^'+prefix+'-([A-Za-z0-9_-]+)\\.([0-9a-f]{8})$').exec(code);
      if(!m)continue;
      const cfg=CONFIGS[prefix];
      if(fnv(cfg.salt+m[1])===m[2]){
        try{const p=JSON.parse(b64d(m[1]));if(p&&typeof p.n==='string'&&typeof p.l==='string'){p.lesson=prefix; return p;}}catch(e){}
      }
    }
  }
  return null;
}

const STORAGE_KEY='khtn8_teacher_results_v1';
let rows=new Map();
try{const saved=localStorage.getItem(STORAGE_KEY);if(saved){JSON.parse(saved).forEach(r=>rows.set(r.id,r));}}catch(e){}
function saveRows(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify([...rows.values()]));}catch(e){}}

let bonusRules=[{min:90,pts:1},{min:70,pts:0.5}];
const bonusOf=pc=>{for(const r of [...bonusRules].sort((a,b)=>b.min-a.min))if(pc>=r.min)return r.pts;return 0;};
const fmtPts=x=>String(Math.round(x*100)/100).replace('.',',');

function renderTeacher(){
  const sel=$('#clsFilter'),keep=sel.value,classes=[...new Set([...rows.values()].map(r=>r.l))].sort((a,b)=>a.localeCompare(b,'vi'));
  sel.innerHTML='<option value="">Tất cả các lớp</option>'+classes.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');
  sel.value=classes.includes(keep)?keep:'';

  const f=$('#clsFilter').value;
  const v=[...rows.values()].filter(r=>!f||r.l===f).sort((a,b)=>a.l.localeCompare(b.l,'vi')||a.n.localeCompare(b.n,'vi'));
  const n=v.length;

  const fqOf=r=>(typeof r.f==='number'&&r.f>=0)?r.f:(r.t>0?r.q:-1);
  const getPct=r=>{const cfg=CONFIGS[r.lesson]; return cfg?cfg.calcPct(r):0;};

  const quizzed=v.filter(r=>fqOf(r)>=0);
  const qAvg=quizzed.length?quizzed.reduce((a,r)=>a+fqOf(r),0)/quizzed.length/13*10:0;

  $('#tiles').innerHTML=[
    ['Học sinh đã nộp',n],['Mức hoàn thành TB',(n?Math.round(v.reduce((a,r)=>a+getPct(r),0)/n):0)+'%'],
    ['Được cộng điểm',v.filter(r=>bonusOf(getPct(r))>0).length],['Điểm TN trung bình',quizzed.length?qAvg.toFixed(1).replace('.',','):'–']
  ].map(([k,val])=>`<div class="tile"><div class="k">${k}</div><div class="v">${val}</div></div>`).join('');

  if(!n){$('#resTable').innerHTML='<tr><td class="lead" style="padding:20px;">Chưa có kết quả nào. Hãy dán mã học sinh vào ô phía trên để tổng hợp điểm.</td></tr>';return; }

  $('#resTable').innerHTML='<tr><th>#</th><th>Họ tên</th><th>Lớp</th><th>Bài</th><th>Hoàn thành</th><th>Điểm TN</th><th>Điểm cộng</th><th>Tổng kết</th><th>Gửi lúc</th><th></th></tr>'+
    v.map((r,i)=>{
      const pc=getPct(r), cls=pc>=80?'g':pc>=40?'m':'b';
      const fq=fqOf(r);
      const testScore = fq>=0 ? (fq/13*10) : 0;
      const bonus = bonusOf(pc);
      const finalScore = fq>=0 ? Math.min(10, testScore + bonus) : 0;
      const qdStr = fq>=0 ? `${testScore.toFixed(1).replace('.',',')}đ` : '–';
      const finalStr = fq>=0 ? `<b>${finalScore.toFixed(1).replace('.',',')}đ</b>` : '–';

      return `<tr>
        <td>${i+1}</td>
        <td><b>${esc(r.n)}</b></td>
        <td>${esc(r.l)}</td>
        <td><span class="pill">${r.lesson}</span></td>
        <td><span class="minibar"><i style="width:${pc}%"></i></span><span class="pill ${cls}">${pc}%</span></td>
        <td>${qdStr}</td>
        <td class="n">+${fmtPts(bonus)}</td>
        <td class="n" style="color:var(--accent);">${finalStr}</td>
        <td>${fmtTime(r.d)}</td>
        <td><button class="linkbtn" data-del="${esc(r.id)}">Xóa</button></td>
      </tr>`;
    }).join('');
}

$('#clsFilter').addEventListener('change',renderTeacher);

$('#resTable').addEventListener('click',ev=>{
  const b=ev.target.closest('[data-del]');if(!b)return;
  if(confirm('Bạn có chắc muốn xóa kết quả này không?')){
    rows.delete(b.dataset.del);
    saveRows();
    renderTeacher();
  }
});

$('#addCodes').onclick=()=>{
  const txt=$('#pasteBox').value;
  const found=txt.match(/KHTN8B[56]-[A-Za-z0-9_-]+\.[0-9a-f]{8}/g)||[];
  const msg=$('#addMsg');
  if(!found.length){
    msg.className='msg bad';
    msg.textContent='Không tìm thấy mã kết quả hợp lệ nào (phải bắt đầu bằng KHTN8B5- hoặc KHTN8B6-).';
    return;
  }
  let added=0,bad=0;
  for(const code of found){
    const p=readCode(code);
    if(!p){bad++;continue;}
    p.id=p.lesson+'_'+p.l.toLowerCase().replace(/\s+/g,'')+'_'+p.n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]/g,'');
    rows.set(p.id,p);
    added++;
  }
  saveRows();
  msg.className='msg good';
  msg.textContent=`Đã thêm thành công ${added} kết quả${bad?`, bỏ qua ${bad} mã lỗi`:''}.`;
  $('#pasteBox').value='';
  renderTeacher();
};

$('#clearData').onclick=()=>{
  if(confirm('Bạn có muốn xóa toàn bộ danh sách kết quả học sinh không?')){
    rows.clear();
    localStorage.removeItem(STORAGE_KEY);
    renderTeacher();
    const msg=$('#addMsg');
    msg.className='msg good';
    msg.textContent='Đã xóa toàn bộ dữ liệu.';
  }
};

$('#saveBonus').onclick=()=>{
  const out=[];
  for(let i=0;i<3;i++){
    const a=$('#bm'+i).value.trim(),b=$('#bp'+i).value.trim();
    if(!a&&!b)continue;
    const m=num(a),p=num(b);
    if(!isNaN(m)&&!isNaN(p))out.push({min:m,pts:p});
  }
  bonusRules=out;
  renderTeacher();
  const msg=$('#bonusMsg');
  msg.className='msg good';
  msg.textContent='Đã cập nhật mức quy đổi điểm thành công!';
};

$('#exportCsv').onclick=()=>{
  const f=$('#clsFilter').value;
  const v=[...rows.values()].filter(r=>!f||r.l===f);
  if(!v.length){$('#exportMsg').textContent='Không có dữ liệu để tải.';return;}
  const fqOf=r=>(typeof r.f==='number'&&r.f>=0)?r.f:(r.t>0?r.q:-1);
  const getPct=r=>{const cfg=CONFIGS[r.lesson]; return cfg?cfg.calcPct(r):0;};

  const q=s=>'"'+String(s).replace(/"/g,'""')+'"';
  const head=['STT','Họ và tên','Lớp','Bài học','Mức hoàn thành (%)','Điểm trắc nghiệm (/10)','Điểm cộng','Tổng kết','Thời gian (phút)','Gửi lúc'];
  const lines=[head.map(q).join(',')].concat(v.map((r,i)=>{
    const pc=getPct(r),fq=fqOf(r);
    const testScore = fq>=0 ? (fq/13*10) : 0;
    const bonus = bonusOf(pc);
    const finalScore = fq>=0 ? Math.min(10, testScore + bonus) : 0;
    return [i+1, r.n, r.l, r.lesson, pc, fq>=0?testScore.toFixed(1):'', bonus, fq>=0?finalScore.toFixed(1):'', r.m||0, fmtTime(r.d)].map(q).join(',');
  }));

  const blob=new Blob(['\ufeff'+lines.join('\r\n')],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download='bang-diem-khtn8'+(f?'-'+f:'')+'.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  $('#exportMsg').textContent='';
};

renderTeacher();
})();