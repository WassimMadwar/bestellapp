function toBasket(objDish) {
  saveObjOrderInDB(objDish);
  const objOrder = getCurrentObjOrder(objDish.Id);
  if (!isBasketExists()) {
    toggleWidthSectionMeals();
    createSectionBasket();
    createArticleOrder(objOrder);
    return;
  }

  if (isArticleExistsInBasket(objOrder.artAmount, objOrder.artID)) {
    updateAmountArticle(objOrder);
    return;
  } else {
    createArticleOrder(objOrder);
    // updateSectionInvoice();
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
function saveObjOrderInDB(objDish) {
  if (isObjOrderInDBExists(objDish.Id)) {
    const objOrder = findObjOrderByID(objDish.Id);

    updateObjOrderInDB(objOrder, opert);

    return;
  }
  createNewObjOrderInDB(objDish);
}

function isObjOrderInDBExists(artID) {
  const foundArticle = findObjOrderByID(artID);
  if (foundArticle) {
    return true;
  }
  return false;
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

function findObjOrderByID(artID) {
  const foundArticle = arrOrders.find((arrOrders) => arrOrders.artID === artID);
  if (foundArticle) {
    return foundArticle;
  }

  return false;
}

function getCurrentObjOrder(artID) {
  const _objOrder = findObjOrderByID(artID);

  return _objOrder;
}

function createNewObjOrderInDB(objDish) {
  const objOrder = setCurrentObjOrder(objDish);
  addObjOrderInDB(objOrder);
}

function addObjOrderInDB(objOrder) {
  arrOrders.push(objOrder);
}

function updateObjOrderInDB(objOrder, opert) {
  switch (opert) {
    case "minus":
      console.log("okey minus one");
      decreaseObjOrderInDB(objOrder);
      break;
    default:
      increaseObjOrderInDB(objOrder);
      break;
  }

  return true;
}

function increaseObjOrderInDB(objOrder) {
  objOrder.artAmount += 1;
  objOrder.total = parseFloat((objOrder.total + objOrder.artPrice).toFixed(2));
  // return true;
}

function decreaseObjOrderInDB(objOrder) {
  objOrder.artAmount -= 1;
  objOrder.total = parseFloat((objOrder.total - objOrder.artPrice).toFixed(2));
}
function deleteObjOrderFromDB(artID) {
  const targetIndex = arrOrders.findIndex((obj) => obj.artID === artID);
  if (targetIndex !== -1) {
    arrOrders.splice(targetIndex, 1);
  }
}

// update
function updateSectionInvoice() {
  updateSubtotal();
  updateTotalInvoice(withDelivery);
}

function updateSubtotal() {
  const totalOrders = document.getElementById("totalOrders");
  let subTotal = getTotatlAllOrders();
  totalOrders.textContent = `${parseFloat(subTotal).toFixed(2)}€`;
  return totalOrders;
}

function updateTotalInvoice(withDelivery) {
  const total = document.getElementById("totalInvoice");
  let subTotal = getTotatlAllOrders();
  if (total) {
    if (withDelivery) {
      subTotal += 5;
    }
    total.textContent = `${parseFloat(subTotal).toFixed(2)}€`;
  }
}
function getTotatlAllOrders() {
  let subTotal = 0;
  arrOrders.forEach((element) => {
    subTotal += element.total;
  });
  if (subTotal == 0) {
    removeBasket();
  }
  return subTotal;
}

function updateAmountArticle(objOrder) {
  const newMaount = document.getElementById(objOrder.artName);
  newMaount.textContent = `${objOrder.artAmount}x`;
  updateTotalArticle(objOrder);
}
function updateTotalArticle(objOrder) {
  const newTotal = document.getElementById("total" + objOrder.artID);
  newTotal.textContent = `${parseFloat(objOrder.total).toFixed(2)}€`;
  updateSectionInvoice();
}

function increaseOne(objOrder) {
  updateObjOrderInDB(objOrder, opert);
  updateAmountArticle(objOrder);
}

function decreaseOne(objOrder) {
  if (objOrder.artAmount == 1) {
    removeArticleOrder(objOrder.artID);
  } else {
    const opert = "minus";
    updateObjOrderInDB(objOrder, opert);
    updateAmountArticle(objOrder);
  }
}

function removeArticleOrder(artID) {
  console.log("=============================================");
  deleteObjOrderFromDB(artID);
  deleteArticleFromBasket(artID);
  updateSectionInvoice();
}

function deleteArticleFromBasket(artID) {
  const art = document.getElementById(`article${artID}`);
  if (art) {
    art.remove();
  }
}

function removeBasket() {
  // artBasket
  const basket = document.getElementById("secBasket");
  if (basket) {
    basket.remove();
    toggleWidthSectionMeals();
  }
}
