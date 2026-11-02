function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      alert(`Không thể bật chế độ toàn màn hình: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

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

document.addEventListener('fullscreenchange', () => {
  const btn = document.getElementById('fullscreenBtn');
  if (btn) {
    btn.innerHTML = document.fullscreenElement ? '🛈 Toàn màn hình: Bật' : '🛈 Toàn màn hình: Tắt';
  }
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', syncBackgroundTheme, { once: true });
} else {
  syncBackgroundTheme();
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
