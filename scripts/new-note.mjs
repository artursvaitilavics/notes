import { setNewButtonDefault, setNotClicked } from "../app.mjs";

const containerElement = document.querySelector("#new-note");
const newNoteContainer = document.querySelector("#new-note-container");

const newNoteObject = {
  defaultId: "new-note-container",
  destroyId: "new-note-container-srhink",
};

// New note not working properly, adds more than one window for typing new note
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
      console.log("save note clicked");
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
