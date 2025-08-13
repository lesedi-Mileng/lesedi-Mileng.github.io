// 🌙 Dark mode toggle
const toggleButton = document.getElementById("toggle-dark");
toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

// ⌨️ Typing animation for your name
const text = "Lesedi Mileng";
let i = 0;
const typingTarget = document.querySelector("h1");

function typeWriter() {
  if (typingTarget && i < text.length) {
    typingTarget.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 120);
  }
}

// 🌀 Fade-in animations
function triggerFadeIns() {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
    el.classList.add("animate");
  });
}

// 🌊 Smooth scroll for navbar links
document.querySelectorAll(".navbar a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 60, // adjust for navbar height
        behavior: "smooth"
      });
    }
  });
});

// 🚀 Start everything on page load
window.addEventListener("load", () => {
  typeWriter();
  triggerFadeIns();
});

// ✨ Floating particle background
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particlesArray;
const numberOfParticles = 50;

function initParticles() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particlesArray = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.shadowBlur = 8;
  ctx.shadowColor = "white";
  particlesArray.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  });
}

function moveParticles() {
  particlesArray.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  });
}

function animateParticles() {
  drawParticles();
  moveParticles();
  requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", initParticles);

// Initialize and start
initParticles();
animateParticles();
