const modalBox = document.querySelector("#modal-box");
const closeBox = document.querySelector("#close");

const openPro = () => {
  modalBox.classList.toggle("active");
};

closeBox.addEventListener("click", () => {
  modalBox.classList.toggle("active");
});
