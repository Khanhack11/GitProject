# [Bài tập] Tái cấu trúc mã CSS cho sẵn (Responsive Grid)

## 🎯 Mục tiêu
- Luyện tập kỹ năng sử dụng **SASS / SCSS**.
- Tái cấu trúc toàn bộ mã nguồn CSS và HTML gốc từ kho lưu trữ: [codegym-vn/responsive-grid](https://github.com/codegym-vn/responsive-grid).
- Xóa bỏ triệt để các thuộc tính `style="..."` viết inline cồng kềnh, phân tách giao diện thành các thành phần (components), bố cục (layout) và biến cấu hình (abstracts).
- Áp dụng các tính năng nâng cao của SASS: **Variables**, **Functions**, **Mixins (clearfix, responsive media queries)**, **Loops (@for 12 cột)**, và kiến trúc **Sass 7-1 pattern**.

---

## 📁 Cấu trúc Thư mục Dự án

```text
bai-tap-tai-cau-truc-css-responsive-grid/
├── abstracts/
│   ├── _variables.scss      # Quản lý màu sắc, chiều cao, breakpoint, số cột
│   ├── _functions.scss      # Hàm col-width() tính toán % độ rộng cột tự động
│   └── _mixins.scss         # Mixins: clearfix, respond-to, card-box
├── base/
│   └── _reset.scss          # Reset box-sizing, font-family toàn trang
├── layout/
│   └── _grid.scss           # Hệ thống 12 cột grid (@for loop), overlay, guide grid
├── components/
│   ├── _header.scss         # Khối Header tím ($color-header)
│   ├── _menu.scss           # Các thanh menu điều hướng & khối content ($color-accent)
│   └── _footer.scss         # Khối Footer xanh dương ($color-footer)
├── css/
│   ├── main.css             # CSS đã biên dịch hoàn chỉnh từ SASS
│   └── main.css.map         # Source map phục vụ debug
├── original/
│   └── responsive_grid.htm  # Mã nguồn gốc ban đầu từ CodeGym để đối chiếu
├── index.html               # File HTML đã tái cấu trúc sạch sẽ, không còn inline styles
├── responsive_grid.html     # File HTML tương đương
├── main.scss                # File SCSS tổng hợp import các partials
├── styles.scss              # File SCSS chính tương đương
├── package.json             # Lệnh npm build & watch
└── README.md                # Tài liệu hướng dẫn chi tiết
```

---

## 🔍 So sánh Trước & Sau khi Tái Cấu Trúc

| Tiêu chí | Mã nguồn gốc (`responsive_grid.htm`) | Sau khi Tái cấu trúc bằng SASS |
| :--- | :--- | :--- |
| **Cách viết style** | Lạm dụng thuộc tính `style="..."` inline khắp mã HTML | Tách biệt hoàn toàn ra CSS class có ngữ nghĩa |
| **Hệ thống Grid** | Ghi cứng `width: 8.33%`, `width: 25%`, `width: 100%` | Dùng hàm `@function col-width()` và `@for` sinh tự động `.col-1` đến `.col-12` |
| **Màu sắc** | Rải rác mã màu `#9933cc`, `#0099cc`, `#33b5e5` trực tiếp | Quản lý tập trung trong `_variables.scss` (`$color-header`, `$color-footer`, `$color-accent`) |
| **Chiều cao khối** | Ghi cứng `height: 90px`, `height: 230px`, `height: 50px` | Quản lý qua biến SASS và modifier class `.gridwrapper--header`, `--body`, `--footer` |
| **Khả năng Responsive** | Hạn chế, vỡ layout trên màn hình nhỏ | Tích hợp mixin `@include respond-to(mobile)` tự động co giãn kích thước |

---

## ⚙️ Hướng dẫn Biên Dịch & Chạy Thử

### Cách 1: Sử dụng Sass CLI trực tiếp
```bash
sass main.scss css/main.css
sass --watch main.scss:css/main.css
```

### Cách 2: Sử dụng NPM Scripts
```bash
npm run build
npm run watch
```
