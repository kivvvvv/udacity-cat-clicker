(function() {
  const model = {
    isAdmin: true,
    currentCat: "",
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
    },
    getCurrentCat: () => model.currentCat,
    setCurrentCat: cat => (model.currentCat = cat),
    setCats: function({ catName, url, clickCount }) {
      const settingCat = this.getCats().find(cat => {
        return cat.catName === this.getCurrentCat();
      });

      if (catName) {
        const newPicName = settingCat.pictureName.replace(
          settingCat.catName,
          catName
        );
        settingCat.pictureName = newPicName;

        settingCat.catName = catName;

        this.setCurrentCat(catName);
      }
      if (url) settingCat.url = url;
      if (clickCount) settingCat.clickCount = clickCount;
    }
  };

  const catListView = {
    init: function() {
      this.listCatEl = document.querySelector("#cat-list");

      const cats = octopus.getCats();
      this.render(cats);
      this.bindControl(cats);
      octopus.setCurrentCat(cats[0].catName);
    },
    render: function(cats) {
      this.listCatEl.innerHTML = "";

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
        octopus.setCurrentCat(selectedCat.catName);
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

      this.render(octopus.getAdmin());
      this.bindControl();
    },
    render: function(isAdmin) {
      if (isAdmin) {
        this.adminBtn.style.display = "inline-block";
      } else {
        this.adminBtn.style.display = "none";
      }

      this.adminForm.style.display = "none";
      this.adminForm.elements.catName.value = "";
      this.adminForm.elements.catURL.value = "";
      this.adminForm.elements.catClick.value = "";
    },
    bindControl: function() {
      this.adminBtn.addEventListener("click", e => {
        e.target.style.display = "none";
        this.adminForm.style.display = "block";
      });

      this.adminForm.addEventListener("submit", e => {
        e.preventDefault();

        octopus.setCats({
          catName: e.target.elements.catName.value.trim(),
          url: e.target.elements.catURL.value.trim(),
          clickCount: e.target.elements.catClick.value.trim()
        });

        const cats = octopus.getCats();
        catListView.render(cats);
        catDetailView.render(
          cats.find(cat => cat.catName === octopus.getCurrentCat())
        );

        this.render(octopus.getAdmin());
      });

      this.cancelBtn.addEventListener("click", () => {
        this.adminForm.style.display = "none";
        this.adminBtn.style.display = "inline-block";
      });
    }
  };

  window.onload = () => octopus.init();
})();
