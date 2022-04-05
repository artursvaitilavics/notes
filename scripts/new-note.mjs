import { setNewButtonDefault, setNotClicked } from "../app.mjs";
import { Note } from "./note.mjs";
import { Notes } from "./notes.mjs";
// import { generateID } from "./generate-id.mjs";

const containerElement = document.querySelector("#new-note");
const newNoteContainer = document.querySelector("#new-note-container");

const newNoteObject = {
  defaultId: "new-note-container",
  destroyId: "new-note-container-srhink",
};

const displayNewNoteElement = () => {
  if (newNoteContainer === null) {
    const newNoteElement = document.createElement("div");
    const textElement = document.createElement("textarea");
    const btnSaveElement = document.createElement("button");

    newNoteElement.id = newNoteObject.defaultId;

    textElement.setAttribute("placeholder", "type your note here...");
    textElement.id = "new-note-text-area";
    btnSaveElement.innerHTML = "Save";
    btnSaveElement.id = "btn-save-note";

    btnSaveElement.addEventListener("click", () => {
      // const generateId = 
      const note = new Note(false, textElement.value);
      const notes = new Notes();


      console.log("Before calling Notes");
      console.log(notes.addNote(note));
      console.log("After calling Notes");
      destroyNewNoteelement(setNewButtonDefault);
      setNotClicked();
    });

    newNoteElement.appendChild(textElement);
    newNoteElement.appendChild(btnSaveElement);
    containerElement.appendChild(newNoteElement);
  }
};

const destroyNewNoteelement = (setId) => {
  try {
    const newNoteElement = document.querySelector(
      `#${newNoteObject.defaultId}`
    );
    newNoteElement.id = newNoteObject.destroyId;
    setTimeout(() => {
      setId();
      newNoteElement.remove();
    }, 50);
  } catch (error) {
    console.log(`Can't find new note form: ${error}`);
  }
};

export { displayNewNoteElement, destroyNewNoteelement };
