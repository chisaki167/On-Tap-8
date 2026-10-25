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