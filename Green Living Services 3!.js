`use strict`;

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector(".head-stuff").style.transform = "translateY(0)";
  } else {
    document.querySelector(".head-stuff").style.transform = "translateY(-100%)";
  }

  prevScrollPos = currentScrollPos;
});

//Carousel controls

let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
let carouselImg = document.querySelector(".carousel-img1");
let currentScrollPos = 1;

let rightScroll = function (currentScrollPos) {
  if (currentScrollPos == 6) {
    currentScrollPos = 1;
    carouselImg.textContent = `carousel-img${currentScrollPos}`;
    return carouselImg;
  } else {
    currentScrollPos++;
    carouselImg.textContent = `carousel-img${currentScrollPos}`;
    return carouselImg;
  }
};

let leftScroll = function (currentScrollPos) {
  if (currentScrollPos == 1) {
    currentScrollPos = 6;
    carouselImg.textContent = `carousel-img${currentScrollPos}`;
    return carouselImg;
  } else {
    currentScrollPos--;
    return carouselImg;
  }
};

leftArrow.addEventListener("click", leftScroll);

rightArrow.addEventListener("click", rightScroll);
