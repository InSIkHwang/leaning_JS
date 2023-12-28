//더하는 함수 정의
function calcSum(num) {
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

//입력값을 받은 후 calcSum()함수 실행
function userInput() {
  let num = parseInt(prompt("1부터 n까지의 합계 n: "));

  //함수 호출
  userSum = calcSum(num);
  console.log(`1부터 ${num}까지의 합은: ${userSum}`);
}

//******************************************************

const add = function (a, b) {
  return a + b;
};

//es6 권장 함수 선언
const prn = () => {
  let num1 = parseInt(prompt("첫번 째 더할 수: "));
  let num2 = parseInt(prompt("두번 째 더할 수: "));
  console.log(`add 실행 결과: ${add(num1, num2)}`);
};

//******************************************************

const bgNum = (num) => {
  var color = ["white", "black", "yellow", "blue"];

  return color[num - 1];
};

const changeBg = () => {
  let num = parseInt(prompt("1~4 사이값: "));

  var bodyTag = document.getElementById("wrap");
  bodyTag.style.backgroundColor = bgNum(num);
};

//매개변수 기본값 설정
function multiple(a = 1, b = 1, c = 0) {
  return a * b + c;
}

console.log(multiple(2, 2, 2));
console.log(multiple(3, 3));

//인수 넘치면 버림
function sub(a, b) {
  return a - b; //5
}
console.log(sub(10, 5, 3, 4));

//인수 처리
function subres(a, ...num) {
  for (i = 0; i < num.length; i++) {
    a -= num[i];
  }

  return a;
}
console.log(subres(10, 5, 3, 4));

//즉시 실행 함수
(function () {
  var userName = prompt("write name: ");
  console.log(`Hello~ ${userName}`);
})();

((name, email) => {
  console.log(`name: ${name}, email: ${email}`);
})("HWANG", "abc@abc.com");
