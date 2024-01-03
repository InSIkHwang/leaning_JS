//생성자 이용

function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  };
}

let book1 = new Book("웹 표준의 정석", 648, false);
let book2 = new Book("점프 투 파이썬", 360, true);
console.log(`${book1.title} - ${book1.pages}쪽 - ${book1.finish()}`);
console.log(`${book2.title} - ${book2.pages}쪽 - ${book2.finish()}`);

//클래스 이용
class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
  finish() {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  }
}
let bookCls1 = new Book2("웹 표준의 정석", 648, false);
let bookCls2 = new Book2("점프 투 파이썬", 360, true);
console.log(`${bookCls1.title} - ${bookCls1.pages}쪽 - ${bookCls1.finish()}`);
console.log(`${bookCls2.title} - ${bookCls2.pages}쪽 - ${bookCls2.finish()}`);

for (key in bookCls2) {
  console.log(`key: ${key}, value: ${bookCls2[key]}`);
}

//array 형태 추출
console.log(Object.keys(bookCls2));
console.log(Object.values(bookCls2));
console.log(Object.entries(bookCls2));

console.log(Book2.prototype); //생성자
console.log(book2.__proto__); //인스턴스

//생성자 이용 새로운 생성자
function Textbook(title, pages, price) {
  Book.call(this, title, pages);
  this.price = price;
}

Textbook.prototype.buy = function () {
  document.write(`${this.title}: ${this.price}원`);
};

console.log(Textbook.prototype);
console.log(Book.prototype);

let book5 = new Textbook("react", 360, 30000);
book5.buy();
