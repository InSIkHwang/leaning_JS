function if_1() {
  data = prompt("비교값을 입력하세요.: ");
  if (data > 500) {
    document.write("500보다 큰 값입니다.");
  }
  alert("작업종료.");
}

function if_2() {
  data = prompt("값을 입력하세요.: ");
  if (data % 2 == 0) {
    document.write("짝수입니다");
  } else {
    document.write("홀수입니다");
  }
  alert("작업종료.");
}

function if_3() {
  let mon = prompt("월을 입력하세요: ");

  if (mon >= 1 && mon <= 12) {
    alert("입력 완료!");
    if (mon >= 9 && mon <= 11) {
      document.write("<b>가을</b>입니다.<br>");
    } else if (mon >= 6 && mon <= 8) {
      document.write("<b>여름</b>입니다.<br>");
    } else if (mon >= 3 && mon <= 5) {
      document.write("<b>봄</b>입니다.<br>");
    } else {
      document.write("<b>겨울</b>입니다.<br>");
    }
  } else {
    alert("입력 오류!");
  }
  document.write("작업종료.");
}

function login() {
  const id = "js123";
  const pw = "112233";

  var idChk = prompt("ID를 입력하세요");

  if (idChk === id) {
    var pwChk = prompt("PW를 입력하세요");
    if (pwChk === pw) {
      document.write(`${id}님 반갑습니다.`);
    } else {
      alert("PW 불일치");
    }
  } else {
    alert("ID 불일치");
    //브라우저 새로고침
    location.reload();
  }
}

//switch를 이요한 선택문
function switch_1() {
  let site = prompt("네이버, 구글, 다음, 네이트 중 즐겨 사용하는 포털은?", "");
  let url; //변수 선언

  //url 변경
  switch (site) {
    case "네이버":
      url = "www.naver.com";
      break;
    case "구글":
      url = "www.google.com";
      break;
    case "다음":
      url = "www.daum.net";
      break;
    case "네이트":
      url = "www.nate.com";
      break;

    default:
      alert("보기 중 없는 사이트입니다.");
      break;
  }
  //입력 받은 사이트로 이동

  if (url) {
    location.href = "http://" + url;
  }
}
