function displayAAA() {
  console.log("AAA");
}
function displayBBB(callback) {
  setTimeout(() => {
    console.log("BBB");
    callback();
  }, 2000); // 2초후 실행
}

function displayCCC() {
  console.log("CCC");
}

function b_async_cb() {
  displayAAA();
  displayBBB(displayCCC);
}