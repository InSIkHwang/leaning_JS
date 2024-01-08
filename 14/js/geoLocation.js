let lat;
let long;

showPosition = (position) => {
  document.querySelector("#result").innerHTML = `
<b>위도:</b> ${position.coords.latitude}, <b>경도:</b> ${position.coords.longitude}`;
  lat = position.coords.latitude;
  long = position.coords.longitude;
};

errorPosition = (err) => {
  alert(err.message);
};

getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
  } else {
    alert("지오로케이션을 지원하지 않습니다.");
  }
};

showMap = () => {
  window.open(`https://www.openstreetmap.org/#map=14/${lat}/${long}`);
};
