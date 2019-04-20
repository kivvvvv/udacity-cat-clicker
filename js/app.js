(function() {
  const catModel = [
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

  const octopus = {
    getData: () => catModel
  };

  const view = {
    init: function() {
      this.listCatEl = document.querySelector("#cat-list");
      this.imgCatEl = document.querySelector("#cat");
      this.countEl = document.querySelector("#count");
      this.catNameEl = document.querySelector("figcaption");

      this.renderCatList(octopus.getData());

      const catData = octopus.getData();
      this.renderCatDetails(catData[0]);

      this.bindCatList(catData);
    },
    renderCatList: function(catModel) {
      catModel.forEach(cat => {
        const catItemEl = document.createElement("li");
        catItemEl.textContent = cat.catName;

        this.listCatEl.appendChild(catItemEl);
      });
    },
    renderCatDetails: function(cat) {
      this.imgCatEl.setAttribute("src", cat.url);
      this.catNameEl.textContent = cat.pictureName;
      this.countEl.textContent = cat.clickCount;
    },
    bindCatList: function(catData) {
      this.listCatEl.addEventListener("click", e => {
        const selectedCat = catData.find(
          cat => cat.catName === e.target.textContent
        );

        this.renderCatDetails(selectedCat);
      });

      this.imgCatEl.addEventListener("click", e => {
        const selectedCat = catData.find(
          cat => cat.url === e.target.getAttribute("src")
        );

        selectedCat.clickCount++;
        this.countEl.textContent = selectedCat.clickCount;
      });
    }
  };

  window.onload = () => view.init();
})();
