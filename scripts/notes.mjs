import { Note } from "./note.mjs";
import { Storage } from "./storage.mjs";

const storage = new Storage();

export function Notes() {}

Notes.notes = storage.read();

Notes.filteredNotes = [];
Notes.sorted = true;

Notes.prototype.addNote = function (note) {
  Notes.notes.push(note);
  storage.save(Notes.notes);
  return Notes.notes;
};

Notes.prototype.getNotes = function () {
  Notes.notes = storage.read();
  return Notes.notes;
};

Notes.prototype.removeNote = function (selectedNoteId) {
  const notes = Notes.notes.filter((note) => note.id != selectedNoteId);
  Notes.notes = notes;
  storage.save(Notes.notes);
};

Notes.prototype.setSelected = function (noteId) {
  Notes.notes.find((note) => {
    if (note.id === noteId) {
      note.selected = !note.selected;
      console.log(note.selected);
    }
  });
  storage.save(Notes.notes);
};

Notes.prototype.sortByDate = function () {
  Notes.sorted = !Notes.sorted;

  let sortedNotes = [];


  if (Notes.sorted) {
    sortedNotes = Notes.notes.sort((a, b) => {
      if (a.creationDate < b.creationDate) {
        return -1;
      } else if (a.creationDate > b.creationDate) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    sortedNotes = Notes.notes.sort((a, b) => {
      if (a.creationDate > b.creationDate) {
        return -1;
      } else if (a.creationDate < b.creationDate) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  return sortedNotes;
};


