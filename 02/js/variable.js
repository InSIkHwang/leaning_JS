// 변수 선언: var, let, const

//var: 값 수정, 재정의 가능
var result = 10;

//let: 값 수정 가능, 재정의 불가능
let sum = result + 10;

//const: 수정 불가능, 재정의 불가능
const myNum = 15;

console.log(result, sum, myNum);

//더하기 함수 정의
function add(a, b) {
  return a + b;
}

//var 재정의
var result = add(result, sum);
console.log(result);
console.log(sum);

//업데이트
sum = add(result, 20);
// let sum = add(result, 20); <- 재정의 불가능
console.log(sum);
