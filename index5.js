let currentUnit = 'unit1';

const vocabGlossary = {
    unit1: [
        { word: "balance", type: "n", ipa: "/ˈbæləns/", meaning: "sự thăng bằng, sự cân bằng" },
        { word: "bracelet", type: "n", ipa: "/ˈbreɪslət/", meaning: "vòng đeo tay" },
        { word: "crazy", type: "adj", ipa: "/ˈkreɪzi/", meaning: "rất thích, quá say mê" },
        { word: "cruel", type: "adj", ipa: "/ˈkruːəl/", meaning: "độc ác" },
        { word: "detest", type: "v", ipa: "/dɪˈtest/", meaning: "căm ghét" },
        { word: "DIY (do-it-yourself)", type: "n", ipa: "/ˌdiː aɪ ˈwaɪ/", meaning: "hoạt động tự làm ra, sửa chữa đồ vật" },
        { word: "fancy", type: "v", ipa: "/ˈfænsi/", meaning: "mến, thích" },
        { word: "fold", type: "v", ipa: "/fəʊld/", meaning: "gấp, gập" },
        { word: "fond", type: "adj", ipa: "/fɒnd/", meaning: "mến, thích" },
        { word: "keen", type: "adj", ipa: "/kiːn/", meaning: "say mê, ham thích" },
        { word: "keep in touch", type: "", ipa: "/kiːp ɪn tʌtʃ/", meaning: "giữ liên lạc (với ai)" },
        { word: "kit", type: "n", ipa: "/kɪt/", meaning: "bộ đồ nghề" },
        { word: "leisure", type: "n", ipa: "/ˈleʒər/", meaning: "thời gian rảnh rỗi" },
        { word: "message", type: "v, n", ipa: "/ˈmesɪdʒ/", meaning: "gửi tin nhắn; tin nhắn" },
        { word: "muscle", type: "n", ipa: "/ˈmʌsl/", meaning: "cơ bắp" },
        { word: "origami", type: "n", ipa: "/ˌɒrɪˈɡɑːmi/", meaning: "nghệ thuật gấp giấy Nhật Bản" },
        { word: "the outdoors", type: "n", ipa: "/ði ˌaʊtˈdɔːz/", meaning: "vùng thôn quê, ngoài trời" },
        { word: "prefer", type: "v", ipa: "/prɪˈfɜːr/", meaning: "thích hơn" },
        { word: "puzzle", type: "n", ipa: "/ˈpʌzl/", meaning: "trò chơi câu đố / giải đố" },
        { word: "resort", type: "n", ipa: "/rɪˈzɔːt/", meaning: "khu nghỉ dưỡng" },
        { word: "snowboarding", type: "n", ipa: "/ˈsnəʊbɔːdɪŋ/", meaning: "trượt tuyết bằng ván" },
        { word: "stay in shape", type: "", ipa: "/steɪ ɪn ʃeɪp/", meaning: "giữ dáng" }
    ],
    unit2: [
        { word: "catch", type: "v", ipa: "/kætʃ/", meaning: "đánh được, câu được (cá)" },
        { word: "cattle", type: "n", ipa: "/ˈkætl/", meaning: "gia súc" },
        { word: "combine harvester", type: "n", ipa: "/kəmˈbaɪn ˈhɑːvɪstər/", meaning: "máy gặt đập liên hợp" },
        { word: "crop", type: "n", ipa: "/krɒp/", meaning: "vụ, mùa" },
        { word: "cultivate", type: "v", ipa: "/ˈkʌltɪveɪt/", meaning: "trồng trọt" },
        { word: "dry", type: "v", ipa: "/draɪ/", meaning: "phơi khô, sấy khô" },
        { word: "feed", type: "v", ipa: "/fiːd/", meaning: "cho ăn" },
        { word: "ferry", type: "n", ipa: "/ˈferi/", meaning: "phà" },
        { word: "harvest", type: "n, v", ipa: "/ˈhɑːvɪst/", meaning: "vụ thu hoạch, vụ gặt; thu hoạch" },
        { word: "herd", type: "v", ipa: "/hɜːd/", meaning: "chăn giữ vật nuôi" },
        { word: "hospitable", type: "adj", ipa: "/hɒˈspɪtəbl/", meaning: "mến khách, hiếu khách" },
        { word: "lighthouse", type: "n", ipa: "/ˈlaɪthaʊs/", meaning: "đèn biển, hải đăng" },
        { word: "load", type: "v", ipa: "/ləʊd/", meaning: "chất, chở" },
        { word: "milk", type: "v", ipa: "/mɪlk/", meaning: "vắt sữa" },
        { word: "orchard", type: "n", ipa: "/ˈɔːtʃəd/", meaning: "vườn cây ăn quả" },
        { word: "paddy field", type: "n", ipa: "/ˈpædi fiːld/", meaning: "ruộng lúa" },
        { word: "picturesque", type: "adj", ipa: "/ˌpɪktʃəˈresk/", meaning: "đẹp, hấp dẫn (phong cảnh)" },
        { word: "plough", type: "v", ipa: "/plaʊ/", meaning: "cày (thửa ruộng)" },
        { word: "stretch", type: "v", ipa: "/stretʃ/", meaning: "kéo dài ra" },
        { word: "unload", type: "v", ipa: "/ˌʌnˈləʊd/", meaning: "dỡ hàng" },
        { word: "vast", type: "adj", ipa: "/vɑːst/", meaning: "rộng lớn, mênh mông, bao la" },
        { word: "well-trained", type: "adj", ipa: "/ˌwel ˈtreɪnd/", meaning: "lành nghề, có tay nghề" }
    ],
    unit3: [
        { word: "account", type: "n", ipa: "/əˈkaʊnt/", meaning: "tài khoản" },
        { word: "browse", type: "v", ipa: "/braʊz/", meaning: "đọc lướt, tìm (trên mạng)" },
        { word: "bully", type: "n", ipa: "/ˈbʊli/", meaning: "người bắt nạt" },
        { word: "bullying", type: "n", ipa: "/ˈbʊliɪŋ/", meaning: "sự bắt nạt" },
        { word: "concentrate", type: "v", ipa: "/ˈkɒnsntreɪt/", meaning: "tập trung (vào)" },
        { word: "connect", type: "v", ipa: "/kəˈnekt/", meaning: "kết nối" },
        { word: "craft", type: "n", ipa: "/krɑːft/", meaning: "(nghề, đồ, kỹ nghệ) thủ công" },
        { word: "enjoyable", type: "adj", ipa: "/ɪnˈdʒɔɪəbl/", meaning: "thú vị, gây hứng thú" },
        { word: "expectation", type: "n", ipa: "/ˌekspekˈteɪʃn/", meaning: "sự mong chờ, kỳ vọng" },
        { word: "focused", type: "adj", ipa: "/ˈfəʊkəst/", meaning: "chuyên tâm, tập trung" },
        { word: "forum", type: "n", ipa: "/ˈfɔːrəm/", meaning: "diễn đàn" },
        { word: "log (on to)", type: "v", ipa: "/lɒɡ ɒn tuː/", meaning: "đăng nhập" },
        { word: "mature", type: "adj", ipa: "/məˈtʃʊər/", meaning: "chín chắn, trưởng thành" },
        { word: "media", type: "n", ipa: "/ˈmiːdiə/", meaning: "(phương tiện) truyền thông" },
        { word: "midterm", type: "adj", ipa: "/ˌmɪdˈtɜːm/", meaning: "giữa kỳ" },
        { word: "notification", type: "n", ipa: "/ˌnəʊtɪfɪˈkeɪʃn/", meaning: "sự thông báo" },
        { word: "peer", type: "n", ipa: "/pɪər/", meaning: "người ngang hàng, bạn đồng lứa" },
        { word: "pressure", type: "n", ipa: "/ˈpreʃər/", meaning: "áp lực" },
        { word: "schoolwork", type: "n", ipa: "/ˈskuːlwɜːk/", meaning: "bài làm trên lớp" },
        { word: "session", type: "n", ipa: "/ˈseʃn/", meaning: "tiết học" },
        { word: "stress", type: "n", ipa: "/stres/", meaning: "căng thẳng" },
        { word: "stressful", type: "adj", ipa: "/ˈstresfl/", meaning: "căng thẳng, tạo áp lực" },
        { word: "upload", type: "v", ipa: "/ˌʌpˈləʊd/", meaning: "tải lên" },
        { word: "user-friendly", type: "adj", ipa: "/ˌjuːzə ˈfrendli/", meaning: "thân thiện với người dùng, dễ dùng" },
        { word: "website", type: "n", ipa: "/ˈwebsaɪt/", meaning: "trang mạng" }
    ]
};

