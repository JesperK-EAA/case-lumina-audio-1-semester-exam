"use strict";

//Fetching my product data form a json file
let productData = [];

async function fetchProductData() {
  const response = await fetch("product-data.json");
  const data = await response.json();
  productData = data;
}

fetchProductData();

//Elements in my product color section that need to change info depending of the selected color and main img
const mainImg = document.getElementById("main-img");
const colorTitle = document.getElementById("color-title");
const colorDesc = document.getElementById("color-desc");
const deafultImg = document.getElementById("img-deafult");
const leftImg = document.getElementById("img-left");
const rightImg = document.getElementById("img-right");
const backgroundTop = document.getElementById("product-color-bg-top");
const backgroundBottom = document.getElementById("product-color-bg-bottom");

function productColorChange(element, color) {
  document.querySelector(".selected-color").classList.remove("selected-color");
  element.classList.add("selected-color");

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

      //Changes all values of the product img and text
      mainImg.src = `img/product/${pro.imgFolder}/${imgDirection}`;
      colorTitle.innerText = pro.productColor;
      colorDesc.innerText = pro.colorDesc;
      deafultImg.src = `img/product/${pro.imgFolder}/${pro.deafultImg}`;
      leftImg.src = `img/product/${pro.imgFolder}/${pro.leftImg}`;
      rightImg.src = `img/product/${pro.imgFolder}/${pro.rightImg}`;

      //Changes the background svg img to the current selected color
      backgroundTop.src = `img/background/backgorund-designs/${pro.backgroundTop}`;
      backgroundBottom.src = `img/background/backgorund-designs/${pro.backgroundBottom}`;
    }
  });
}

//Helps show the current slected img of the product
function productImgChange(element) {
  const imgChild = element.children[0];

  document.querySelector(".selected-img").classList.remove("selected-img");
  imgChild.classList.add("selected-img");

  mainImg.src = imgChild.src;
}

//Faq open and closing of faq cards
function faqDropdown(element) {
  let arrowIcon = element.querySelector("img");

  const faqCard = element.querySelector(".faq-question-info");
  faqCard.classList.toggle("open");

  if (arrowIcon.src.includes("open-arrow.svg")) {
    arrowIcon.src = "img/icons/closed-arrow.svg";
  } else {
    arrowIcon.src = "img/icons/open-arrow.svg";
  }
}

//Toggle of popups with overlay under
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

//Complicated Gallery carousel (FAILED)

/* let previusVisibleIndex = [];

function carouselBtn(event) {
  const selectedImg = document.querySelector(".gallery-selected");
  const galleryList = document.querySelectorAll(".gallery-img");
  let selectedIndex;
  previusVisibleIndex = [];

  //Looks for the element with most classes and find the selected img
  for (let index = 0; index < galleryList.length; index++) {
    if (galleryList[index].classList.length > 1) {
      selectedIndex = index;
    }

    let parentEl = galleryList[index].parentElement;

    if (parentEl.classList.contains("gallery-img-visible")) {
      previusVisibleIndex.push(index);
      parentEl.classList.remove("gallery-img-visible");
    }
  }

  previusVisibleIndex.forEach((index) => {
    if (event.id == "right-arrow-gallery") {
      galleryList[index + 1].parentElement.classList.add("gallery-img-visible");
    } else {
      galleryList[index - 1].parentElement.classList.add("gallery-img-visible");
    }
  });

  //Can now remove the existing selected img in gallery
  selectedImg.classList.remove("gallery-selected");

  if (event.id == "right-arrow-gallery") {
    galleryList[selectedIndex + 1].classList.add("gallery-selected");
  } else {
    galleryList[selectedIndex - 1].classList.add("gallery-selected");
  }
} */

//A simpler way for makign a carousel with change to only the src file
const imgList = [
  "gallery-img-1.jpg",
  "gallery-img-2.jpg",
  "gallery-img-3.jpg",
  "gallery-img-4.jpg",
  "gallery-img-5.jpg",
];

const indexGallery = [0, 1, 2, 3, 4];

function carouselBtn(element) {
  const galleryList = document.querySelectorAll(".gallery-img");

  galleryList.forEach((img, index) => {
    if (element.id == "right-arrow-gallery") {
      indexGallery[index]++;
    } else {
      indexGallery[index]--;
    }

    if (indexGallery[index] == 5) {
      indexGallery[index] = 0;
    } else if (indexGallery[index] == -1) {
      indexGallery[index] = 4;
    }
      img.src = `img/gallery/${imgList[indexGallery[index]]}`;
  });
}
