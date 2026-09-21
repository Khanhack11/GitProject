# [Bài tập] Tái cấu trúc mã CSS của các bài tập đã làm

## 🎯 Mục tiêu
- Luyện tập kỹ năng sử dụng **SASS / SCSS**.
- Tái cấu trúc lại mã CSS đã xây dựng trong 4 bài tập thành phần của Landing Page:
  1. **[Bài tập] Dựng navigation và header của landing page thiết kế sẵn**
  2. **[Bài tập] Dựng phần sản phẩm nổi bật của landing page thiết kế sẵn**
  3. **[Bài tập] Dựng phần số liệu thống kê của landing page thiết kế sẵn**
  4. **[Bài tập] Dựng phần footer của landing page thiết kế sẵn**
- Áp dụng kiến trúc thư mục chuẩn **Sass 7-1 pattern**: chia nhỏ mã thành các biến (variables), mixins, layout và components, sau đó biên dịch tập trung về một file CSS hoàn chỉnh.

---

## 📁 Cấu trúc Thư mục SASS Chuẩn (7-1 Pattern)

```text
bai-tap-tai-cau-truc-css-cac-bai-tap-da-lam/
├── abstracts/
│   ├── _variables.scss      # Biến màu sắc, font, spacing, breakpoints
│   ├── _functions.scss      # Hàm tiện ích toán học SASS
│   └── _mixins.scss         # Mixins: flexbox, button, card, responsive
├── base/
│   ├── _reset.scss          # Reset margin, padding, box-sizing
│   └── _typography.scss     # Định dạng font, h1, h2, h3, p
├── layout/
│   ├── _grid.scss           # Bố cục Container và Grid responsive
│   ├── _header.scss         # [Bài 1] Navigation & Hero Header
│   └── _footer.scss         # [Bài 4] Multi-column Footer & Copyright
├── components/
│   ├── _buttons.scss        # Hệ thống nút bấm (.btn, .btn--outline,...)
│   ├── _products.scss       # [Bài 2] Thẻ sản phẩm nổi bật (.product-card)
│   └── _stats.scss          # [Bài 3] Khối số liệu thống kê (.stat-card)
├── css/
│   ├── style.css            # File CSS hoàn chỉnh biên dịch từ SASS
│   ├── main.css             # File CSS tương đương
│   └── main.css.map         # Source map phục vụ debug
├── index.html               # Trang Landing Page hoàn chỉnh tích hợp 4 phần
├── main.scss                # File SCSS tổng hợp import các partials
├── styles.scss              # File SCSS chính tương đương
├── package.json             # Cấu hình script npm build / watch
└── README.md                # Tài liệu hướng dẫn chi tiết
```

---

## 🔍 Chi tiết 4 Thành phần Landing Page được Tái cấu trúc

### 1. Navigation & Header (`layout/_header.scss`)
- **Navigation bar**: Đặt chế độ `position: sticky; top: 0`, sử dụng hiệu ứng nền mờ `backdrop-filter: blur(8px)`, hiệu ứng hover gạch chân động dưới các link menu.
- **Hero Banner**: Bố cục 2 cột linh hoạt (Text + Image 3D tilt effect), sử dụng biến gradient nhẹ nhàng và nút bấm hành động (CTA).

### 2. Sản phẩm nổi bật (`components/_products.scss`)
- Sử dụng mixin `@include card-style` để tạo hiệu ứng nổi lên khi hover (`translateY(-6px)`).
- Khung ảnh có hiệu ứng zoom nhẹ (`scale(1.08)`).
- Hiển thị badge nổi bật (Best Seller, Món Mới), đánh giá sao, tiêu đề, mô tả và giá tiền kèm nút "Thêm Món".

### 3. Số liệu thống kê (`components/_stats.scss`)
- Nền dải màu gradient từ xanh rừng đến xanh bơ (`$primary-dark` đến `$primary-color`).
- Bố cục 4 card kính mờ (`backdrop-filter: blur(6px)`), số liệu lớn nổi bật màu vàng chín (`$secondary-color`), icon minh họa sinh động.

### 4. Footer (`layout/_footer.scss`)
- Bố cục 4 cột: Thông tin thương hiệu + mạng xã hội, Menu đồ uống, Hỗ trợ khách hàng, và Địa chỉ liên hệ.
- Dưới cùng là dải bản quyền ngăn cách bởi đường viền mờ.

---

## ⚙️ Hướng dẫn Biên Dịch & Chạy Thử

### Sử dụng SASS CLI:
```bash
sass main.scss css/style.css
sass --watch main.scss:css/style.css
```

### Sử dụng NPM:
```bash
npm run build
npm run watch
```
