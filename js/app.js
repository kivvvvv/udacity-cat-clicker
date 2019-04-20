const listCatEl = document.querySelector("#cat-list");
const imgCatEl = document.querySelector("#cat");
const countEl = document.querySelector("#count");

const catImages = [
  { catName: "Chewie", url: "./img/cat-chewie.jpg" },
  { catName: "Max", url: "./img/kitten-max.jpg" },
  { catName: "Tigger", url: "./img/cat-tigger.jpg" },
  { catName: "Tom", url: "./img/cat-tom.jpg" },
  { catName: "Xuxa", url: "./img/kitten-xuxa.jpg" }
];

listCatEl.addEventListener("click", e => {
  const catUrl = catImages.find(cat => cat.catName === e.target.textContent);

  imgCatEl.setAttribute("src", catUrl.url);
});

imgCatEl.addEventListener(
  "click",
  (function() {
    let count = 0;
    return () => {
      countFirstCatEl.textContent = ++count;
    };
  })()
);
