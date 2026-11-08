(function () {
  var KEY = 'chisaki167_settings';

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function write(patch) {
    var s = Object.assign({}, read(), patch);
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {}
    return s;
  }

  function injectCSS() {
    if (document.getElementById('__sf_css')) return;
    var st = document.createElement('style');
    st.id = '__sf_css';
    st.textContent = `
.__sf_btn{width:38px;height:38px;padding:0;border-radius:50%;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);color:#F8FAFC;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 8px 20px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.35);transition:all .3s ease;font-size:1rem;position:fixed;top:calc(16px + env(safe-area-inset-top,0px));right:calc(16px + env(safe-area-inset-right,0px));z-index:100000}
.__sf_btn:hover{background:rgba(255,255,255,.2);transform:translateY(-2px) rotate(30deg)}
.__sf_btn.active{background:#3B82F6;border-color:#3B82F6;color:#fff;transform:translateY(-2px) rotate(30deg)}
.__sf_backdrop{position:fixed;inset:0;z-index:100001;background:rgba(0,0,0,.45);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);opacity:0;pointer-events:none;transition:opacity .3s ease}
.__sf_backdrop.open{opacity:1;pointer-events:auto}
.__sf_panel{position:fixed;top:0;left:0;width:300px;max-width:85vw;height:100vh;height:100dvh;z-index:100002;display:flex;flex-direction:column;gap:16px;padding:20px;padding-top:calc(20px + env(safe-area-inset-top,0px));padding-bottom:calc(20px + env(safe-area-inset-bottom,0px));background:rgba(15,23,42,.92);border-right:1px solid rgba(255,255,255,.16);box-shadow:8px 0 40px rgba(0,0,0,.5);-webkit-backdrop-filter:blur(24px) saturate(140%);backdrop-filter:blur(24px) saturate(140%);transform:translateX(-100%);transition:transform .4s cubic-bezier(.34,1.2,.64,1);overflow-y:auto;color:#F8FAFC;font-family:system-ui,-apple-system,sans-serif}
.__sf_panel.open{transform:translateX(0)}
.__sf_head{display:flex;align-items:center;justify-content:space-between;padding-bottom:14px;border-bottom:1px solid rgba(255,255,255,.1)}
.__sf_head h3{font-size:1rem;display:flex;align-items:center;gap:8px;margin:0}
.__sf_head h3 i{color:#3B82F6}
.__sf_close{background:transparent;border:none;color:#94A3B8;width:30px;height:30px;padding:0;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1rem;transition:all .2s ease}
.__sf_close:hover{background:rgba(255,255,255,.1);color:#F8FAFC}
.__sf_body{display:flex;flex-direction:column;gap:10px;flex:1}
.__sf_row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:14px;transition:background .2s ease,border-color .2s ease}
.__sf_row:hover{background:rgba(255,255,255,.08)}
.__sf_lbl{display:flex;align-items:center;gap:10px;font-size:.88rem;font-weight:600}
.__sf_lbl i{width:20px;text-align:center;color:#3B82F6}
.__sf_sw{position:relative;width:44px;height:24px;padding:0;border-radius:999px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.22);cursor:pointer;flex-shrink:0;transition:background .3s ease,border-color .3s ease}
.__sf_sw::after{content:"";position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 2px 6px rgba(0,0,0,.35);transition:transform .3s cubic-bezier(.34,1.4,.64,1)}
.__sf_sw.active{background:#3B82F6;border-color:#3B82F6}
.__sf_sw.active::after{transform:translateX(20px)}
.__sf_act{width:100%;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 14px;border-radius:14px;background:rgba(59,130,246,.15);border:1px solid #3B82F6;color:#3B82F6;font-size:.85rem;font-weight:600;cursor:pointer;transition:all .2s ease}
.__sf_act:hover{background:#3B82F6;color:#fff}
.__sf_ft{padding-top:14px;border-top:1px solid rgba(255,255,255,.1);text-align:center;font-size:.72rem;color:#94A3B8}
body.glass-disabled .card,body.glass-disabled .lesson-card,body.glass-disabled .option-box,body.glass-disabled .api-key-box,body.glass-disabled .quick-input-area,body.glass-disabled .conversation-box,body.glass-disabled .math-box,body.glass-disabled .avatar{rotate:none!important;will-change:auto!important}
body.light-mode .__sf_btn{background:rgba(255,255,255,.9);border-color:rgba(15,23,42,.12);color:#0f172a;box-shadow:0 8px 20px rgba(15,23,42,.12),inset 0 1px 0 rgba(255,255,255,.9)}
body.light-mode .__sf_btn:hover{background:#fff}
body.light-mode .__sf_btn.active{background:#3B82F6;border-color:#3B82F6;color:#fff}
body.light-mode .__sf_backdrop{background:rgba(15,23,42,.35)}
body.light-mode .__sf_panel{background:rgba(250,252,255,.96);border-right-color:rgba(15,23,42,.1);color:#0f172a;box-shadow:8px 0 40px rgba(15,23,42,.15)}
body.light-mode .__sf_head{border-bottom-color:rgba(15,23,42,.1)}
body.light-mode .__sf_close{color:#64748b}
body.light-mode .__sf_close:hover{background:rgba(15,23,42,.08);color:#0f172a}
body.light-mode .__sf_row{background:rgba(15,23,42,.04);border-color:rgba(15,23,42,.08)}
body.light-mode .__sf_row:hover{background:rgba(15,23,42,.06)}
body.light-mode .__sf_sw{background:rgba(15,23,42,.15);border-color:rgba(15,23,42,.2)}
body.light-mode .__sf_ft{border-top-color:rgba(15,23,42,.1);color:#64748b}
@media (max-width:480px){.__sf_panel{width:90vw;max-width:90vw;padding:16px;padding-top:calc(16px + env(safe-area-inset-top,0px));padding-bottom:calc(16px + env(safe-area-inset-bottom,0px));gap:12px}.__sf_row{padding:11px 12px}.__sf_lbl{font-size:.84rem}}
@media (max-width:400px){.__sf_panel{width:96vw;max-width:96vw}.__sf_sw{width:40px;height:22px}.__sf_sw::after{width:16px;height:16px}.__sf_sw.active::after{transform:translateX(18px)}}
@media (max-height:520px) and (orientation:landscape){.__sf_panel{width:55vw;max-width:55vw;padding:14px;padding-top:calc(14px + env(safe-area-inset-top,0px));padding-bottom:calc(14px + env(safe-area-inset-bottom,0px));gap:8px}.__sf_row{padding:8px 10px}.__sf_body{gap:8px}}
@media (hover:none) and (pointer:coarse){.__sf_btn{min-width:40px;min-height:40px}.__sf_sw{min-width:46px;min-height:26px}}

#auth-gate {
  position: fixed;
  inset: 0;
  background: rgba(9, 13, 22, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 999999;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #F8FAFC;
  font-family: system-ui, -apple-system, sans-serif;
  text-align: center;
  padding: 20px;
}
body.light-mode #auth-gate {
  background: rgba(238, 242, 247, 0.85);
  color: #0f172a;
}
.auth-title {
  font-size: 1.5rem;
  margin-bottom: 24px;
  font-weight: 700;
}
.auth-desc {
  font-size: 0.95rem;
  margin-bottom: 20px;
  max-width: 300px;
  line-height: 1.5;
  color: var(--muted);
}
.auth-input {
  width: 260px;
  padding: 12px;
  margin: 6px 0;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.1);
  color: #fff;
  font-size: 0.95rem;
  outline: none;
  font-family: system-ui, -apple-system, sans-serif;
}
.auth-input::placeholder { color: rgba(255,255,255,0.6); }
body.light-mode .auth-input {
  background: rgba(255,255,255,0.8);
  color: #0f172a;
  border-color: rgba(15,23,42,0.1);
}
body.light-mode .auth-input::placeholder { color: rgba(15,23,42,0.5); }

.auth-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 260px;
  padding: 14px;
  margin: 8px 0;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.1);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.auth-btn:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-2px);
}
.auth-btn.google { background: rgba(219, 68, 55, 0.15); border-color: rgba(219, 68, 55, 0.3); }
.auth-btn.google:hover { background: rgba(219, 68, 55, 0.3); }
.auth-btn.github { background: rgba(51, 51, 51, 0.5); border-color: rgba(255, 255, 255, 0.2); }
.auth-btn.github:hover { background: rgba(51, 51, 51, 0.8); }
.auth-btn.email {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  color: #60A5FA;
}
.auth-btn.email:hover { background: rgba(59, 130, 246, 0.4); color: #fff; }

body.light-mode .auth-btn { color: #0f172a; border-color: rgba(15,23,42,0.1); background: rgba(255,255,255,0.8); }
body.light-mode .auth-btn:hover { background: #fff; }
body.light-mode .auth-btn.email { color: #2563eb; }
body.light-mode .auth-btn.email:hover { color: #fff; }

.auth-divider {
  width: 260px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px 0;
  color: rgba(255,255,255,0.5);
  font-size: 0.85rem;
}
.auth-divider::before, .auth-divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}
.auth-divider::before { margin-right: 10px; }
.auth-divider::after { margin-left: 10px; }
body.light-mode .auth-divider { color: rgba(15,23,42,0.5); }
body.light-mode .auth-divider::before, body.light-mode .auth-divider::after { border-bottom-color: rgba(15,23,42,0.2); }

#logoutBtn {
  display: none;
  position: fixed;
  top: calc(16px + env(safe-area-inset-top, 0px));
  right: calc(60px + env(safe-area-inset-right, 0px));
  z-index: 100000;
  padding: 8px 14px;
  border-radius: 99px;
  background: rgba(239, 68, 68, 0.2);
  color: #EF4444;
  border: 1px solid #EF4444;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
  font-family: system-ui, -apple-system, sans-serif;
}
#logoutBtn:hover { background: #EF4444; color: #fff; }
`;
    document.head.appendChild(st);
  }

  function applySettings() {
    var s = read();
    var bg = s.bgEnabled === true;
    var glass = s.glassEnabled !== false;
    var motion = s.motionEnabled !== false;
    var theme = s.theme === 'light' ? 'light' : 'dark';

    document.body.classList.toggle('light-mode', theme === 'light');

    var v = document.getElementById('bgVideo');
    var o = document.getElementById('bgOverlay');
    var b = document.getElementById('bgToggleBtn');

    if (v && o) {
      v.classList.toggle('hidden', !bg);
      o.classList.toggle('hidden', !bg);
      document.body.classList.toggle('background-enabled', bg);
      if (bg) {
        v.muted = false; v.volume = 1.0;
        var p = v.play();
        if (p && p.catch) p.catch(function () {
          v.muted = true;
          var p2 = v.play();
          if (p2 && p2.catch) p2.catch(function () {});
        });
      } else { try { v.pause(); } catch (e) {} }
    }
    if (b) b.innerHTML = bg ? '🎬 Nền: Bật' : '🎬 Nền: Tắt';
    document.body.classList.toggle('glass-disabled', !glass);
    document.body.classList.toggle('no-effects', !motion);

    var bgSw = document.getElementById('__sf_bg');
    if (bgSw) { bgSw.classList.toggle('active', bg); bgSw.setAttribute('aria-checked', String(bg)); }
    var glSw = document.getElementById('__sf_glass');
    if (glSw) { glSw.classList.toggle('active', glass); glSw.setAttribute('aria-checked', String(glass)); }
    var mtSw = document.getElementById('__sf_motion');
    if (mtSw) { mtSw.classList.toggle('active', motion); mtSw.setAttribute('aria-checked', String(motion)); }
    var thSw = document.getElementById('__sf_theme');
    if (thSw) { thSw.classList.toggle('active', theme === 'light'); thSw.setAttribute('aria-checked', String(theme === 'light')); }
    var thIcon = document.getElementById('__sf_theme_icon');
    if (thIcon) thIcon.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }

  function toggleBG() { var s = read(); write({ bgEnabled: !(s.bgEnabled === true) }); applySettings(); }
  function toggleGlass() { var s = read(); write({ glassEnabled: s.glassEnabled === false }); applySettings(); }
  function toggleMotion() { var s = read(); write({ motionEnabled: s.motionEnabled === false }); applySettings(); }
  function toggleTheme() { var s = read(); write({ theme: s.theme === 'light' ? 'dark' : 'light' }); applySettings(); }
  
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(function (err) { alert('Không thể bật toàn màn hình: ' + err.message); });
    } else if (document.exitFullscreen) { document.exitFullscreen(); }
  }

  function togglePanel(force) {
    var p = document.getElementById('__sf_panel'), bd = document.getElementById('__sf_backdrop'), bt = document.getElementById('__sf_btn');
    if (!p) return;
    var open = typeof force === 'boolean' ? force : !p.classList.contains('open');
    p.classList.toggle('open', open);
    p.setAttribute('aria-hidden', String(!open));
    if (bd) bd.classList.toggle('open', open);
    if (bt) bt.classList.toggle('active', open);
  }

  function initLiquidGlassTilt() {
    if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var selector = '.card, .lesson-card, .option-box, .api-key-box, .quick-input-area, .conversation-box, .math-box, .avatar, [class*="card"], [class*="box"], [style*="backdrop-filter"]';
    var cards = document.querySelectorAll(selector);
    var activeCard = null;
    var rafId = null;

    cards.forEach(function(card) {
      card._state = { tx: 0, ty: 0, cx: 0, cy: 0, lx: 50, ly: 50, tlx: 50, tly: 50, active: false };
    });

    function lerp(start, end, amt) { return (1 - amt) * start + amt * end; }

    function update() {
      var needsAnotherFrame = false;

      cards.forEach(function(card) {
        var s = card._state;
        if (!s.active && Math.abs(s.cx) < 0.05 && Math.abs(s.cy) < 0.05) return;

        s.cx = lerp(s.cx, s.tx, 0.12);
        s.cy = lerp(s.cy, s.ty, 0.12);
        s.lx = lerp(s.lx, s.tlx, 0.15);
        s.ly = lerp(s.ly, s.tly, 0.15);

        card.style.setProperty('--glass-tilt-x', s.cx.toFixed(2) + 'deg');
        card.style.setProperty('--glass-tilt-y', s.cy.toFixed(2) + 'deg');
        card.style.setProperty('--mouse-x', s.lx.toFixed(2) + '%');
        card.style.setProperty('--mouse-y', s.ly.toFixed(2) + '%');

        if (Math.abs(s.cx - s.tx) > 0.05 || Math.abs(s.cy - s.ty) > 0.05) {
          needsAnotherFrame = true;
        }
      });

      if (needsAnotherFrame) {
        rafId = requestAnimationFrame(update);
      } else {
        rafId = null;
      }
    }

    function triggerUpdate() {
      if (!rafId) rafId = requestAnimationFrame(update);
    }

    document.addEventListener('pointermove', function(e) {
      if (document.body.classList.contains('glass-disabled')) return;
      if (document.body.classList.contains('no-effects')) return;
      
      var card = e.target.closest(selector);

      if (activeCard && activeCard !== card) {
        activeCard._state.active = false;
        activeCard._state.tx = 0;
        activeCard._state.ty = 0;
      }
      activeCard = card;
      if (!activeCard) return;

      var rect = activeCard.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      var x = (e.clientX - rect.left) / rect.width;
      var y = (e.clientY - rect.top) / rect.height;
      var s = activeCard._state;

      s.active = true;
      s.tx = Math.max(-1.5, Math.min(1.5, (x - 0.5) * 3));
      s.ty = Math.max(-1.5, Math.min(1.5, (y - 0.5) * -3));
      s.tlx = x * 100;
      s.tly = y * 100;

      triggerUpdate();
    }, { passive: true });

    document.addEventListener('pointerout', function(e) {
      if (!activeCard || activeCard.contains(e.relatedTarget)) return;
      activeCard._state.active = false;
      activeCard._state.tx = 0;
      activeCard._state.ty = 0;
      activeCard = null;
      triggerUpdate();
    }, { passive: true });

    window.addEventListener('blur', function() {
      if (activeCard) {
        activeCard._state.active = false;
        activeCard._state.tx = 0;
        activeCard._state.ty = 0;
        activeCard = null;
      }
      triggerUpdate();
    });
  }

  function injectUI() {
    if (document.getElementById('__sf_btn')) return;
    injectCSS();
    var oldBg = document.getElementById('bgToggleBtn'); if (oldBg) oldBg.style.display = 'none';
    var oldFs = document.getElementById('fullscreenBtn'); if (oldFs) oldFs.style.display = 'none';

    var btn = document.createElement('button');
    btn.id = '__sf_btn'; btn.className = '__sf_btn'; btn.type = 'button';
    btn.innerHTML = '<i class="fa-solid fa-gear"></i>';
    btn.addEventListener('click', function () { togglePanel(); });
    document.body.appendChild(btn);

    var bd = document.createElement('div');
    bd.id = '__sf_backdrop'; bd.className = '__sf_backdrop';
    bd.addEventListener('click', function () { togglePanel(false); });
    document.body.appendChild(bd);

    var panel = document.createElement('aside');
    panel.id = '__sf_panel'; panel.className = '__sf_panel'; panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML =
      '<div class="__sf_head"><h3><i class="fa-solid fa-sliders"></i> Cài đặt</h3>' +
      '<button class="__sf_close" type="button" aria-label="Đóng"><i class="fa-solid fa-xmark"></i></button></div>' +
      '<div class="__sf_body">' +
      '<div class="__sf_row"><div class="__sf_lbl"><i id="__sf_theme_icon" class="fa-solid fa-moon"></i><span>Giao diện sáng</span></div>' +
      '<button class="__sf_sw" id="__sf_theme" type="button" role="switch" aria-checked="false"></button></div>' +
      '<div class="__sf_row"><div class="__sf_lbl"><i class="fa-solid fa-film"></i><span>Nền video</span></div>' +
      '<button class="__sf_sw" id="__sf_bg" type="button" role="switch" aria-checked="false"></button></div>' +
      '<div class="__sf_row"><div class="__sf_lbl"><i class="fa-solid fa-wand-magic-sparkles"></i><span>Hiệu ứng kính</span></div>' +
      '<button class="__sf_sw" id="__sf_glass" type="button" role="switch" aria-checked="true"></button></div>' +
      '<div class="__sf_row"><div class="__sf_lbl"><i class="fa-solid fa-bolt"></i><span>Hiệu ứng chuyển động</span></div>' +
      '<button class="__sf_sw" id="__sf_motion" type="button" role="switch" aria-checked="true"></button></div>' +
      '<button class="__sf_act" id="__sf_fs" type="button"><i class="fa-solid fa-expand"></i><span>Bật toàn màn hình</span></button>' +
      '</div><div class="__sf_ft">chisaki167 · 2026</div>';
    document.body.appendChild(panel);

    panel.querySelector('.__sf_close').addEventListener('click', function () { togglePanel(false); });
    panel.querySelector('#__sf_theme').addEventListener('click', toggleTheme);
    panel.querySelector('#__sf_bg').addEventListener('click', toggleBG);
    panel.querySelector('#__sf_glass').addEventListener('click', toggleGlass);
    panel.querySelector('#__sf_motion').addEventListener('click', toggleMotion);
    panel.querySelector('#__sf_fs').addEventListener('click', toggleFullscreen);

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') togglePanel(false); });
    document.addEventListener('fullscreenchange', function () {
      var sp = panel.querySelector('#__sf_fs span'), ic = panel.querySelector('#__sf_fs i');
      if (sp) sp.textContent = document.fullscreenElement ? 'Thoát toàn màn hình' : 'Bật toàn màn hình';
      if (ic) ic.className = document.fullscreenElement ? 'fa-solid fa-compress' : 'fa-solid fa-expand';
    });
  }

  function injectAuthUI() {
    if (document.getElementById('auth-gate')) return;

    var gate = document.createElement('div');
    gate.id = 'auth-gate';
    gate.innerHTML = `
      <div id="auth-form-view" style="display: flex; flex-direction: column; align-items: center;">
        <div class="auth-title">Vui lòng đăng nhập để tiếp tục</div>
        <input type="email" id="auth-email" class="auth-input" placeholder="Email...">
        <input type="password" id="auth-password" class="auth-input" placeholder="Mật khẩu...">
        <div style="display:flex; gap:10px; width:260px; margin-bottom: 12px;">
          <button class="auth-btn email" style="width:100%; margin:0;" onclick="loginEmail()">Đăng nhập</button>
          <button class="auth-btn email" style="width:100%; margin:0; background:rgba(255,255,255,0.05);" onclick="registerEmail()">Đăng ký</button>
        </div>
        <div class="auth-divider">hoặc</div>
        <button class="auth-btn google" onclick="loginGoogle()"><i class="fa-brands fa-google" style="color:#DB4437"></i> Đăng nhập bằng Google</button>
        <button class="auth-btn github" onclick="loginGithub()"><i class="fa-brands fa-github"></i> Đăng nhập bằng GitHub</button>
      </div>

      <div id="auth-verify-view" style="display: none; flex-direction: column; align-items: center;">
        <div class="auth-title">Xác thực Email</div>
        <div class="auth-desc">Một liên kết xác thực đã được gửi đến <strong id="verify-email-text"></strong>. Vui lòng kiểm tra hộp thư (kể cả mục Spam) và bấm vào liên kết để kích hoạt tài khoản.</div>
        <button class="auth-btn email" onclick="resendVerificationEmail()">Gửi lại email xác thực</button>
        <button class="auth-btn" onclick="checkVerificationStatus()">Tôi đã xác thực xong</button>
        <button class="auth-btn" style="background:transparent; border:none; color: #EF4444; margin-top:10px;" onclick="logout()">Đăng xuất</button>
      </div>
    `;
    document.body.appendChild(gate);

    var logoutBtn = document.createElement('button');
    logoutBtn.id = 'logoutBtn';
    logoutBtn.textContent = 'Đăng xuất';
    logoutBtn.onclick = function() { window.logout(); };
    document.body.appendChild(logoutBtn);

    var firebaseConfig = {
      apiKey: "AIzaSyBKjpiV_gqTE-j8cBgBX0g-7zFClQMd33I",
      authDomain: "chisaki167-72a4c.firebaseapp.com",
      projectId: "chisaki167-72a4c",
      storageBucket: "chisaki167-72a4c.firebasestorage.app",
      messagingSenderId: "354655646874",
      appId: "1:354655646874:web:07f1347296a52fc723db23",
      measurementId: "G-9QQXRDRHYF"
    };

    var script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
      import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

      const firebaseConfig = ${JSON.stringify(firebaseConfig)};
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);

      window.loginGoogle = () => {
        signInWithPopup(auth, new GoogleAuthProvider()).catch(err => {
          if (err.code === 'auth/account-exists-with-different-credential') {
            alert("Email này đã được đăng ký bằng phương thức khác (ví dụ: Email/Mật khẩu hoặc GitHub). Vui lòng đăng nhập bằng phương thức đó!");
          } else {
            alert(err.message);
          }
        });
      };
      
      window.loginGithub = () => {
        signInWithPopup(auth, new GithubAuthProvider()).catch(err => {
          if (err.code === 'auth/account-exists-with-different-credential') {
            alert("Email này đã được đăng ký bằng phương thức khác (ví dụ: Email/Mật khẩu hoặc Google). Vui lòng đăng nhập bằng phương thức đó!");
          } else {
            alert(err.message);
          }
        });
      };
      
      window.loginEmail = () => {
        const email = document.getElementById('auth-email').value;
        const password = document.getElementById('auth-password').value;
        if (!email || !password) return alert('Vui lòng nhập đầy đủ Email và Mật khẩu!');
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            if (!userCredential.user.emailVerified) {
              sendEmailVerification(userCredential.user).then(() => {
                alert("Đăng nhập thành công nhưng tài khoản chưa xác thực. Hệ thống đã tự động gửi email xác thực, vui lòng kiểm tra hộp thư!");
              }).catch(err => console.log("Lỗi gửi mail:", err));
            }
          })
          .catch(err => {
            if (err.code === 'auth/invalid-credential') {
              alert("Sai email hoặc mật khẩu! Vui lòng kiểm tra lại.");
            } else {
              alert("Lỗi đăng nhập: " + err.message);
            }
          });
      };

      window.registerEmail = () => {
        const email = document.getElementById('auth-email').value;
        const password = document.getElementById('auth-password').value;
        if (!email || !password) return alert('Vui lòng nhập đầy đủ Email và Mật khẩu!');
        if (password.length < 6) return alert('Mật khẩu phải có ít nhất 6 ký tự!');
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            sendEmailVerification(userCredential.user);
            alert("Đăng ký thành công! Vui lòng kiểm tra email để xác thực tài khoản.");
          })
          .catch(err => {
            if (err.code === 'auth/email-already-in-use') {
              alert("Email này đã được đăng ký rồi. Vui lòng chuyển sang nút 'Đăng nhập' hoặc sử dụng email khác.");
            } else {
              alert("Lỗi đăng ký: " + err.message);
            }
          });
      };

      window.resendVerificationEmail = () => {
        if (auth.currentUser) {
          sendEmailVerification(auth.currentUser)
            .then(() => alert("Đã gửi lại email xác thực!"))
            .catch(err => alert("Lỗi: " + err.message));
        }
      };

      window.checkVerificationStatus = () => {
        if (auth.currentUser) {
          auth.currentUser.reload().then(() => {
            if (auth.currentUser.emailVerified) {
              document.getElementById('auth-gate').style.display = 'none';
              document.getElementById('logoutBtn').style.display = 'block';
              document.body.style.overflow = '';
            } else {
              alert("Tài khoản chưa được xác thực. Vui lòng kiểm tra lại email.");
            }
          });
        }
      };

      window.logout = () => signOut(auth);

      onAuthStateChanged(auth, (user) => {
        const gate = document.getElementById('auth-gate');
        const logoutBtn = document.getElementById('logoutBtn');
        const formView = document.getElementById('auth-form-view');
        const verifyView = document.getElementById('auth-verify-view');
        
        if (user) {
          const isPasswordUser = user.providerData.some(p => p.providerId === 'password');
          
          if (isPasswordUser && !user.emailVerified) {
            gate.style.display = 'flex';
            formView.style.display = 'none';
            verifyView.style.display = 'flex';
            document.getElementById('verify-email-text').textContent = user.email;
            logoutBtn.style.display = 'none';
            document.body.style.overflow = 'hidden';
          } else {
            gate.style.display = 'none';
            logoutBtn.style.display = 'block';
            document.body.style.overflow = '';
          }
        } else {
          gate.style.display = 'flex';
          formView.style.display = 'flex';
          verifyView.style.display = 'none';
          logoutBtn.style.display = 'none';
          document.body.style.overflow = 'hidden';
        }
      });
    `;
    document.body.appendChild(script);
  }

  window.toggleSettingsPanel = togglePanel;
  window.toggleBackground = toggleBG;
  window.toggleGlass = toggleGlass;
  window.toggleMotion = toggleMotion;
  window.toggleTheme = toggleTheme;
  window.toggleFullscreen = toggleFullscreen;
  window.syncBackgroundTheme = applySettings;

  function boot() {
    injectUI();
    applySettings();
    initLiquidGlassTilt();
    injectAuthUI();
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();