function increase() {
  a = 10;
  b = ++a + 5;
  //전위 연산
  console.log(b, a);
  console.log("전위 연산");

  a = 10;
  b = a++ + 5;
  //후위 연산
  console.log(b, a);
  console.log("후위 연산");
}

function 대입연산() {
  x = 10;
  x += 5;
  console.log(`x += 5 결과:${x}`);
}

function 비교연산() {
  x = 10;
  y = prompt("Write a number.");
  alert(`x(10) == 입력 받은 수: ${x == y}`);

  //문자열로 받기 때문에 자료형이 다름
  console.log(`x(10) === 입력 받은 수: ${x === y}`);
}

function 삼항연산() {
  inputData1 = prompt("첫 번째 값 입력: ");
  inputData2 = prompt("두 번째 값 입력: ");

  inputData1 == inputData2
    ? console.log(`${inputData1}, ${inputData2} 두 값은 같습니다.`)
    : console.log(`${inputData1}, ${inputData2} 두 값은 다릅니다.`);
}
