let isTTSEnabled = true;
let conversationHistory = [];
const MAX_CONTEXT_HISTORY = 6;

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

  document.getElementById('promptInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendToDeepSeek();
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

let recognition = null;
let isRecording = false;

function toggleRecord() {
  const recordBtn = document.getElementById('recordBtn');
  const recordText = document.getElementById('recordText');
  const micIcon = document.getElementById('micIcon');
  const statusText = document.getElementById('statusText');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('Trình duyệt không hỗ trợ nhận diện giọng nói (Khuyên dùng Chrome/Edge).');
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
      recordText.innerText = 'Dừng';
      micIcon.className = 'fa-solid fa-stop';
      statusText.innerText = 'Đang nghe bạn nói...';
    };

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      document.getElementById('promptInput').value = speechToText;
      statusText.innerText = 'Đã nhận diện xong giọng nói. Đang gửi...';
      sendToDeepSeek();
    };

    recognition.onerror = (event) => {
      statusText.innerText = `Lỗi nhận diện giọng nói: ${event.error}`;
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
  const recordText = document.getElementById('recordText');
  const micIcon = document.getElementById('micIcon');
  if (recordBtn) recordBtn.classList.remove('recording');
  if (recordText) recordText.innerText = 'Nói';
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

  if (!prompt) {
    alert('Vui lòng nhập nội dung hoặc nói chuyện qua micro!');
    return;
  }

  conversationBox.style.display = 'flex';
  
  appendMessage('user', 'Bạn', prompt);
  promptInput.value = '';
  statusText.innerText = 'Đang suy nghĩ';

  conversationHistory.push({ role: "user", content: prompt });
  if (conversationHistory.length > MAX_CONTEXT_HISTORY) {
    conversationHistory = conversationHistory.slice(-MAX_CONTEXT_HISTORY);
  }

  const isOpenRouter = apiKey.startsWith('sk-or-v1');
  const apiUrl = isOpenRouter 
    ? 'https://openrouter.ai/api/v1/chat/completions' 
    : 'https://api.deepseek.com/chat/completions';
  
  const modelName = isOpenRouter ? 'deepseek/deepseek-chat' : 'deepseek-chat';

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
  msgDiv.innerHTML = `<strong>${sender}</strong><div>${text}</div>`;
  conversationBox.appendChild(msgDiv);
  conversationBox.scrollTop = conversationBox.scrollHeight;
}
//Minh Gay