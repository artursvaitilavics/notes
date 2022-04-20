import { Note } from "./note.mjs";

export function Notes() {}

Notes.notes = [
  new Note(true, "this is my first note ever, about anything!"),
  new Note(false, "I don't see how war is my fault."),
];

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
