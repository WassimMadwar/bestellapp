function toBasket(objDish) {
  saveObjOrderInDB(objDish);
  const objOrder = getCurrentObjOrder(objDish.Id);
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
    updateSectionInvoice();
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
    return false;
  }
}

function setCurrentObjOrder(objDish) {
  const _objOrder = {
    artID: objDish.Id,
    artName: objDish.name,
    artPrice: objDish.preis,
    artAmount: 1,
    total: objDish.preis,
  };

  return _objOrder;
}
function getCurrentObjOrder(artID) {
  const _objOrder = findObjOrderByID(artID);

  return _objOrder;
}
function findObjOrderByID(artID) {
  const foundArticle = arrOrders.find((arrOrders) => arrOrders.artID === artID);
  if (foundArticle) {
    return foundArticle;
  }

  return false;
}

function addNewObjOrderInDB(objDish) {
  const objOrder = setCurrentObjOrder(objDish);
  arrOrders.push(objOrder);
}
function saveObjOrderInDB(objDish) {
  if (isObjOrderInDBExists(objDish.Id)) {
    const objOrder = findObjOrderByID(objDish.Id);

    updateObjOrderInDB(objOrder);

    return;
  }
  addNewObjOrderInDB(objDish);
}

function isObjOrderInDBExists(artID) {
  const foundArticle = findObjOrderByID(artID);
  if (foundArticle) {
    return true;
  }
  return false;
}

function updateObjOrderInDB(objOrder) {
  objOrder.artAmount += 1;
  objOrder.total = parseFloat((objOrder.total + objOrder.artPrice).toFixed(2));
}

function deleteObjOrderFromDB(objOrder) {}

// update

function updateSubtotal() {
  const totalOrders = document.getElementById("totalOrders");
  let subTotal = getTotatlAllOrders();
  totalOrders.textContent = `${parseFloat(subTotal).toFixed(2)}€`;
  return totalOrders;
}
function getTotatlAllOrders() {
  let subTotal = 0;
  arrOrders.forEach((element) => {
    subTotal += element.total;
  });
  return subTotal;
}
function updateTotalInvoice(withDelivery) {
  const total = document.getElementById("totalInvoice");
  let subTotal = getTotatlAllOrders();
  if (withDelivery) {
    subTotal += 5;
    // console.log("2");
    // totalInvoice;
  }
  total.textContent = `${parseFloat(subTotal).toFixed(2)}€`;
}

function updateSectionInvoice() {
  updateSubtotal();
  updateTotalInvoice(withDelivery);
}

function updateAmountArticle(objOrder) {
  const newMaount = document.getElementById(objOrder.artName);
  newMaount.textContent = `${objOrder.artAmount}x`;
  updateTotalArticle(objOrder);
  updateSectionInvoice();
}
function updateTotalArticle(objOrder) {
  const newTotal = document.getElementById("total" + objOrder.artID);
  newTotal.textContent = `${parseFloat(objOrder.total).toFixed(2)}€`;
}

function increaseOne(price, name, Id) {
  let update = "increase";
  // updateAmountArticle(price, Id, update);
}
function decreaseOne(price) {
  let update = "decrease";
  // updateAmountArticle(objOrder);
}
