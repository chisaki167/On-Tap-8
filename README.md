👑 CHISAKI167 - ON-TAP-8 PROJECT DOCUMENTATION   ██████╗██╗  ██╗██╗███████╗██████╗ ██╗██╗  ██╗███████╗███████╗
  ██╔════╝██║  ██║██║██╔════╝██╔══██╗██║██║  ██║██╔════╝╚════██║
  ██║     ███████║██║███████╗██████╔╝██║███████║█████╗      ██╔╝
  ██║     ██╔══██║██║╚════██║██╔══██╗██║╚════██║██╔══╝     ██╔╝ 
  ╚██████╗██║  ██║██║███████║██║  ██║██║     ██║███████╗   ██║  
   ╚═════╝╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝   ╚═╝  
🇻🇳 TIẾNG VIỆT1. Tổng Quan Dự Án & Tác Giả (Overview & Author)Tên dự án: Ôn Tập 8 (On-Tap-8)Tác giả / Quyền sở hữu: CHISAKI167Mục đích: Hệ thống ứng dụng web tương tác phục vụ ôn tập đa môn học (Ngữ Văn 8, Tiếng Anh 8, Tin Học 8) và tích hợp ứng dụng Thiệp chúc mừng tương tác cao cấp (Liquid Glass UI, hiệu ứng pháo hoa cánh hoa, âm thanh Web Audio API).2. Cấu Trúc Sơ Đồ Đường Dẫn Liên Kết Tệp (File Navigation & Dependency Map)Dưới đây là sơ đồ dòng chảy chuyển trang và phụ thuộc tài nguyên giữa 31 tệp trong dự án:[Trang chủ / Trung tâm điều hướng]
   ├──> index.html (Trang chọn môn ôn tập)
   │     ├──> index4.html (Ôn tập Ngữ Văn 8)
   │     │     ├──> Gợi ý giải & Bài tập Đọc hiểu "Qua Đèo Ngang"
   │     │     └──> Ôn tập văn bản "Vọng Nguyệt" (Hồ Chí Minh)
   │     │
   │     ├──> index5.html (Ôn tập Tiếng Anh 8 - UI Module)
   │     │     └──> Nạp scripts: index5.js (Logic trắc nghiệm IPA, Vocabulary & Grammar)
   │     │
   │     ├──> index3.html (Ôn tập Tin Học 8 - UI Module)
   │     │     └──> Nạp scripts: index3.js (Logic trộn câu hỏi, chấm điểm, tự luận)
   │     │
   │     └──> index3667.html (Thiệp chúc mừng 20/10 Interactive)
   │           └──> Tự động tạo âm thanh via Web Audio API & Canvas Audio Visualizer
   │
   ├──> Danh mục tệp module phụ trợ Tiếng Anh (Unit 1 - Unit 3):
   │     ├──> index5_u1.html <──> index5_u1.js (Vocabulary & Grammar Unit 1)
   │     ├──> index5_u2.html <──> index5_u2.js (Vocabulary & Grammar Unit 2)
   │     └──> index5_u3.html <──> index5_u3.js (Vocabulary & Grammar Unit 3)
   │
   ├──> Danh mục tệp trắc nghiệm & tự luận mở rộng môn Tin Học:
   │     ├──> index3_p1.html <──> index3_p1.js (Chủ đề 1: Máy tính & Cộng đồng)
   │     ├──> index3_p2.html <──> index3_p2.js (Chủ đề 2: Tổ chức lưu trữ & Tự luận)
   │     ├──> index3_p3.html <──> index3_p3.js (Chủ đề 3: Đạo đức & Văn hóa số)
   │     └──> index3_p4.html <──> index3_p4.js (Chủ đề 4: Thuật toán & Đề tổng hợp)
   │
   ├──> Danh mục tệp đề thi & đáp án mở rộng Ngữ Văn:
   │     ├──> index4_p1.html (Đề trắc nghiệm đọc hiểu tổng hợp)
   │     ├──> index4_p2.html (Hướng dẫn viết đoạn văn nghị luận)
   │     └──> index4_p3.html (Đề luyện tập Giữa kỳ I)
   │
   └──> Tệp tài nguyên dùng chung & Module bổ trợ:
         ├──> assets/css/glassmorphism.css (Phong cách thiết kế Liquid Glass)
         ├──> assets/css/main.css (Style nền tảng toàn bộ ứng dụng)
         ├──> assets/js/audio_engine.js (Trình xử lý âm thanh tự động)
         ├──> assets/js/effects.js (Hiệu ứng pháo hoa, cánh hoa rơi)
         ├──> README.md (Tài liệu hệ thống do CHISAKI167 thiết lập)
         └──> package.json / server.js (Cấu hình chạy thử local server nếu có)
