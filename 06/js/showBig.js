const imgCup = document.querySelector("#cup"); //큰 이미지 객체
const imgSmall = document.querySelectorAll(".small"); //작은 이미지 객체(노드 리스트)

function changePic() {
  let newPic = this.src; //이벤트 발생 대상 속성 추출
  console.log(newPic);
  imgCup.setAttribute("src", newPic);
  // imgCup.src = newPic;
}
for (i = 0; i < imgSmall.length; i++) {
  // imgSmall[i].onclick = changePic;
  imgSmall[i].addEventListener("click", changePic);
}
