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
