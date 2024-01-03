window.onload = () => {
  let randomNum = Math.floor(Math.random() * 5) + 1;
  document.body.style.backgroundImage = `url(./img/bg-${randomNum}.jpg)`;
};