const unitsData = {
    unit1: {
        title: 'Unit 1: Leisure Time (/ʊ/ vs /uː/)',
        col1Name: '/ʊ/',
        col2Name: '/uː/',
        col1Sub: 'u ngắn',
        col2Sub: 'u dài',
        words: [
            { id: 1, word: 'cook', sound: 'col1', ipa: '/kʊk/' },
            { id: 2, word: 'group', sound: 'col2', ipa: '/ɡruːp/' },
            { id: 3, word: 'push', sound: 'col1', ipa: '/pʊʃ/' },
            { id: 4, word: 'June', sound: 'col2', ipa: '/dʒuːn/' },
            { id: 5, word: 'school', sound: 'col2', ipa: '/skuːl/' },
            { id: 6, word: 'would', sound: 'col1', ipa: '/wʊd/' },
            { id: 7, word: 'woman', sound: 'col1', ipa: '/ˈwʊm.ən/' },
            { id: 8, word: 'move', sound: 'col2', ipa: '/muːv/' }
        ],
        tipsHTML: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px;">
                <div class="card" style="margin-bottom: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="width: 44px; height: 44px; background: rgba(245,158,11,0.2); color: #FCD34D; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.25rem; border-radius: 12px;">/ʊ/</span>
                            <div>
                                <h3 style="font-size: 1.05rem; font-weight: 700; color: #FFFFFF;">Âm "u" ngắn</h3>
                                <p style="font-size: 0.75rem; color: #F59E0B; font-weight: 600;">Short Vowel</p>
                            </div>
                        </div>
                        <button onclick="speakText('cook push would woman')" class="glassBtn" style="height: 36px; padding: 0 12px; background: rgba(245,158,11,0.15);">
                            <i class="fa-solid fa-volume-high"></i> Nghe
                        </button>
                    </div>
                    <div style="margin-top: 14px; font-size: 0.9rem; color: #E2E8F0; display: flex; flex-direction: column; gap: 8px;">
                        <p><strong>Khẩu hình:</strong> Môi hơi tròn, mở nhẹ. Lưỡi hạ thấp. Âm phát ra dứt khoát.</p>
                        <p><strong>Mẹo nghe:</strong> Phát âm gần giống tiếng "ư" nhẹ lai với "u".</p>
                        <div style="background: rgba(245,158,11,0.1); padding: 10px; border-radius: 10px; font-size: 0.8rem; border: 1px solid rgba(245,158,11,0.2);">
                            <p style="font-weight: 700; color: #FCD34D; margin-bottom: 2px;">Dấu hiệu nhận biết:</p>
                            <p>• "oo" + k/d/t/p: <i>cook, book, foot, good</i></p>
                            <p>• "u" ngắn: <i>push, put, pull, full</i></p>
                            <p>• "ou": <i>would, could, should</i> | Đặc biệt: <i>woman</i></p>
                        </div>
                    </div>
                </div>

                <div class="card" style="margin-bottom: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="width: 44px; height: 44px; background: rgba(59,130,246,0.2); color: #93C5FD; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.25rem; border-radius: 12px;">/uː/</span>
                            <div>
                                <h3 style="font-size: 1.05rem; font-weight: 700; color: #FFFFFF;">Âm "u" dài</h3>
                                <p style="font-size: 0.75rem; color: #60A5FA; font-weight: 600;">Long Vowel</p>
                            </div>
                        </div>
                        <button onclick="speakText('school June group move')" class="glassBtn" style="height: 36px; padding: 0 12px; background: rgba(59,130,246,0.15);">
                            <i class="fa-solid fa-volume-high"></i> Nghe
                        </button>
                    </div>
                    <div style="margin-top: 14px; font-size: 0.9rem; color: #E2E8F0; display: flex; flex-direction: column; gap: 8px;">
                        <p><strong>Khẩu hình:</strong> Môi chu ra tròn nhất có thể (như huýt sáo), kéo dài hơi.</p>
                        <p><strong>Mẹo nghe:</strong> Âm "u..." ngân dài sâu trong cổ họng.</p>
                        <div style="background: rgba(59,130,246,0.1); padding: 10px; border-radius: 10px; font-size: 0.8rem; border: 1px solid rgba(59,130,246,0.2);">
                            <p style="font-weight: 700; color: #93C5FD; margin-bottom: 2px;">Dấu hiệu nhận biết:</p>
                            <p>• "oo": <i>school, food, moon, cool</i></p>
                            <p>• "u_e": <i>June, rule, rude</i> | "ou/ue/ew": <i>group, blue, new</i></p>
                            <p>• Trường hợp đặc biệt: <i>move, do, who</i></p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        grammarHTML: `
            <div style="display: flex; flex-direction: column; gap: 18px;">
                <div class="card" style="margin-bottom: 0;">
                    <h3 class="question-title" style="color: #60A5FA; font-size: 1.1rem;"><i class="fa-solid fa-heart" style="color: #EF4444;"></i> 1. Verbs of liking / disliking (Động từ chỉ sự yêu/ghét)</h3>
                    <div class="essay-content" style="display: flex; flex-direction: column; gap: 12px;">
                        <p>Để nói về sở thích hoặc hoạt động thời gian rảnh, ta dùng các động từ chỉ cảm xúc kết hợp với <strong>V-ing</strong> hoặc <strong>To-V</strong>.</p>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
                            <div style="background: rgba(59,130,246,0.1); padding: 14px; border-radius: 12px; border: 1px solid rgba(59,130,246,0.2);">
                                <p style="font-weight: 700; color: #93C5FD; margin-bottom: 4px;">A. Theo sau bởi V-ing (Danh động từ):</p>
                                <p style="font-size: 0.82rem; color: var(--muted); margin-bottom: 6px;">Áp dụng cho: <em>fancy, enjoy, detest, mind, avoid, practice</em></p>
                                <div class="math-box" style="margin-top: 0; font-size: 0.82rem;"><strong>S + Verb (liking) + V-ing + ...</strong></div>
                                <p style="font-size: 0.85rem; margin-top: 6px;">• She <strong>fancies messaging</strong> her friends.</p>
                            </div>
                            <div style="background: rgba(168,85,247,0.1); padding: 14px; border-radius: 12px; border: 1px solid rgba(168,85,247,0.2);">
                                <p style="font-weight: 700; color: #D8B4FE; margin-bottom: 4px;">B. Đi cùng cả V-ing hoặc To-V (Không đổi nghĩa):</p>
                                <p style="font-size: 0.82rem; color: var(--muted); margin-bottom: 6px;">Áp dụng cho: <em>like, love, hate, prefer</em></p>
                                <div class="math-box" style="margin-top: 0; font-size: 0.82rem; background: rgba(168,85,247,0.15); border-left-color: #A855F7;"><strong>S + Verb + V-ing / To-Infinitive</strong></div>
                                <p style="font-size: 0.85rem; margin-top: 6px;">• He <strong>likes playing</strong> = <strong>like to play</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        quiz: [
            { q: "1. Từ nào có âm gạch chân phát âm là /ʊ/ (u ngắn)?", options: ["food", "school", "cook", "June"], answer: 2, explain: "cook (/kʊk/) có âm /ʊ/, còn lại là /uː/." },
            { q: "2. Từ nào phát âm khác với ba từ còn lại?", options: ["woman", "group", "push", "would"], answer: 1, explain: "group phát âm là /ɡruːp/ (/uː/), 3 từ còn lại là /ʊ/." },
            { q: "3. [Ngữ Pháp] My sister enjoys ______ origami in her free time.", options: ["fold", "folding", "to fold", "folded"], answer: 1, explain: "Sau động từ 'enjoy' ta dùng V-ing ➔ folding." },
            { q: "4. [Ngữ Pháp] He is very keen ______ playing board games with us.", options: ["on", "in", "at", "about"], answer: 0, explain: "Cấu trúc: be keen on + V-ing." },
            { q: "5. [Ngữ Pháp] She detests ______ early on Sunday morning.", options: ["get up", "to get up", "getting up", "gets up"], answer: 2, explain: "Sau động từ 'detest' (ghét) luôn đi với V-ing ➔ getting up." }
        ]
    },

    unit2: {
        title: 'Unit 2: Life in the Countryside (/ə/ vs /ɪ/)',
        col1Name: '/ə/',
        col2Name: '/ɪ/',
        col1Sub: 'âm Schwa yếu',
        col2Sub: 'âm i ngắn',
        words: [
            { id: 101, word: 'activity', sound: 'col1', ipa: '/ækˈtɪv.ə.ti/' },
            { id: 102, word: 'hospitable', sound: 'col1', ipa: '/hɒˈspɪt.ə.bəl/' },
            { id: 103, word: 'garden', sound: 'col1', ipa: '/ˈɡɑː.dən/' },
            { id: 104, word: 'picturesque', sound: 'col1', ipa: '/ˌpɪk.tʃərˈesk/' },
            { id: 105, word: 'collect', sound: 'col1', ipa: '/kəˈlekt/' },
            { id: 106, word: 'pick', sound: 'col2', ipa: '/pɪk/' },
            { id: 107, word: 'village', sound: 'col2', ipa: '/ˈvɪl.ɪdʒ/' },
            { id: 108, word: 'harvest', sound: 'col2', ipa: '/ˈhɑː.vɪst/' },
            { id: 109, word: 'busy', sound: 'col2', ipa: '/ˈbɪz.i/' },
            { id: 110, word: 'cottage', sound: 'col2', ipa: '/ˈkɒt.ɪdʒ/' }
        ],
        tipsHTML: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px;">
                <div class="card" style="margin-bottom: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="width: 44px; height: 44px; background: rgba(245,158,11,0.2); color: #FCD34D; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.25rem; border-radius: 12px;">/ə/</span>
                            <div>
                                <h3 style="font-size: 1.05rem; font-weight: 700; color: #FFFFFF;">Âm Schwa (/ə/)</h3>
                                <p style="font-size: 0.75rem; color: #F59E0B; font-weight: 600;">Unstressed Vowel</p>
                            </div>
                        </div>
                        <button onclick="speakText('activity hospitable garden picturesque collect')" class="glassBtn" style="height: 36px; padding: 0 12px; background: rgba(245,158,11,0.15);">
                            <i class="fa-solid fa-volume-high"></i> Nghe
                        </button>
                    </div>
                    <div style="margin-top: 14px; font-size: 0.9rem; color: #E2E8F0; display: flex; flex-direction: column; gap: 8px;">
                        <p><strong>Đặc điểm:</strong> Âm ngắn và yếu nhất trong tiếng Anh. Luôn xuất hiện ở <strong>ÂM TIẾT KHÔNG NHẤN TRỌNG ÂM</strong>.</p>
                        <p><strong>Cách đọc:</strong> Thả lỏng cơ miệng, phát âm nhẹ như "ơ" rất ngắn.</p>
                        <div style="background: rgba(245,158,11,0.1); padding: 10px; border-radius: 10px; font-size: 0.8rem; border: 1px solid rgba(245,158,11,0.2);">
                            <p style="font-weight: 700; color: #FCD34D; margin-bottom: 2px;">Dấu hiệu nhận biết:</p>
                            <p>• hospit<b>a</b>ble, gard<b>e</b>n, activ<b>i</b>ty, c<b>o</b>llect</p>
                        </div>
                    </div>
                </div>

                <div class="card" style="margin-bottom: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="width: 44px; height: 44px; background: rgba(59,130,246,0.2); color: #93C5FD; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.25rem; border-radius: 12px;">/ɪ/</span>
                            <div>
                                <h3 style="font-size: 1.05rem; font-weight: 700; color: #FFFFFF;">Âm /ɪ/ ngắn</h3>
                                <p style="font-size: 0.75rem; color: #60A5FA; font-weight: 600;">Short I Sound</p>
                            </div>
                        </div>
                        <button onclick="speakText('pick village harvest busy cottage')" class="glassBtn" style="height: 36px; padding: 0 12px; background: rgba(59,130,246,0.15);">
                            <i class="fa-solid fa-volume-high"></i> Nghe
                        </button>
                    </div>
                    <div style="margin-top: 14px; font-size: 0.9rem; color: #E2E8F0; display: flex; flex-direction: column; gap: 8px;">
                        <p><strong>Cách đọc:</strong> Miệng hơi mở, lưỡi nhô cao, phát âm ngắn lai giữa "i" và "ê".</p>
                        <p><strong>Mẹo nhận biết:</strong> Các hậu tố <strong>-age</strong>, <strong>-est</strong> thường phát âm là /ɪ/.</p>
                        <div style="background: rgba(59,130,246,0.1); padding: 10px; border-radius: 10px; font-size: 0.8rem; border: 1px solid rgba(59,130,246,0.2);">
                            <p style="font-weight: 700; color: #93C5FD; margin-bottom: 2px;">Dấu hiệu nhận biết:</p>
                            <p>• p<b>i</b>ck, vill<b>a</b>ge, harv<b>e</b>st, b<b>u</b>sy, cott<b>a</b>ge</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        grammarHTML: `
            <div style="display: flex; flex-direction: column; gap: 18px;">
                <div class="card" style="margin-bottom: 0;">
                    <h3 class="question-title" style="color: #10B981; font-size: 1.1rem;"><i class="fa-solid fa-arrow-up-right-dots"></i> 1. Comparative Adverbs (So sánh hơn của Trạng từ)</h3>
                    <div class="essay-content" style="display: flex; flex-direction: column; gap: 12px;">
                        <p>So sánh hơn của trạng từ dùng để so sánh cách thức hành động thực hiện giữa 2 đối tượng.</p>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
                            <div style="background: rgba(16,185,129,0.1); padding: 14px; border-radius: 12px; border: 1px solid rgba(16,185,129,0.2);">
                                <p style="font-weight: 700; color: #34D399; margin-bottom: 4px;">A. Trạng từ ngắn (1 âm tiết / tận cùng -y):</p>
                                <div class="math-box" style="margin-top: 0; font-size: 0.82rem; background: rgba(16,185,129,0.15); border-left-color: #10B981;"><strong>S1 + V + Adv-er + than + S2</strong></div>
                                <p style="font-size: 0.85rem; margin-top: 6px;">• Farmers work <strong>harder than</strong> city workers.</p>
                            </div>
                            <div style="background: rgba(6,182,212,0.1); padding: 14px; border-radius: 12px; border: 1px solid rgba(6,182,212,0.2);">
                                <p style="font-weight: 700; color: #67E8F9; margin-bottom: 4px;">B. Trạng từ dài (tận cùng -ly):</p>
                                <div class="math-box" style="margin-top: 0; font-size: 0.82rem; background: rgba(6,182,212,0.15); border-left-color: #06B6D4;"><strong>S1 + V + more + Adv + than + S2</strong></div>
                                <p style="font-size: 0.85rem; margin-top: 6px;">• People live <strong>more peacefully than</strong> in cities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        quiz: [
            { q: "1. Trong từ 'village', chữ 'a' ở hậu tố -age được phát âm là:", options: ["/ɑː/", "/æ/", "/ɪ/", "/e/"], answer: 2, explain: "Hậu tố -age trong 'village' phát âm là /ɪ/ (/ˈvɪl.ɪdʒ/)." },
            { q: "2. [Ngữ Pháp] A combine harvester loads rice ______ than a human worker.", options: ["faster", "more fast", "fastly", "more faster"], answer: 0, explain: "Trạng từ ngắn 'fast' có dạng so sánh hơn là 'faster'." },
            { q: "3. [Ngữ Pháp] Country children run ______ than city children in open fields.", options: ["freelier", "more freely", "freely", "freest"], answer: 1, explain: "Trạng từ dài 'freely' có dạng so sánh hơn là 'more freely'." },
            { q: "4. [Ngữ Pháp] He plays badminton ______ than he did last year.", options: ["gooder", "more well", "better", "best"], answer: 2, explain: "Trạng từ 'well' có dạng so sánh hơn bất quy tắc là 'better'." },
            { q: "5. Từ 'hospitable' theo chuẩn SGK nhấn trọng âm ở âm tiết thứ mấy?", options: ["Âm tiết 1", "Âm tiết 2", "Âm tiết 3", "Âm tiết 4"], answer: 1, explain: "Theo chuẩn UK và SGK Lớp 8, 'hospitable' nhấn âm 2 (/hɒˈspɪt.ə.bəl/)." }
        ]
    },

    unit3: {
        title: 'Unit 3: Teenagers (/ʊə/ vs /ɔɪ/)',
        col1Name: '/ʊə/',
        col2Name: '/ɔɪ/',
        col1Sub: 'nguyên âm đôi ua',
        col2Sub: 'nguyên âm đôi oi',
        words: [
            { id: 201, word: 'tourist', sound: 'col1', ipa: '/ˈtʊə.rɪst/' },
            { id: 202, word: 'ensure', sound: 'col1', ipa: '/ɪnˈʃʊər/' },
            { id: 203, word: 'sure', sound: 'col1', ipa: '/ʃʊər/' },
            { id: 204, word: 'tournament', sound: 'col1', ipa: '/ˈtʊə.nə.mənt/' },
            { id: 205, word: 'boy', sound: 'col2', ipa: '/bɔɪ/' },
            { id: 206, word: 'toy', sound: 'col2', ipa: '/tɔɪ/' },
            { id: 207, word: 'avoid', sound: 'col2', ipa: '/əˈvɔɪd/' },
            { id: 208, word: 'choice', sound: 'col2', ipa: '/tʃɔɪs/' }
        ],
        tipsHTML: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px;">
                <div class="card" style="margin-bottom: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="width: 44px; height: 44px; background: rgba(245,158,11,0.2); color: #FCD34D; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.25rem; border-radius: 12px;">/ʊə/</span>
                            <div>
                                <h3 style="font-size: 1.05rem; font-weight: 700; color: #FFFFFF;">Âm đôi /ʊə/</h3>
                                <p style="font-size: 0.75rem; color: #F59E0B; font-weight: 600;">Diphthong /ʊə/</p>
                            </div>
                        </div>
                        <button onclick="speakText('tourist ensure sure tournament')" class="glassBtn" style="height: 36px; padding: 0 12px; background: rgba(245,158,11,0.15);">
                            <i class="fa-solid fa-volume-high"></i> Nghe
                        </button>
                    </div>
                    <div style="margin-top: 14px; font-size: 0.9rem; color: #E2E8F0; display: flex; flex-direction: column; gap: 8px;">
                        <p><strong>Cách phát âm:</strong> Bắt đầu từ âm /ʊ/ chuyển nhanh sang âm schwa /ə/ (u-ơ / u-a).</p>
                        <div style="background: rgba(245,158,11,0.1); padding: 10px; border-radius: 10px; font-size: 0.8rem; border: 1px solid rgba(245,158,11,0.2);">
                            <p style="font-weight: 700; color: #FCD34D; margin-bottom: 2px;">Dấu hiệu nhận biết:</p>
                            <p>• <b>our</b>: t<b>our</b>ist, t<b>our</b>nament | <b>ure</b>: s<b>ure</b>, ens<b>ure</b></p>
                        </div>
                    </div>
                </div>

                <div class="card" style="margin-bottom: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="width: 44px; height: 44px; background: rgba(59,130,246,0.2); color: #93C5FD; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.25rem; border-radius: 12px;">/ɔɪ/</span>
                            <div>
                                <h3 style="font-size: 1.05rem; font-weight: 700; color: #FFFFFF;">Âm đôi /ɔɪ/</h3>
                                <p style="font-size: 0.75rem; color: #60A5FA; font-weight: 600;">Diphthong /ɔɪ/</p>
                            </div>
                        </div>
                        <button onclick="speakText('boy toy avoid choice')" class="glassBtn" style="height: 36px; padding: 0 12px; background: rgba(59,130,246,0.15);">
                            <i class="fa-solid fa-volume-high"></i> Nghe
                        </button>
                    </div>
                    <div style="margin-top: 14px; font-size: 0.9rem; color: #E2E8F0; display: flex; flex-direction: column; gap: 8px;">
                        <p><strong>Cách phát âm:</strong> Bắt đầu từ /ɔː/ chuyển sang /ɪ/ (tương tự vần "oi" tiếng Việt).</p>
                        <div style="background: rgba(59,130,246,0.1); padding: 10px; border-radius: 10px; font-size: 0.8rem; border: 1px solid rgba(59,130,246,0.2);">
                            <p style="font-weight: 700; color: #93C5FD; margin-bottom: 2px;">Dấu hiệu nhận biết:</p>
                            <p>• <b>oi</b>: av<b>oi</b>d, ch<b>oi</b>ce | <b>oy</b>: b<b>oy</b>, t<b>oy</b>, enj<b>oy</b></p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        grammarHTML: `
            <div style="display: flex; flex-direction: column; gap: 18px;">
                <div class="card" style="margin-bottom: 0;">
                    <h3 class="question-title" style="color: #A855F7; font-size: 1.1rem;"><i class="fa-solid fa-code-fork"></i> 1. Simple & Compound Sentences (Câu Đơn & Câu Ghép)</h3>
                    <div class="essay-content" style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
                            <div style="background: rgba(168,85,247,0.1); padding: 14px; border-radius: 12px; border: 1px solid rgba(168,85,247,0.2);">
                                <p style="font-weight: 700; color: #D8B4FE; margin-bottom: 4px;">A. Câu Đơn (Simple Sentence):</p>
                                <p style="font-size: 0.85rem;">Chỉ gồm 1 mệnh đề độc lập (1 Chủ ngữ & 1 Động từ chính).</p>
                            </div>
                            <div style="background: rgba(99,102,241,0.1); padding: 14px; border-radius: 12px; border: 1px solid rgba(99,102,241,0.2);">
                                <p style="font-weight: 700; color: #A5B4FC; margin-bottom: 4px;">B. Câu Ghép (Compound Sentence):</p>
                                <p style="font-size: 0.85rem;">Nối 2 mệnh đề độc lập bằng liên từ <strong>FANBOYS</strong> (For, And, Nor, But, Or, Yet, So) hoặc trạng từ liên kết.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        quiz: [
            { q: "1. Từ nào có âm gạch chân phát âm là /ɔɪ/?", options: ["tourist", "ensure", "choice", "sure"], answer: 2, explain: "choice (/tʃɔɪs/) chứa âm đôi /ɔɪ/." },
            { q: "2. [Ngữ Pháp] Teens should manage their time carefully; ______, they will feel stressed.", options: ["therefore", "however", "otherwise", "so"], answer: 2, explain: "'otherwise' nghĩa là 'nếu không thì' (chỉ hậu quả nếu không quản lý thời gian tốt)." },
            { q: "3. [Ngữ Pháp] Min studied hard for the test, ______ he got an A+.", options: ["so", "but", "however", "otherwise"], answer: 0, explain: "Dùng liên từ 'so' (vì vậy) để chỉ kết quả trong câu ghép." },
            { q: "4. [Ngữ Pháp] Mai is active in school activities; ______, her brother is quite shy.", options: ["therefore", "however", "so", "and"], answer: 1, explain: "'however' (tuy nhiên) dùng để nối 2 mệnh đề có ý nghĩa tương phản." },
            { q: "5. Từ nào phát âm KHÁC với ba từ còn lại?", options: ["toy", "boy", "enjoy", "sure"], answer: 3, explain: "sure chứa âm /ʊə/, 3 từ còn lại chứa âm /ɔɪ/." }
        ]
    }
};

let userAssignments = {};
let selectedWordObj = null;
let userQuizAnswers = {};

function switchTab(tabName, event) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('#filterTabs .glassBtn').forEach(btn => {
        btn.classList.remove('active');
    });

    const targetMap = {
        'tips': 'content-tips',
        'vocab': 'content-vocab',
        'grammar': 'content-grammar',
        'classify': 'content-classify',
        'quiz': 'content-quiz'
    };

    const targetId = targetMap[tabName];
    if (targetId) {
        document.getElementById(targetId).classList.add('active');
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

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const activeTabBtn = document.querySelector('#filterTabs .glassBtn.active');
        if (activeTabBtn) updateLiquidPill('liquidPill', activeTabBtn);
        const activeUnitBtn = document.querySelector('#unitTabs .glassBtn.active');
        if (activeUnitBtn) updateLiquidPill('unitLiquidPill', activeUnitBtn);
    }, 100);
    renderUnitContent();
});

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

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Trình duyệt không hỗ trợ phát âm tự động.");
    }
}

function changeUnit(unitKey, event) {
    currentUnit = unitKey;
    document.querySelectorAll('#unitTabs .glassBtn').forEach(b => {
        b.classList.remove('active');
    });

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
        updateLiquidPill('unitLiquidPill', event.currentTarget);
    } else {
        const targetBtn = document.getElementById(`unit-btn-${unitKey}`);
        if (targetBtn) {
            targetBtn.classList.add('active');
            updateLiquidPill('unitLiquidPill', targetBtn);
        }
    }

    userAssignments = {};
    userQuizAnswers = {};
    renderUnitContent();
}

function renderUnitContent() {
    const data = unitsData[currentUnit];
    document.getElementById('unit-tips-container').innerHTML = data.tipsHTML;
    document.getElementById('unit-grammar-container').innerHTML = data.grammarHTML;

    document.getElementById('classify-unit-title').innerText = data.title;
    document.getElementById('vocab-unit-title').innerText = data.title.split(':')[0];

    document.getElementById('col1-label').innerText = data.col1Name;
    document.getElementById('col2-label').innerText = data.col2Name;
    document.getElementById('col1-sublabel').innerText = data.col1Sub;
    document.getElementById('col2-sublabel').innerText = data.col2Sub;
    document.getElementById('modal-btn1-label').innerText = data.col1Name;
    document.getElementById('modal-btn2-label').innerText = data.col2Name;

    const feedback = document.getElementById('classify-feedback');
    if(feedback) feedback.style.display = 'none';

    renderVocabTable();
    renderWordBank();
    renderQuiz();
    initCardSpotlight();
}

function renderVocabTable() {
    const list = vocabGlossary[currentUnit] || [];
    const tbody = document.getElementById('vocab-list-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    list.forEach(v => {
        const tr = document.createElement('tr');
        tr.className = 'vocab-row';
        tr.innerHTML = `
            <td class="vocab-td">
                <strong style="color:#FFFFFF;">${v.word}</strong>
                ${v.type ? `<span class="type-badge">(${v.type})</span>` : ''}
            </td>
            <td class="vocab-td">
                <span class="ipa-badge">${v.ipa}</span>
            </td>
            <td class="vocab-td" style="color: #E2E8F0;">
                ${v.meaning}
            </td>
            <td class="vocab-td" style="text-align: center;">
                <button onclick="speakText('${v.word.replace(/'/g, "\\'")}')" class="glassBtn" style="height: 28px; width: 28px; padding: 0; justify-content: center; border-radius: 50%; background: rgba(236, 72, 153, 0.2); border-color: rgba(236, 72, 153, 0.4);">
                    <i class="fa-solid fa-volume-low" style="color:#F472B6; font-size: 0.75rem;"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderWordBank() {
    const data = unitsData[currentUnit];
    const bankEl = document.getElementById('word-bank');
    const zoneCol1 = document.getElementById('zone-col1');
    const zoneCol2 = document.getElementById('zone-col2');

    if(!bankEl || !zoneCol1 || !zoneCol2) return;

    bankEl.innerHTML = '';
    zoneCol1.innerHTML = '';
    zoneCol2.innerHTML = '';

    let countCol1 = 0;
    let countCol2 = 0;

    data.words.forEach(item => {
        const targetZone = userAssignments[item.id];
        const card = document.createElement('div');
        card.style.cssText = "display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.06); padding: 6px 12px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.15); font-size: 0.85rem; font-weight: 500; cursor: pointer; transition: all 0.2s ease;";
        
        const cleanWord = item.word.replace(/<[^>]*>/g, '');

        card.innerHTML = `
            <button onclick="event.stopPropagation(); speakText('${cleanWord}')" style="background:none; border:none; color:var(--muted); cursor:pointer;" title="Nghe">
                <i class="fa-solid fa-volume-low text-xs"></i>
            </button>
            <span onclick="openModal(${item.id})" style="font-weight: 700; color: #FFFFFF;">${item.word}</span>
        `;

        if (!targetZone) {
            bankEl.appendChild(card);
        } else if (targetZone === 'col1') {
            countCol1++;
            const removeBtn = document.createElement('button');
            removeBtn.style.cssText = "background:none; border:none; color:var(--muted); cursor:pointer; font-size:0.75rem; margin-left:4px;";
            removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            removeBtn.onclick = (e) => { e.stopPropagation(); unassignWord(item.id); };
            card.appendChild(removeBtn);
            zoneCol1.appendChild(card);
        } else if (targetZone === 'col2') {
            countCol2++;
            const removeBtn = document.createElement('button');
            removeBtn.style.cssText = "background:none; border:none; color:var(--muted); cursor:pointer; font-size:0.75rem; margin-left:4px;";
            removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            removeBtn.onclick = (e) => { e.stopPropagation(); unassignWord(item.id); };
            card.appendChild(removeBtn);
            zoneCol2.appendChild(card);
        }
    });

    document.getElementById('count-col1').innerText = `${countCol1} từ`;
    document.getElementById('count-col2').innerText = `${countCol2} từ`;

    if (Object.keys(userAssignments).length === 0) {
        bankEl.innerHTML += `<p style="font-size: 0.8rem; color: var(--muted); font-style: italic; width: 100%; text-align: center;">Tất cả từ đang ở đây. Hãy bấm vào từ để phân loại!</p>`;
    }
}

function openModal(id) {
    const data = unitsData[currentUnit];
    selectedWordObj = data.words.find(w => w.id === id);
    const cleanWord = selectedWordObj.word.replace(/<[^>]*>/g, '');
    
    document.getElementById('modal-word').innerText = cleanWord;
    document.getElementById('modal-ipa').innerText = selectedWordObj.ipa;
    speakText(cleanWord);
    document.getElementById('select-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('select-modal').style.display = 'none';
    selectedWordObj = null;
}

function assignWordToZone(type) {
    if (selectedWordObj) {
        userAssignments[selectedWordObj.id] = type;
        closeModal();
        renderWordBank();
    }
}

function unassignWord(id) {
    delete userAssignments[id];
    renderWordBank();
}

function resetClassifyTask() {
    userAssignments = {};
    const feedback = document.getElementById('classify-feedback');
    if(feedback) feedback.style.display = 'none';
    renderWordBank();
}

function checkClassifyTask() {
    const data = unitsData[currentUnit];
    const total = data.words.length;
    const assignedCount = Object.keys(userAssignments).length;

    const feedback = document.getElementById('classify-feedback');
    if(!feedback) return;
    feedback.style.display = 'block';

    if (assignedCount < total) {
        feedback.style.background = 'rgba(245, 158, 11, 0.2)';
        feedback.style.border = '1px solid rgba(245, 158, 11, 0.4)';
        feedback.style.color = '#FCD34D';
        feedback.innerHTML = `<i class="fa-solid fa-circle-exclamation mr-2"></i> Bạn chưa xếp hết các từ (${assignedCount}/${total}). Vui lòng phân loại đủ trước khi kiểm tra!`;
        return;
    }

    let correctCount = 0;
    data.words.forEach(item => {
        if (userAssignments[item.id] === item.sound) {
            correctCount++;
        }
    });

    if (correctCount === total) {
        feedback.style.background = 'var(--good-soft)';
        feedback.style.border = '1px solid var(--good)';
        feedback.style.color = '#34D399';
        feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> <strong>Chính xác tuyệt đối!</strong> Bạn đã phân loại đúng tất cả ${correctCount}/${total} từ.`;
    } else {
        feedback.style.background = 'var(--bad-soft)';
        feedback.style.border = '1px solid var(--bad)';
        feedback.style.color = '#F87171';
        feedback.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Bạn làm đúng <strong>${correctCount}/${total}</strong> từ. Hãy xem lại và thử lại nhé!`;
    }
}

function renderQuiz() {
    const data = unitsData[currentUnit];
    const container = document.getElementById('quiz-container');
    if(!container) return;
    container.innerHTML = '';

    data.quiz.forEach((q, qIndex) => {
        const qCard = document.createElement('div');
        qCard.style.cssText = "background: rgba(255,255,255,0.03); border: var(--glass-border); padding: 16px; border-radius: 12px; display: flex; flex-direction: column; gap: 10px;";

        let optionsHTML = '<div class="options-container">';
        q.options.forEach((opt, optIndex) => {
            const isSelected = userQuizAnswers[qIndex] === optIndex;
            let extraClass = '';
            let badgeHTML = '';

            if (userQuizAnswers[qIndex] !== undefined) {
                if (optIndex === q.answer) {
                    extraClass = 'correct';
                    badgeHTML = '<span class="status-badge">Đúng</span>';
                } else if (isSelected && optIndex !== q.answer) {
                    extraClass = 'incorrect';
                    badgeHTML = '<span class="status-badge">Sai</span>';
                }
            }

            optionsHTML += `
                <div class="option-box ${extraClass}" onclick="selectQuizAnswer(${qIndex}, ${optIndex})">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <strong>${String.fromCharCode(65 + optIndex)}.</strong> <span>${opt}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        ${badgeHTML}
                        <button onclick="event.stopPropagation(); speakText('${opt}')" style="background:none; border:none; color:var(--muted); cursor:pointer;" title="Nghe">
                            <i class="fa-solid fa-volume-low"></i>
                        </button>
                    </div>
                </div>
            `;
        });
        optionsHTML += '</div>';

        let feedbackHTML = '';
        if (userQuizAnswers[qIndex] !== undefined) {
            const isCorrect = userQuizAnswers[qIndex] === q.answer;
            feedbackHTML = `
                <div class="math-box" style="background: ${isCorrect ? 'var(--good-soft)' : 'var(--bad-soft)'}; border-left-color: ${isCorrect ? 'var(--good)' : 'var(--bad)'}; color: #FFFFFF; margin-top: 8px;">
                    <strong>${isCorrect ? 'Chính xác! ' : 'Chưa chính xác! '}</strong>${q.explain}
                </div>
            `;
        }

        qCard.innerHTML = `
            <div class="question-title" style="margin-bottom: 0;">${q.q}</div>
            ${optionsHTML}
            ${feedbackHTML}
        `;

        container.appendChild(qCard);
    });

    updateQuizScore();
}

function selectQuizAnswer(qIndex, optIndex) {
    userQuizAnswers[qIndex] = optIndex;
    renderQuiz();
}

function updateQuizScore() {
    const data = unitsData[currentUnit];
    let score = 0;
    data.quiz.forEach((q, idx) => {
        if (userQuizAnswers[idx] === q.answer) score++;
    });
    const scoreEl = document.getElementById('quiz-score');
    if(scoreEl) scoreEl.innerText = `Điểm: ${score}/${data.quiz.length}`;
}

function resetQuiz() {
    userQuizAnswers = {};
    renderQuiz();
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