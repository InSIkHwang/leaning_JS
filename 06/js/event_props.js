const elements = document.querySelectorAll("*");

for (element of elements) {
  element.addEventListener(
    "click",
    (e) => {
      console.log(`event target: ${e.target.tagName},
      event.currentTarget: ${e.currentTarget.tagName}`);
    },
    true //true:캡쳐링  false:버블링
  );
}
