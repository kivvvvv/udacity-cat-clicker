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
    getAdmin: () => model.isAdmin,
    init: () => {
      catListView.init();
      catDetailView.init();
      adminView.init();
    }
  };

  const catListView = {
    init: function() {
      this.listCatEl = document.querySelector("#cat-list");

      const cats = octopus.getCats();
      this.render(cats);
      this.bindControl(cats);
    },
    render: function(cats) {
      cats.forEach(cat => {
        const catItemEl = document.createElement("li");
        catItemEl.textContent = cat.catName;

        this.listCatEl.appendChild(catItemEl);
      });
    },
    bindControl: function(cats) {
      this.listCatEl.addEventListener("click", e => {
        const selectedCat = cats.find(
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

      const cats = octopus.getCats();
      this.render(cats[0]);
      this.bindControl(cats);
    },
    render: function(cat) {
      this.imgCatEl.setAttribute("src", cat.url);
      this.catNameEl.textContent = cat.pictureName;
      this.countEl.textContent = cat.clickCount;
    },
    bindControl: function(cats) {
      this.imgCatEl.addEventListener("click", e => {
        const selectedCat = cats.find(
          cat => cat.url === e.target.getAttribute("src")
        );

        selectedCat.clickCount++;
        this.countEl.textContent = selectedCat.clickCount;
      });
    }
  };

  const adminView = {
    init: function() {
      this.adminBtn = document.querySelector("#admin");
      this.adminForm = document.querySelector("#admin-form");
      this.cancelBtn = document.querySelector("#cancel-form");

      if (octopus.getAdmin()) {
        this.adminBtn.style.display = "inline-block";
      } else {
        this.adminBtn.style.display = "none";
      }
    }
  };

  window.onload = () => octopus.init();
})();
