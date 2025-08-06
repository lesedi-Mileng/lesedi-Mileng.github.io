// Dark mode toggle
const toggleButton = document.getElementById("toggle-dark");
toggleButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
});

// Typing effect for name
const text = "Lesedi Mileng";
let i = 0;
const typingTarget = document.getElementById("typing-text");
function typeWriter() {
  if (i < text.length) {
    typingTarget.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 120);
  }
}
window.addEventListener("load", typeWriter);
