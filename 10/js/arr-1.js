let fruits = [];

arrInput1 = () => {
  for (i = 0; i < 5; i++) {
    fruits[i] = prompt("write fruits: ");
  }

  console.log(fruits);
};

//마지막 값 이후 추가
addArr = () => {
  let inputData = prompt("write fruits(add) :");
  fruits.push(inputData);

  console.log(fruits);
};
prnArr = () => {
  let prnIndex = prompt(`write index(1~${fruits.length}): `);
  if (prnIndex <= fruits.length) {
    console.log(fruits[prnIndex - 1]);
  } else {
    alert("ERROR!");
  }
};

editArr = () => {
  let prnIndex = prompt(`edit index(1~${fruits.length})`);
  let inputData = prompt("write fruits(edit) :");

  fruits[prnIndex - 1] = inputData;
  console.log(fruits);
};

delArr = () => {
  let prnIndex = prompt(`delete index(1~${fruits.length})`);

  fruits.splice(prnIndex - 1, 1);
  console.log(fruits);
};
