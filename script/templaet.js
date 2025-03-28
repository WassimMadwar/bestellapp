function toggleMenu() {
  const btnToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  menu.classList.toggle("menuClosed");
}
function separtorLine() {
  const separtor = document.createElement("div");
  separtor.className = "separtor";
  return separtor;
}
window.onload = loadContent;

function loadContent() {
  const body = document.body;
  const header = createHeader();
  const main = createMain();
  body.append(header, main);
  createAllCategories();

  // body.appendChild(header);
  // body.appendChild(main);
  // createAllCategories();
}

// #########################################################
// #########################################################
// #########################################################
// #########################################################

function createHeader() {
  const header = document.createElement("header");
  header.id = "header";

  const headerContent = createHeaderContent();
  header.appendChild(headerContent);
  return header;
}

function createHeaderContent() {
  const headerContent = document.createElement("div");
  headerContent.id = "headerContent";

  const nameApp = createNameApp();
  const menuToggle = createMenuToggle();
  const menu = createNavHeader();

  headerContent.append(nameApp, menuToggle, menu);
  return headerContent;
}

function createNameApp() {
  const nameApp = document.createElement("div");
  nameApp.id = "nameApp";
  const title = document.createElement("h1");
  title.textContent = "Bestell App";
  nameApp.appendChild(title);
  return nameApp;
}

function createMenuToggle() {
  const menuToggle = document.createElement("div");
  menuToggle.id = "menuToggle";
  menuToggle.onclick = toggleMenu;

  for (let i = 0; i < 3; i++) {
    const line = document.createElement("div");
    menuToggle.appendChild(line);
  }
  return menuToggle;
}

function createNavHeader() {
  const menu = document.createElement("nav");
  menu.id = "menu";
  menu.className = "menuBox menuClosed";
  links.forEach((linkInfo) => {
    const link = document.createElement("a");
    link.href = linkInfo.href;
    link.textContent = linkInfo.text;
    menu.appendChild(link);
  });

  return menu;
}

// #########################################################
// #########################################################
// #########################################################
// #########################################################
// zu deactiver basket 
// 1 - einkommintieren   const secBasket= createSectionBasket();und  main.append(secMeals,secBasket);
// 2 - auskommintierenmain.append(secMeals);
function createMain() {
  const main = document.createElement("main");
  main.id = "main";

  const secMeals = createSecMeals();
  // const secBasket= createSectionBasket();
  // main.append(secMeals,secBasket);
  main.append(secMeals);
  return main;
}

function createSecMeals() {
  const secMeals = document.createElement("section");
  secMeals.id = "secMeals";
  secMeals.className = "secMeals";
  const headerMeals = createHeaderSecMeals();
  const mainMeals = createMainMeals();

  secMeals.append(headerMeals, mainMeals);
  return secMeals;
}

function createHeaderSecMeals() {
  const header = document.createElement("header");
  header.id = "headerMeals";

  const divImgHeaderSecMeals = setImgMain(
    "./assets/img/pizzanapoli.jpeg",
    "mainImg"
  );

  header.appendChild(divImgHeaderSecMeals);

  return header;
}
function setImgMain(imgSrc, imgClass) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.id = "mainImg";
  img.classList.add(imgClass);
  img.src = imgSrc;
  img.alt = " Img  ";

  div.appendChild(img);
  return div;
}

function createMainMeals() {
  const mainMeals = document.createElement("main");
  mainMeals.id = "mainMeals";

  const secCategories = createSectionCategories();

  const dishesList = document.createElement("section");
  dishesList.id = "dishesList";

  const secSelectedCate = document.createElement("section");
  secSelectedCate.id = "secSelectedCate";

  mainMeals.append(secCategories, dishesList, secSelectedCate);
  return mainMeals;
}

function createSectionCategories() {
  const section = document.createElement("section");

  const frmCategories = createFormCategories();

  const separtor = separtorLine();

  section.append(frmCategories, separtor);

  return section;
}

function createFormCategories() {
  const form = document.createElement("form");
  const legend = document.createElement("legend");
  const h1 = document.createElement("h1");
  h1.textContent = "Paradise des Bauches";
  legend.appendChild(h1);

  const divCategories = getCategories();

  form.append(legend, divCategories);
  return form;
}

