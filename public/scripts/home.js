let text = `Use Sumpix to efficiently summarise your notes. Make your notes
appealing and share them with whoever you want. Read docs if you are not
familiar with the usage. Good luck for your future endevours.`;

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

let intervalId = setInterval(interval, 25);

let rdbtn = document.querySelectorAll(".get-started-navbar button");
rdbtn.forEach((element) => {
  element.addEventListener("click", (event) => {
    window.location.href = "/create";
  });
});
