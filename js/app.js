const imgFirstCatEl = document.querySelector("#cat1");
const imgSecondCatEl = document.querySelector("#cat2");
const countFirstCatEl = document.querySelector("#count1");
const countSecondCatEl = document.querySelector("#count2");

imgFirstCatEl.addEventListener(
  "click",
  (function() {
    let count = 0;
    return () => {
      countFirstCatEl.textContent = ++count;
    };
  })()
);

imgSecondCatEl.addEventListener(
  "click",
  (function() {
    let count = 0;
    return () => {
      countSecondCatEl.textContent = ++count;
    };
  })()
);
