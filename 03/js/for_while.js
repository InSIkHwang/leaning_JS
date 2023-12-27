function for_1() {
  for (i = 1; i <= 10; i++) {
    document.write(i + "<br>");
  }
}

function for_2() {
  let sum = 0;
  for (i = 1; i <= 10; i++) {
    sum += i;
    document.write(sum + "<br>");
  }
}

const names = ["KIM", "LEE", "PARK", "CHOI", "HWANG"];

function name_prt() {
  for (i = 0; i <= names.length - 1; i++) {
    console.log(`${names[i]}님 반가워요.`);
  }
  console.log("작업종료");
}

var inData = [
  ["KIM", "M", "SEOUL"],
  ["LEE", "F", "DAEGU"],
  ["PARK", "F", "JEJU"],
  ["CHOI", "M", "BUSAN"],
  ["HWANG", "M", "BUSAN"],
];

function double_for() {
  for (i = 0; i < inData.length; i++) {
    document.write(`${i + 1} 번째 손님 `);
    for (j = 0; j < inData[i].length; j++) {
      document.write(inData[i][j] + " ");
    }
    document.write("<br>");
  }
  document.write("출력 완료.");
}
