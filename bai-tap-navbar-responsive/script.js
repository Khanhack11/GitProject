// Đợi toàn bộ HTML tải xong mới chạy code JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // Lắng nghe sự kiện click vào nút ☰
    menuIcon.addEventListener("click", function () {
        // Lệnh toggle: Nếu chưa có class 'active' thì thêm vào, nếu có rồi thì xóa đi
        navLinks.classList.toggle("active");
    });
});