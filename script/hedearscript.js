function addNewNote() {
  if (document.querySelector(".mainForm")) {
    return;
  } else {
    createInputForm();
    reRenderMain();
  }
}

function createInputForm() {
  const formInput = document.createElement("form");
  formInput.classList.add("mainForm");
  let fieldNote = createFieldNoteSet();
  let divBtn = createButtonsDiv();
  let fsAttribute = createFieldAttributeSet();
  formInput.append(fieldNote, fsAttribute, divBtn);
  document.body.appendChild(formInput);
}

// fieldset Note Start
function createFieldNoteSet() {
  const fsNote = document.createElement("fieldset");
  fsNote.classList.add("fsNote");
  const lege = document.createElement("legend");
  lege.textContent = "Write your Note";

  const boxTitel = createTitleSet();
  const boxText = createNoteSet();

  fsNote.append(lege, boxTitel, boxText);
  return fsNote;
}

function createTitleSet() {
  const boxTitel = document.createElement("div");
  const lbltit = document.createElement("label");
  lbltit.setAttribute("for", "titNote");
  const titNote = document.createElement("input");
  titNote.id = "titNote";
  titNote.type = "text";
  titNote.placeholder = "Title Note";
  titNote.required=true;
  // titNote.setAttribute("required", "true");
  boxTitel.append(lbltit, titNote);
  return boxTitel;
}

function createNoteSet() {
  const boxText = document.createElement("div");
  const lbltxt = document.createElement("label");
  lbltxt.setAttribute("for", "txtNote");
  const txtNote = document.createElement("textarea");
  txtNote.id = "txtNote";
  txtNote.placeholder = " Note content";
  boxText.append(lbltxt, txtNote);
  return boxText;
}

// fieldset Note End
//*******************************************************

// fieldset Attribute start
function createFieldAttributeSet() {
  const fsAttribute = document.createElement("fieldset");
  fsAttribute.classList.add("fsAttribute");
  const lege = document.createElement("legend");
  lege.textContent = "Properties";
  let radStatus = createStatusDiv();
  fsAttribute.append(lege, radStatus);
  return fsAttribute;
}

// radio status start
function createStatusDiv() {
  const radStatus = document.createElement("div");
  radStatus.id = "radStatus";
  let radUrgent = createUrgentRadio();
  let radNormal = createNormalRadio();
  let radLater = createLaterRadio();
  radStatus.append(radUrgent, radNormal, radLater);
  return radStatus;
}

function createLaterRadio() {
  const divLater = document.createElement("div");
  const lblLater = document.createElement("label");
  lblLater.setAttribute("for", "reqLater");
  lblLater.textContent = "Later";
  let reqLater = document.createElement("input");
  reqLater.type = "radio";
  reqLater.id = "reqLater";
  reqLater.name = "status";
  reqLater.value = "Later";
  divLater.append(lblLater, reqLater);
  return divLater;
}

function createNormalRadio() {
  const divNormal = document.createElement("div");
  const lblNormal = document.createElement("label");
  lblNormal.setAttribute("for", "reqNormal");
  lblNormal.textContent = "Normal";
  let reqNormal = document.createElement("input");
  reqNormal.type = "radio";
  reqNormal.id = "reqNormal";
  reqNormal.name = "status";
  reqNormal.value = "Normal";
  divNormal.append(lblNormal, reqNormal);
  return divNormal;
}

function createUrgentRadio() {
  const divUrgent = document.createElement("div");
  const lblUrgent = document.createElement("label");
  lblUrgent.setAttribute("for", "reqUrent");
  lblUrgent.textContent = "Urgent";
  let reqUrent = document.createElement("input");
  reqUrent.type = "radio";
  reqUrent.id = "reqUrent";
  reqUrent.name = "status";
  reqUrent.value = "Urgent";
  reqUrent.checked = true;
  divUrgent.append(lblUrgent, reqUrent);
  return divUrgent;
}
// radio status end
// fieldset Attribute End
//*******************************************************

//Div Buttons start
function createButtonsDiv() {
  const divBtns = document.createElement("div");
  divBtns.id = "action";
  const btnRes = createButtonReset();
  const btnClose = createButtonClose();
  const btnCreate = createButtonCreate();
  divBtns.append(btnRes, btnClose, btnCreate);
  return divBtns;
}

function createButtonReset() {
  const btnRes = document.createElement("button");
  btnRes.id = "btnReset";
  btnRes.type = "button";
  btnRes.textContent = "Reset";
  btnRes.onclick = () => resetFields();
  return btnRes;
}

function createButtonClose() {
  const btnClose = document.createElement("button");
  btnClose.id = "btnClose";
  btnClose.textContent = "Close";
  btnClose.type = "button";
  btnClose.onclick = () => closeNoteForm();
  return btnClose;
}

function createButtonCreate() {
  const btnCreate = document.createElement("button");
  btnCreate.id = "btnCreate";
  btnCreate.type = "button";
  btnCreate.textContent = "Create";
  btnCreate.onclick = () => createNewNote();
  return btnCreate;
}

// Button Functionality
function closeNoteForm() {
  const frmNote = document.querySelector(".mainForm");
  if (frmNote) {
    frmNote.remove();
  }
}

function resetFields() {
  const tit = document.getElementById("titNote");
  const txt = document.getElementById("txtNote");
  tit.value = "";
  txt.value = "";
}

//Div Buttons End
//*******************************************************
