"use strict";

/* Faq open and losing of faq cards */

function faqDropdown(event) {
  let arrowIcon = event.querySelector("img");

  const faqCard = event.querySelector(".faq-question-info");
  faqCard.classList.toggle("open");

  if (arrowIcon.src.includes("open-arrow.svg")) {
    arrowIcon.src = "img/icons/closed-arrow.svg";
  } else {
    arrowIcon.src = "img/icons/open-arrow.svg";
  }
}
