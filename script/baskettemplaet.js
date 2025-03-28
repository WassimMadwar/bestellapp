let mod = "new";

function toBasket(objOrder) {
  saveObjOrderInDB(objOrder);
  if (!isBasketExists()) {
    createSectionBasket();
    createArticleOrder(objOrder);
    return;
  }

  if (isArticleExistsInBasket(objOrder.artAmount, objOrder.artID)) {
    updateAmountArticle(objOrder);
    return;
  } else {
    createArticleOrder(objOrder);
    updateTotalInvoice();
  }
}

function isBasketExists() {
  const basket = document.getElementById("secBasket");
  if (basket) {
    return true;
  }
  return false;
}

function isArticleExistsInBasket(artAmount, artID) {
  if (findObjOrderByID(artID) && artAmount > 1) {
    return true;
  } else {
    console.log("not");

    return false;
  }
}

function createSectionBasket() {
  const main = document.getElementById("main");
  const secBasket = document.createElement("section");
  secBasket.id = "secBasket";

  const artBasket = createArtBasket();
  const artKase = createArtKasse();

  secBasket.append(artBasket, artKase);
  main.appendChild(secBasket);
  // return secBasket;
}

function createArtBasket() {
  const artBasket = document.createElement("section");
  artBasket.id = "artBasket";
  const headerBasket = createHeaderBasket();
  const mainBasket = createMainBasket();
  const footerBasket = createFooterBasket();

  artBasket.append(headerBasket, mainBasket, footerBasket);
  return artBasket;
}

function createHeaderBasket() {
  const headerBasket = document.createElement("header");
  headerBasket.id = "headerBasket";

  const txtContent = document.createElement("h2");
  txtContent.innerHTML = `Warenkorb${iconSvg.iconBasket}`;

  headerBasket.appendChild(txtContent);
  return headerBasket;
}

function createMainBasket() {
  const mainBasket = document.createElement("main");
  mainBasket.id = "mainBasket";

  const secOrders = createSectionAllOrder();

  mainBasket.append(secOrders);
  return mainBasket;
}

// Section All Order start
function createSectionAllOrder() {
  const secOrders = document.createElement("section");
  secOrders.id = "allOrders";

  return secOrders;
}
function createArticleOrder(objOrder) {
  const secOrders = document.getElementById("allOrders");
  const artOrder = document.createElement("article");
  artOrder.className = "artOrder";
  const nameDish = createNameDiv(objOrder.artName);
  const infoOrder = createInfoOrderDiv(objOrder);

  artOrder.append(nameDish, infoOrder);
  secOrders.append(artOrder);
  updateSectionInvoice(withDelivery);
  // return artOrder;
}

function createNameDiv(artName) {
  const titDish = document.createElement("div");
  titDish.className = "titDish";
  const txt = document.createElement("h3");
  txt.textContent = artName;
  titDish.appendChild(txt);
  return titDish;
}
function createInfoOrderDiv(objOrder) {
  const infoDiv = document.createElement("div");
  infoDiv.className = "infoArtOrder";
  const ctrAmountDiv = createAmountControl(objOrder);
  const totalDiv = createTotalOrderDiv(objOrder);
  const deleteDiv = createBtnDelete();
  infoDiv.append(ctrAmountDiv, totalDiv, deleteDiv);
  return infoDiv;
}
function createAmountControl(objOrder) {
  const ctrAmountDiv = document.createElement("div");
  ctrAmountDiv.className = "ctrAmount";

  const decreaseButton = createDecreaseBtn();

  const amountSpan = createAmountSpan(objOrder);

  const increaseButton = createIncreaseBtn();

  ctrAmountDiv.append(decreaseButton, amountSpan, increaseButton);
  return ctrAmountDiv;
}

function createDecreaseBtn() {
  const decreaseButton = document.createElement("button");
  decreaseButton.type = "submit";
  decreaseButton.className = "ctr CT";
  decreaseButton.textContent = "-";
  return decreaseButton;
}
function createAmountSpan(objOrder) {
  const amountSpan = document.createElement("span");
  amountSpan.id = objOrder.artName;
  amountSpan.className = "amount";
  amountSpan.textContent = `${objOrder.artAmount}x`;
  return amountSpan;
}
function createIncreaseBtn() {
  const increaseButton = document.createElement("button");
  increaseButton.type = "submit";
  increaseButton.className = "ctr CT";
  increaseButton.textContent = "+";
  return increaseButton;
}

