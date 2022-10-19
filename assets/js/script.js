// Handle click event for navbar menu on small screens
const HandleDisplayNavbarMenu = () => {
  const menuBtn = document.querySelector(".header .navbar .menu-btn");

  menuBtn.addEventListener("click", () => {
    // Select the menu and display it if it's not
    if (menuBtn.classList.contains("hide")) {
      menuBtn.classList.remove("hide");
      menuBtn.classList.add("display");
    } else {
      menuBtn.classList.remove("display");
      menuBtn.classList.add("hide");
    }
  });

  // Hide the menu by clicking anywhere but the menu
  document.body.addEventListener("click", (event) => {
    if (
      !event.target.classList.contains("menu-item") &&
      !event.target.classList.contains("nav-links") &&
      !event.target.classList.contains("menu-btn") &&
      !event.target.classList.contains("menu-icon")
    ) {
      menuBtn.classList.remove("display");
      menuBtn.classList.add("hide");
    }
  });
};
HandleDisplayNavbarMenu();

// Handle the projects carousel
const carousel = document.querySelector(".projects .carousel");
const carouselCards = document.querySelector(".projects .carousel .cards");
const leftArrow = document.querySelector(
  ".projects .carousel-wrapper .left-arrow i"
);
const rightArrow = document.querySelector(
  ".projects .carousel-wrapper .right-arrow i"
);

let scrollAmount = 0;
let cardsGap = 30;
let scrollPerClick =
  document.querySelector(".projects .carousel .cards .card").clientWidth +
  cardsGap;

function carouselScrollLeft() {
  carousel.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function carouselScrollRight() {
  if (scrollAmount <= carousel.scrollWidth - carousel.clientWidth) {
    carousel.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
}

leftArrow.addEventListener("click", carouselScrollLeft);
rightArrow.addEventListener("click", carouselScrollRight);
