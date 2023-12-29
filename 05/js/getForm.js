const selectMenu = document.querySelector("#major");
const userName = document.querySelector("#userName");

let displaySelect = () => {
  let selectedNum = selectMenu.selectedIndex;
  let selectedText = selectMenu.options[selectedNum].innerText;
  alert(`${selectedText}`);

  userName.value = selectMenu.options[selectedNum].value;
};

const userForm = document.querySelector("form");
selectRadio = () => {
  let selectRadio = userForm.subject.value;
  alert(`${selectRadio}`);
};

let selectPrn = () => {
  chkData = document.querySelectorAll("input[name='mailing']:checked");
  console.log("--------------------------------");
  for (aa of chkData) {
    console.log(aa.value);
  }
};

selectMenu.onchange = displaySelect;
