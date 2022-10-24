// Handle click event for navbar menu on small screens
const handleDisplayNavbarMenu = () => {
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
handleDisplayNavbarMenu();

// Function to create and add projects to the projects carousel
function createProjectCard(
  url,
  codeUrl,
  img,
  title,
  description,
  tags,
  type,
  totalNumber,
  currentIndex
) {
  const projectsContainer = document.querySelector(
    ".projects .carousel .cards"
  );
  let card = document.createElement("div");
  card.classList.add("card");

  // Create the head
  let head = document.createElement("div");
  head.classList.add("card-head");
  head.innerHTML = `
    <div class="face front">
      <img src="${img}" alt="" />
    </div>
    <div class="face back">
      <span class="card-head-btns">
        <a href="${codeUrl}" class="code" target="_blank">
          <i
            class="fa-regular fa-code"
            style="font-weight: 900"
          ></i
          >Code
        </a>
        <a href="${url}" class="view" target="_blank">
          <i class="fa-regular fa-eye"></i>View
        </a>
      </span>
    </div>
  `;
  card.appendChild(head);

  // Create the body
  let body = document.createElement("div");
  body.classList.add("card-body");
  body.innerHTML = `
    <div class="text">
      <h3>${title}</h3>
      <p>${description}</p>
    </div>
  `;

  let tagsContainer = document.createElement("div");
  tagsContainer.classList.add("tags");

  tags.forEach((tag) => {
    let span = document.createElement("span");
    span.classList.add("tag", tag);
    span.appendChild(document.createTextNode(tag));
    tagsContainer.appendChild(span);
  });
  body.appendChild(tagsContainer);

  // Create the info field
  let info = document.createElement("div");
  info.classList.add("info");

  info.innerHTML = `
    <div class="project-type">
        Project Type: <span>${type}</span>
      </div>
      <div class="project-number">
        Project N°:
        <span class="current">${currentIndex}</span>
        /
        <span class="total">${totalNumber}</span>
    </div>
  `;
  body.appendChild(info);
  card.appendChild(body);
  projectsContainer.appendChild(card);
}

// Get projects informations from the json object and push cards to the html document
async function getProjects() {
  const API = "assets/data/projects.json";
  const data = await (await fetch(API)).json();
  let projects = Array.from(data).reverse();

  projects.forEach((project, index) => {
    createProjectCard(
      project.url,
      project.codeUrl,
      project.img,
      project.title,
      project.description,
      project.tags,
      project.type,
      projects.length,
      index + 1
    );
  });

  handleProjectsCarousel();
  handleClickOnCard();
}
getProjects();

// Handle the projects carousel
function handleProjectsCarousel() {
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
    document
      .querySelector(".projects .carousel .cards .card")
      .getBoundingClientRect().width + cardsGap;

  const carouselScrollLeft = () => {
    carousel.scrollTo({
      top: 0,
      left: (scrollAmount -= scrollPerClick),
      behavior: "smooth",
    });
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
  };

  const carouselScrollRight = () => {
    if (scrollAmount <= carousel.scrollWidth - carousel.clientWidth) {
      carousel.scrollTo({
        top: 0,
        left: (scrollAmount += scrollPerClick),
        behavior: "smooth",
      });
    }
  };

  leftArrow.addEventListener("click", carouselScrollLeft);
  rightArrow.addEventListener("click", carouselScrollRight);
}

// Handle click on a card
function handleClickOnCard() {
  const cards = Array.from(
    document.querySelectorAll(".projects .carousel .cards .card")
  );

  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      if (card.children[0].classList.contains("selected")) {
        card.children[0].classList.remove("selected");
      } else {
        // Remove selected class from all cards
        cards.forEach((card) => {
          card.children[0].classList.remove("selected");
        });
        // Add selected class to the card target 'on click'
        card.children[0].classList.add("selected");
      }
    });
  });
}

// Handle Add a time point to the about section
function addTimePoint(date, title, description) {
  const history = document.querySelector(".about .history"); // ul of points

  // Create a time point
  let point = document.createElement("li");
  point.classList.add("point");
  point.dataset.date = date;

  point.innerHTML = `
    <h4>${title}</h4>
    <p>${description}</p>
  `;
  history.appendChild(point);
}

// Get time points from the API
async function getTimePoints() {
  const API = "assets/data/timePoints.json";
  const data = await (await fetch(API)).json();

  let points = Array.from(data);

  points.forEach((point) => {
    addTimePoint(point.date, point.title, point.description);
  });
}
getTimePoints();

// Handle contact form
function handleContactForm() {}
