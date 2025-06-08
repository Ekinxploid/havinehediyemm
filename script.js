// Basit yıldız efekti
const starfield = document.getElementById("starfield");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  const size = Math.random() * 2 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.opacity = Math.random();
  star.style.position = "absolute";
  star.style.background = "white";
  star.style.borderRadius = "50%";
  star.style.animation = `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`;
  starfield.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 8000);
}

setInterval(createStar, 200);

// Yıldızlar animasyonu için CSS keyframe ekliyoruz:
const style = document.createElement("style");
style.textContent = `
@keyframes twinkle {
  0%, 100% {opacity: 1;}
  50% {opacity: 0.3;}
}`;
document.head.appendChild(style);

// DOM elementleri
const heart = document.getElementById("heart");
const envelope = document.getElementById("envelope");
const message = document.getElementById("message");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");

let opened = false;

// Başlat butonuna basınca müzik başlar, mektup aktif olur
startBtn.addEventListener("click", () => {
  music.play();
  startBtn.style.display = "none";
  envelope.style.cursor = "pointer";
});

// Mektuba tıklayınca açılır ve mesaj çıkar
envelope.addEventListener("click", () => {
  if (!opened) {
    heart.classList.add("open");
    message.classList.add("visible");
    opened = true;
  }
});
