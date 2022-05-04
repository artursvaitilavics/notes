import { Note } from "./note.mjs";

export function Notes() {}

Notes.notes = [];

Notes.filteredNotes = [];
Notes.sorted = true;

Notes.prototype.addNote = function (note) {
  Notes.notes.push(note);
  return Notes.notes;
};

Notes.prototype.getNotes = function () {
  return Notes.notes;
};

Notes.prototype.removeNote = function (selectedNoteId) {
  const notes = Notes.notes.filter((note) => note.id != selectedNoteId);
  Notes.notes = notes;
};

Notes.prototype.setSelected = function (noteId) {
  const note = Notes.notes.find((note) => {
    if (note.id === noteId) {
      note.selected = !note.selected;
    }
  });
};

Notes.prototype.sortByDate = function () {
  Notes.sorted = !Notes.sorted;

  let sortedNotes = [];
  if (Notes.sorted) {
    sortedNotes = Notes.notes.sort((a, b) => a.creationDate - b.creationDate);
  } else {
    sortedNotes = Notes.notes.sort((a, b) => b.creationDate - a.creationDate);
  }

  return sortedNotes;
};
