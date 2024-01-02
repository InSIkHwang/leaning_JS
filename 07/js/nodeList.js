//새로운 텍스트 노드
let newText = document.createTextNode("Typescript");
//새로운 p요소 노드 삽입
let newP = document.createElement("P");
//텍스트 연결
newP.appendChild(newText);

// body태그에 p태그 연결
document.body.appendChild(newP);

addNode = () => {
  let newPTag = document.createElement("p");
  let textNode = document.createTextNode(document.querySelector("#word").value);
  let nodeBtn = document.createElement("button");
  let textBtn = document.createTextNode("REMOVE");

  newPTag.appendChild(textNode);
  newPTag.style.fontSize = "14px";
  newPTag.style.color = "blue";
  newPTag.setAttribute("class", "pf");

  nodeBtn.appendChild(textBtn);

  document.body.appendChild(newPTag);
  document.body.appendChild(nodeBtn);
  document.querySelector("#word").value = "";
  document.querySelector("#word").focus();

  //remove tag
  // document.querySelector("#h1Txt").remove();
};

//img 노드/ 속성 노드 삽입
var addImg = document.querySelector("#addImg");

addImg.addEventListener(
  "click",
  () => {
    var newImg = document.createElement("img");
    //속성 노드
    var srcNode = document.createAttribute("src");
    var altNode = document.createAttribute("alt");

    srcNode.value = "./img/wall.jpg";
    altNode.value = "wall";

    //link Node
    newImg.setAttributeNode(srcNode);
    newImg.setAttributeNode(altNode);

    // document.body.appendChild(newImg);

    //특정 위치 삽입
    let basicNode = document.querySelectorAll("p")[0];
    document.body.insertBefore(newImg, basicNode);
  },
  { once: true }
);

let items = document.querySelectorAll("p");

for (let item of items) {
  item.addEventListener("click", function () {
    this.remove(this);
  });
}
