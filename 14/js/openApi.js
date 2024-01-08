// url 생성 함수
function apiUrl(strDate, row = 10) {
  // 개인키
  const apiKey =
    "I6Pc%2F8jrJtKkSJhYlwjy%2BzH%2F0ZtEQlFD0CWmGGOG6gnnK74hv1XdLBeim21a%2Fp34qB908rIS%2BSnbTxeHPzr1nA%3D%3D";

  let url =
    "https://apis.data.go.kr/B551011/KorService1/searchFestival1?serviceKey=";
  url +=
    apiKey + "&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A";
  url +=
    "&eventStartDate=" +
    String(strDate) +
    "&numOfRows=" +
    String(row) +
    "&pageNo=1";
  return url;
}

// 값 출력 부분
async function init() {
  let row = 10;
  let strDate = prompt("시작일을 입력하세요.(2024-01-01)");
  let url = apiUrl(strDate, row);

  // 조회된 총 데이터 건수
  const pesponse = await fetch(url);
  const res = await pesponse.json();
  row = await res.response.body.totalCount;

  // 총 데이터 건수를 이용해 전체 데이터 요청
  dataInput(strDate, row);
}

// 데이터 개수를 이용해 전체 데이터 가져오기
function dataInput(strDate, row) {
  console.log(row);
  url = apiUrl(strDate, row);

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      const datas = json.response.body.items.item;
      console.log(datas);
    });
}

const bttn_dataApi = document.getElementById("bttn_dataApi");
bttn_dataApi.addEventListener("click", init());
