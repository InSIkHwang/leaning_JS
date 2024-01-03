let openPopup = () => {
  window.open("notice.html", "EVENT!", "width=600 height=500 left=300 top=200");
};

const bttn1 = document.querySelector("#bt1");
// bttn.onclick = openPopup;

const bttn2 = document.querySelector("#bt2");
let popwidth = 600;
let popheight = 500;

bttn2.addEventListener("click", () => {
  let left = (screen.availWidth - popwidth) / 2; //(화면 너비 - 팝업창 너비)/2
  let top = (screen.availHeight - popheight) / 2;

  window.open(
    "notice.html",
    "EVENT!",
    `width=${popwidth} height=${popheight} left=${left} top=${top}`
  );
});