function getCategories() {
  const divCategories = document.createElement("div");
  divCategories.id = "Categories";

  categories.forEach(({ src, text, category }, i) => {
    const div = document.createElement("div");
    div.className = "Category";
    const img = setCategorySettings(src, text, category, i);

    const h4 = document.createElement("h4");
    h4.textContent = `"${text}"`;

    div.append(img, h4);
    divCategories.appendChild(div);
  });
  return divCategories;
}

function setCategorySettings(src, text, category, i) {
  const img = document.createElement("img");
  img.className = "imgCategory";
  const imgID = category + i;
  img.id = imgID;
  img.onclick = () => switchCategories(category, imgID);
  img.src = src;
  img.alt = "";
  img.title = `${text} Liste anzeigen`;
  return img;
}

function createAllCategories() {
  const allImg = document.getElementById("All0");
  let isAll = true;

  const dishesList = document.getElementById("dishesList");
  dishesList.innerHTML = "";
  allMeals.forEach((cate) => {
    addOneCategoryList(cate.dishes, cate.category, isAll);
  });
  toggleImgAll(isAll);
}

function toggleImgAll(isAll) {
  const allImg = document.getElementById("All0");
  if (allImg && isAll) {
    allImg.classList.add("onSelected");
  } else {
    allImg.classList.remove("onSelected");
  }
}

// #########################################################
// #########################################################
// #########################################################
// #########################################################

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

function removeCategory(imgID) {
  let category = imgID.slice(0, -1);
  const targetCategory = document.getElementById(category);
  if (targetCategory) {
    targetCategory.remove();
    if (isDishesListEmpty() && issecSelectedCateEmpty()) {
      createAllCategories();
    }
  }
}

function addSelectedCategoryList(category) {
  const selectedCategory = allMeals.find((meal) => meal.category === category);

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

function addOneCategoryList(arrDishes, secName, isAll) {
  const secCategory = document.createElement("section");
  secCategory.id = secName;
  arrDishes.forEach((dish) => {
    const frmDish = addFormDish(dish);
    secCategory.appendChild(frmDish);
  });
  setInSection(secCategory, isAll);
}

function setInSection(secCategory, isAll) {
  const dishesList = document.getElementById("dishesList");
  const secSelectedCate = document.getElementById("secSelectedCate");
  if (isAll) {
    dishesList.appendChild(secCategory);
    secSelectedCate.innerHTML = "";
  } else {
    secSelectedCate.appendChild(secCategory);
    dishesList.innerHTML = "";
  }
}

function addFormDish(objDish) {
  const form = document.createElement("form");
  form.className = "formDish";
  form.id = `frmDish${objDish.Id}`;

  const infoDiv = createInfoDiv(objDish.name, objDish.info, objDish.preis);

  const imgDiv = createImgDiv(
    objDish.imgSrc,
    objDish.preis,
    objDish.name,
    objDish.Id
  );

  form.append(infoDiv, imgDiv);
  return form;
}

function createInfoDiv(name, info, preis) {
  const infoDiv = document.createElement("div");
  infoDiv.className = "dataDish";

  const h3 = document.createElement("h3");
  h3.textContent = name;
  const p = document.createElement("p");
  p.textContent = `Zutaten :  ${info}`;
  const price = document.createElement("span");
  price.className = "priceDish";
  price.textContent = `${preis}€`;

  infoDiv.append(h3, p, price);
  return infoDiv;
}

function createImgDiv(imgSrc, price, name, Id) {
  const imgDiv = document.createElement("div");

  const img = document.createElement("img");
  img.className = "imgDish";
  img.src = imgSrc;
  img.alt = "";

  const btnAddDish = createBtnAddDish(price, name, Id);
  imgDiv.append(img, btnAddDish);

  return imgDiv;
}

function createBtnAddDish(price, name, Id) {
  const button = document.createElement("button");
  button.className = "btnAddMeale";
  button.type = "button";
  button.textContent = "+";
  const objOrder = {
    artID: Id,
    artName: name,
    artPrice: price,
    artAmount: 1,
    total:price,
  };
  button.onclick = () => toBasket(objOrder);

  return button;
}

function createFooterMeals() {
  const footer = document.createElement("footer");
  footer.id = "footerMeals";
  footer.textContent = "ctr next page";
  return footer;
}

function isDishesListEmpty() {
  const dishesList = document.getElementById("dishesList");
  if (dishesList.innerHTML === "") {
    return true;
  }
}
function issecSelectedCateEmpty() {
  const secSelectedCate = document.getElementById("secSelectedCate");
  if (secSelectedCate.innerHTML === "") {
    return true;
  }
}

function create() {
  return;
}
