function showData(name, age) {
  alert(`Hello! ${name}..! you are ${age}!`);
}

let getData = (callback) => {
  let uName = prompt("write your name:");
  let uAge = prompt("write your age:");
  callback(uName, uAge);
};

// getData(showData);

var x = 10,
  y = 20; //전역 변수

//전역 함수
function sub() {
  return x - y;
}

alert(`전역 변수 출력 X - Y = ${sub(x, y)}`);

function parFunc() {
  var x = 1,
    y = 2; //전역 변수와 동일 변수명

  function add() {
    return x + y;
  }
  return add();
}

alert(`내부 함수 X + Y = ${parFunc()}`); //내부 변수 사용
alert(`X: ${x}, Y: ${y}`); //전역 변수 그대로
