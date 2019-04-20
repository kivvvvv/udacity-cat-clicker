(function() {
  const model = {
    isAdmin: true,
    cats: [
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
    ]
  };

  const octopus = {
    getCats: () => model.cats,
    init: () => {
      catListView.init();
      catDetailView.init();
    }
  };

  const catListView = {
    init: function() {
      this.listCatEl = document.querySelector("#cat-list");

      const catData = octopus.getCats();
      this.render(catData);
      this.bindControl(catData);
    },
    render: function(catData) {
      catData.forEach(cat => {
        const catItemEl = document.createElement("li");
        catItemEl.textContent = cat.catName;

        this.listCatEl.appendChild(catItemEl);
      });
    },
    bindControl: function(catData) {
      this.listCatEl.addEventListener("click", e => {
        const selectedCat = catData.find(
          cat => cat.catName === e.target.textContent
        );

        catDetailView.render(selectedCat);
      });
    }
  };

  const catDetailView = {
    init: function() {
      this.imgCatEl = document.querySelector("#cat");
      this.countEl = document.querySelector("#count");
      this.catNameEl = document.querySelector("figcaption");

      const catData = octopus.getCats();
      this.render(catData[0]);
      this.bindControl(catData);
    },
    render: function(cat) {
      this.imgCatEl.setAttribute("src", cat.url);
      this.catNameEl.textContent = cat.pictureName;
      this.countEl.textContent = cat.clickCount;
    },
    bindControl: function(catData) {
      this.imgCatEl.addEventListener("click", e => {
        const selectedCat = catData.find(
          cat => cat.url === e.target.getAttribute("src")
        );

        selectedCat.clickCount++;
        this.countEl.textContent = selectedCat.clickCount;
      });
    }
  };

  window.onload = () => octopus.init();
})();
