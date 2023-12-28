//데이터 숫자 입력
function while_b() {
  let inputData = [];
  let userData = prompt("숫자 입력(end or END 입력 시 계산): ");

  while (userData != "end" && userData != "END") {
    inputData.push(parseInt(userData));
    userData = prompt("숫자 입력(end or END 입력 시 계산): ");
  }
  console.log(inputData);

  let sum = 0;
  inputData.forEach((num) => {
    sum += num;
  });

  let avg = sum / inputData.length;

  console.log(`SUM: ${sum}, AVG: ${avg}`);
}

//do while
function doWhile() {
  let inputData = [];
  let userData;
  let sum = 0;

  do {
    userData = prompt("숫자 입력(end or END 입력 시 계산): ");
    inputData.push(parseInt(userData));
  } while (userData != "end" && userData != "END");
  console.log(inputData);

  for (i = 0; i < inputData.length - 1; i++) {
    sum += inputData[i];
  }
  avg = sum / (inputData.length - 1);
  console.log(inputData);
  console.log(`SUM: ${sum}, AVG: ${avg}`);
}

//continue / break
function con_br() {
  let data = [1, 2, 3, 4, 5];

  while (true) {
    userData = prompt("숫자 입력(end or END 입력 시 계산): ");
    if (userData == "end" || userData == "END") {
      break;
    }
  }
  console.log("종료합니다.");
  for (num of data) {
    if (num < 3) {
      continue;
    }
    console.log(num);
  }
}
