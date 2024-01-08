// 자료 요청
let xhr = new XMLHttpRequest();  // 객체 생성
xhr.open("GET", "/data/student.json");  // 비동기 통신으로 자료 요청 방법 결정(방식, 요청자료, 통신방식)
xhr.send(); //open으로 설정한 자료 요청

// 요청 자료 화면에 출력
xhr.onreadystatechange = function() {     // xhr 객체의 readyState 속성이 변하면 아래 함수 실행
  if (xhr.readyState === 4 && xhr.status === 200) {   // readyState가 4(사용가능한 상태)/status가 200(서버로부터 전송 완료)
    let student = JSON.parse(xhr.responseText); // 가져온 json 정보를 객체 형식으로 변경
    document.getElementById("result").innerHTML=`
      <h1>${student.name}</h1>
      <ul>
        <li>전공: ${student.major}</li>
        <li>학년: ${student.grade}학년</li>
      </ul>
    `;
  }
};
