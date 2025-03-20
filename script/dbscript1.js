
let arrNotes = [];
let arrArchive = [];
let counter = localStorage.getItem("noteCounter")
  ? parseInt(localStorage.getItem("noteCounter"))
  : 1;

loadDataToArrFromLS();

function createNewNote() {
  const title = document.getElementById("titNote");
  const txtNote = document.getElementById("txtNote");
  if ((title.value == "") & (txtNote.value == "")) {
    return;
  }else if (!title.checkValidity()) {
    title.reportValidity(); 
    return;
  } else {
    const objNewNote = {
      title: title.value.trim(),
      text: txtNote.value.trim(),
      Id: counter,
    };
    addNoteData(objNewNote);
    updateCounter();
  }
}
// function createNewNote() {
//   const title = document.getElementById("titNote");
//   const txtNote = document.getElementById("txtNote");
//   if ((title.value == "") & (txtNote.value == "")) {
//     return;
//   } else if ((title.value == "") & (!txtNote.value == "")) {
//     const objNewNote = {
//       title: "Without title",
//       text: txtNote.value.trim(),
//       Id: counter,
//     };
//     addNoteData(objNewNote);
//     updateCounter();
//   } else {
//     const objNewNote = {
//       title: title.value.trim(),
//       text: txtNote.value.trim(),
//       Id: counter,
//     };
//     addNoteData(objNewNote);
//     updateCounter();
//   }
// }

function addNoteData(objNote) {
  addNoteDataToArr(objNote);
  closeNoteForm();
  reRenderMain();
}

function addNoteDataToArr(objNote) {
  const objToArr = objNote;
  arrNotes.push(objToArr);
  saveNoteDataToLS();
}

function saveNoteDataToLS() {
  localStorage.setItem("NoteList", JSON.stringify(arrNotes));
  localStorage.setItem("ArchiveList", JSON.stringify(arrArchive));
}

function updateCounter() {
  counter++;
  localStorage.setItem("noteCounter", counter);
}

function loadDataToArrFromLS() {
  let NoteInLS = localStorage.getItem("NoteList");
  let ArchiveInLS = localStorage.getItem("ArchiveList");
  arrNotes = NoteInLS ? JSON.parse(NoteInLS) : [];
  arrArchive = ArchiveInLS ? JSON.parse(ArchiveInLS) : [];
}

function deleteNote(Id) {
  arrNotes = arrNotes.filter(note => note.Id !== Id);
  arrArchive = arrArchive.filter(note => note.Id !== Id);
  saveNoteDataToLS();
  reRenderMain();
}

function moveToArchive(Id) {
  let noteIndex = arrNotes.findIndex(note => note.Id === Id);
  if (noteIndex !== -1) {
    let note = arrNotes.splice(noteIndex, 1)[0]; 
    arrArchive.push(note);
    saveNoteDataToLS();
    reRenderMain();
  }
}
function backToActive(Id) {
  let noteIndex = arrArchive.findIndex(note => note.Id === Id);
  if (noteIndex !== -1) {
    let note = arrArchive.splice(noteIndex, 1)[0]; 
    addNoteDataToArr(note)
    reRenderMain();
  }
}

