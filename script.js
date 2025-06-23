const shayari = `Wo subah-subah ki hawa bhi alag lagti hai,
Jab tum saamne hoti ho toh zindagi kuch khaas lagti hai...

Ek baat tumse kehna chahta hoon — har samay, har pal,
aur har haalaat mein main tumhare saath rehna chahta hoon.

Ek khayal hai… jo abhi adhoora hai,
par use poora karna chahta hoon… tumhare saath.

Tum mein koi kami nahi, koi doori nahi, sirf jazbaat hai,
jo har roz tumse juda hua mehsoos hota hai.

Tum aati ho subah jogging ke waqt — toh dil khil jaata hai,
nahi aati ho — toh lagta hai jaise subah bhi andheri ho gayi ho...

Bas... itna kehna tha... tum mere liye khaas ho. 💖`;

function checkName() {
  const correctName = "deepti"; 
  const input = document.getElementById("nameInput").value.trim();
  const error = document.getElementById("error");

  if (input.toLowerCase() === correctName.toLowerCase()) {
    document.getElementById("namePrompt").style.display = "none";
    document.getElementById("letterBox").classList.remove("hidden");
    document.getElementById("letterBox").classList.add("fadeIn");
    typeWriterEffect(shayari, 0);
  } else {
    error.innerText = "Naam sahi nahi hai... firse koshish karo 💌";
  }
}

function typeWriterEffect(text, i) {
  if (i < text.length) {
    const letterContent = document.getElementById("typewriterText");
    const feather = document.getElementById("feather");

    letterContent.innerHTML += text.charAt(i);

    const span = document.createElement("span");
    letterContent.appendChild(span);
    const rect = span.getBoundingClientRect();

    // Feather pen follows the text
    const topOffset = rect.top - 80 + window.scrollY;
    const leftOffset = rect.left + 5;

    feather.style.top = `${topOffset}px`;
    feather.style.left = `${leftOffset}px`;

    setTimeout(() => {
      typeWriterEffect(text, i + 1);
    }, 40);
  }
}
