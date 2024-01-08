// 로컬 스토리지에 저장합니다.
let students = ["Kim", "Lee", "Park"];
localStorage.setItem("students", JSON.stringify(students)); // 스토리지에 students 키로 배열 저장;
// 로컬 스토리지에서 가져온 후 추가하고 저장합니다.
let localData;
if (localStorage.getItem("students") === null) {
  // 스토리지에 students 키가 있는지 확인.
  localData = [];
} else {
  localData = JSON.parse(localStorage.getItem("students")); // 스토리지의 값을 localData로 저장
}
console.log(`추가 전 students : ${localData}`);
localData.push("Choi"); // localData에 Choi 추가
localStorage.setItem("students", JSON.stringify(localData)); // 스토리지에 localData 저장
console.log(`추가 후 students : ${localData}`); // 스토리지에 저장된 값을 표시
