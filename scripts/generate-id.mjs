export function GenerateID() {
  this.id = function () {
    return 1 + Math.floor(Math.random() * 100) * Date.now();
  };
}
