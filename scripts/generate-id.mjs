// import { v4 } from "uuid";

const generateID = () => {
  return 1 + Math.floor(Math.random() * 100) * Date.now();
};

export { generateID };
