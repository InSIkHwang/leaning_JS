// let members = document.querySelectorAll("#members > li");
// console.log(members[0].innerText);

const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "자바스크립트", "리액트"];
const member3 = ["자바스크립트", "타입스크립트"];

const subjects = new Set([...member1, ...member2, ...member3]);
const resultList = [...subjects];

const result = document.querySelector("#result");

result.innerHTML = `
<ul>
${resultList.map((list) => `<li>${list}</li>`).join("")}
</ul>
`;
