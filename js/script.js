"use strict";

/* Get product data form json file */
let productData = []

async function fetchProductData() {
  const response = await fetch("product-data.json");
  const data = await response.json();
  productData = data; 
};

fetchProductData();


/* Product color and img changer */
const mainImg = document.getElementById("main-img");
const colorTitle = document.getElementById("color-title");
const colorDesc = document.getElementById("color-desc");
const deafultImg = document.getElementById("img-deafult");
const leftImg = document.getElementById("img-left");
const rightImg = document.getElementById("img-right");

const allColorBtn = querySelector(".color-change-btn")

function productColorChange(event, color) {
  document.querySelector(".selected").classList.toggle("selected");;
  event.classList.toggle("selected");
  

  productData.forEach(pro => {
    if (pro.productColor == color) {
      mainImg.src = `img/product/${pro.imgFolder}/${pro.deafultImg}`;
      colorTitle.innerHTML = pro.productColor;
      colorDesc.innerHTML = pro.colorDesc;
      deafultImg.src = `img/product/${pro.imgFolder}/${pro.deafultImg}`;
      leftImg.src = `img/product/${pro.imgFolder}/${pro.leftImg}`;
      rightImg.src = `img/product/${pro.imgFolder}/${pro.rightImg}`;
    }
  });
}

function productImgChange(img) {}



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
