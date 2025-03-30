
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
  
  function toggleMenu() {
    const btnToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
    menu.classList.toggle("menuClosed");
  }