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

var names = ["KIM", "LEE", "PARK", "CHOI", "HWANG"];

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

//forEach: 배열 데이터형에서 사용
var names = ["KIM", "LEE", "PARK", "CHOI", "HWANG"];

// names.forEach(function (name) {
//   console.log(name);
// });

//콜백 함수 주로 쓰는 방법
function forE() {
  names.forEach((name) => {
    console.log(name);
  });
}

let books = [
  {
    title: "Git&Hub basic",
    pubData: "2020-01-23",
    pages: 227,
    finished: true,
  },
  {
    title: "JavaScript",
    pubData: "2021-01-30",
    pages: 423,
    finished: true,
  },
];

function forIn() {
  for (i in books) {
    for (key in books[i]) {
      console.log(`${key} : ${books[i][key]}`);
    }
    console.log("****************************");
  }
}
function forof() {
  for (book of books) {
    for (key in book) {
      console.log(`${key} : ${book[key]}`);
    }
    console.log("****************************");
  }
}
