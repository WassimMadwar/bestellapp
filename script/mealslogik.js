function toggleMenu() {
  const btnToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  menu.classList.toggle("menuClosed");
}


function toggleImgAll(isAll) {
    const allImg = document.getElementById("All0");
    if (allImg && isAll) {
      allImg.classList.add("onSelected");
    } else {
      allImg.classList.remove("onSelected");
    }
  }
  
  
  
  function switchCategories(category, imgID) {
    if (isImgAllCategorySelected(imgID)) {
      createAllCategories();
      return;
    } else if (toggleImgCategory(imgID)) {
      addSelectedCategoryList(category);
    }
  }
  
  function toggleImgCategory(imgID) {
    const imgCategory = document.getElementById(imgID);
  
    if (imgCategory.classList.contains("onSelected")) {
      imgCategory.classList.remove("onSelected");
      removeCategory(imgID);
    } else {
      imgCategory.classList.add("onSelected");
      return true;
    }
  }
  
  function isImgAllCategorySelected(imgID) {
    if (imgID == "All0") {
      document
        .querySelectorAll(".imgCategory")
        .forEach((img) => img.classList.remove("onSelected"));
      return true;
    }
  }
  
  function addSelectedCategoryList(category) {
    const selectedCategory = allMeals.find((Cate) => Cate.category === category);
  
    if (selectedCategory) {
      let isAll = false;
      addOneCategoryList(
        selectedCategory.dishes,
        selectedCategory.category,
        isAll
      );
      toggleImgAll(isAll);
    }
  }

  function removeCategory(imgID) {
    let category = imgID.slice(0, -1);
    const targetCategory = document.getElementById(category);
    if (targetCategory) {
      targetCategory.remove();
      if (isDishesListEmpty() && isSecSelectedCateEmpty()) {
        createAllCategories();
      }
    }
  }
  
  function isDishesListEmpty() {
    const dishesList = document.getElementById("dishesList");
    if (dishesList.innerHTML === "") {
      return true;
    }
  }
  function isSecSelectedCateEmpty() {
    const secSelectedCate = document.getElementById("secSelectedCate");
    if (secSelectedCate.innerHTML === "") {
      return true;
    }
  }