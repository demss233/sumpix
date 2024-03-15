let text = `Use Sumpix to efficiently summarise your notes. Make your notes
appealing and share them with whoever you want.  Good luck for your future endevours.`;

let area = document.querySelector(".type");
let pointer = 0;

let interval = () => {
  area.innerHTML += text[pointer];
  if (pointer === text.length - 1) {
    clearInterval(intervalId);
    document.querySelector(".container").style.opacity = "1";
  } else {
    pointer++;
  }
};

interval();

let intervalId = setInterval(interval, 13);

let rdbtn = document.querySelectorAll(".get-started-navbar button");
rdbtn.forEach((element) => {
  element.addEventListener("click", (event) => {
    window.location.href = "/create";
  });
});

let footer_icon = document.querySelector(".footer-svg");

footer_icon.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "https://github.com/demss233/sumpix";
});

let container = document.querySelector(".container-fluid");
let cards = document.querySelectorAll(".card");

window.onload = () => {
  container.style.opacity = "1";
  container.style.transform = "translateY(0px)";
};

const options = {
  root: null,
  threshold: 0.5,
  rootMargin: "0px",
};

const observer1 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      cards[0].style.opacity = "1";
      cards[0].style.transform = "translateY(0px)";
    }
  });
}, options);

const observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      cards[1].style.opacity = "1";
      cards[1].style.transform = "translateY(0px)";
    }
  });
}, options);

const observer3 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      cards[2].style.opacity = "1";
      cards[2].style.transform = "translateY(0px)";
    }
  });
}, options);

observer1.observe(cards[0]);
observer2.observe(cards[1]);
observer3.observe(cards[2]);