function createTotalOrderDiv(objOrder) {
  const totalDiv = document.createElement("div");

  const totalSpan = document.createElement("span");
  totalSpan.id = "total" + objOrder.artID;
  totalSpan.className = "totalArt";
  totalSpan.textContent = `${objOrder.total}€`;

  totalDiv.appendChild(totalSpan);
  return totalDiv;
}
function createBtnDelete() {
  const deleteDiv = document.createElement("div");
  const spanDelete = document.createElement("span");
  spanDelete.className = "icoDelete CT";
  spanDelete.innerHTML = `${iconSvg.iconDelete}`;
  deleteDiv.appendChild(spanDelete);
  return deleteDiv;
}

// Section All Order end

// Section Invoice start

function createSectionInvoice() {
  const secInvoice = document.createElement("section");
  const artInvoice = createArticleInvoice();
  secInvoice.appendChild(artInvoice);
  return secInvoice;
}

function createArticleInvoice() {
  const artInvoice = document.createElement("article");
  artInvoice.id = "artInvoice";
  const totOrders = createTotalOrdersDiv();
  const deliveryCost = createDeliveryCostDiv();
  artInvoice.append(totOrders, deliveryCost);
  return artInvoice;
}
function createTotalOrdersDiv() {
  const totOrders = document.createElement("div");
  totOrders.className = "invoice";
  const lbl = document.createElement("span");
  lbl.textContent = "Zwischensume";
  const totalOrders = createTotalOrdersSpan();
  totOrders.append(lbl, totalOrders);
  return totOrders;
}
function createDeliveryCostDiv() {
  const divDelev = document.createElement("div");
  divDelev.className = "invoice";
  const lblDelev = document.createElement("span");
  lblDelev.textContent = "Lieferkosten";
  const costlDelev = document.createElement("span");
  costlDelev.textContent = "5,00€";
  divDelev.append(lblDelev, costlDelev);
  return divDelev;
}
// Logik
function createTotalOrdersSpan() {
  const totalOrders = document.createElement("span");
  totalOrders.id = "totalOrders";

  return totalOrders;
}
// Section Invoice end

function createFooterBasket() {
  const footerBasket = document.createElement("footer");
  footerBasket.id = "footerBasket";

  const artTotal = createTotalArticle();
  const secInvoice = createSectionInvoice();

  footerBasket.append(secInvoice, artTotal);
  return footerBasket;
}
function createTotalArticle() {
  const art = document.createElement("article");
  art.id = "artTotal";
  const separtor = separtorLine();
  const totalInvoiceD = createTotalInvoiceDiv();

  art.append(separtor, totalInvoiceD);
  return art;
}
function createTotalInvoiceDiv() {
  const divTotal = document.createElement("div");
  divTotal.className = "invoice";
  const lblTotal = createLblTotalSpan();
  const total = createTotalSpan();

  divTotal.append(lblTotal, total);
  return divTotal;
}

function createLblTotalSpan() {
  const lblTotal = document.createElement("span");
  lblTotal.id = "lblTotal";
  const txt = document.createElement("b");
  txt.textContent = "Gesamt";
  lblTotal.appendChild(txt);
  return lblTotal;
}

function createTotalSpan(FinalTotal) {
  const total = document.createElement("span");
  const txt = document.createElement("b");
  txt.id = "totalInvoice";
  txt.textContent = "";
  total.appendChild(txt);
  return total;
}

function createArtKasse() {
  const artKase = document.createElement("section");
  artKase.id = "artKase";
  const btn = createBuyBtn();
  artKase.appendChild(btn);
  return artKase;
}
function createBuyBtn() {
  const btn = document.createElement("button");
  btn.className = "CT";
  btn.id = "btnBuy";
  btn.type = "submit";
  btn.innerHTML = `Zur Kasse ${iconSvg.iconKasse}`;
  return btn;
}

function increaseOne(price, name, Id) {
  let update = "increase";
  // updateAmountArticle(price, Id, update);
}
function decreaseOne(price) {
  let update = "decrease";
  // updateAmountArticle(objOrder);
}

function updateAmountArticle(objOrder) {
  const newMaount = document.getElementById(objOrder.artName);
  newMaount.textContent = `${objOrder.artAmount}x`;
  updateTotalArticle(objOrder);
  updateSectionInvoice(withDelivery);
}
function updateTotalArticle(objOrder) {
  const newTotal = document.getElementById("total" + objOrder.artID);
  newTotal.textContent = `${parseFloat(objOrder.total).toFixed(2)}€`;
}
