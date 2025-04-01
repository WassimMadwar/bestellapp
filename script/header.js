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
  const menu = createMenuHeader();

  headerContent.append(nameApp, menuToggle, menu);
  return headerContent;
}

function createNameApp() {
  const nameApp = document.createElement("div");
  nameApp.id = "nameApp";
  nameApp.className = "CT";
  const title = document.createElement("h1");
  title.textContent = "BestellLendo";
  nameApp.appendChild(title);
  nameApp.onclick = () => {
    window.location.href = "../index.html";
  };
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

function createMenuHeader() {
  const menu = document.createElement("menu");
  menu.id = "menu";
  menu.className = "menuBox menuClosed";
  const divMenu = document.createElement("div");
  divMenu.id = "divMenu";
  const delivery = deliveryDiv();
  const pickup = pickupDiv();
  divMenu.append(pickup, delivery);
  menu.appendChild(divMenu);

  return menu;
}

function deliveryDiv() {
  const delivery = document.createElement("button");
  delivery.id = "divDeliv";
  delivery.className = "notSelected";
  delivery.onclick = () => toggleDeliveryStatus();
  const imgDeliv = createImgDelivery();
  const txtDeliv = createTextDelivery();
  delivery.append(imgDeliv, txtDeliv);
  return delivery;
}

function createImgDelivery() {
  const imgDeliv = document.createElement("img");
  imgDeliv.id = "imgDeliv";
  imgDeliv.classList = "imgMenu ";
  imgDeliv.src = statu.delivery.imgSrc;
  return imgDeliv;
}

function createTextDelivery() {
  const txtDeliv = document.createElement("span");
  txtDeliv.textContent = statu.delivery.txt;
  return txtDeliv;
}

function pickupDiv() {
  const pickup = document.createElement("button");
  pickup.id = "divPickup";
  pickup.className = " isSelected";
  pickup.onclick = () => toggleDeliveryStatus();
  const imgPickup = createImgPickup();
  const txtPickup = createTextPickup();
  pickup.append(imgPickup, txtPickup);
  return pickup;
}

function createImgPickup() {
  const imgPickup = document.createElement("img");
  imgPickup.id = "imgPickup";
  imgPickup.classList = "imgMenu";
  imgPickup.src = statu.pickup.imgSrc;
  return imgPickup;
}

function createTextPickup() {
  const txtPickup = document.createElement("span");
  txtPickup.textContent = statu.pickup.txt;
  return txtPickup;
}

function toggleDeliveryStatus() {
  const delivery = document.getElementById("divDeliv");
  const pickup = document.getElementById("divPickup");
  if (isDelivery(delivery, pickup)) {
    withDelivery = true
    addDeliveryCost()
    return ;
  } else if (notDelivery(delivery, pickup)) {
    withDelivery = false
    removeDeliveryCost();
    return ;
  }
}

function isDelivery(delivery, pickup) {
  if (pickup.classList.contains("isSelected")) {
    pickup.classList.replace("isSelected", "notSelected");
    delivery.classList.replace("notSelected", "isSelected");
    return true;
  }
}

function notDelivery(delivery, pickup) {
  if (pickup.classList.contains("notSelected")) {
    pickup.classList.replace("notSelected", "isSelected");
    delivery.classList.replace("isSelected", "notSelected");
    return true;
  }
}

function toggleMenu() {
  const btnToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  menu.classList.toggle("menuClosed");
}
