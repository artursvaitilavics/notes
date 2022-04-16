import {
  displayNewNoteElement,
  destroyNewNoteelement,
} from "./scripts/new-note.mjs";

import { renderNotes, deleteSelectedNotes } from "./scripts/notes-dom.mjs";

import { Notes } from "./scripts/notes.mjs";

const notes = new Notes();
// const btnNewNote = document.querySelector("#btn-new-note");
const button = {
  btnNewNote: document.querySelector("#btn-new-note"),
  defaultId: "btn-new-note",
  clickedId: "btn-new-note-clicked",
  clicked: false,
};

const btnDelete = document.querySelector("#btn-delete-selected");



button.btnNewNote.addEventListener("click", () => {
  button.clicked = !button.clicked;
  if (button.clicked) {
    setNewButtonClicked();
    displayNewNoteElement();
  } else {
    destroyNewNoteelement(setNewButtonDefault);
  }
});

const setNewButtonDefault = () => {
  button.btnNewNote.id = button.defaultId;
};
const setNewButtonClicked = () => {
  button.btnNewNote.id = button.clickedId;
};
const setNotClicked = () => {
  button.clicked = false;
};

const notesElement = document.querySelector("#notes");
renderNotes(notesElement);
btnDelete.addEventListener("click", () => {
  deleteSelectedNotes(notesElement);
  console.log(notes.getNotes());
});

export { setNewButtonClicked, setNewButtonDefault, setNotClicked };
