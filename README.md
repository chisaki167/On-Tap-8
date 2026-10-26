# 👑 CHISAKI167 - ON-TAP-8 PROJECT DOCUMENTATION

[![Project Owner](https://img.shields.io/badge/Author-CHISAKI167-blue.svg?style=for-the-badge&logo=github)](https://github.com/chisaki167)
[![Platform](https://img.shields.io/badge/Platform-Web_Application-brightgreen.svg?style=for-the-badge&logo=html5)](https://github.com/chisaki167/On-Tap-8)
[![Language](https://img.shields.io/badge/Language-HTML5%20%7C%20CSS3%20%7C%20JS%20(ES6+)-orange.svg?style=for-the-badge)](https://github.com/chisaki167/On-Tap-8)

---

# 🇻🇳 TIẾNG VIỆT

## 1. Tổng Quan Dự Án & Tác Giả

* **Tên dự án:** Hệ thống Ôn tập Khối 8 (On-Tap-8)
* **Tác giả / Quyền sở hữu:** **CHISAKI167**
* **Mục đích:** Hệ thống ứng dụng web tương tác phục vụ ôn tập đa môn học cho học sinh Khối 8 (Ngữ Văn 8, Tiếng Anh 8, Tin Học 8) tích hợp ứng dụng Thiệp chúc mừng tương tác cao cấp (Liquid Glass UI, hiệu ứng pháo hoa cánh hoa rơi, âm thanh Web Audio API tự động).

---

## 2. Sơ Đồ Điều Hướng & Liên Kết Đường Dẫn Tệp

Sơ đồ bên dưới thể hiện luồng điều hướng giữa các trang và mối quan hệ phụ thuộc tài nguyên (file nào mở file nào, file nào dùng tài nguyên nào):

```mermaid
flowchart TD
    Index[index.html<br/>Trang Chọn Môn Ôn Tập] -->|Chuyển hướng| Van[index4.html<br/>Ôn tập Ngữ Văn 8]
    Index -->|Chuyển hướng| Anh[index5.html<br/>Ôn tập Tiếng Anh 8]
    Index -->|Chuyển hướng| Tin[index3.html<br/>Ôn tập Tin Học 8]
    Index -->|Chuyển hướng| Thiep[index3667.html<br/>Thiệp chúc mừng 20/10]

    subgraph Mod_Anh[Module Tiếng Anh 8]
        Anh -->|Nạp script| AnhJS[index5.js]
        Anh -->|Sub-module Unit 1| AnhU1[index5_u1.html / index5_u1.js]
        Anh -->|Sub-module Unit 2| AnhU2[index5_u2.html / index5_u2.js]
        Anh -->|Sub-module Unit 3| AnhU3[index5_u3.html / index5_u3.js]
    end

    subgraph Mod_Tin[Module Tin Học 8]
        Tin -->|Nạp script| TinJS[index3.js]
        Tin -->|Chủ đề 1| TinP1[index3_p1.html / index3_p1.js]
        Tin -->|Chủ đề 2| TinP2[index3_p2.html / index3_p2.js]
    end

    subgraph Style_Media[Tài Nguyên Dùng Chung & Giao Diện]
        Van & Anh & Tin & AnhU1 & AnhU2 & AnhU3 & TinP1 & TinP2 -->|Sử dụng stylesheet| MainCSS[index1.css]
        Van & Anh & Tin & Thiep -->|Nạp hiệu ứng Liquid Glass| GlassJS[67.js]
        Thiep -->|Nạp tệp âm thanh MP3| NhacFolder[Thư mục nhac/*.mp3]
    end