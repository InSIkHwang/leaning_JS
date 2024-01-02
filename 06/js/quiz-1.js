const imgBox = document.querySelector("img");

imgBox.addEventListener("mouseover", () => {
  imgBox.setAttribute("src", "./img/pic-6.jpg");
});
imgBox.addEventListener("mouseout", () => {
  imgBox.setAttribute("src", "./img/pic-1.jpg");
});
