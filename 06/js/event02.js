const box = document.querySelector("#box");
const container = document.querySelector("#container");

box.addEventListener("click", (e) => {
  alert(`event location: ${e.pageX},${e.pageY}`);
});

const pics = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
];

container.style.backgroundImage = `url(./img/${pics[0]})`;

const arrow = document.querySelectorAll(".arrow");
let i = 0; //reset index

arrow.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i > pics.length - 1) {
        i = 0;
      }
    }
    container.style.backgroundImage = `url(./img/${pics[i]})`;
  });
});

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("not allow mouse right button");
});
