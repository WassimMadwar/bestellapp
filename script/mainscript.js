
reRenderMain();
function createMainContent() {
  let main = document.querySelector("main");
  const secActiveNote = createAllActiveArticleNote();
  const secArciveNote = createAllArchiveArticleNote();
  let Archiv = createBreak();
  main.append(secActiveNote, Archiv, secArciveNote);
  document.body.appendChild(main);
  createFooter();
}

function createAllActiveArticleNote() {
  const secActiveNote = document.createElement("section");
  secActiveNote.id = "secActive";
  arrNotes.forEach((objNote) => {
    secActiveNote.appendChild(createArticleNoteTemplet(objNote, false));
  });
  return secActiveNote;
}

function createAllArchiveArticleNote() {
  const secArciveNote = document.createElement("section");
  secArciveNote.id = "secArchive";
  arrArchive.forEach((objNote) => {
    secArciveNote.appendChild(createArticleNoteTemplet(objNote, true));
  });
  return secArciveNote;
}

function createArticleNoteTemplet(objNote, isArchived) {
  let art = document.createElement("article");
  art.classList.add("artNote");

  let contentDiv = createContentDiv(objNote);
  let buttonsDiv = createButtonsArticleDiv(objNote.Id, isArchived);
  art.append(contentDiv, buttonsDiv);
  return art;
}

function createContentDiv(objNote) {
  let contentDiv = document.createElement("div");
  contentDiv.classList.add("contentDiv");

  let titPar = document.createElement("p");
  titPar.classList.add("titPar");
  titPar.textContent = objNote.title;
  let idNote = createCounterNote(objNote.Id);
  titPar.appendChild(idNote);

  let txtPar = document.createElement("p");
  txtPar.classList.add("txtPar");
  txtPar.textContent = objNote.text;

  contentDiv.append(titPar, txtPar);

  return contentDiv;
}

function createButtonsArticleDiv(Id, isArchived) {
  let buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttonsDiv");

  let btnDelete = createBtnDelete(Id);

  if (!isArchived) {
    let btnArchive = createBtnToArchive(Id);
    buttonsDiv.appendChild(btnArchive);
  } else {
    let btnReturn =createReturnButton(Id);
    buttonsDiv.appendChild(btnReturn);
  }

  buttonsDiv.appendChild(btnDelete);

  return buttonsDiv;
}

function createReturnButton(Id) {
  let btnReturn = document.createElement("button");
  btnReturn.classList.add("btnArchive");
  btnReturn.type = "button";
  btnReturn.textContent = "Return";
  btnReturn.onclick =()=>backToActive(Id);
  return btnReturn;
}

function createBtnDelete(Id) {
  let btnDelete = document.createElement("button");
  btnDelete.classList.add("btnDelete");
  btnDelete.type = "button";
  btnDelete.textContent = "Delete";
  btnDelete.onclick = () => deleteNote(Id);
  return btnDelete;
}

function createBtnToArchive(Id) {
  let btnArchive = document.createElement("button");
  btnArchive.classList.add("btnArchive");
  btnArchive.type = "button";
  btnArchive.textContent = "To Archive";
  btnArchive.onclick = () => moveToArchive(Id);
  return btnArchive;
}

function reRenderMain() {
  let main = document.querySelector("main");
  main.innerHTML = "";
  createMainContent();
}

function createCounterNote(Id) {
  let idNote = document.createElement("span");
  idNote.classList.add("idNote");
  idNote.textContent = Id;
  return idNote;
}

function createBreak() {
  let breakDiv = document.createElement("div");
  let line = document.createElement("hr");
  let Archiv = document.createElement("h2");
  Archiv.textContent = "Archive";
  breakDiv.append(line, line, Archiv);
  return breakDiv;
}

function createFooter() {
  const footer = document.querySelector("footer");
  footer.innerHTML="";
  const footer_div = document.createElement("div");
  footer_div.classList.add("footerContainer");
  const links = [
    { text: "Impressum", href: "./impressum.html" },
    { text: "Madwarsoft", href: "./madwarsoft.html" },
  ];
  links.forEach((linkData) => {
    const link = document.createElement("a");
    link.textContent = linkData.text;
    link.href = linkData.href;
    link.target = "_blank";
    footer_div.appendChild(link);
  });
  footer.appendChild(footer_div);
  document.body.appendChild(footer);

  // return footer;
}