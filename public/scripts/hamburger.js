let menu = document.querySelector(".hamburger");
let flag = 1;
menu.addEventListener("click", (event) => {
  event.preventDefault();
  if (flag) {
    document.querySelector(".links").style.position = "relative";
    document.querySelector(".links").style.transform = "translate(0%, 0%)";
  } else {
    document.querySelector(".links").style.position = "absolute";
    document.querySelector(".links").style.transform =
      "translate(-10000%, -1000%)";
  }
  flag = flag ^ 1;
});

document.querySelector(".navbar-logo").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "https://sumpix.cyclic.app/";
});
