const btn = document.querySelector("#view");
const detail = document.querySelector("#detail");

btn.onclick = () => {
  detail.classList.toggle("hidden");
};
