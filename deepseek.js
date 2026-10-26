let isTTSEnabled = true;
let conversationHistory = [];
const MAX_CONTEXT_HISTORY = 6;
let currentBase64Image = null;

function toggleBackground() {
  const v = document.getElementById('bgVideo');
  const o = document.getElementById('bgOverlay');
  const b = document.getElementById('bgToggleBtn');
  if (!v || !o || !b) return;
  v.classList.toggle('hidden');
  o.classList.toggle('hidden');
  b.innerHTML = v.classList.contains('hidden') ? '🎬 Nền: Tắt' : '🎬 Nền: Bật';
}

function toggleTTS() {
  isTTSEnabled = !isTTSEnabled;
  const btn = document.getElementById('ttsToggleBtn');
  if (btn) {
    btn.innerHTML = isTTSEnabled ? '🔊 Giọng đọc: Bật' : '🔇 Giọng đọc: Tắt';
  }
  if (!isTTSEnabled && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      alert(`Không thể bật chế độ toàn màn hình: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

document.addEventListener('fullscreenchange', () => {
  const btn = document.getElementById('fullscreenBtn');
  if (btn) {
    btn.innerHTML = document.fullscreenElement ? '🛈 Toàn màn hình: Bật' : '🛈 Toàn màn hình: Tắt';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const savedKey = localStorage.getItem('deepseek_api_key');
  if (savedKey) {
    document.getElementById('apiKeyInput').value = savedKey;
  }

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', (e.clientX - r.left) + 'px');
      card.style.setProperty('--mouse-y', (e.clientY - r.top) + 'px');
    });
  });

  const promptInput = document.getElementById('promptInput');
  promptInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendToDeepSeek();
    }
  });

  promptInput.addEventListener('paste', (e) => {
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    for (let item of items) {
      if (item.type.indexOf('image') === 0) {
        const file = item.getAsFile();
        processImageFile(file);
        e.preventDefault();
      }
    }
  });
});

function saveApiKey() {
  const key = document.getElementById('apiKeyInput').value.trim();
  if (key) {
    localStorage.setItem('deepseek_api_key', key);
    alert('Đã lưu API Key thành công!');
  } else {
    localStorage.removeItem('deepseek_api_key');
    alert('Đã xóa API Key!');
  }
}

function handleImageSelect(event) {
  const file = event.target.files[0];
  if (file) {
    processImageFile(file);
  }
}

function processImageFile(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    currentBase64Image = e.target.result;
    document.getElementById('imagePreview').src = currentBase64Image;
    document.getElementById('imageName').innerText = file.name || 'Ảnh đã dán';
    document.getElementById('imagePreviewContainer').style.display = 'flex';
  };
  reader.readAsDataURL(file);
}

function removeImage() {
  currentBase64Image = null;
  document.getElementById('imagePreviewContainer').style.display = 'none';
  document.getElementById('imageInput').value = '';
}

let recognition = null;
let isRecording = false;

function toggleRecord() {
  const recordBtn = document.getElementById('recordBtn');
  const micIcon = document.getElementById('micIcon');
  const statusText = document.getElementById('statusText');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('Trình duyệt không hỗ trợ nhận diện giọng nói.');
    return;
  }

  if (!isRecording) {
    recognition = new SpeechRecognition();
    recognition.lang = 'vi-VN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      isRecording = true;
      recordBtn.classList.add('recording');
      micIcon.className = 'fa-solid fa-stop';
      statusText.innerText = 'Đang nghe...';
    };

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      document.getElementById('promptInput').value = speechToText;
      statusText.innerText = 'Đã nhận diện giọng nói.';
      sendToDeepSeek();
    };

    recognition.onerror = (event) => {
      statusText.innerText = `Lỗi: ${event.error}`;
      stopRecordUI();
    };

    recognition.onend = () => {
      stopRecordUI();
    };

    recognition.start();
  } else {
    if (recognition) recognition.stop();
    stopRecordUI();
  }
}

function stopRecordUI() {
  isRecording = false;
  const recordBtn = document.getElementById('recordBtn');
  const micIcon = document.getElementById('micIcon');
  if (recordBtn) recordBtn.classList.remove('recording');
  if (micIcon) micIcon.className = 'fa-solid fa-microphone';
}

function speakText(text) {
  if (!isTTSEnabled) return;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}

function formatMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
}

async function sendToDeepSeek() {
  const apiKey = document.getElementById('apiKeyInput').value.trim();
  const promptInput = document.getElementById('promptInput');
  const prompt = promptInput.value.trim().replace(/\s+/g, ' ');
  const statusText = document.getElementById('statusText');
  const conversationBox = document.getElementById('conversationBox');

  if (!apiKey) {
    alert('Vui lòng nhập và lưu API Key trước!');
    return;
  }

  if (!prompt && !currentBase64Image) {
    alert('Vui lòng nhập nội dung, nói hoặc chọn/dán ảnh!');
    return;
  }

  conversationBox.style.display = 'flex';
  
  let displayHTML = `<strong>Bạn</strong><div>${formatMarkdown(prompt) || '(Gửi hình ảnh)'}</div>`;
  if (currentBase64Image) {
    displayHTML += `<img src="${currentBase64Image}" alt="Uploaded image">`;
  }

  appendCustomMessage('message user', displayHTML);
  promptInput.value = '';
  statusText.innerText = 'Đang xử lý...';

  let messageContent = prompt;
  if (currentBase64Image) {
    messageContent = [
      { type: "text", text: prompt || "Hãy mô tả hoặc giải quyết nội dung trong ảnh này." },
      { type: "image_url", image_url: { url: currentBase64Image } }
    ];
  }

  conversationHistory.push({ role: "user", content: messageContent });
  if (conversationHistory.length > MAX_CONTEXT_HISTORY) {
    conversationHistory = conversationHistory.slice(-MAX_CONTEXT_HISTORY);
  }

  const isOpenRouter = apiKey.startsWith('sk-or-v1');
  const apiUrl = isOpenRouter 
    ? 'https://openrouter.ai/api/v1/chat/completions' 
    : 'https://api.deepseek.com/chat/completions';
  
  let modelName = isOpenRouter ? 'deepseek/deepseek-chat' : 'deepseek-chat';
  if (currentBase64Image && isOpenRouter) {
    modelName = 'google/gemini-2.5-flash';
  }

  removeImage();

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        ...(isOpenRouter && {
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Liquid Glass AI Assistant'
        })
      },
      body: JSON.stringify({
        model: modelName,
        messages: [
          { role: "system", content: "Trả lời ngắn gọn, đúng trọng tâm bằng tiếng Việt." },
          ...conversationHistory
        ],
        max_tokens: 350,
        stream: false
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error?.message || `Lỗi HTTP! Trạng thái: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    conversationHistory.push({ role: "assistant", content: reply });

    appendMessage('assistant', 'AI Assistant', reply);
    statusText.innerText = 'Hoàn tất.';
    speakText(reply);

  } catch (error) {
    statusText.innerText = `Đã xảy ra lỗi: ${error.message}`;
    appendMessage('assistant', 'Hệ thống', `Lỗi: ${error.message}`);
  }
}

function appendMessage(role, sender, text) {
  const conversationBox = document.getElementById('conversationBox');
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${role}`;
  msgDiv.innerHTML = `<strong>${sender}</strong><div>${formatMarkdown(text)}</div>`;
  conversationBox.appendChild(msgDiv);
  conversationBox.scrollTop = conversationBox.scrollHeight;
}

function appendCustomMessage(className, htmlContent) {
  const conversationBox = document.getElementById('conversationBox');
  const msgDiv = document.createElement('div');
  msgDiv.className = className;
  msgDiv.innerHTML = htmlContent;
  conversationBox.appendChild(msgDiv);
  conversationBox.scrollTop = conversationBox.scrollHeight;
}
//Minh Gay