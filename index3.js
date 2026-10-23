const tinHocQuestions = [
  {
    id: "q1",
    title: "Câu 1: Đặc điểm nào sau đây là của chiếc máy tính đầu tiên Pascaline?",
    type: "multi",
    options: [
      { key: "A", text: "Blaise Pascal chế tạo vào khoảng năm 1642" },
      { key: "B", text: "Sử dụng hệ thống bánh răng liên kết với nhau" },
      { key: "C", text: "Thực hiện trực tiếp hai phép tính cộng và trừ" },
      { key: "D", text: "Có thể thực hiện phép nhân và phép chia" },
      { key: "E", text: "Blaise Pascal chế tạo vào khoảng năm 1645" }
    ],
    correct: ["A", "B", "C"],
    explainDetail: "Máy tính Pascaline do Blaise Pascal sáng tạo năm 1642, dùng cơ cấu bánh răng và thực hiện được phép cộng, trừ."
  },
  {
    id: "q2",
    title: "Câu 2: Ai là người đầu tiên đã thiết kế ra máy tính đa năng tương tự máy tính ngày nay?",
    type: "single",
    options: [
      { key: "A", text: "Nhà toán học Charles Babbage" },
      { key: "B", text: "Claude Shannon" },
      { key: "C", text: "Howard Aiken" },
      { key: "D", text: "Nhà toán học John Von Neumann" }
    ],
    correct: ["A"],
    explainDetail: "Charles Babbage được coi là cha đẻ của máy tính hiện đại với mẫu thiết kế Máy phân tích (Analytical Engine)."
  },
  {
    id: "q3",
    title: "Câu 3: Em hãy cho biết những đặc điểm nào sau đây thuộc về máy tính thế hệ thứ nhất?",
    type: "multi",
    options: [
      { key: "A", text: "Linh kiện xử lý chính: Sử dụng hàng ngàn ống chân không (vacuum tubes)" },
      { key: "B", text: "Bộ nhớ chính: Sử dụng trống từ (magnetic drums) làm thiết bị lưu trữ tạm thời" },
      { key: "C", text: "Thiết bị vào ra: Thẻ đục lỗ (punch cards)" },
      { key: "D", text: "Kích thước khổng lồ, tiêu thụ điện và tỏa nhiệt lớn" },
      { key: "E", text: "Tốc độ xử lý chậm, độ tin cậy thấp" },
      { key: "F", text: "Linh kiện xử lý chính: Sử dụng các bóng bán dẫn (transistor)" }
    ],
    correct: ["A", "B", "C", "D", "E"],
    explainDetail: "Bóng bán dẫn thuộc về thế hệ thứ hai."
  },
  {
    id: "q4",
    title: "Câu 4: Công cụ và máy tính điện tử ngày nay đã thay đổi thế giới theo những hướng nào?",
    type: "multi",
    options: [
      { key: "A", text: "Làm cho việc xử lý thông tin, tự động hóa và kết nối toàn cầu trở nên mạnh mẽ" },
      { key: "B", text: "Làm giảm nhu cầu tư duy của con người trong mọi lĩnh vực" },
      { key: "C", text: "Cách mạng hóa các ngành cốt lõi: y tế, giáo dục, tài chính - thương mại,..." },
      { key: "D", text: "Hạn chế tốc độ phát triển khoa học kỹ thuật" },
      { key: "E", text: "Cách mạng hóa nền kinh tế toàn cầu và thị trường lao động" }
    ],
    correct: ["A", "C", "E"],
    explainDetail: "Các hướng thay đổi tích cực gồm tự động hóa, kết nối toàn cầu và tối ưu hóa các ngành cốt lõi."
  },
  {
    id: "q5",
    title: "Câu 5: Em hãy cho biết những đặc điểm nào sau đây thuộc về máy tính thế hệ thứ năm?",
    type: "multi",
    options: [
      { key: "A", text: "Công nghệ vi mạch ULSI (Ultra Large Scale Integration)" },
      { key: "B", text: "Dung lượng lưu trữ khổng lồ và Điện toán đám mây. Tiết kiệm điện và tối ưu năng lượng" },
      { key: "C", text: "Công nghệ mạch tích hợp cỡ rất lớn VLSI" },
      { key: "D", text: "Bắt đầu có sự kết nối giữa các máy tính với nhau" },
      { key: "E", text: "Khả năng tự học và tư duy (AI)" }
    ],
    correct: ["A", "B", "E"],
    explainDetail: "VLSI thuộc thế hệ thứ tư, sự kết nối mạng khởi đầu từ thế hệ thứ ba/tư. Thế hệ 5 đặc trưng bởi vi mạch ULSI, điện toán đám mây và Trí tuệ nhân tạo (AI)."
  },
  {
    id: "q6",
    title: "Câu 6: Theo em về mặt tích cực máy tính đã làm thay đổi thế giới như thế nào?",
    type: "multi",
    options: [
      { key: "A", text: "Tái định hình nền văn minh nhân loại, chuyển đổi xã hội từ kỷ nguyên công nghiệp sang kỷ nguyên thông tin và trí tuệ nhân tạo" },
      { key: "B", text: "Tạo ra các ngành kinh tế mới, mở đường cho tự động hóa" },
      { key: "C", text: "Nguy cơ mất việc làm do tự động hóa và AI thay thế con người" },
      { key: "D", text: "Hội chứng nghiện màn hình và sự suy giảm tương tác trực tiếp ngoài đời thực" },
      { key: "E", text: "Xóa nhòa khoảng cách địa lý, định hình lại xã hội qua mạng xã hội" }
    ],
    correct: ["A", "B", "E"],
    explainDetail: "Các đáp án khác là những mặt tiêu cực/thách thức, không phải mặt tích cực."
  },
  {
    id: "q7",
    title: "Câu 7: Đặc điểm nào sau đây là của thông tin trong môi trường số?",
    type: "multi",
    options: [
      { key: "A", text: "Chỉ được lưu trữ trên giấy và phim ảnh" },
      { key: "B", text: "Được mã hóa thành dãy bit và có dung lượng lưu trữ rất lớn" },
      { key: "C", text: "Không thể sao chép hay nhân bản" },
      { key: "D", text: "Có mức độ tin cậy khác nhau tùy thuộc vào nguồn cung cấp" },
      { key: "E", text: "Có thể truy cập từ xa qua mạng Internet khi được phép" }
    ],
    correct: ["B", "D", "E"],
    explainDetail: "Thông tin số được biểu diễn dạng dãy bit, đa dạng nguồn tin và truy cập dễ dàng qua Internet."
  },
  {
    id: "q8",
    title: "Câu 8: Việc nhân bản và chia sẻ thông tin số có đặc điểm gì khác so với thông tin dạng truyền thống?",
    type: "multi",
    options: [
      { key: "A", text: "Khó khăn, tốn kém và mất nhiều thời gian" },
      { key: "B", text: "Dễ dàng, nhanh chóng và không làm giảm chất lượng bản gốc" },
      { key: "C", text: "Làm hỏng thông tin gốc ngay khi chia sẻ" },
      { key: "D", text: "Tốc độ lan truyền nhanh, khó thu hồi triệt để" }
    ],
    correct: ["B", "D"],
    explainDetail: "Nhân bản số giữ nguyên chất lượng gốc, chi phí gần như bằng 0, tốc độ chia sẻ vô cùng nhanh chóng."
  },
  {
    id: "q9",
    title: "Câu 9: Quyền tác giả đối với thông tin số được quy định như thế nào?",
    type: "single",
    options: [
      { key: "A", text: "Không cần bảo hộ, ai muốn dùng cũng được" },
      { key: "B", text: "Được pháp luật bảo hộ" },
      { key: "C", text: "Chỉ bảo hộ trong vòng 24 giờ kể từ khi đăng" },
      { key: "D", text: "Chỉ áp dụng cho văn bản, không áp dụng cho hình ảnh hay video" }
    ],
    correct: ["B"],
    explainDetail: "Thông tin số thuộc đối tượng được pháp luật bảo hộ quyền sở hữu trí tuệ và quyền tác giả."
  },
  {
    id: "q10",
    title: "Câu 10: Khi chụp một bức ảnh bằng điện thoại thông minh và gửi qua email cho bạn, điều gì xảy ra với bức ảnh gốc trên máy của bạn?",
    type: "single",
    options: [
      { key: "A", text: "Bị xóa hoàn toàn khỏi điện thoại của bạn" },
      { key: "B", text: "Vẫn còn nguyên vẹn trên điện thoại của bạn" },
      { key: "C", text: "Bị mờ đi và giảm chất lượng trên điện thoại của bạn" },
      { key: "D", text: "Biến thành tệp tin văn bản trên điện thoại của bạn" }
    ],
    correct: ["B"],
    explainDetail: "Quá trình gửi file chỉ tạo ra một bản sao (copy) gửi đi, tệp tin gốc vẫn được lưu giữ trọn vẹn."
  },
  {
    id: "q11",
    title: "Câu 11: Ý kiến cá nhân khác với sự kiện ở điểm nào về độ tin cậy?",
    type: "single",
    options: [
      { key: "A", text: "Ý kiến luôn đáng tin cậy hơn sự kiện" },
      { key: "B", text: "Ý kiến thường kém tin cậy hơn sự kiện do mang theo cảm xúc và định kiến" },
      { key: "C", text: "Ý kiến và sự kiện có độ tin cậy hoàn toàn như nhau" },
      { key: "D", text: "Ý kiến luôn được cơ quan nhà nước kiểm chứng" }
    ],
    correct: ["B"],
    explainDetail: "Sự kiện là thông tin thực tế kiểm chứng được, còn ý kiến mang tính chủ quan cá nhân."
  },
  {
    id: "q12",
    title: "Câu 12: Hành vi nào sau đây vi phạm quyền tác giả trong môi trường số?",
    type: "multi",
    options: [
      { key: "A", text: "Trích dẫn tài liệu và ghi rõ tên tác giả, nguồn gốc" },
      { key: "B", text: "Lấy bài viết của người khác đăng lại trên trang cá nhân nhưng nhận là của mình viết" },
      { key: "C", text: "Chia sẻ đường link bài báo chính thống lên Facebook" },
      { key: "D", text: "Chèn các đoạn nhạc có bản quyền vào video nhằm mục đích kiếm tiền/giải trí mà chưa mua bản quyền" }
    ],
    correct: ["B", "D"],
    explainDetail: "Sử dụng tác phẩm của người khác không xin phép/không trả phí bản quyền hoặc giả mạo tác giả là vi phạm pháp luật."
  },
  {
    id: "q13",
    title: "Câu 13: Khi tìm thấy một bức ảnh đẹp trên mạng để đưa vào bài thuyết trình của lớp, em nên làm gì để thể hiện văn hóa và tôn trọng pháp luật?",
    type: "multi",
    options: [
      { key: "A", text: "Cắt bỏ chữ ký của tác giả rồi dùng" },
      { key: "B", text: "Ghi nhận thông tin tác giả và nguồn gốc bức ảnh" },
      { key: "C", text: "Ưu tiên kho ảnh miễn phí (Creative Commons, Royalty-free)" },
      { key: "D", text: "Giữ nguyên trạng tác phẩm" }
    ],
    correct: ["B", "C", "D"],
    explainDetail: "Cần ưu tiên các nguồn miễn phí bản quyền và tuân thủ ghi rõ nguồn gốc tác giả."
  },
  {
    id: "q14",
    title: "Câu 14: Em đọc được một bài viết trên Facebook chia sẻ: \"Nín thở được 10 giây mà không ho là không bị nhiễm COVID-19\". Em sẽ xử lý tình huống này thế nào?",
    type: "single",
    options: [
      { key: "A", text: "Làm theo hướng dẫn ngay và chia sẻ cho người thân" },
      { key: "B", text: "Xác định đây là tin đồn không có cơ sở khoa học, không chia sẻ và tìm nguồn kiểm chứng từ Bộ Y tế" },
      { key: "C", text: "Nhắn tin hỏi thêm bạn bè xem có ai thở được không" },
      { key: "D", text: "Bình luận khen bài viết rất hay" }
    ],
    correct: ["B"],
    explainDetail: "Cần có tư duy phản biện, tuyệt đối không phát tán thông tin y tế chưa xác thực."
  },
  {
    id: "q15",
    title: "Câu 15: Hành động nào sau đây giúp em bảo vệ mình trước rủi ro trên môi trường số?",
    type: "multi",
    options: [
      { key: "A", text: "Tin tưởng hoàn toàn mọi hình ảnh, video nhìn thấy trên mạng" },
      { key: "B", text: "Không cung cấp thông tin cá nhân bừa bãi và luôn tra cứu kiểm chứng nguồn tin" },
      { key: "C", text: "Tải tất cả các tệp tin lạ được gửi qua đường link không rõ nguồn gốc" },
      { key: "D", text: "Cẩn trọng khi giao tiếp và duyệt web" }
    ],
    correct: ["B", "D"],
    explainDetail: "Bảo vệ thông tin cá nhân và kiểm chứng thông tin giúp giảm rủi ro lừa đảo mạng."
  },
  {
    id: "q16",
    title: "Câu 16: Nhận định nào sau đây tổng kết đầy đủ nhất về ý nghĩa của việc khai thác thông tin trong môi trường số?",
    type: "single",
    options: [
      { key: "A", text: "Giúp chúng ta tiếp cận tri thức nhân loại nhanh chóng, nhưng cần có tư duy phản biện để chọn lọc thông tin sạch và tuân thủ pháp luật" },
      { key: "B", text: "Giúp chúng ta hoàn toàn phụ thuộc vào máy móc" },
      { key: "C", text: "Khiến con người không cần phải đọc sách giấy hay giao tiếp trực tiếp nữa" },
      { key: "D", text: "Cho phép sao chép và phát tán mọi nội dung tùy ý" }
    ],
    correct: ["A"],
    explainDetail: "Môi trường số mang lại kho tri thức lớn nhưng cần năng lực chọn lọc và tuân thủ pháp luật."
  },
  {
    id: "q17",
    title: "Câu 17: Hành vi nào sau đây biểu hiện sự thiếu văn hóa khi giao tiếp qua mạng xã hội và sử dụng thiết bị công nghệ số?",
    type: "multi",
    options: [
      { key: "A", text: "Chúc mừng sinh nhật bạn bè công khai" },
      { key: "B", text: "Sử dụng từ ngữ thô tục, xúc phạm hoặc chế giễu ngoại hình của người khác" },
      { key: "C", text: "Cười nói, nghe điện thoại lớn tiếng trong thư viện trường học" },
      { key: "D", text: "Tranh luận một cách lịch sự, mang tính đóng góp" }
    ],
    correct: ["B", "C"],
    explainDetail: "Xúc phạm người khác trực tuyến và gây mất trật tự công cộng là hành vi kém văn hóa."
  },
  {
    id: "q18",
    title: "Câu 18: Điểm khác biệt lớn nhất giữa giao tiếp qua mạng và giao tiếp trực tiếp là gì?",
    type: "multi",
    options: [
      { key: "A", text: "Giao tiếp qua mạng dễ bị ẩn danh, dẫn đến việc nhiều người dễ buông lỏng hành vi đạo đức của mình" },
      { key: "B", text: "Giao tiếp trực tiếp khó che giấu cảm xúc thật, con người thật trong thế giới thực" },
      { key: "C", text: "Giao tiếp qua mạng bị hạn chế rất nhiều, chủ yếu phụ thuộc vào văn bản, icon (emoji)" },
      { key: "D", text: "Giao tiếp qua mạng không để lại dấu vết gì" }
    ],
    correct: ["A", "B", "C"],
    explainDetail: "Giao tiếp mạng thiếu cảm xúc thực tế, dễ ẩn danh và chủ yếu dựa vào văn bản."
  },
  {
    id: "q19",
    title: "Câu 19: Hành vi nào sau đây là tôn trọng quyền sở hữu trí tuệ khi sử dụng sản phẩm số của người khác?",
    type: "multi",
    options: [
      { key: "A", text: "Xin phép tác giả hoặc mua bản quyền, đồng thời trích dẫn nguồn rõ ràng khi sử dụng" },
      { key: "B", text: "Tuân thủ các điều khoản đi kèm của sản phẩm số" },
      { key: "C", text: "Chia sẻ file cài đặt phần mềm đã bẻ khóa (crack) cho cả lớp" },
      { key: "D", text: "Tự ý thay đổi tên tác giả thành tên mình" }
    ],
    correct: ["A", "B"],
    explainDetail: "Tôn trọng sở hữu trí tuệ đòi hỏi sự cho phép, trả phí bản quyền (nếu yêu cầu) và trích dẫn đầy đủ."
  },
  {
    id: "q20",
    title: "Câu 20: Một người quen gửi cho em một video quay cảnh hai bạn học sinh đánh nhau trong trường và bảo em chia sẻ lên mạng xã hội để \"câu view\". Em xử lý thế nào?",
    type: "single",
    options: [
      { key: "A", text: "Đòi người quen đó phải trả tiền công mới chia sẻ" },
      { key: "B", text: "Chia sẻ ngay lập tức để trang cá nhân có nhiều lượt tương tác" },
      { key: "C", text: "Cắt ghép lại video cho kịch tính hơn rồi mới đăng" },
      { key: "D", text: "Từ chối chia sẻ, vì việc phát tán bạo lực học đường vi phạm văn hóa mạng và làm tổn hại danh dự các bạn; đồng thời báo cáo sự việc với nhà trường" }
    ],
    correct: ["D"],
    explainDetail: "Không lan truyền thông tin bạo lực và cần thông báo đến cấp có thẩm quyền (nhà trường/thầy cô)."
  },
  {
    id: "q21",
    title: "Câu 21: Khi muốn tạo ra một sản phẩm kĩ thuật số, em cần đảm bảo những quy tắc nào?",
    type: "multi",
    options: [
      { key: "A", text: "Không sao chép sản phẩm của người khác" },
      { key: "B", text: "Ưu tiên sử dụng các nguồn miễn phí bản quyền (Creative Commons, Royalty-free) hoặc phải xin phép tác giả" },
      { key: "C", text: "Luôn ghi rõ tên tác giả, tên tác phẩm và đường link nguồn gốc ở phần tài liệu tham khảo" },
      { key: "D", text: "Có thể chứa các từ ngữ thô tục, hình ảnh phản cảm nếu nhằm mục đích giải trí" }
    ],
    correct: ["A", "B", "C"],
    explainDetail: "Đảm bảo văn hóa, đạo đức và tuân thủ bản quyền khi sáng tạo nội dung số."
  }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderQuiz() {
  const container = document.getElementById('quiz-tin-hoc');
  if (!container) return;
  container.innerHTML = '';

  const shuffledQuestions = shuffleArray([...tinHocQuestions]);

  shuffledQuestions.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = `card-${q.id}`;

    const qTitle = document.createElement('div');
    qTitle.className = 'question-title';
    qTitle.innerHTML = `Câu ${idx + 1}: ${q.title.replace(/^Câu \d+:\s*/, '')} <span style="font-size: 0.8rem; opacity: 0.7; font-weight: normal;">(${q.type === 'single' ? 'Chọn 1 đáp án' : 'Chọn tất cả đáp án đúng'})</span>`;
    card.appendChild(qTitle);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    const shuffledOptions = shuffleArray([...q.options]);
    const displayLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
    const correctDisplayLabels = [];

    shuffledOptions.forEach((opt, optIdx) => {
      const assignedKey = displayLabels[optIdx];
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.originalKey = opt.key;
      btn.dataset.displayKey = assignedKey;
      btn.innerHTML = `<span><strong>${assignedKey}.</strong> ${opt.text}</span>`;

      if (q.correct.includes(opt.key)) {
        btn.dataset.isCorrect = "true";
        correctDisplayLabels.push(assignedKey);
      } else {
        btn.dataset.isCorrect = "false";
      }

      btn.onclick = function() {
        if (card.classList.contains('submitted')) return;

        if (q.type === 'single') {
          optionsDiv.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected-correct'));
          btn.classList.add('selected-correct');
        } else {
          btn.classList.toggle('selected-correct');
        }
      };

      optionsDiv.appendChild(btn);
    });

    card.appendChild(optionsDiv);

    const checkBtnContainer = document.createElement('div');
    checkBtnContainer.style.marginTop = '12px';
    checkBtnContainer.innerHTML = `
      <button class="glassBtn" style="padding: 6px 16px; font-size: 0.85rem; background: rgba(59, 130, 246, 0.2); border: 1px solid rgba(59, 130, 246, 0.4);" onclick="checkSingleQuestion('${q.id}')">
        <i class="fa-solid fa-check"></i> Kiểm tra câu này
      </button>
    `;
    card.appendChild(checkBtnContainer);

    correctDisplayLabels.sort();
    const correctStr = correctDisplayLabels.join(', ');

    const expDiv = document.createElement('div');
    expDiv.className = 'math-box';
    expDiv.style.display = 'none';
    expDiv.id = `exp-${q.id}`;
    expDiv.innerHTML = `<strong>Giải thích:</strong> Đáp án đúng: ${correctStr}. ${q.explainDetail}`;
    card.appendChild(expDiv);

    container.appendChild(card);
  });

  initCardSpotlight();
}

