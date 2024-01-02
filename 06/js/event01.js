// window.onload = alert("HAPPY NEW YEAR!");

const bttn = document.querySelector("button");

bttn.onclick = () => {
  alert("HAPPY NEW YEAR!");
  document.body.style.backgroundColor = "#ccc";
};

const body = document.body;
const result = document.querySelector(".result");

body.addEventListener("keydown", (e) => {
  if (e.key === "p") {
    result.innerText = `You Press a 'p'`;
  } else {
    result.innerText = `code: ${e.code}, key: ${e.key}`;
  }
});

function chkText() {
  const word = document.querySelector("#words").value;
  result.innerText = `${word.length}`;
}
