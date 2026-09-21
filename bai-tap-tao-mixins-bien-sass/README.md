# [Thực hành] Tạo mixins & biến để tối ưu CSS của website mẫu

## 🎯 Mục tiêu
- **Tạo mixins** giúp giảm trùng lặp code và tái sử dụng các khối thuộc tính CSS.
- **Dùng biến (variables)** để kiểm soát toàn bộ giao diện từ một nơi duy nhất.
- **Cải thiện tính tái sử dụng và bảo trì** của mã nguồn CSS.

---

## 📁 Cấu trúc Thư mục Dự án

```text
bai-tap-tao-mixins-bien-sass/
├── abstracts/
│   ├── _variables.scss      # Khai báo các biến (màu sắc, cỡ chữ, padding, shadow)
│   └── _mixins.scss         # Khai báo mixins (button-style, box-style)
├── base/
│   └── _typography.scss     # Định dạng typography cho h1, h2 bằng biến
├── components/
│   ├── _buttons.scss        # Component nút bấm (.button) áp dụng mixin button-style
│   └── _cards.scss          # Component thẻ (.card) áp dụng mixin box-style
├── css/
│   ├── main.css             # File CSS biên dịch từ main.scss
│   └── main.css.map         # Source map phục vụ debug
├── index.html               # Trang HTML demo giao diện thực tế
├── main.scss                # File SCSS tổng hợp import các partials
├── styles.scss              # File SCSS tương đương
├── styles.css               # File CSS ban đầu trước khi tối ưu (Bước 1)
└── package.json             # File cấu hình lệnh biên dịch Sass
```

---

## 📌 Các Bước Thực Hiện

### Bước 1: File CSS trước khi tối ưu (`styles.css`)
```css
h1 {
  font-size: 32px;
  color: #222;
}

h2 {
  font-size: 28px;
  color: #222;
}

.button {
  background: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.card {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
```

### Bước 2: Tạo biến trong SASS (`abstracts/_variables.scss`)
```scss
$primary-color: red;
$text-color: #222;
$font-large: 32px;
$font-medium: 28px;
$padding-standard: 10px 20px;
$box-shadow-default: 2px 2px 10px rgba(0, 0, 0, 0.1);
```

### Bước 3: Tạo mixins tái sử dụng (`abstracts/_mixins.scss`)
```scss
@mixin button-style($bg-color) {
  background: $bg-color;
  color: white;
  padding: $padding-standard;
  border-radius: 5px;
}

@mixin box-style {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: $box-shadow-default;
}
```

### Bước 4: Áp dụng mixins & biến vào SCSS

1. **`base/_typography.scss`**:
```scss
h1 {
  font-size: $font-large;
  color: $text-color;
}

h2 {
  font-size: $font-medium;
  color: $text-color;
}
```

2. **`components/_buttons.scss`**:
```scss
.button {
  @include button-style($primary-color);
}
```

3. **`components/_cards.scss`**:
```scss
.card {
  @include box-style;
}
```

### Bước 5: Import tổng hợp vào `main.scss`
```scss
@import "abstracts/variables";
@import "abstracts/mixins";
@import "base/typography";
@import "components/buttons";
@import "components/cards";
```

---

## ⚙️ Hướng dẫn Biên Dịch (Compile)

### Cách 1: Sử dụng Sass CLI
```bash
sass main.scss css/main.css
sass --watch main.scss:css/main.css
```

### Cách 2: Sử dụng NPM script
```bash
npm run build
npm run watch
```
