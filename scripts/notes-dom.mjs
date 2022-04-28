import { Notes } from "./notes.mjs";

const notes = new Notes();

const createNoteDomElement = (note, notesElement) => {
  const noteElement = document.createElement("div");
  const checkboxElement = document.createElement("div");
  const textElement = document.createElement("input");
  const btnExpandElement = document.createElement("button");
  const btnDeleteElement = document.createElement("button");

  noteElement.classList.add("note-container");
  noteElement.id = note.id;
  checkboxElement.setAttribute("type", "checkbox");

  let selected = note.selected;

  const setSelected = (selected) => {
    if (selected) {
      checkboxElement.classList = [];
      checkboxElement.classList.add("selected");
    } else {
      checkboxElement.classList = [];
      checkboxElement.classList.add("unselected");
    }
  };

  setSelected(selected);

  checkboxElement.addEventListener("click", () => {
    selected = !selected;
    setSelected(selected);
    notes.setSelected(note.id);
    console.log(notes.getNotes());
  });

  textElement.value = note.text;
  btnExpandElement.id = "btn-expand";
  btnDeleteElement.classList.add("btn-delete");

  btnExpandElement.innerHTML = "E"; //'should be proper imaga
  btnDeleteElement.innerHTML = "D"; //'should be proper imaga

  btnDeleteElement.addEventListener("click", (event) => {
    const noteId = event.target.parentNode.id;
    notes.removeNote(noteId);
    clearNotesElement(notesElement);
    renderNotes(notesElement);
  });

  noteElement.appendChild(checkboxElement);
  noteElement.appendChild(textElement);
  noteElement.appendChild(btnExpandElement);
  noteElement.appendChild(btnDeleteElement);

  notesElement.appendChild(noteElement);
};

const renderNotes = (notesElement) => {
  clearNotesElement(notesElement);
  try {
    notes.getNotes().forEach((note) => {
      createNoteDomElement(note, notesElement);
    });
  } catch (error) {
    console.log(`My ERROR: ${error}`);
  }
};

const renderFilteredNotes = (searchText, notesElement) => {
  clearNotesElement(notesElement);
  try {
    notes
      .getNotes()
      .filter((note) => {
        return note.text.toLowerCase().includes(searchText.toLowerCase());
      })
      .forEach((note) => {
        createNoteDomElement(note, notesElement);
      });
  } catch (error) {
    console.log("My ERROR: Can't find Note!");
  }
};

const clearNotesElement = (notesElement) => {
  while (notesElement.firstChild) {
    notesElement.removeChild(notesElement.firstChild);
  }
};

const renderSortedNotes = (notesElement) => {
  clearNotesElement(notesElement);
  // notes.sortByDate().forEach((note) => {
  //   createNoteDomElement(note.notesElement);
  // });
  notes.sortByDate()
  renderNotes(notesElement)
};

const addNoteToList = (newNote) => {
  notes.unshift(newNote);
};

const replaceElementsClass = (element, tagClass) => {
  element.classList = [];
  element.classList.add(tagClass);
};

const deleteSelectedNotes = (notesElement) => {
  notes.getNotes().forEach((note) => {
    if (note.selected) {
      notes.removeNote(note.id);
    }
  });
  clearNotesElement(notesElement);
  renderNotes(notesElement);
};

export {
  renderNotes,
  deleteSelectedNotes,
  renderFilteredNotes,
  renderSortedNotes,
};
