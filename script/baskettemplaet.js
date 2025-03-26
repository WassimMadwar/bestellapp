let mod = "new";
let update = "increase";

// if it dosnt work  should use else !!!
function toBasket(price, name, Id) {
  if (!isBasketExists()) {
    createSectionBasket();
  }
  addArticle(price, name, Id);
  // else {
  //   addArticle(price, name, Id);
  // }
}
function addArticle(price, name, Id) {
  if (!isArticleExists(Id)) {
    createNewArticle(price, name, Id);
  }
  increaseOne(price, name, Id);
  // else {
  //   increaseOne(price, name, Id);
  // }
}

function isBasketExists() {
  //  IF get ele secBasket
  // return true;
}

function isArticleExists() {
  // IF get ele
  // return true;
}
function createSectionBasket() {
  // const main = document.getElementById("main");
  const secBasket = document.createElement("section");
  secBasket.id = "secBasket";

  const artBasket = createArtBasket();
  const artKase = createArtKasse();

  secBasket.append(artBasket, artKase);
  // main.appendChild(secBasket);
  return secBasket;
}

function createArtBasket() {
  const artBasket = document.createElement("section");
  artBasket.id = "artBasket";
  const headerBasket = createHeaderBasket();
  artBasket.appendChild(headerBasket);
  return artBasket;
}
function createHeaderBasket() {
  const headerBasket = document.createElement("header");
  headerBasket.id = "headerBasket";
  return headerBasket;
}
function create() {
  return;
}

function createArtKasse() {
  const artKase = document.createElement("section");
  artKase.id = "artKase";

  return artKase;
}
function createNewArticle(price, name, Id) {}

function increaseOne(price, name, Id) {
  let update = "increase";
  updateAmountArticle(price, Id, update);
}
function decreaseOne(price) {
  let update = "decrease";
  updateAmountArticle(price, Id, update);
}

function updateAmountArticle(price, Id, update) {
  updateTotalArticle(price, Id, update);
}
function updateTotalArticle(price, Id, update) {
  updateSubtotal(price, update);
}
function updateSubtotal(price, update) {
  updateTotalInvoice(price, update);
}
function updateTotalInvoice(price) {}
function name() {}
