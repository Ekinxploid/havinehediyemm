document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const messageBox = document.getElementById("message-box");
  const finalMessage = document.getElementById("final-message");
  let clickedStars = 0;

  // Yıldızları rastgele konumlandır
  stars.forEach(star => {
    star.style.top = Math.random() * 80 + 10 + "%";
    star.style.left = Math.random() * 90 + 5 + "%";

    star.addEventListener("click", () => {
      if (star.classList.contains("clicked")) return;

      const msg = star.getAttribute("data-msg");
      messageBox.textContent = msg;
      messageBox.classList.remove("hidden");

      star.classList.add("clicked");
      clickedStars++;

      if (clickedStars === stars.length) {
        setTimeout(() => {
          messageBox.classList.add("hidden");
          finalMessage.classList.remove("hidden");
        }, 1500);
      }
    });
  });
});
