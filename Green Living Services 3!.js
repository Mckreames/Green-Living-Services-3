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

// JavaScript function to format the phone number
function formatPhoneNumber() {
  // Get the input element
  var phoneNumberInput = document.getElementById("phoneNumber");

  // Get the input value and remove non-numeric characters
  var phoneNumber = phoneNumberInput.value.replace(/\D/g, "");

  // Check if the phone number is not empty
  if (phoneNumber.length > 0) {
    // Format the phone number as (XXX) XXX-XXXX
    phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

    // Set the formatted value back to the input
    phoneNumberInput.value = phoneNumber;
  }
}

// Attach the formatPhoneNumber function to the input's blur event
document
  .getElementById("phoneNumber")
  .addEventListener("blur", formatPhoneNumber);
