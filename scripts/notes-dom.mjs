import { Notes } from "./notes.mjs";

// const temPNotes = [
//   { selected: true, id: 4434, text: "some text of the first note" },
//   {
//     selected: true,
//     id: 5983,
//     text: "bestest of all the texts of the first second",
//   },
// ];

const notes = new Notes();

const temPNotes = notes.getNotes();

const createNoteDomElement = (note, notesElement) => {
  const noteElement = document.createElement("div");
  // const checkboxElement = document.createElement("input");
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

      checkboxElement.classList = []
      checkboxElement.classList.add("selected");
    } else {
      checkboxElement.classList = []
      checkboxElement.classList.add("unselected");
    }
  }

  setSelected(selected)

  checkboxElement.addEventListener('click', ()=>{
    selected = !selected;
    setSelected(selected)
  })
  // checkboxElement.checked = note.selected;
  textElement.value = note.text;
  btnExpandElement.id = "btn-expand";
  btnDeleteElement.classList.add("btn-delete");

  btnExpandElement.innerHTML = "E"; //'should be proper imaga
  btnDeleteElement.innerHTML = "D"; //'should be proper imaga

  btnDeleteElement.addEventListener("click", (event) => {
    notes = notes.filter(
      (element) => element.id !== event.target.parentNode.id
    );
    clearNotesElement();
    renderNotes();
  });

  noteElement.appendChild(checkboxElement);
  noteElement.appendChild(textElement);
  noteElement.appendChild(btnExpandElement);
  noteElement.appendChild(btnDeleteElement);

  notesElement.appendChild(noteElement);
};

const renderNotes = (notesElement) => {
  console.log(temPNotes);
  try {
    temPNotes.forEach((note) => {
      // console.log()

      createNoteDomElement(note, notesElement);
    });
  } catch (error) {
    console.log(`My ERROR: ${error}`);
  }
};

const clearNotesElement = () => {
  while (notesElement.firstChild) {
    notesElement.removeChild(notesElement.firstChild);
  }
};

const addNoteToList = (newNote) => {
  notes.unshift(newNote);
};

const replaceElementsClass = (element, tagClass) => {
  element.classList = [];
  element.classList.add(tagClass);
};

export { renderNotes };
