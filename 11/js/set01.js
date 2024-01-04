// 두 배열을 이용한 합집합, 교집합, 차집합 계산
let arr1 = [1, 2, 3, 1, 2, 4, 5];
let arr2 = [4, 3, 5, 2, 6, 7, 8];

function uniNum() {
  // 배열을 Set(집합) 형식으로 변경
  let set1 = new Set(arr1); // arr1에서 고유값 추출 후 집합으로 변경
  let set2 = new Set(arr2); // arr2에서 고유값 추출 후 집합으로 변경

  // 합집합 => 두 배열의 고유값
  const union = new Set([...set1, ...set2]);
  console.log(...union);
  console.log("합집합", [...union]);

  // 교집합(공통값)
  // 배열.filter((변수) => 조건식)
  const interection = new Set([...set1].filter((val) => set2.has(val)));
  console.log("교집합", [...interection]);

  // 차집합
  const difference = new Set([...set1].filter((val) => !set2.has(val)));
  console.log("차잡합", [...difference]);
}
