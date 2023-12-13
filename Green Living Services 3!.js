`use strict`;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("slide");
    }
  });
});

const hideElements = document.querySelectorAll(".hide");
hideElements.forEach((el) => observer.observe(el));

const slowHideElements = document.querySelectorAll(".slow-hide");
slowHideElements.forEach((el) => observer.observe(el));

const slowerHideElements = document.querySelectorAll(".slower-hide");
slowerHideElements.forEach((el) => observer.observe(el));

const slowestHideElements = document.querySelectorAll(".slowest-hide");
slowestHideElements.forEach((el) => observer.observe(el));

const reverseHideElements = document.querySelectorAll(".reverse-hide");
reverseHideElements.forEach((el) => observer.observe(el));

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
