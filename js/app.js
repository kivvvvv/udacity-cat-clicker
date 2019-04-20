const imgEl = document.querySelector("#cat");
const countEl = document.querySelector("#count");

imgEl.addEventListener(
  "click",
  (function() {
    let count = 0;
    return () => {
      countEl.textContent = ++count;
    };
  })()
);
