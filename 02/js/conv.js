//자료형 변환
var data1 = "20";
var data2 = 10;

//data2 문자형 변환
console.log(`data1(20(str)) + data2(10(num)): ${data1 + data2}`);

//data1 숫자형 변환
console.log(`data1(20(str)) - data2(10(num)): ${data1 - data2}`);

//exercise
//1.
//데이터 받기(문자형)
var inputData1 = prompt("Write number!(inputData1): ");
console.log(`typeof inputData1: ${typeof inputData1}`);
//숫자형 자동 변환
console.log(`typeof (inputData1 * 10): ${typeof (inputData1 * 10)}`);

//2.
//데이터 받기(문자형)
var inputData2 = prompt("Write number!(inputData2): ");
//실수형 변환
console.log(`parseFloat(inputData2) : ${parseFloat(inputData2)}`);
//숫자형 변환
console.log(`Number(inputData2): ${Number(inputData2)}`);
//숫자형 변환 / 소수점 버림
console.log(`parseInt(inputData2): ${parseInt(inputData2)}`);

//문자형 변환
var num_data = 123;
console.log(`typeof num_data: ${typeof num_data}`);
console.log(`typeof toString(num_data): ${typeof toString(num_data)}`);

var num_data2 = 123;
console.log(`typeof num_data2: ${typeof num_data2}`);
console.log(`typeof toString(num_data2): ${typeof toString(num_data2)}`);

num_data2 = String(num_data2);
console.log(`typeof user_data: ${typeof num_data2}`);
