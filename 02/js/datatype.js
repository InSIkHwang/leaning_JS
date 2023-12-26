console.log(typeof 3); //정수형
console.log(typeof "3"); //문자형
console.log(typeof 3.0); //실수형

//컴퓨터 계산 자체의 실수
console.log(0.1 + 0.2);
// **해결법round 함수로 반올림
console.log(Math.round((0.1 + 0.2) * 10) / 10);

//문자형('' or "")
console.log(3);
console.log("str");
console.log("");

//이스케이프 문자
console.log("KOREA\nSEOUL");

//템플릿 리터럴: 백틱(``)로 묶고 중간에 ${} 이용 값 출력
var name = "HWANG";
let classRoom = 205;
console.log(`이름: ${name}\n반: ${classRoom}`);

//배열
var arr = ["Spring", "Summer", "Autumn", "Winter"];
console.log(arr);
console.log(arr[0]);
arr[1] = "Warm_Season";
console.log(arr);

//dictionary
var dict = { name: "HWANG", age: 26, email: "email@example.com" };
console.log(dict);
console.log(dict.email);
