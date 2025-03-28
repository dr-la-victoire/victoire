const words = ["Front-end Tech Bro", "Content Writer", "Neuroscientist"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 1000;
const typingContainer = document.querySelector(".typing-container p");

function typingEffect() {
	const currentWord = words[wordIndex];
	if (isDeleting) {
		typingContainer.textContent = currentWord.substring(0, charIndex--);
	} else {
		typingContainer.textContent = currentWord.substring(0, charIndex++);
	}

	let speed = isDeleting ? erasingSpeed : typingSpeed;

	if (!isDeleting && charIndex === currentWord.length + 1) {
		isDeleting = true;
		speed = delayBetweenWords;
	} else if (isDeleting && charIndex === 0) {
		isDeleting = false;
		wordIndex = (wordIndex + 1) % words.length;
		speed = typingSpeed;
	}

	setTimeout(typingEffect, speed);
}

typingEffect();

// Functions to open up the different CVs
function openPopUp() {
	document.getElementById("cvPopUp").style.display = "block";
	document.getElementById("overlay").style.display = "block";
}

function closePopUp() {
	document.getElementById("cvPopUp").style.display = "none";
	document.getElementById("overlay").style.display = "none";
}
