import { Note } from "./note.mjs";

export function Notes() {
  const note1 = new Note(
    true,
    1101110111,
    "this is my first note ever, about anything!"
  );

  const note2 = new Note(false, 490239200, "I don't see how war is my fault.");

  this.notes = [note1, note2];

  this.addNote = function () {
    this.notes.push(note);
    return this.notes;
  };

  this.getNotes = function () {
    return this.notes;
  };
}
