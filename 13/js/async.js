function displayAA() {
  console.log("AA");
}
function displayBB() {
  setTimeout(() => console.log("BB"), 2000); // 2초후 실행
}
function displayCC() {
  console.log("CC");
}

function b_async() {
  displayAA();
  displayBB();
  displayCC();
}