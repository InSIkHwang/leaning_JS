let likePizza = false;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) 
    resolve("피자를 주문합니다.");
  else
    reject("피자를 주문하지 않았습니다.");
});

// pizza
// .then(result => console.log(result))
// .catch(err => console.log(err));
// .finally(() => console.log("상황 끝"))

pizza.then(
  result => console.log(result),
  err => console.log(err),
);
  