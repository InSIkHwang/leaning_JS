let xhr = new XMLHttpRequest(); 
xhr.open("GET", "/data/searchFestival1.json");
xhr.send();


// 가져온 데이터 형식 변경
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let fsts = JSON.parse(xhr.responseText);
    let contents = fsts.response.body.items.item; // Festival 정보에서 최종 정보인 item 배열 데이터 받아오기
    renderHtml(contents);    // 처리된 정보를 출력하는 함수 호출
  }
};

function renderHtml(contents) {
  let output ="";
  // console.log(contents);
  for (tagContent of contents) {
    output += `
      <h2>${tagContent.title}</h2>
      <ul>
        <li>주 소: ${tagContent.addr1} / ${tagContent.addr2}</li>
        <li>기 간: ${tagContent.eventstartdate} ~ ${tagContent.eventenddate}</li>
        <li>연락처: ${tagContent.tel}</li>
        <li>포스터: <a href="${tagContent.firstimage}" target="_blank"> 행사 이미지</a></li>
      </ul>
      <hr>
    `;
  }
  // console.log(output);
  document.getElementById("result").innerHTML=output;
};