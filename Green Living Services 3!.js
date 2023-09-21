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
