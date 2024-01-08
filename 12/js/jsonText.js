let student = {name:"홍길동", major:"컴퓨터공학", grade : 2};
let json = JSON.stringify(student);
console.log(student);
console.log(json);
console.log("=============================================");

let jsonObj = JSON.parse(json);
console.log(json);
console.log(jsonObj);

