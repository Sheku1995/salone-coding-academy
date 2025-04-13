const welcomeMessages = [
  "Welcome to Salone Coding Academy!",
  "Learn HTML, CSS, and JavaScript in Krio.",
  "Build your future with coding."
];

let messageIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const pauseBetweenMessages = 1500; 

function typeWriter() {
  const currentMessage = welcomeMessages[messageIndex];
  const targetElement = document.getElementById("welcome-text");

  // Typing the current message
  if (charIndex < currentMessage.length) {
      targetElement.innerHTML += currentMessage.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
  } else {
      // Pause before erasing
      setTimeout(eraseWriter, pauseBetweenMessages);
  }
}

function eraseWriter() {
  const currentMessage = welcomeMessages[messageIndex];
  const targetElement = document.getElementById("welcome-text");

  // Erasing the current message
  if (charIndex > 0) {
      targetElement.innerHTML = currentMessage.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseWriter, erasingSpeed);
  } else {
      // Move to the next message
      messageIndex = (messageIndex + 1) % welcomeMessages.length;
      setTimeout(typeWriter, typingSpeed);
  }
}

window.onload = typeWriter;
