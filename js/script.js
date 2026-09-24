document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // ดึงชื่อไฟล์ของหน้าปัจจุบันจาก URL (เช่น step1.html)
    let currentPath = window.location.pathname.split('/').pop();
    
    // ถ้าไม่มีชื่อไฟล์ (เป็นหน้าแรก) ให้ตั้งค่าเป็น index.html
    if (currentPath === '') {
        currentPath = 'index.html';
    }

    // ลบคลาส active เดิมทั้งหมด และใส่ให้เมนูที่ตรงกับหน้าปัจจุบัน
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});