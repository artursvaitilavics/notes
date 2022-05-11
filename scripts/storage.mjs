export function Storage() {}

Storage.prototype.save = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

Storage.prototype.read = function () {
  const storageNotes = localStorage.getItem("notes");
  return JSON.parse(storageNotes);
};


// Storage.prototype.delete = function () {

// }