<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<link rel="icon" type="image/jpeg" href="ava.jpg">
<title>Bài 6 · Tính theo phương trình hóa học - KHTN 8</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Lexend:wght@500;600;700&display=swap">
<link rel="stylesheet" href="bai5.css">
</head>
<body>

<header class="top wrap">
  <div class="eyebrow">Khoa học tự nhiên 8 · Chương I: Phản ứng hóa học</div>
  <h1><span class="lesson">Bài 6.</span> Tính theo phương trình hóa học</h1>
  <div class="law"><span class="chip">n = m / M</span><span class="eq">↔</span><span class="chip">n = V / 24,79</span></div>
  <div class="student" id="studentBar">
    <div class="field name"><label for="stName">Họ và tên học sinh</label><input id="stName" autocomplete="off" placeholder="Ví dụ: Nguyễn Văn An" maxlength="60"></div>
    <div class="field cls"><label for="stClass">Lớp</label><input id="stClass" autocomplete="off" placeholder="8A" maxlength="10"></div>
    <div class="meter"><div class="lbl"><span>Mức hoàn thành</span><b id="pctTop">0%</b></div><div class="bar"><i id="barTop"></i></div></div>
    <button class="btn primary" id="goSubmit">Nộp kết quả →</button>
  </div>
</header>

<nav class="tabs" aria-label="Các phần ôn tập">
  <div class="wrap" role="tablist">
    <button role="tab" data-tab="kienthuc" aria-selected="true">1. Lý thuyết</button>
    <button role="tab" data-tab="tinhtoan" aria-selected="false">2. Bài tập tính toán</button>
    <button role="tab" data-tab="tracnghiem" aria-selected="false">3. Trắc nghiệm</button>
    <button role="tab" data-tab="nopbai" aria-selected="false">4. Nộp kết quả</button>
  </div>
</nav>

<main class="wrap">

<!-- 1. LÝ THUYẾT -->
<section class="panel" id="p-kienthuc">
  <div class="grid2">
    <div class="card">
      <span class="eyebrow">I. Các bước tính theo PTHH</span>
      <h2>Các bước giải bài toán</h2>
      <ol class="steps">
        <li><div><b>Tính số mol chất đã biết</b> từ khối lượng $m$ ($n = \frac{m}{M}$) hoặc thể tích khí $V$ ở $25^\circ\text{C}, 1\text{ bar}$ ($n = \frac{V}{24,79}$).</div></li>
        <li><div><b>Viết và cân bằng PTHH</b> của phản ứng.</div></li>
        <li><div><b>Dựa vào tỉ lệ hệ số PTHH</b> để tìm số mol chất cần tính.</div></li>
        <li><div><b>Tính khối lượng hoặc thể tích</b> chất cần tìm theo yêu cầu đề bài.</div></li>
      </ol>
    </div>
    <div class="card">
      <span class="eyebrow">II. Hiệu suất phản ứng</span>
      <h2>Công thức tính hiệu suất</h2>
      <p>Hiệu suất phản ứng $H$ được tính bằng tỉ lệ giữa lượng sản phẩm thu được thực tế và lượng sản phẩm tính theo lý thuyết:</p>
      <div class="formula">$$H = \frac{m_{\text{thực tế}}}{m_{\text{lý thuyết}}} \times 100\%$$</div>
      <div class="note"><b>Lưu ý:</b> Khối lượng thực tế thu được luôn nhỏ hơn hoặc bằng khối lượng lý thuyết ($H \le 100\%$).</div>
    </div>
  </div>
  <div class="card">
    <button class="btn donebtn" id="ktDone">Em đã học xong phần lý thuyết</button>
  </div>
</section>

<!-- 2. BÀI TẬP TÍNH TOÁN -->
<section class="panel" id="p-tinhtoan" hidden>
  <div class="card">
    <h2>Thực hành tính toán theo PTHH</h2>
    <p class="lead">Nhập đáp số chính xác vào ô trống bên dưới (dùng dấu chấm hoặc phẩy).</p>
    <div id="probs"></div>
  </div>
</section>

<!-- 3. TRẮC NGHIỆM -->
<section class="panel" id="p-tracnghiem" hidden>
  <div class="card">
    <h2>Bài tập Trắc nghiệm</h2>
    <p class="lead">Chọn đáp án đúng nhất cho các câu hỏi sau.</p>
  </div>
  <div class="card" id="quiz"></div>
  <div class="card">
    <div class="score"><button class="btn primary" id="submitQuiz">Nộp bài</button><button class="btn" id="resetQuiz" hidden>Luyện lại</button><span id="scoreOut" class="explain">Chưa nộp bài.</span></div>
  </div>
</section>

<!-- 4. NỘP KẾT QUẢ -->
<section class="panel" id="p-nopbai" hidden>
  <div class="grid2">
    <div class="card">
      <h2>Mức hoàn thành</h2>
      <div class="prog" id="progList"></div>
    </div>
    <div class="card">
      <h2>Gửi mã cho giáo viên</h2>
      <div class="row"><button class="btn primary" id="makeCode">Tạo mã kết quả</button><button class="btn" id="copyCode" hidden>Sao chép mã</button></div>
      <div id="codeMsg" hidden></div>
      <div class="codebox" id="codeBox" hidden></div>
    </div>
  </div>
</section>

</main>

<footer class="wrap">Trang ôn tập KHTN 8 · Bài 6 (Tính theo phương trình hóa học)</footer>

<script>
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
</script>
</body>
</html>