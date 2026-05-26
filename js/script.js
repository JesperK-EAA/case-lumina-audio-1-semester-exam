"use strict";

/* Get product data form json file */
let productData = [];

async function fetchProductData() {
  const response = await fetch("product-data.json");
  const data = await response.json();
  productData = data;
}

fetchProductData();

/* Product color and img changer */
const mainImg = document.getElementById("main-img");
const colorTitle = document.getElementById("color-title");
const colorDesc = document.getElementById("color-desc");
const deafultImg = document.getElementById("img-deafult");
const leftImg = document.getElementById("img-left");
const rightImg = document.getElementById("img-right");
const backgroundTop = document.getElementById("product-color-bg-top");
const backgroundBottom = document.getElementById("product-color-bg-bottom");

const allColorBtn = document.querySelector(".color-change-btn");

function productColorChange(event, color) {
  document.querySelector(".selected-color").classList.remove("selected-color");
  event.classList.add("selected-color");

  let selectedImg = document.querySelector(".selected-img").src;
  let imgDirection = "";

  productData.forEach((pro) => {
    if (pro.productColor == color) {
      if (selectedImg.includes("right")) {
        imgDirection = pro.rightImg;
      } else if (selectedImg.includes("left")) {
        imgDirection = pro.leftImg;
      } else {
        imgDirection = pro.deafultImg;
      }

      mainImg.src = `img/product/${pro.imgFolder}/${imgDirection}`;
      colorTitle.innerHTML = pro.productColor;
      colorDesc.innerHTML = pro.colorDesc;
      deafultImg.src = `img/product/${pro.imgFolder}/${pro.deafultImg}`;
      leftImg.src = `img/product/${pro.imgFolder}/${pro.leftImg}`;
      rightImg.src = `img/product/${pro.imgFolder}/${pro.rightImg}`;

      backgroundTop.src = `img/background/backgorund-designs/${pro.backgroundTop}`;
      backgroundBottom.src = `img/background/backgorund-designs/${pro.backgroundBottom}`;
    }
  });
}

function productImgChange(event) {
  const imgChild = event.children[0];

  document.querySelector(".selected-img").classList.remove("selected-img");
  imgChild.classList.add("selected-img");

  mainImg.src = imgChild.src;
}

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

/* Toggle popups with overlay*/

const popupBuy = document.getElementById("buy-popup");
const popupDownload = document.getElementById("download-popup");
const popupOverlay = document.getElementById("overlay");

function popupToggle(type) {
  popupOverlay.classList.toggle("open");

  if (type == "buy") {
    popupBuy.classList.toggle("open");
  } else {
    popupDownload.classList.toggle("open");
  }
}
