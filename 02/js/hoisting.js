var x = 10;
var y;
var sum = x + y;
y = 20;
//NaN 출력
console.log(sum);

var sum = x + y;

console.log(sum);

let a = 10;
//b 정의 이전 sum 정의 -> 에러
let suml = a + b;
let b = 20;
console.log(suml);
