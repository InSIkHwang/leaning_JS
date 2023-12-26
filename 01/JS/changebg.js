function random(number) {
  return Math.floor(Math.random() * number);
}
function changeBg() {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}
