const startBtn = document.getElementById('startBtn');
const heartsContainer = document.getElementById('heartsContainer');
const letter = document.getElementById('letter');
const letterFront = document.getElementById('letterFront');
const letterBack = document.getElementById('letterBack');
const loveQuote = document.getElementById('loveQuote');
const bgMusic = document.getElementById('bgMusic');

const quotes = [
  "Seni her gün daha çok seviyorum.",
  "Kalbim sadece senin için atıyor.",
  "Sen benim en güzel hikayemsin.",
  "Birlikte olduğumuz her an sonsuz mutluluk.",
  "Aşkımız yıldızlar kadar parlak.",
  "Sen benim hayatımın en güzel sürprizisin.",
  "Seninle her şey daha anlamlı.",
  "Sonsuza kadar seninle olmak istiyorum.",
  "Seninle her gün bir masal gibi.",
  "Kalbim sana ait, hep öyle kalacak."
];

let heartsInterval;
let heartCount = 0;

startBtn.addEventListener('click', () => {
  bgMusic.play();
  startBtn.classList.add('hidden');
  heartsContainer.classList.remove('hidden');
  letter.classList.remove('hidden');
  startHearts();
});

function startHearts() {
  heartsInterval = setInterval(() => {
    createHeart();
  }, 400);
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Rastgele başlangıç konumu (yatay)
  heart.style.left = Math.random() * 90 + '%';

  // Rastgele animasyon süresi (4-7 saniye arası)
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';

  heartsContainer.appendChild(heart);

  // Kalp animasyon tamamlanınca sil
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

// Mektuba tıklanınca
letter.addEventListener('click', () => {
  // Mektup açma animasyonu
  letter.classList.toggle('flip');

  // Yeni söz göster
  if (letter.classList.contains('flip')) {
    showRandomQuote();
  } else {
    loveQuote.textContent = '';
  }
});

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  loveQuote.textContent = quotes[randomIndex];
}