3. Chi Tiết Chức Năng & Cách Xử Lý Hàm Của 31 TệpSTTTên TệpVai Trò & Chức Năng ChínhLogic Xử Lý Hàm & Thành Phần Kỹ Thuật1index.htmlTrang điều hướng trung tâmĐịnh tuyến người dùng tới các môn ôn tập Ngữ Văn, Tiếng Anh, Tin Học và Thiệp 20/10.2index4.htmlÔn tập Ngữ Văn 8 (Chính)Hiển thị nội dung kiến thức bài Qua Đèo Ngang, Vọng Nguyệt, các dạng bài tập đọc hiểu và đoạn văn mẫu.3index4_p1.htmlNgữ Văn 8 - Phần 1Bộ câu hỏi đọc hiểu thơ thất ngôn bát cú đường luật.4index4_p2.htmlNgữ Văn 8 - Phần 2Hướng dẫn phân tích bài thơ Qua Đèo Ngang và gợi ý dàn ý chi tiết.5index4_p3.htmlNgữ Văn 8 - Phần 3Đề luyện tập tổng hợp và viết đoạn văn ghi lại cảm nghĩ.6index5.htmlTiếng Anh 8 (Giao diện chính)Khung giao diện chứa bộ thẻ từ vựng IPA, bài tập ngữ pháp Unit 1-3.7index5.jsLogic Tiếng Anh 8 (Chính)Chứa danh sách mảng questions[], hàm renderQuiz(), checkAnswer(), calculateScore().8index5_u1.htmlTiếng Anh 8 - Unit 1 UIBài tập chuyên sâu Unit 1: Leisure Time.9index5_u1.jsLogic Tiếng Anh Unit 1Hàm xử lý trắc nghiệm chọn từ có âm phát âm khác (/ʊ/ và /uː/).10index5_u2.htmlTiếng Anh 8 - Unit 2 UIBài tập chuyên sâu Unit 2: Life in the Countryside.11index5_u2.jsLogic Tiếng Anh Unit 2Hàm kiểm tra ngữ pháp so sánh hơn của trạng từ (more quickly, faster).12index5_u3.htmlTiếng Anh 8 - Unit 3 UIBài tập chuyên sâu Unit 3: Teenagers.13index5_u3.jsLogic Tiếng Anh Unit 3Hàm xử lý câu hỏi về từ vựng chủ đề áp lực học tập và mạng xã hội.14index3.htmlTin Học 8 (Giao diện chính)Giao diện thi trắc nghiệm và câu hỏi tự luận Giữa kỳ I.15index3.jsLogic Tin Học 8 (Chính)Xử lý hàm shuffleArray() xáo trộn câu hỏi, submitExam() chấm điểm động và hiển thị giải thích.16index3_p1.htmlTin Học 8 - Chủ đề 1 UITrắc nghiệm Lịch sử phát triển máy tính & Lớp không gian mạng.17index3_p1.jsLogic Tin Học Chủ đề 1Quản lý dữ liệu mảng câu hỏi Chủ đề 1 và tính phần trăm chính xác.18index3_p2.htmlTin Học 8 - Chủ đề 2 UITrắc nghiệm & Tự luận Tổ chức lưu trữ dữ liệu.19index3_p2.jsLogic Tin Học Chủ đề 2Hàm kiểm tra đáp án tự luận khớp từ khóa (keyword matching).20index3_p3.htmlTin Học 8 - Chủ đề 3 UIBài tập Đạo đức, văn hóa và pháp luật trong môi trường số.21index3_p3.jsLogic Tin Học Chủ đề 3Hàm xử lý tình huống ứng xử trên không gian mạng.22index3_p4.htmlTin Học 8 - Chủ đề 4 UIBài tập Thuật toán và giải quyết vấn đề.23index3_p4.jsLogic Tin Học Chủ đề 4Hàm mô phỏng các bước chạy thuật toán tìm kiếm/sắp xếp.24index3667.htmlThiệp chúc mừng 20/10/2026Ứng dụng thiệp động Liquid Glass, bó hoa 3D, hiệu ứng pháo hoa, cánh hoa rơi và âm thanh tổng hợp.25assets/css/glassmorphism.cssCSS Liquid Glass UIĐịnh nghĩa backdrop-filter: blur(), hiệu ứng phản quang kính và hiệu ứng nổi 3D.26assets/css/main.cssCSS Tổng hợpThiết lập layout Responsive (Grid/Flexbox), Typography và Animation.27assets/js/audio_engine.jsXử lý âm thanhSử dụng AudioContext phát giai điệu nhạc tự động không cần tệp .mp3 ngoại ứng.28assets/js/effects.jsHiệu ứng CanvasXử lý Canvas 2D render hạt pháo hoa, quỹ đạo cánh hoa rơi ngẫu nhiên.29server.jsNode.js Express ServerServer tĩnh (Static File Server) phục vụ xem trước local.30package.jsonKhai báo dự ánQuản lý phụ thuộc và các câu lệnh npm start / npm run dev.31README.mdTài liệu dự án chínhTài liệu mô tả toàn bộ cấu trúc hệ thống do CHISAKI167 lập.4. Logic Toàn Bộ Mã Nguồn (System Logic & Architecture)Khởi Tạo Giao Diện & Điều Huống (Initialization Phase):Khi người dùng truy cập index.html, hệ thống hiển thị bảng chọn môn học.Khi chọn một môn, hệ thống chuyển hướng đến tệp tương ứng (index4.html, index5.html, index3.html, hoặc index3667.html).Xử Lý Dữ Liệu Tương Tác Trắc Nghiệm (Quiz Logic Phase):Khi tệp JS (index3.js, index5.js, ...) nạp xong, hàm initQuiz() kích hoạt:Gọi shuffleArray(questions) để xáo trộn câu hỏi và đáp án nhằm tránh học vẹt.Tạo động các phần tử HTML (Radio Buttons, Labels) chèn vào DOM.Khi người dùng chọn đáp án và bấm Nộp Bài:Hàm checkAnswer() so sánh lựa chọn của người dùng với field correctIndex.Hàm calculateScore() tính tổng số câu đúng, hiển thị điểm số, huy hiệu khen thưởng và giải thích chi tiết cho từng câu.Logic Thiệp Động & Xử Lý Hiệu Ứng (Interactive Card Phase - index3667.html):Khi người dùng tương tác mở thiệp:effects.js khởi tạo requestAnimationFrame() vẽ liên tục hạt cánh hoa rơi và pháo hoa trên Canvas.audio_engine.js sử dụng Web Audio API tạo tần số nốt nhạc synthesized audio mượt mà.🇬🇧 ENGLISH1. Project Overview & AuthorProject Title: Revision 8 (On-Tap-8)Author / Ownership: CHISAKI167Purpose: An interactive educational web application designed for 8th-grade curriculum review (Literature, English, Computer Science) alongside an advanced interactive 20/10 greeting card app utilizing Liquid Glass UI, petal/firework physics engines, and synthesized audio.2. File Navigation & Dependency StructureThe flow chart below illustrates page transitions and asset dependencies across all 31 project files:[Main Entry Point]
   ├──> index.html (Main Navigation Portal)
   │     ├──> index4.html (Literature 8 Module)
   │     │     ├──> Solutions & Reading Comprehension "Qua Deo Ngang"
   │     │     └──> Analysis & Context for "Vong Nguyet" (Ho Chi Minh)
   │     │
   │     ├──> index5.html (English 8 - Main UI)
   │     │     └──> Loads Script: index5.js (IPA Phonetics, Vocabulary & Grammar)
   │     │
   │     ├──> index3.html (Computer Science 8 - Main UI)
   │     │     └──> Loads Script: index3.js (Question Shuffling, Grading & Essay Checks)
   │     │
   │     └──> index3667.html (Interactive Greeting Card 20/10)
   │           └──> Synthesizes background audio via Web Audio API & Canvas Visuals
   │
   ├──> English Units Sub-modules (Unit 1 - Unit 3):
   │     ├──> index5_u1.html <──> index5_u1.js (Vocabulary & Grammar Unit 1)
   │     ├──> index5_u2.html <──> index5_u2.js (Vocabulary & Grammar Unit 2)
   │     └──> index5_u3.html <──> index5_u3.js (Vocabulary & Grammar Unit 3)
   │
   ├──> Computer Science Extended Modules:
   │     ├──> index3_p1.html <──> index3_p1.js (Topic 1: Computers & Society)
   │     ├──> index3_p2.html <──> index3_p2.js (Topic 2: Data Storage & Essays)
   │     ├──> index3_p3.html <──> index3_p3.js (Topic 3: Digital Ethics & Culture)
   │     └──> index3_p4.html <──> index3_p4.js (Topic 4: Algorithms & Comprehensive Test)
   │
   ├──> Literature Extended Exam Modules:
   │     ├──> index4_p1.html (Comprehension Multiple Choice Sets)
   │     ├──> index4_p2.html (Argumentative Essay Writing Guides)
   │     └──> index4_p3.html (Mid-term Practice Exams)
   │
   └──> Shared Assets & Helper Modules:
         ├──> assets/css/glassmorphism.css (Liquid Glass UI Styles)
         ├──> assets/css/main.css (Base Layout Styles)
         ├──> assets/js/audio_engine.js (Web Audio API Synthesizer)
         ├──> assets/js/effects.js (Canvas Fireworks & Falling Petals Engine)
         ├──> README.md (System Documentation maintained by CHISAKI167)
         └──> package.json / server.js (Local Server Setup)
