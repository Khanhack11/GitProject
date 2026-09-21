# [Thực hành] Chuyển đổi CSS có sẵn sang SASS theo chuẩn

## 🎯 Mục tiêu
- Chuyển đổi một file CSS truyền thống thành SASS chuẩn theo kiến trúc mô-đun (Sass 7-1 pattern).
- Tách code thành các **biến (variables)**, **mixins**, **nesting** và **partials**.
- Áp dụng cách tổ chức thư mục chuẩn cho dự án SASS chuyên nghiệp.

---

## 📁 Cấu trúc Thư mục

```text
bai-tap-sass-conversion/
├── abstracts/
│   ├── _variables.scss      # Khai báo các biến (màu sắc, border, shadow)
│   └── _mixins.scss         # Khai báo mixins (button-style, box-shadow)
├── base/
│   └── _global.scss         # Style áp dụng toàn cục (body, font-family, màu nền)
├── layout/
│   └── _container.scss      # Khung chứa bố cục (.container)
├── components/
│   ├── _buttons.scss        # Component nút bấm (.button) sử dụng mixin & nesting
│   └── _cards.scss          # Component thẻ (.card) sử dụng biến, mixin & nesting
├── css/
│   ├── main.css             # File CSS biên dịch từ main.scss
│   └── main.css.map         # Source map phục vụ debug
├── index.html               # Trang giao diện HTML áp dụng các class SCSS
├── main.scss                # File SCSS chính import toàn bộ các partials
├── styles.scss              # File SCSS chính tương đương
├── styles.css               # File CSS ban đầu trước khi chuyển đổi (Bước 1)
└── package.json             # Cấu hình scripts biên dịch Sass
```

---

## 📌 Chi tiết Các Bước Thực Hiện

### Bước 1: File CSS Ban đầu (`styles.css`)
File CSS gốc đơn lẻ ban đầu trước khi chia nhỏ:
```css
body {
  font-family: Arial, sans-serif;
  color: #333;
  background: #f4f4f4;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.button {
  background: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.card {
  border: 1px solid #ddd;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
```

### Bước 2: Tạo Biến SCSS (`abstracts/_variables.scss`)
Tránh lặp lại các mã màu sắc, bóng đổ hay viền:
```scss
$primary-color: blue;
$text-color: #333;
$background-color: #f4f4f4;
$border-color: #ddd;
$box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
```

### Bước 3: Tạo Mixins Tái Sử Dụng (`abstracts/_mixins.scss`)
Tái sử dụng các khối style dùng chung có thể truyền tham số:
```scss
@mixin button-style($bg-color) {
  background: $bg-color;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

@mixin box-shadow {
  box-shadow: $box-shadow;
}
```

### Bước 4: Viết lại SCSS theo Chuẩn Module và Nesting

1. **`base/_global.scss`**:
```scss
body {
  font-family: Arial, sans-serif;
  color: $text-color;
  background: $background-color;
}
```

2. **`layout/_container.scss`**:
```scss
.container {
  width: 80%;
  margin: 0 auto;
}
```

3. **`components/_buttons.scss`**:
```scss
.button {
  @include button-style($primary-color);

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
}
```

4. **`components/_cards.scss`**:
```scss
.card {
  border: 1px solid $border-color;
  padding: 20px;
  @include box-shadow;

  .card-title {
    margin-top: 0;
  }
}
```

### Bước 5: Import Tất Cả vào `main.scss`
```scss
@import "abstracts/variables";
@import "abstracts/mixins";
@import "base/global";
@import "layout/container";
@import "components/buttons";
@import "components/cards";
```

---

## ⚙️ Hướng dẫn Biên Dịch (Compile)

### Cách 1: Sử dụng Sass CLI trực tiếp
Biên dịch 1 lần:
```bash
sass main.scss css/main.css
```

Lắng nghe tự động cập nhật khi sửa đổi (Watch mode):
```bash
sass --watch main.scss:css/main.css
```

### Cách 2: Sử dụng npm script
```bash
npm run build
npm run watch
```
