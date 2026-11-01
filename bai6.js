
(function(){
  const $=s=>document.querySelector(s);
  const KEY='khtn8-b6-progress-v1';
  let S={name:'',cls:'',kt:false,probs:[],quizFirst:-1,quizBest:-1};
  try{const raw=localStorage.getItem(KEY);if(raw)S=Object.assign(S,JSON.parse(raw));}catch(e){}

  function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}

  const tabs=[...document.querySelectorAll('[role=tab]')];
  tabs.forEach(t=>t.addEventListener('click',()=>{
    tabs.forEach(x=>x.setAttribute('aria-selected',x===t));
    document.querySelectorAll('section.panel').forEach(p=>p.hidden=p.id!=='p-'+t.dataset.tab);
  }));

  $('#goSubmit').onclick=()=>{
    tabs.find(t=>t.dataset.tab==='nopbai').click();
  };

  const PROBS=[
    {q:'Hòa tan hoàn toàn 6,5g Zn vào dung dịch HCl dư. Tính thể tích khí H₂ thu được ở điều kiện chuẩn (25°C, 1 bar).', u:'lít', a:2.479, s:'n_Zn = 6,5 / 65 = 0,1 mol. Zn + 2HCl -> ZnCl2 + H2. n_H2 = 0,1 mol => V = 0,1 * 24,79 = 2,479 lít.'},
    {q:'Nung 50g CaCO₃ thu được bao nhiêu gam CaO biết hiệu suất phản ứng đạt 80%?', u:'g', a:22.4, s:'n_CaCO3 = 50 / 100 = 0,5 mol. CaCO3 -> CaO + CO2. m_CaO lý thuyết = 0,5 * 56 = 28g. Do H=80% => m_CaO thực tế = 28 * 0,8 = 22,4g.'}
  ];

  $('#probs').innerHTML=PROBS.map((p,i)=>`<div class="prob">
    <b>Bài ${i+1}:</b> ${p.q}
    <div class="row" style="margin-top:10px;"><input id="pa${i}"> <span>${p.u}</span> <button class="btn primary" id="pbtn${i}">Kiểm tra</button></div>
    <div id="pm${i}" hidden></div>
  </div>`).join('');

  PROBS.forEach((p,i)=>{
    $(`#pbtn${i}`).onclick=()=>{
      const v=parseFloat($(`#pa${i}`).value.replace(',','.'));
      const out=$(`#pm${i}`);out.hidden=false;
      if(Math.abs(v-p.a)<0.05){
        out.className='msg good';out.innerHTML='Chính xác! Lời giải: '+p.s;
        if(!S.probs.includes(i)){S.probs.push(i);save();}
      } else {
        out.className='msg bad';out.textContent='Chưa đúng, hãy thử kiểm tra lại các bước tính.';
      }
    }
  });

  $('#ktDone').onclick=()=>{S.kt=true;save();$('#ktDone').classList.add('on');$('#ktDone').textContent='✓ Đã học xong phần lý thuyết';};
})();