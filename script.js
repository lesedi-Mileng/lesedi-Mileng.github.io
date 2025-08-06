// 🌙 Dark mode toggle
const toggleButton = document.getElementById("toggle-dark");
toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

// ⌨️ Typing animation for your name
const text = "Lesedi Mileng";
let i = 0;
const typingTarget = document.querySelector("h1");

// Make sure typingTarget exists before using it
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

// 🚀 Start everything on page load
window.addEventListener("load", () => {
  typeWriter();
  triggerFadeIns();
});