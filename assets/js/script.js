const carousel = document.querySelector(".carousel");
const firstCard = document.querySelectorAll(".card")[0];
const arrow = document.querySelectorAll(".arrowbtn");
const firstCardWidth = firstCard.clientWidth + 10;

arrow.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});
