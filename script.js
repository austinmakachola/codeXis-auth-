document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  let menuTimeout;

  burger.addEventListener("click", () => {
    // Toggle the 'active' class for the menu
    navLinks.classList.toggle("active");

    // Toggle the animation for the burger icon
    burger.classList.toggle("open");

    // Clear any existing timeout
    clearTimeout(menuTimeout);

    // Set a timeout to auto-close the menu after 5 seconds
    if (navLinks.classList.contains("active")) {
      menuTimeout = setTimeout(() => {
        navLinks.classList.remove("active");
        burger.classList.remove("open");
      }, 3000); // 5 seconds
    }
  });
});
