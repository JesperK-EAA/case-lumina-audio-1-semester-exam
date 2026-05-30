"use strict";

//Project color picker with img selecter --------------------------------------------------------------------------------------------------------
//Fetching my product data form the json file
let productData = [];

async function fetchProductData() {
  const response = await fetch("product-data.json");
  const data = await response.json();
  productData = data;
}

fetchProductData();

//Elements in my product color section that need to change info depending of the selected color and main img you choose
const mainImg = document.getElementById("main-img");
const colorTitle = document.getElementById("color-title");
const colorDesc = document.getElementById("color-desc");
const deafultImg = document.getElementById("img-deafult");
const leftImg = document.getElementById("img-left");
const rightImg = document.getElementById("img-right");
const backgroundTop = document.getElementById("product-color-bg-top");
const backgroundBottom = document.getElementById("product-color-bg-bottom");

//Elements in my product color section that need to change info depending of the selected color and main img you choose
function productColorChange(element, color) {
  document.querySelector(".selected-color").classList.remove("selected-color");
  element.classList.add("selected-color");

  let selectedImg = document.querySelector(".selected-img").src;
  let imgDirection = "";

  /* Loop through json data, to find the selected color*/
  productData.forEach((pro) => {
    if (pro.productColor == color) {
      /* Checks what img you have selected to get it's correct color */
      if (selectedImg.includes("right")) {
        imgDirection = pro.rightImg;
      } else if (selectedImg.includes("left")) {
        imgDirection = pro.leftImg;
      } else {
        imgDirection = pro.deafultImg;
      }

      //Changes all values of the product img and text
      mainImg.src = `img/products/${pro.imgFolder}/${imgDirection}`;
      colorTitle.innerText = pro.productColor;
      colorDesc.innerText = pro.colorDesc;
      deafultImg.src = `img/products/${pro.imgFolder}/${pro.deafultImg}`;
      leftImg.src = `img/products/${pro.imgFolder}/${pro.leftImg}`;
      rightImg.src = `img/products/${pro.imgFolder}/${pro.rightImg}`;

      //Changes the background svg img to the current selected color
      backgroundTop.src = `img/backgrounds/backgorund-designs/${pro.backgroundTop}`;
      backgroundBottom.src = `img/backgrounds/backgorund-designs/${pro.backgroundBottom}`;
    }
  });
}

//Shows the current selected img on the side
function productImgChange(element) {
  const imgChild = element.children[0];

  document.querySelector(".selected-img").classList.remove("selected-img");
  imgChild.classList.add("selected-img");

  mainImg.src = imgChild.src;
}

//Faq open and closing of faq cards --------------------------------------------------------------------------------------------------------
function faqDropdown(element) {
  let arrowIcon = element.querySelector("img");

  const faqCard = element.parentNode.querySelector(".faq-question-info");
  faqCard.classList.toggle("open");

  if (arrowIcon.src.includes("open-arrow.svg")) {
    arrowIcon.src = "img/icons/arrows/closed-arrow.svg";
  } else {
    arrowIcon.src = "img/icons/arrows/open-arrow.svg";
  }
}

//Toggle of popups with overlay under --------------------------------------------------------------------------------------------------------
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

//Complicated Gallery carousel (FAILED) --------------------------------------------------------------------------------------------------------
/* let previusVisibleIndex = [];

function carouselBtn(event) {
  const selectedImg = document.querySelector(".gallery-selected");
  const galleryList = document.querySelectorAll(".gallery-img");
  let selectedIndex = 0;
  previusVisibleIndex = [];

  for (let index = 0; index < galleryList.length; index++) {
    //Looks for the element with most classes and find the selected img
    if (galleryList[index].classList.length > 1) {      
      selectedIndex = index;
    }

    let parentEl = galleryList[index].parentElement;

    //Removes all of the visibility and saves the elements
    if (parentEl.classList.contains("gallery-img-visible")) {
      previusVisibleIndex.push(index);
      parentEl.classList.remove("gallery-img-visible");
    }
  }

  //Changes the visible img to the next or previusly images  
  previusVisibleIndex.forEach((index) => {
    if (event.id == "right-arrow-gallery") {
      galleryList[index + 1].parentElement.classList.add("gallery-img-visible");
    } else {
      galleryList[index - 1].parentElement.classList.add("gallery-img-visible");
    }
  });


  //Changes The selsected img from one img to another 
  selectedImg.classList.remove("gallery-selected");

  if (event.id == "right-arrow-gallery") {
    galleryList[selectedIndex + 1].classList.add("gallery-selected");
  } else {
    galleryList[selectedIndex - 1].classList.add("gallery-selected");
  }
}
 */

//A simpler way of making the carousel with src changes --------------------------------------------------------------------------------------------------------
const imgList = [
  "gallery-img-1.jpg",
  "gallery-img-2.jpg",
  "gallery-img-3.jpg",
  "gallery-img-4.jpg",
  "gallery-img-5.jpg",
];

// A way of keeping tract with what img to give next
const indexGallery = [0, 1, 2, 3, 4];

function carouselBtn(element) {
  const galleryList = document.querySelectorAll(".gallery-img");

  //Loops though all of the img in the gallery/carousel
  galleryList.forEach((img, index) => {
    //Checks if it's righ or left button click
    if (element.id == "right-arrow-gallery") {
      indexGallery[index]++;
    } else {
      indexGallery[index]--;
    }

    //Makes sure you don't get out of the max nr of img
    if (indexGallery[index] == 5) {
      indexGallery[index] = 0;
    } else if (indexGallery[index] == -1) {
      indexGallery[index] = 4;
    }
    img.src = `img/galleries/${imgList[indexGallery[index]]}`;
  });
}
