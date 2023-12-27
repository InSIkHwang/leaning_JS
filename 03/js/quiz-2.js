const inNum = [
  [12, 3, 45, 25, 12, 36, 65, 21, 75, 95],
  [32, 88, 52, 65, 75, 15, 42, 62],
  [30, 62, 42, 51, 85, 45, 12, 62, 32],
  [12, 45, 52, 95, 20, 12],
  [32, 52, 42, 15, 62, 85, 10],
  [63, 52, 15, 45, 75, 63, 87, 62],
];

function max_min_num() {
  let max_num = 0;
  let min_num = 999;
  let arr_max_num = 0;
  let arr_min_num = 999;

  for (i = 0; i < inNum.length; i++) {
    let arr_max_num = 0;
    let arr_min_num = 999;

    for (j = 0; j < inNum[i].length; j++) {
      if (arr_max_num < inNum[i][j]) {
        arr_max_num = inNum[i][j];
      } else if (arr_min_num > inNum[i][j]) {
        arr_min_num = inNum[i][j];
      }
    }
    for (j = 0; j < inNum[i].length; j++) {
      if (max_num < inNum[i][j]) {
        max_num = inNum[i][j];
      } else if (min_num > inNum[i][j]) {
        min_num = inNum[i][j];
      }
    }
    console.log(`${i + 1}번째 배열에서 MAX:${arr_max_num}, MIN:${arr_min_num}`);
  }
  console.log(`전체 배열에서 MAX: ${max_num}, MIN:${min_num}`);
}
