//이터레이터 데이터 처리

let train = [
  "판교",
  "이패",
  "삼동",
  "경기광주",
  "초월",
  "곤지암",
  "신둔도예촌",
  "이천",
  "부발",
  "세종대왕릉",
  "여주",
];

let train1 = train[Symbol.iterator]();

//제네레이터 함수
function* train2() {
  yield "판교";
  yield "이패";
  yield "삼동";
  yield "경기광주";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이천";
  yield "부발";
  yield "세종대왕릉";
  yield "여주";
}

// let gyeong = train2();
let gyeong = train[Symbol.iterator]();

const bttn = document.querySelector("button");
const result = document.querySelector("#result");

bttn.addEventListener("click", () => {
  let curr = gyeong.next();

  if (curr.done === false) {
    result.innerHTML = curr.value;
  } else {
    result.innerHTML = "종점";
    bttn.setAttribute("disabled", "disabled");
  }
});
