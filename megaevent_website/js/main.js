const menuIcon = document.querySelector(".hamburger-wrapper");
const navbar = document.querySelector(".navbar-nav");
const animatedIcon = document.querySelector(".animated-icon");
const zIndex = document.querySelector(".texture-background");
const positionInitial = document.querySelector("footer");
const mapContainer = document.querySelector(".map-container");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
  animatedIcon.classList.toggle("open");
  animatedIcon.classList.toggle("fixed");
  zIndex.classList.toggle("z-index-1");
  mapContainer.classList.toggle("z-index-1");
  positionInitial.classList.toggle("position-initial");
});
