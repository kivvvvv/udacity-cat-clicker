const listCatEl = document.querySelector("#cat-list");
const imgCatEl = document.querySelector("#cat");
const countEl = document.querySelector("#count");
const catNameEl = document.querySelector("figcaption");

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

window.onload = () => {
  imgCatEl.setAttribute("src", catImages[0].url);
  catNameEl.textContent = catImages[0].pictureName;
};

listCatEl.addEventListener("click", e => {
  const selectedCat = catImages.find(
    cat => cat.catName === e.target.textContent
  );

  imgCatEl.setAttribute("src", selectedCat.url);
  catNameEl.textContent = selectedCat.pictureName;
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
