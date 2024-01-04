let arr = [2, 4, 6, 8, 10];
let sum = 0;
arr.forEach((num) => {
  sum += num;
});

const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

origin.innerHTML = arr;

arr.push(sum);

result.innerHTML = arr;

//table 추가
