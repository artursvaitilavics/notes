import { GenerateID } from "./generate-id.mjs";
import { generateCreationDate } from "./date-controller.mjs";

export function Note(selected, text) {
  const generateID = new GenerateID();
  this.selected = selected;
  this.id = generateID.id();
  this.text = text;
  this.creationDate = generateCreationDate()
}
