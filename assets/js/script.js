//Carousel slider
const carousel = document.querySelector(".carousel");
const firstCard = document.querySelectorAll(".card")[0];
const arrow = document.querySelectorAll(".arrowbtn");
const firstCardWidth = firstCard.clientWidth + 10;

arrow.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

//Parallax effect
let stars = window.document.querySelector("img#stars");
let back = window.document.querySelector("img#background");
let mBack = window.document.querySelector("img#character");
//let text = window.document.querySelector("h2#text")
//let btn = window.document.querySelector("a#btn")
let mFront = window.document.querySelector("img#foreground");
// let header = window.document.querySelector("header")

window.addEventListener("scroll", scrolling);

function scrolling() {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  back.style.top = value * 0.8 + "px";
  mBack.style.top = value * 0.5 + "px";
  mFront.style.top = value * 0 + "px";
}

//Change stories display
function changeDisplay(id) {
  let itemList = window.document.getElementsByClassName("content");

  for (let i = 0; i < itemList.length; i++) {
    if (itemList[i].id != id) {
      itemList[i].style.display = "none";
    } else {
      itemList[i].style.display = "block";
    }
  }
}
