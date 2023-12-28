(function judNum() {
  var num = parseInt(prompt("Write number!: "));

  if (num > 0) {
    alert(`${num}은 양수입니다.`);
  } else if (num < 0) {
    alert(`${num}은 음수입니다.`);
  } else if (num === 0) {
    alert(`${num}은 0입니다.`);
  } else {
    alert(`올바른 값이 아닙니다.`);
  }
})();

(function commonDiv() {
  var num1 = parseInt(prompt("Write number1!: "));
  var num2 = parseInt(prompt("Write number2!: "));
  var gcd = 0;

  if (num1 > num2) {
    for (i = 0; i <= num1; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
      }
    }
    alert(`${num1}과 ${num2}의 최대공약수는: ${gcd}`);
  } else if (num1 < num2) {
    var empty = num1;
    num1 = num2;
    num2 = empty;
    for (i = 0; i <= num1; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
      }
    }
    alert(`${num1}과 ${num2}의 최대공약수는: ${gcd}`);
  } else {
    alert(`올바른 값이 아닙니다.`);
  }
})();
