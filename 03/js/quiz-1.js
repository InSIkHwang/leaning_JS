const userData = [
  //[ID, PW]
  ["u1", "p1"],
  ["u2", "p2"],
  ["u3", "p3"],
  ["u4", "p4"],
  ["u5", "p5"],
  ["u6", "p6"],
  ["u7", "p7"],
];

function login() {
  var inputId = prompt("ID 입력: ");
  var inputPw = prompt("PW 입력: ");

  for (i = 0; i <= userData.length - 1; i++) {
    if (inputId === userData[i][0] && inputPw === userData[i][1]) {
      alert(`${inputId}님 로그인 되었습니다.`);
    } else if (inputId === userData[i][0] && inputPw !== userData[i][1]) {
      alert(`PW가 다릅니다. 로그인 실패!`);
    } else {
      alert(`등록되지 않은 ID. 로그인 실패!`);
    }
    break;
  }
}
