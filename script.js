const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

// ถ้ากด YES
yesBtn.addEventListener('click', () => {
    message.innerText = "Yay! I knew you'd say yes 🥰";
    yesBtn.disabled = true;
    noBtn.disabled = true;
});
/// เคลื่อนปุ่ม NO เมื่อพยายามคลิก
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});
