function toggleMenu() {
  const btnToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  menu.classList.toggle("menuClosed");
}

window.onload = loadContent;

// const header = document.createElement("header");
// const main = document.createElement("main");
// const footer = document.createElement("footer");

// const sec = document.createElement("section");

// const div = document.createElement("div");

// const art = document.createElement("article");
// const lege = document.createElement("legend");

// const link = document.createElement("a");

// const img = document.createElement("img");

// const Archiv = document.createElement("h2");

// const idNote = document.createElement("span");

// const btn = document.createElement("button");

function loadContent() {
  const body = document.body;
  const header = createHeader();
  const main = createMain();
  body.append(header,main);
  // body.appendChild(header);
  // body.appendChild(main);
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

function createMain() {
  const main = document.createElement("main");
  main.id = "main";

  const secMeal = createSecMeal();
  main.appendChild(secMeal);
  return main;
}

function createSecMeal() {
  const secMeal = document.createElement("section");
  secMeal.id = "secMeal";
  secMeal.className = "secMeals";
  const headerMeals = createHeaderSecMeals();
  const mainMeals = createMainMeals();
  // const footerMeals = createFooterMeals();
  // console.log(createHeaderSecMeals());

  secMeal.append(headerMeals, mainMeals);
  // secMeal.appendChild(headerMeals);
  return secMeal;
}

function createHeaderSecMeals() {
  const header = document.createElement("header");
  header.id = "headerMeals";

  const divImgHeaderSecMeals = setImgMain(
    "./assets/img/pizzanapoli.jpeg",
    "mainImg"
  );

  header.appendChild(divImgHeaderSecMeals);
  console.log(header);
  
  return header;
}
// +***************************************************************************
// leater use this function in formDesh ***************************************
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


// +***************************************************************************

function createMainMeals() {
  const mainMeals = document.createElement("main");
  mainMeals.id = "mainMeals";
  const secCategories = createSectionCategories();

  // const meal1 = createMealSection();
  // const meal2 = createMealSection();

  // mainMeals.append(sectionForm, meal1, meal2);
  mainMeals.append(secCategories);
  return mainMeals;
}

function createSectionCategories() {
  const section = document.createElement("section");
  const frmCategories =createFormCategories();
  const seperter = document.createElement("div");
  seperter.className = "separtor"
  section.append(frmCategories,seperter);
  
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

  categories.forEach(({ src, text }) => {
    const div = document.createElement("div");
    div.className = "Category";

    const img = document.createElement("img");
    img.className = "imgCategory";
    img.src = src;
    img.alt = "";

    const h4 = document.createElement("h4");
    h4.textContent = `"${text}"`;

    div.append(img, h4);
    divCategories.appendChild(div);
  });
  return divCategories;
}

function createMealSection() {
  const section = document.createElement("section");
  const form = document.createElement("form");
  form.className = "formDesh";

  const infoDiv = document.createElement("div");
  infoDiv.className = "infoDesh";

  const h3 = document.createElement("h3");
  h3.textContent = "desh name";
  const p = document.createElement("p");
  p.textContent = "kurz beschreibung";
  const price = document.createElement("span");
  price.className = "priceDesh";
  price.textContent = "12334€";

  infoDiv.append(h3, p, price);

  const imgDiv = document.createElement("div");
  const img = document.createElement("img");
  img.className = "imgDesh";
  img.src = "./assets/img/rucolasalat.webp";
  img.alt = "";

  const button = document.createElement("button");
  button.className = "btnAddMeale";
  button.type = "submit";
  button.textContent = "+";

  imgDiv.append(img, button);
  form.append(infoDiv, imgDiv);
  section.appendChild(form);
  return section;
}

function createFooterMeals() {
  const footer = document.createElement("footer");
  footer.id = "footerMeals";
  footer.textContent = "ctr next page";
  return footer;
}

function create() {
  return;
}
function create() {
  return;
}
