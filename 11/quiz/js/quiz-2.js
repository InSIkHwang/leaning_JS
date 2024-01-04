const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];

function tail(arr) {
  if (arr.length > 1) {
    return arr.slice(1, arr.length);
  } else if (arr.length == 1) {
    return arr;
  }
}

origin.innerText = numbers;
result.innerText = tail(numbers);
