//객체 정의
const title = document.querySelector("h1");
const profileImg = document.querySelector("#profile img");
const profileName = document.querySelector(".desc p");
const profileP = document.querySelectorAll(".desc p");

//객체 내용 수정 함수
title.onclick = () => {
  title.innerText = "프 로 필";

  //스타일 변경
  title.style.backgroundColor = "#ccc";
  title.style.color = "blue";
};

// let ch = () => {
//   document.querySelector("h1").innerText = "프 로 필"
//   title.innerText = "프 로 필";
// };

profileImg.onclick = () => {
  profileImg.src = "../img/img2.jpg";
};

profileName.onclick = () => {
  profileName.innerHTML = "이름: HWANG";
};

// profileTel.onclick = () => {
//   profileTel.innerHTML = "연락처: 010-1234-1234";
// };

let reset = () => {
  //제목 원상복귀
  title.innerText = "My profile";

  //스타일 변경
  title.style.backgroundColor = "#fff";
  title.style.color = "black";

  //클래스 추가
  profileP[3].classList.add("blue-italic");
  profileP[0].classList.remove("clicked");
};

let classAR = () => {
  // if (title.classList.contains("clicked")) {
  //   title.classList.remove("clicked");
  // } else {
  //   title.classList.add("clicked");
  // }
  title.classList.toggle("clicked");
};
