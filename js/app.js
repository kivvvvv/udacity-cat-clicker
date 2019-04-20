const listCatEl = document.querySelector("#cat-list");
const imgCatEl = document.querySelector("#cat");
const countEl = document.querySelector("#count");

const catImages = [
  {
    catName: "Chewie",
    url: "./img/cat-chewie.jpg",
    pictureName: "Chewie the Cat",
    clickCount: 0
  },
  {
    catName: "Max",
    url: "./img/kitten-max.jpg",
    pictureName: "Little Max",
    clickCount: 0
  },
  {
    catName: "Tigger",
    url: "./img/cat-tigger.jpg",
    pictureName: "Tigger the Cat",
    clickCount: 0
  },
  {
    catName: "Tom",
    url: "./img/cat-tom.jpg",
    pictureName: "Tom the Cat",
    clickCount: 0
  },
  {
    catName: "Xuxa",
    url: "./img/kitten-xuxa.jpg",
    pictureName: "Little Xuxa",
    clickCount: 0
  }
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
