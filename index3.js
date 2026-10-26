const tinHocQuestions = [
  {
    id: "q1",
    title: "Câu 1: Đặc điểm nào sau đây là của chiếc máy tính đầu tiên Pascaline?",
    type: "multi",
    options: [
      { key: "A", text: "Blaise Pascal chế tạo vào khoảng năm 1642" },
      { key: "B", text: "Sử dụng hệ thống bánh răng liên kết với nhau" },
      { key: "C", text: "Thực hiện trực tiếp hai phép tính cộng và trừ." },
      { key: "D", text: "Có thể thực hiện phép nhân và phép chia" },
      { key: "E", text: "Blaise Pascal chế tạo vào khoảng năm 1645" }
    ],
    correct: ["A", "B", "C"],
    explainDetail: "Máy tính Pascaline do Blaise Pascal sáng tạo năm 1642, dùng hệ thống bánh răng liên kết và thực hiện được phép cộng, trừ."
  },
  {
    id: "q2",
    title: "Câu 2: Ai là người đầu tiên đã thiết kế ra máy tính đa năng tương tự máy tính ngày nay?",
    type: "single",
    options: [
      { key: "A", text: "Nhà toán học Charle Babbage" },
      { key: "B", text: "Claude Shannon" },
      { key: "C", text: "Howard Aiken" },
      { key: "D", text: "Nhà toán học Jonh Von Neumann" }
    ],
    correct: ["A"],
    explainDetail: "Charles Babbage được coi là người tiên phong thiết kế máy tính đa năng (máy Analytical Engine)."
  },
  {
    id: "q3",
    title: "Câu 3: Em hãy cho biết những đặc điểm nào sau đây thuộc về máy tính thế hệ thứ nhất?",
    type: "multi",
    options: [
      { key: "A", text: "Linh kiện xử lý chính: Sử dụng hàng ngàn ống chân không (vacuum tubes) để làm mạch điện và bóng bán dẫn xử lý." },
      { key: "B", text: "Bộ nhớ chính: Sử dụng trống từ (magnetic drums) làm thiết bị lưu trữ dữ liệu tạm thời bên trong." },
      { key: "C", text: "Thiết bị vào ra: Thẻ đục lỗ (punch cards)" },
      { key: "D", text: "Kích thước khổng lồ, Tiêu thụ điện và tỏa nhiệt lớn" },
      { key: "E", text: "Tốc độ xử lý chậm, độ tin cậy thấp" },
      { key: "F", text: "Linh kiện xử lý chính: Sử dụng các bóng bán dẫn (transistor)" }
    ],
    correct: ["B", "C", "D", "E"],
    explainDetail: "Máy tính thế hệ thứ nhất sử dụng ống chân không, trống từ, thẻ đục lỗ, kích thước khổng lồ và tốc độ chậm."
  },
  {
    id: "q4",
    title: "Câu 4: Công cụ và máy tính điện tử ngày nay đã thay đổi thế giới theo những hướng nào?",
    type: "multi",
    options: [
      { key: "A", text: "Làm cho việc xử lý thông tin, tự động hóa và kết nối toàn cầu trở nên mạnh mẽ" },
      { key: "B", text: "Làm giảm nhu cầu tư duy của con người trong mọi lĩnh vực" },
      { key: "C", text: "Cách mạng hóa các ngành cốt lõi: y tế, giáo dục, tài chính - thương mại, ..." },
      { key: "D", text: "Hạn chế tốc độ phát triển khoa học kỹ thuật" },
      { key: "E", text: "Cách mạng hóa nền kinh tế toàn cầu và thị trường lao động" }
    ],
    correct: ["A", "C", "E"],
    explainDetail: "Máy tính giúp tự động hóa, kết nối toàn cầu, thúc đẩy kinh tế và cải thiện các ngành cốt lõi."
  },
  {
    id: "q5",
    title: "Câu 5: Em hãy cho biết những đặc điểm nào sau đây thuộc về máy tính thế hệ thứ năm?",
    type: "multi",
    options: [
      { key: "A", text: "Công nghệ vi mạch ULSI (Ultra Large Scale Integration - Tích hợp quy mô siêu lớn)" },
      { key: "B", text: "Dung lượng lưu trữ khổng lồ và Điện toán đám mây. Tiết kiệm điện và tối ưu năng lượng" },
      { key: "C", text: "Công nghệ mạch tích hợp cỡ rất lớn VLSI ((Very Large Scale Integration))" },
      { key: "D", text: "Bắt đầu có sự kết nối giữa các máy tính với nhau" },
      { key: "E", text: "Khả năng tự học và tư duy" }
    ],
    correct: ["A", "B", "E"],
    explainDetail: "Thế hệ thứ năm đặc trưng bởi công nghệ ULSI, điện toán đám mây và trí tuệ nhân tạo (khả năng tự học và tư duy)."
  },
  {
    id: "q6",
    title: "Câu 6: Theo em về mặt tích cực máy tính đã làm thay đổi thế giới như thế nào?",
    type: "multi",
    options: [
      { key: "A", text: "Tái định hình nền văn minh nhân loại, chuyển đổi xã hội từ kỷ nguyên công nghiệp sang kỷ nguyên thông tin và trí tuệ nhân tạo" },
      { key: "B", text: "Tạo ra các ngành kinh tế mới, mở đường cho tự động hóa" },
      { key: "C", text: "Nguy cơ mất việc làm do tự động hóa và AI thay thế con người." },
      { key: "D", text: "Hội chứng nghiện màn hình và sự suy giảm tương tác trực tiếp ngoài đời thực." },
      { key: "E", text: "Xóa nhòa khoảng cách địa lý, định hình lại xã hội qua mạng xã hội" }
    ],
    correct: ["A", "B", "E"],
    explainDetail: "Các mặt tích cực bao gồm định hình nền văn minh thông tin, tạo ra ngành kinh tế mới và xóa nhòa khoảng cách địa lý."
  },
  {
    id: "q7",
    title: "Câu 7: Đặc điểm nào sau đây là của thông tin trong môi trường số?",
    type: "multi",
    options: [
      { key: "A", text: "Chỉ được lưu trữ trên giấy và phim ảnh." },
      { key: "B", text: "Được mã hóa thành dãy bit và có dung lượng lưu trữ rất lớn." },
      { key: "C", text: "Không thể sao chép hay nhân bản. Chỉ có thể xem trực tiếp tại nơi tạo ra nó." },
      { key: "D", text: "Có mức độ tin cậy khác nhau tùy thuộc vào nguồn cung cấp." },
      { key: "E", text: "Có thể truy cập từ xa qua mạng Internet khi được phép." },
      { key: "F", text: "Chỉ truy cập được khi cầm thiết bị vật lý của người tạo ra." }
    ],
    correct: ["B", "D", "E"],
    explainDetail: "Thông tin số được mã hóa thành dãy bit, có độ tin cậy tùy nguồn và truy cập từ xa qua Internet."
  },
  {
    id: "q8",
    title: "Câu 8: Việc nhân bản và chia sẻ thông tin số có đặc điểm gì khác so với thông tin dạng truyền thống?",
    type: "multi",
    options: [
      { key: "A", text: "Khó khăn, tốn kém và mất nhiều thời gian." },
      { key: "B", text: "Dễ dàng, nhanh chóng và không làm giảm chất lượng bản gốc." },
      { key: "C", text: "Làm hỏng thông tin gốc ngay khi chia sẻ." },
      { key: "D", text: "Phải có sự đồng ý bằng văn bản giấy mới gửi đi được." },
      { key: "E", text: "Tốc độ lan truyền nhanh, khó thu hồi triệt để" }
    ],
    correct: ["B", "E"],
    explainDetail: "Chia sẻ thông tin số diễn ra nhanh chóng, giữ nguyên chất lượng bản gốc và lan truyền rất nhanh."
  },
  {
    id: "q9",
    title: "Câu 9: Quyền tác giả đối với thông tin số được quy định như thế nào?",
    type: "single",
    options: [
      { key: "A", text: "Không cần bảo hộ, ai muốn dùng cũng được." },
      { key: "B", text: "Được pháp luật bảo hộ." },
      { key: "C", text: "Chỉ bảo hộ trong vòng 24 giờ kể từ khi đăng." },
      { key: "D", text: "Chỉ áp dụng cho văn bản, không áp dụng cho hình ảnh hay video." }
    ],
    correct: ["B"],
    explainDetail: "Quyền tác giả đối với thông tin số được pháp luật bảo hộ nghiêm ngặt."
  },
  {
    id: "q10",
    title: "Câu 10: Khi chụp một bức ảnh bằng điện thoại thông minh và gửi qua email cho bạn, điều gì xảy ra với bức ảnh gốc trên máy của bạn?",
    type: "single",
    options: [
      { key: "A", text: "Bị xóa hoàn toàn khỏi điện thoại của bạn." },
      { key: "B", text: "Vẫn còn nguyên vẹn trên điện thoại của bạn." },
      { key: "C", text: "Bị mờ đi và giảm chất lượng trên điện thoại của bạn." },
      { key: "D", text: "Biến thành tệp tin văn bản trên điện thoại của bạn." },
      { key: "E", text: "Được nhân bản thêm trên điện thoại của bạn." }
    ],
    correct: ["B"],
    explainDetail: "Bức ảnh gốc vẫn nằm nguyên vẹn trên thiết bị của bạn."
  },
  {
    id: "q11",
    title: "Câu 11: Ý kiến cá nhân (bình luận, bày tỏ cảm xúc) khác với sự kiện (thông tin có thật, kiểm chứng được) ở điểm nào về độ tin cậy?",
    type: "single",
    options: [
      { key: "A", text: "Ý kiến luôn đáng tin cậy hơn sự kiện." },
      { key: "B", text: "Ý kiến thường kém tin cậy hơn sự kiện do mang theo cảm xúc và định kiến." },
      { key: "C", text: "Ý kiến và sự kiện có độ tin cậy hoàn toàn như nhau." },
      { key: "D", text: "Ý kiến luôn được cơ quan nhà nước kiểm chứng." }
    ],
    correct: ["B"],
    explainDetail: "Ý kiến mang tính chủ quan, cảm xúc cá nhân nên độ tin cậy thường thấp hơn các sự kiện thực tế đã được kiểm chứng."
  },
  {
    id: "q12",
    title: "Câu 12: Hành vi nào sau đây vi phạm quyền tác giả trong môi trường số?",
    type: "multi",
    options: [
      { key: "A", text: "Trích dẫn tài liệu và ghi rõ tên tác giả, nguồn gốc." },
      { key: "B", text: "Lấy bài viết của người khác đăng lại trên trang cá nhân nhưng nhận là của mình viết." },
      { key: "C", text: "Chia sẻ đường link bài báo chính thống lên Facebook." },
      { key: "D", text: "Đọc thông tin miễn phí trên trang web học tập." },
      { key: "E", text: "Chèn các đoạn nhạc có bản quyền vào video YouTube, TikTok, Facebook nhằm mục đích kiếm tiền hoặc giải trí mà chưa mua bản quyền sử dụng." }
    ],
    correct: ["B", "E"],
    explainDetail: "Đạo văn và sử dụng âm nhạc/tư liệu có bản quyền trái phép là hành vi vi phạm pháp luật."
  },
  {
    id: "q13",
    title: "Câu 13: Khi tìm thấy một bức ảnh đẹp trên mạng để đưa vào bài thuyết trình của lớp, em nên làm gì để thể hiện văn hóa và tôn trọng pháp luật?",
    type: "multi",
    options: [
      { key: "A", text: "Cắt bỏ chữ ký của tác giả rồi dùng." },
      { key: "B", text: "Ghi nhận thông tin tác giả và nguồn gốc bức ảnh." },
      { key: "C", text: "Xóa định dạng gốc của ảnh." },
      { key: "D", text: "Ưu tiên kho ảnh miễn phí" },
      { key: "E", text: "Giữ nguyên trạng tác phẩm" }
    ],
    correct: ["B", "D", "E"],
    explainDetail: "Cần tôn trọng tác phẩm bằng cách giữ nguyên trạng, ghi rõ nguồn gốc hoặc ưu tiên sử dụng kho ảnh miễn phí."
  },
  {
    id: "q14",
    title: "Câu 14: Em đọc được một bài viết trên Facebook chia sẻ: \"Nín thở được 10 giây mà không ho là không bị nhiễm COVID-19\". Em sẽ xử lý tình huống này thế nào?",
    type: "single",
    options: [
      { key: "A", text: "Làm theo hướng dẫn ngay và chia sẻ cho người thân." },
      { key: "B", text: "Xác định đây là tin đồn không có cơ sở khoa học, không chia sẻ và tìm nguồn kiểm chứng từ Bộ Y tế." },
      { key: "C", text: "Nhắn tin hỏi thêm bạn bè xem có ai thở được không." },
      { key: "D", text: "Bình luận khen bài viết rất hay." }
    ],
    correct: ["B"],
    explainDetail: "Cần có tư duy phản biện trước các tin đồn vô căn cứ trên mạng xã hội."
  },
  {
    id: "q15",
    title: "Câu 15: Hành động nào sau đây giúp em bảo vệ mình trước rủi ro trên môi trường số?",
    type: "multi",
    options: [
      { key: "A", text: "Tin tưởng hoàn toàn mọi hình ảnh, video nhìn thấy trên mạng." },
      { key: "B", text: "Không cung cấp thông tin cá nhân bừa bãi và luôn tra cứu kiểm chứng nguồn tin." },
      { key: "C", text: "Tải tất cả các tệp tin lạ được gửi qua đường link không rõ nguồn gốc." },
      { key: "D", text: "Chia sẻ mật khẩu tài khoản mạng xã hội cho người lạ." },
      { key: "E", text: "Cẩn trọng khi giao tiếp và duyệt web" }
    ],
    correct: ["B", "E"],
    explainDetail: "Bảo mật thông tin cá nhân, cẩn trọng khi duyệt web và kiểm chứng nguồn tin là cách tự bảo vệ hiệu quả."
  },
  {
    id: "q16",
    title: "Câu 16: Nhận định nào sau đây tổng kết đầy đủ nhất về ý nghĩa của việc khai thác thông tin trong môi trường số?",
    type: "single",
    options: [
      { key: "A", text: "Giúp chúng ta tiếp cận tri thức nhân loại nhanh chóng, nhưng cần có tư duy phản biện để chọn lọc thông tin sạch và tuân thủ pháp luật." },
      { key: "B", text: "Giúp chúng ta hoàn toàn phụ thuộc vào máy móc." },
      { key: "C", text: "Khiến con người không cần phải đọc sách giấy hay giao tiếp trực tiếp nữa." },
      { key: "D", text: "Cho phép sao chép và phát tán mọi nội dung tùy ý." }
    ],
    correct: ["A"],
    explainDetail: "Thông tin số mang lại kho tri thức lớn nhưng đòi hỏi tư duy phản biện và tuân thủ pháp luật."
  },
  {
    id: "q17",
    title: "Câu 17: Hành vi nào sau đây biểu hiện sự thiếu văn hóa khi giao tiếp qua mạng xã hội và sử dụng thiết bị công nghệ số?",
    type: "multi",
    options: [
      { key: "A", text: "Chúc mừng sinh nhật bạn bè công khai." },
      { key: "B", text: "Sử dụng từ ngữ thô tục, xúc phạm hoặc chế giễu ngoại hình của người khác." },
      { key: "C", text: "Chia sẻ các bài viết về gương người tốt việc tốt." },
      { key: "D", text: "Tranh luận một cách lịch sự, mang tính đóng góp." },
      { key: "E", text: "Cười nói, nghe điện thoại trong thư viện trường học" }
    ],
    correct: ["B", "E"],
    explainDetail: "Xúc phạm người khác hoặc gây ồn ào, dùng điện thoại không đúng nơi công cộng (thư viện) là hành vi thiếu văn hóa."
  },
  {
    id: "q18",
    title: "Câu 18: Điểm khác biệt lớn nhất giữa giao tiếp qua mạng và giao tiếp trực tiếp là gì?",
    type: "multi",
    options: [
      { key: "A", text: "Giao tiếp qua mạng không cần phải có ngôn ngữ." },
      { key: "B", text: "Giao tiếp qua mạng dễ bị ẩn danh, dẫn đến việc nhiều người dễ buông lỏng hành vi đạo đức của mình." },
      { key: "C", text: "Giao tiếp trực tiếp luôn không an toàn." },
      { key: "D", text: "Giao tiếp qua mạng không để lại dấu vết gì." },
      { key: "E", text: "Giao tiếp trực tiếp khó che giấu cảm xúc thật, con người thật trong thế giới thực." },
      { key: "F", text: "Giao tiếp qua mạng bị hạn chế rất nhiều, chủ yếu phụ thuộc vào văn bản, icon (emoji)." }
    ],
    correct: ["B", "E", "F"],
    explainDetail: "Giao tiếp qua mạng có tính ẩn danh, phụ thuộc vào văn bản/emoji, trong khi giao tiếp trực tiếp dễ biểu lộ cảm xúc thật."
  },
  {
    id: "q19",
    title: "Câu 19: Hành vi nào sau đây là tôn trọng quyền sở hữu trí tuệ khi sử dụng sản phẩm số của người khác?",
    type: "multi",
    options: [
      { key: "A", text: "Tự ý thay đổi tên tác giả thành tên mình." },
      { key: "B", text: "Xin phép tác giả hoặc mua bản quyền, đồng thời trích dẫn nguồn rõ ràng khi sử dụng." },
      { key: "C", text: "Chia sẻ file cài đặt phần mềm đã bẻ khóa (crack) cho cả lớp." },
      { key: "D", text: "Sử dụng hình ảnh của họ để làm logo thương mại mà không xin phép." },
      { key: "E", text: "Tuân thủ các điều khoản đi kèm của sản phẩm số" }
    ],
    correct: ["B", "E"],
    explainDetail: "Xin phép, mua bản quyền, trích dẫn nguồn và tuân thủ điều khoản sản phẩm là cách tôn trọng sở hữu trí tuệ."
  },
  {
    id: "q20",
    title: "Câu 20: Một người quen gửi cho em một video quay cảnh hai bạn học sinh đánh nhau trong trường và bảo em chia sẻ lên mạng xã hội để \"câu view\". Em xử lý thế nào?",
    type: "single",
    options: [
      { key: "A", text: "Chia sẻ ngay lập tức để trang cá nhân có nhiều lượt tương tác." },
      { key: "B", text: "Từ chối chia sẻ, vì việc phát tán bạo lực học đường vi phạm văn hóa mạng và làm tổn hại danh dự các bạn; đồng thời báo cáo sự việc với nhà trường." },
      { key: "C", text: "Cắt ghép lại video cho kịch tính hơn rồi mới đăng." },
      { key: "D", text: "Đòi người quen đó phải trả tiền công mới chia sẻ." }
    ],
    correct: ["B"],
    explainDetail: "Tuyệt đối không lan truyền video bạo lực học đường và cần báo cáo ngay cho nhà trường."
  },
  {
    id: "q21",
    title: "Câu 21: Khi muốn tạo ra một sản phẩm kĩ thuật số (ví dụ: bài trình chiếu, video, phần mềm, trang web, bài viết blog, hình ảnh vẽ trên máy tính,...), em cần đảm bảo những gì?",
    type: "multi",
    options: [
      { key: "A", text: "Không sao chép sản phẩm của người khác" },
      { key: "B", text: "Khi sử dụng hình ảnh, âm nhạc, video hay tài liệu từ Internet để đưa vào sản phẩm của mình, em nên ưu tiên các nguồn miễn phí bản quyền (Creative Commons, Royalty-free) hoặc phải xin phép tác giả." },
      { key: "C", text: "Luôn ghi rõ tên tác giả, tên tác phẩm và đường link nguồn gốc ở phần tài liệu tham khảo nếu có sử dụng tư liệu của người khác" },
      { key: "D", text: "Có thể chứa các từ ngữ thô tục, hình ảnh bạo lực, phản cảm hoặc mang tính xúc phạm, chế giễu danh dự, nhân phẩm, ngoại hình của bất kỳ cá nhân hay tổ chức nào." }
    ],
    correct: ["A", "B", "C"],
    explainDetail: "Khi sáng tạo sản phẩm số, cần tự lực, tuân thủ bản quyền, ưu tiên nguồn miễn phí và ghi rõ nguồn tham khảo."
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

    const correctTexts = q.options
      .filter(opt => q.correct.includes(opt.key))
      .map(opt => opt.text);

    shuffledOptions.forEach((opt, optIdx) => {
      const assignedKey = displayLabels[optIdx];
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span><strong>${assignedKey}.</strong> ${opt.text}</span>`;

      const isActuallyCorrect = correctTexts.includes(opt.text);
      btn.dataset.isCorrect = isActuallyCorrect ? "true" : "false";

      if (isActuallyCorrect) {
        correctDisplayLabels.push(assignedKey);
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
    const isCorrectTarget = btn.dataset.isCorrect === "true";
    const isSelected = btn.classList.contains('selected-correct');
    if (!isCorrectTarget && isSelected) {
      userMadeMistake = true;
    }
  });

  allBtns.forEach(btn => {
    btn.classList.add('disabled');
    const isCorrectTarget = btn.dataset.isCorrect === "true";
    const isSelected = btn.classList.contains('selected-correct');

    if (isCorrectTarget) {
      if (isSelected) {
        btn.style.setProperty('border-color', '#10B981', 'important');
        btn.style.setProperty('background', 'rgba(16, 185, 129, 0.3)', 'important');
        btn.style.setProperty('color', '#34D399', 'important');
      } else {
        allCorrectChosen = false;
        btn.style.setProperty('border-color', '#3B82F6', 'important');
        btn.style.setProperty('background', 'rgba(59, 130, 246, 0.3)', 'important');
        btn.style.setProperty('color', '#60A5FA', 'important');
      }
    } else {
      if (isSelected) {
        btn.style.setProperty('border-color', '#EF4444', 'important');
        btn.style.setProperty('background', 'rgba(239, 68, 68, 0.3)', 'important');
        btn.style.setProperty('color', '#F87171', 'important');
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
    updateLiquidPill('liquidPill', event.currentTarget);
  }
}

function updateLiquidPill(pillId, btn) {
  const pill = document.getElementById(pillId);
  if (!pill || !btn) return;
  pill.style.left = btn.offsetLeft + 'px';
  pill.style.width = btn.offsetWidth + 'px';
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

function toggleBackground() {
  const bgVideo = document.getElementById('bgVideo');
  const bgOverlay = document.getElementById('bgOverlay');
  const bgToggleBtn = document.getElementById('bgToggleBtn');

  if (!bgVideo) return;

  if (bgVideo.classList.contains('hidden')) {
    bgVideo.classList.remove('hidden');
    if (bgOverlay) bgOverlay.classList.remove('hidden');
    bgToggleBtn.innerHTML = '🎬 Nền: Bật';
    bgToggleBtn.style.background = 'rgba(16, 185, 129, 0.3)';
    bgToggleBtn.style.borderColor = 'rgba(16, 185, 129, 0.5)';
  } else {
    bgVideo.classList.add('hidden');
    if (bgOverlay) bgOverlay.classList.add('hidden');
    bgToggleBtn.innerHTML = '🎬 Nền: Tắt';
    bgToggleBtn.style.background = '';
    bgToggleBtn.style.borderColor = '';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const activeBtn = document.querySelector('#filterTabs .glassBtn.active');
    if (activeBtn) updateLiquidPill('liquidPill', activeBtn);
  }, 100);
  renderQuiz();
});