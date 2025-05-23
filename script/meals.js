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
}

function createMain() {
  const main = document.createElement("main");
  main.id = "main";

  const secMeals = createSecMeals();
  main.append(secMeals);
  return main;
}

function createSecMeals() {
  const secMeals = document.createElement("section");
  secMeals.id = "secMeals";
  secMeals.className = "secMeals";
  const headerMeals = createHeaderSecMeals();
  const mainMeals = createMainMeals();
const footerMeals = createFooterMeals();
  secMeals.append(headerMeals, mainMeals,footerMeals);
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
  allMeals.forEach((ele) => {
    addOneCategoryList(ele.dishes, ele.category, isAll);
  });
  toggleImgAll(isAll);
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
    secSelectedCate.innerHTML = "";
    dishesList.appendChild(secCategory);
  } else {
    dishesList.innerHTML = "";
    secSelectedCate.appendChild(secCategory);
  }
}

function addFormDish(objDish) {
  const form = document.createElement("form");
  form.className = "formDish";
  form.id = `frmDish${objDish.Id}`;

  const infoDiv = createInfoDiv(objDish.name, objDish.info, objDish.preis);

  const imgDiv = createImgDiv(objDish);
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

function createImgDiv(objDish) {
  const imgDiv = document.createElement("div");

  const img = document.createElement("img");
  img.className = "imgDish";
  img.src = objDish.imgSrc;
  img.alt = "";

  const btnAddDish = createBtnAddDish(objDish);
  imgDiv.append(img, btnAddDish);

  return imgDiv;
}

function createBtnAddDish(objDish) {
  const button = document.createElement("button");
  button.className = "btnAddMeale";
  button.type = "button";
  button.textContent = "+";

  button.onclick = () => toBasket(objDish);

  return button;
}

function createFooterMeals() {
  const footer = document.createElement("footer");
  footer.id = "footerMeals";
  footer.innerHTML = `
        <div class="footerContainer">
        <a href="./impressum.html" target="_blank">Impressum</a>
        <a href="./madwarsoft.html" target="_blank">Madwarsoft</a>
        <a href="./datenschutzDE.html" target="_blank">Datenschutz</a>
      </div>`;
  return footer;
}
function toggleWidthSectionMeals() {
  const secMeals = document.getElementById("secMeals");
  if (secMeals) {
    secMeals.classList.toggle("mealsUndBasket");
  }
  return;
}
