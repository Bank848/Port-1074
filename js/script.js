document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

// JavaScript สำหรับการแสดงผลเมื่อเลื่อน
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // เพิ่มคลาสเมื่อมองเห็น
        } else {
            entry.target.classList.remove('visible'); // ลบคลาสเมื่อไม่มองเห็น
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    const seconds = String(now.getSeconds()).padStart(2, '0'); 

    // แสดงเวลาในรูปแบบ HH:MM:SS
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
}

// อัพเดตเวลาเริ่มต้น
updateTime();
// อัพเดตเวลาในทุก ๆ วินาที
setInterval(updateTime, 1000);

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled'); 
    } else {
        navbar.classList.remove('scrolled'); 
    }
});

// Update the current time every second
setInterval(() => {
    const now = new Date();
    const currentTime = now.toLocaleTimeString(); 
    document.getElementById('current-time').innerText = currentTime; // แสดงเวลา
}, 1000);


});