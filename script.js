function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const typewriterText = document.getElementById("typewriter-text");
const texts = ["Machine Learning Enthusiast","Data Science Enthusiast", "Data Analyst"]; // Add more texts here
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {
    typewriterText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Adjust the typing speed here (in milliseconds)
  } else {
    setTimeout(erase, 1000); // Wait before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterText.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50); // Adjust the erasing speed here (in milliseconds)
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500); // Delay before typing the next text
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type(); // Start the typewriter effect when the page loads
});




