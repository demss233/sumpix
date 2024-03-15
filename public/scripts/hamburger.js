let menu = document.querySelector(".hamburger");
let links = document.querySelector(".links");

menu.addEventListener("click", () => {
  links.classList.toggle("links-resp");
});

document.querySelector(".navbar-logo").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "https://sumpix.cyclic.app/";
});
