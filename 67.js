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

function toggleBackground() {
  const v = document.getElementById('bgVideo');
  const o = document.getElementById('bgOverlay');
  const b = document.getElementById('bgToggleBtn');

  v.classList.toggle('hidden');
  o.classList.toggle('hidden');

  if (v.classList.contains('hidden')) {
    b.innerHTML = '🎬 Nền: Tắt';
  } else {
    b.innerHTML = '🎬 Nền: Bật';
  }
}

document.addEventListener('fullscreenchange', () => {
  const btn = document.getElementById('fullscreenBtn');
  if (btn) {
    if (document.fullscreenElement) {
      btn.innerHTML = '🛈 Toàn màn hình: Bật';
    } else {
      btn.innerHTML = '🛈 Toàn màn hình: Tắt';
    }
  }
});