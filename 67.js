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
      .__sf_btn{width:38px;height:38px;padding:0;border-radius:50%;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);color:#F8FAFC;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 8px 20px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.35);transition:all .3s ease;font-size:1rem;position:fixed;top:16px;right:16px;z-index:100000}
      .__sf_btn:hover{background:rgba(255,255,255,.2);transform:translateY(-2px) rotate(30deg)}
      .__sf_btn.active{background:#3B82F6;border-color:#3B82F6;color:#fff;transform:translateY(-2px) rotate(30deg)}
      .__sf_backdrop{position:fixed;inset:0;z-index:100001;background:rgba(0,0,0,.45);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);opacity:0;pointer-events:none;transition:opacity .3s ease}
      .__sf_backdrop.open{opacity:1;pointer-events:auto}
      .__sf_panel{position:fixed;top:0;left:0;width:300px;max-width:85vw;height:100vh;z-index:100002;display:flex;flex-direction:column;gap:16px;padding:20px;background:rgba(15,23,42,.92);border-right:1px solid rgba(255,255,255,.16);box-shadow:8px 0 40px rgba(0,0,0,.5);-webkit-backdrop-filter:blur(24px) saturate(140%);backdrop-filter:blur(24px) saturate(140%);transform:translateX(-100%);transition:transform .4s cubic-bezier(.34,1.2,.64,1);overflow-y:auto;color:#F8FAFC;font-family:system-ui,-apple-system,sans-serif}
      .__sf_panel.open{transform:translateX(0)}
      .__sf_head{display:flex;align-items:center;justify-content:space-between;padding-bottom:14px;border-bottom:1px solid rgba(255,255,255,.1)}
      .__sf_head h3{font-size:1rem;display:flex;align-items:center;gap:8px;margin:0}
      .__sf_head h3 i{color:#3B82F6}
      .__sf_close{background:transparent;border:none;color:#94A3B8;width:30px;height:30px;padding:0;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1rem}
      .__sf_close:hover{background:rgba(255,255,255,.1);color:#F8FAFC}
      .__sf_body{display:flex;flex-direction:column;gap:10px;flex:1}
      .__sf_row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:14px}
      .__sf_lbl{display:flex;align-items:center;gap:10px;font-size:.88rem;font-weight:600}
      .__sf_lbl i{width:20px;text-align:center;color:#3B82F6}
      .__sf_sw{position:relative;width:44px;height:24px;padding:0;border-radius:999px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.22);cursor:pointer;flex-shrink:0;transition:background .3s ease,border-color .3s ease}
      .__sf_sw::after{content:'';position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 2px 6px rgba(0,0,0,.35);transition:transform .3s cubic-bezier(.34,1.4,.64,1)}
      .__sf_sw.active{background:#3B82F6;border-color:#3B82F6}
      .__sf_sw.active::after{transform:translateX(20px)}
      .__sf_act{width:100%;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 14px;border-radius:14px;background:rgba(59,130,246,.15);border:1px solid #3B82F6;color:#3B82F6;font-size:.85rem;font-weight:600;cursor:pointer;transition:all .2s ease}
      .__sf_act:hover{background:#3B82F6;color:#fff}
      .__sf_ft{padding-top:14px;border-top:1px solid rgba(255,255,255,.1);text-align:center;font-size:.72rem;color:#94A3B8}
      body.glass-disabled .card,body.glass-disabled .lesson-card,body.glass-disabled .option-box,body.glass-disabled .api-key-box,body.glass-disabled .quick-input-area,body.glass-disabled .conversation-box,body.glass-disabled .math-box{transform:none!important;will-change:auto!important}
    `;
    document.head.appendChild(st);
  }

  function applySettings() {
    var s = read();
    var bg = s.bgEnabled === true;
    var glass = s.glassEnabled !== false;

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

    var bgSw = document.getElementById('__sf_bg');
    if (bgSw) { bgSw.classList.toggle('active', bg); bgSw.setAttribute('aria-checked', String(bg)); }
    var glSw = document.getElementById('__sf_glass');
    if (glSw) { glSw.classList.toggle('active', glass); glSw.setAttribute('aria-checked', String(glass)); }
  }

  function toggleBG() {
    var s = read();
    write({ bgEnabled: !(s.bgEnabled === true) });
    applySettings();
  }

  function toggleGlass() {
    var s = read();
    write({ glassEnabled: s.glassEnabled === false });
    applySettings();
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(function (err) {
        alert('Không thể bật chế độ toàn màn hình: ' + err.message);
      });
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  function togglePanel(force) {
    var p = document.getElementById('__sf_panel');
    var bd = document.getElementById('__sf_backdrop');
    var bt = document.getElementById('__sf_btn');
    if (!p) return;
    var open = typeof force === 'boolean' ? force : !p.classList.contains('open');
    p.classList.toggle('open', open);
    p.setAttribute('aria-hidden', String(!open));
    if (bd) bd.classList.toggle('open', open);
    if (bt) bt.classList.toggle('active', open);
  }

  function injectUI() {
    if (document.getElementById('__sf_btn')) return;
    injectCSS();

    var oldBg = document.getElementById('bgToggleBtn');
    if (oldBg) oldBg.style.display = 'none';
    var oldFs = document.getElementById('fullscreenBtn');
    if (oldFs) oldFs.style.display = 'none';

    var btn = document.createElement('button');
    btn.id = '__sf_btn';
    btn.className = '__sf_btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Mở cài đặt');
    btn.innerHTML = '<i class="fa-solid fa-gear"></i>';
    btn.addEventListener('click', function () { togglePanel(); });
    document.body.appendChild(btn);

    var bd = document.createElement('div');
    bd.id = '__sf_backdrop';
    bd.className = '__sf_backdrop';
    bd.addEventListener('click', function () { togglePanel(false); });
    document.body.appendChild(bd);

    var panel = document.createElement('aside');
    panel.id = '__sf_panel';
    panel.className = '__sf_panel';
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML =
      '<div class="__sf_head"><h3><i class="fa-solid fa-sliders"></i> Cài đặt</h3>' +
      '<button class="__sf_close" type="button" aria-label="Đóng"><i class="fa-solid fa-xmark"></i></button></div>' +
      '<div class="__sf_body">' +
      '<div class="__sf_row"><div class="__sf_lbl"><i class="fa-solid fa-film"></i><span>Nền video</span></div>' +
      '<button class="__sf_sw" id="__sf_bg" type="button" role="switch" aria-checked="false"></button></div>' +
      '<div class="__sf_row"><div class="__sf_lbl"><i class="fa-solid fa-wand-magic-sparkles"></i><span>Hiệu ứng kính</span></div>' +
      '<button class="__sf_sw" id="__sf_glass" type="button" role="switch" aria-checked="true"></button></div>' +
      '<button class="__sf_act" id="__sf_fs" type="button"><i class="fa-solid fa-expand"></i><span>Bật toàn màn hình</span></button>' +
      '</div>' +
      '<div class="__sf_ft">chisaki167 · 2026</div>';
    document.body.appendChild(panel);

    panel.querySelector('.__sf_close').addEventListener('click', function () { togglePanel(false); });
    panel.querySelector('#__sf_bg').addEventListener('click', toggleBG);
    panel.querySelector('#__sf_glass').addEventListener('click', toggleGlass);
    panel.querySelector('#__sf_fs').addEventListener('click', toggleFullscreen);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') togglePanel(false);
    });

    document.addEventListener('fullscreenchange', function () {
      var s = panel.querySelector('#__sf_fs span');
      var ic = panel.querySelector('#__sf_fs i');
      if (s) s.textContent = document.fullscreenElement ? 'Thoát toàn màn hình' : 'Bật toàn màn hình';
      if (ic) ic.className = document.fullscreenElement ? 'fa-solid fa-compress' : 'fa-solid fa-expand';
    });
  }

  window.toggleSettingsPanel = togglePanel;
  window.toggleGlass = toggleGlass;
  window.toggleFullscreen = toggleFullscreen;

  function boot() {
    injectUI();
    applySettings();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();

function syncBackgroundTheme() {
  const v = document.getElementById('bgVideo');
  const o = document.getElementById('bgOverlay');
  const b = document.getElementById('bgToggleBtn');

  if (!v || !o || !b) return;

  const enabled = !v.classList.contains('hidden');
  document.body.classList.toggle('background-enabled', enabled);
  o.classList.toggle('hidden', !enabled);
  b.innerHTML = enabled ? '🎬 Nền: Bật' : '🎬 Nền: Tắt';
  if (!enabled) v.pause();
}

function toggleBackground() {
  const v = document.getElementById('bgVideo');
  const o = document.getElementById('bgOverlay');
  const b = document.getElementById('bgToggleBtn');

  if (!v || !o || !b) return;

  const enabled = v.classList.contains('hidden');
  v.classList.toggle('hidden', !enabled);
  o.classList.toggle('hidden', !enabled);
  document.body.classList.toggle('background-enabled', enabled);

  if (enabled) {
    v.muted = false;
    v.volume = 1.0;
    const playPromise = v.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(err => console.log('Trình duyệt chặn phát tự động:', err));
    }
    b.innerHTML = '🎬 Nền: Bật';
  } else {
    v.pause();
    b.innerHTML = '🎬 Nền: Tắt';
  }
}

function initLiquidGlassTilt() {
  if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const selector = '.card, .lesson-card, .option-box, .api-key-box, .quick-input-area, .conversation-box, .math-box';
  let activeCard = null;
  let frame = 0;
  let pointerX = 0;
  let pointerY = 0;

  function resetCard(card) {
    if (!card) return;
    card.style.setProperty('--glass-tilt-x', '0deg');
    card.style.setProperty('--glass-tilt-y', '0deg');
  }

  document.addEventListener('pointermove', event => {
    const card = event.target.closest(selector);
    if (card !== activeCard) {
      resetCard(activeCard);
      activeCard = card;
    }
    if (!activeCard) return;

    pointerX = event.clientX;
    pointerY = event.clientY;
    if (frame) return;

    frame = requestAnimationFrame(() => {
      frame = 0;
      if (!activeCard) return;
      const rect = activeCard.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = (pointerX - rect.left) / rect.width - 0.5;
      const y = (pointerY - rect.top) / rect.height - 0.5;
      const tiltX = Math.max(-3, Math.min(3, x * 6));
      const tiltY = Math.max(-3, Math.min(3, y * -6));
      activeCard.style.setProperty('--glass-tilt-x', `${tiltX.toFixed(2)}deg`);
      activeCard.style.setProperty('--glass-tilt-y', `${tiltY.toFixed(2)}deg`);
    });
  }, { passive: true });

  document.addEventListener('pointerout', event => {
    if (!activeCard || activeCard.contains(event.relatedTarget)) return;
    resetCard(activeCard);
    activeCard = null;
  }, { passive: true });

  window.addEventListener('blur', () => {
    resetCard(activeCard);
    activeCard = null;
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLiquidGlassTilt, { once: true });
} else {
  initLiquidGlassTilt();
}