3. Comprehensive File Functionality & Method Analysis (31 Files)No.FilenamePrimary Role & ResponsibilitiesProcessing Logic & Technical Specifications1index.htmlPortal Navigation PageRoutes users to Literature, English, Computer Science, or Greeting Card modules.2index4.htmlLiterature 8 (Main)Renders comprehension content for Qua Deo Ngang, Vong Nguyet, sample essays.3index4_p1.htmlLiterature 8 - Part 1Question sets targeting classical Tang poem structure and analysis.4index4_p2.htmlLiterature 8 - Part 2Guided analysis breakdown for Qua Deo Ngang with structured outlines.5index4_p3.htmlLiterature 8 - Part 3Practice exams and narrative/reflective paragraph prompts.6index5.htmlEnglish 8 (Main UI)Main container for IPA phonetic cards and grammar exercises for Units 1-3.7index5.jsEnglish 8 Logic (Main)Holds questions[] array, handles renderQuiz(), checkAnswer(), and calculateScore().8index5_u1.htmlEnglish 8 - Unit 1 UISpecialized practice for Unit 1: Leisure Time.9index5_u1.jsEnglish Unit 1 LogicPhonetic discrimination functions distinguishing /ʊ/ and /uː/ sound patterns.10index5_u2.htmlEnglish 8 - Unit 2 UISpecialized practice for Unit 2: Life in the Countryside.11index5_u2.jsEnglish Unit 2 LogicEvaluates comparative form rules for adverbs (more quickly, faster).12index5_u3.htmlEnglish 8 - Unit 3 UISpecialized practice for Unit 3: Teenagers.13index5_u3.jsEnglish Unit 3 LogicHandles vocabulary exercises related to social pressure and digital networking.14index3.htmlComputer Science 8 (Main UI)Exam interface for Mid-term I multiple choice and essay questions.15index3.jsCS 8 Logic (Main)Implements shuffleArray() for dynamic questions, submitExam() for instant scoring and explanations.16index3_p1.htmlCS 8 - Topic 1 UIExercises covering computer history and cyber-space layers.17index3_p1.jsCS Topic 1 LogicManages topic-specific question arrays and tracks percentage accuracy.18index3_p2.htmlCS 8 - Topic 2 UIData storage organization and short-answer essay inputs.19index3_p2.jsCS Topic 2 LogicEvaluates essay responses using keyword pattern matching.20index3_p3.htmlCS 8 - Topic 3 UIDigital ethics, law, and culture scenarios.21index3_p3.jsCS Topic 3 LogicProcesses situational choices regarding cyber ethics.22index3_p4.htmlCS 8 - Topic 4 UIAlgorithm problem-solving and logic flowcharts.23index3_p4.jsCS Topic 4 LogicSimulates step-by-step sorting/searching algorithms.24index3667.htmlInteractive 20/10 Card3D flower bouquet greeting card with Liquid Glass UI, particle systems, and web audio.25assets/css/glassmorphism.cssLiquid Glass StylingDefines backdrop-filter: blur(), specular reflections, and depth shadows.26assets/css/main.cssCore StylesheetResponsive layouts (Flexbox/Grid), typography, and keyframe animations.27assets/js/audio_engine.jsWeb Audio EngineGenerates audio waveforms without relying on external .mp3 assets.28assets/js/effects.jsCanvas Render Engine2D Canvas engine managing firework particles and falling petal physics.29server.jsNode.js Express ServerLocal static web server script for project previews.30package.jsonProject ConfigManages project dependencies and launch scripts (npm start).31README.mdCore DocumentationProject architecture documentation authored by CHISAKI167.4. Overall Code Logic & Execution ArchitectureRouting & Initialization Phase:User enters index.html and chooses a discipline or module.Navigates seamlessly to the target document (index4.html, index5.html, index3.html, or index3667.html).Quiz Execution & Scoring Phase:Attached JavaScript modules execute initQuiz().shuffleArray() randomizes question sequence to prevent memorization bias.Dynamic DOM generation injects choices and event listeners.Upon submitting, checkAnswer() evaluates choices, calculates scores, displays achievement badges, and presents feedback.Greeting Card & Animation Engine Phase (index3667.html):User interaction triggers the canvas loop inside effects.js.requestAnimationFrame() continuously computes particle positions (fireworks and floating petals).audio_engine.js initiates melodic synthesis via Web Audio API oscillators.