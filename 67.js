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
  
  if (!v || !o || !b) return;

  
  if (v.classList.contains('hidden')) {
    v.classList.remove('hidden');
    o.classList.remove('hidden');
    
    
    v.muted = false; 
    v.volume = 1.0;  
    v.play().catch(err => console.log("Trình duyệt chặn phát tự động:", err));
    

    b.innerHTML = '🎬 Nền: Bật';
  } else {
    v.classList.add('hidden');
    o.classList.add('hidden');
    v.pause(); 
    b.innerHTML = '🎬 Nền: Tắt';
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