function checkSingleQuestion(qId) {
  const card = document.getElementById(`card-${qId}`);
  if (!card || card.classList.contains('submitted')) return;
  card.classList.add('submitted');

  const allBtns = card.querySelectorAll('.option-btn');
  let allCorrectChosen = true;
  let userMadeMistake = false;

  allBtns.forEach(btn => {
    btn.classList.add('disabled');
    const isCorrectTarget = btn.dataset.isCorrect === "true";
    const isSelected = btn.classList.contains('selected-correct');

    if (isCorrectTarget) {
      if (isSelected) {
        // Đã chọn đúng -> Màu xanh lá
        btn.style.borderColor = '#10B981';
        btn.style.background = 'rgba(16, 185, 129, 0.25)';
        btn.style.color = '#34D399';
      } else {
        // Đáp án đúng còn thiếu -> Màu xanh dương
        allCorrectChosen = false;
        btn.style.borderColor = '#3B82F6';
        btn.style.background = 'rgba(59, 130, 246, 0.25)';
        btn.style.color = '#60A5FA';
      }
    } else {
      if (isSelected) {
        // Chọn sai -> Màu đỏ
        userMadeMistake = true;
        btn.style.borderColor = '#EF4444';
        btn.style.background = 'rgba(239, 68, 68, 0.25)';
        btn.style.color = '#F87171';
      }
    }
  });

  const isFinalCorrect = allCorrectChosen && !userMadeMistake;

  if (isFinalCorrect) {
    card.style.borderColor = 'rgba(16, 185, 129, 0.5)';
  } else {
    card.style.borderColor = 'rgba(239, 68, 68, 0.5)';
  }

  const exp = document.getElementById(`exp-${qId}`);
  if (exp) exp.style.display = 'block';
}

function switchTab(tabId, event) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.glassBtn').forEach(btn => {
    btn.classList.remove('active');
  });

  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    targetTab.classList.add('active');
  }

  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }
}

function initCardSpotlight() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderQuiz();
});