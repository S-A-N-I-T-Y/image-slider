"use strict";
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let slider = document.getElementById("slider");
let button = document.querySelector("button");
let card = document.querySelectorAll("#card");

arrowLeft.addEventListener("click", () => {
  slider.scrollLeft -= 100;
});
arrowRight.addEventListener("click", () => {
  slider.scrollLeft += 100;
});

let maxScrollLeft = slider.scrollWidth - slider.clientWidth;

function autoScroll() {
  if (slider.scrollLeft > maxScrollLeft - 1) {
    slider.scrollLeft -= maxScrollLeft;
  } else {
    slider.scrollLeft += 1;
  }
}

let playScroll = setInterval(autoScroll, 50);

let container = Array.from(card);

for (let item of container) {
  item.addEventListener("mouseover", () => {
    clearInterval(playScroll);
  });
  item.addEventListener("mouseout", () => {
    return (playScroll = setInterval(autoScroll, 50));
  });
}
