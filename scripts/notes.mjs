import { Note } from "./note.mjs";

export function Notes() {}
const note1 = new Note(true, "Note: ONE");

Notes.notes = [note1];

setTimeout(() => {
  Notes.notes.push(new Note(true, "Note: TWO"));
}, 3000);

Notes.filteredNotes = [];
Notes.sorted = false;

Notes.prototype.addNote = function (note) {
  Notes.notes.push(note);
  return Notes.notes;
};

Notes.prototype.getNotes = function () {
  return Notes.notes;
};

Notes.prototype.removeNote = function (selectedNoteId) {
  const notes = Notes.notes.filter((note) => note.id != selectedNoteId);
  console.log(Notes.notes);
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
  // const note1 = Notes.notes[0];
  // const note2 = Notes.notes[1];
  // console.log(note1);
  // console.log(note2);

  // const creationDate1 = note1.creationDate;
  // const creationDate2 = note2.creationDate;

  // console.log(creationDate1);
  // console.log(creationDate2);

  // console.log(creationDate1 > creationDate2);
  // console.log(creationDate1 < creationDate2);

  console.log(Notes.notes);
  Notes.sorted = !Notes.sorted;
  let sortedNotes = [];

  if (Notes.sorted) {
    sortedNotes = Notes.notes.sort((a, b) => {
      if (a.creationDate > b.creationDate) {
        return 1;
      } else if (a.creationDate < b.creationDate) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    sortedNotes = Notes.notes.sort((a, b) => {
      if (a.creationDate < b.creationDate) {
        return -1;
      } else if (a.creationDate > b.creationDate) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  return sortedNotes;
};

// 2022-04-28T20:53:19.238+03:00
