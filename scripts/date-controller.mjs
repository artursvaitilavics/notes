import { DateTime } from "../node_modules/luxon/src/luxon.js";

const generateCreationDate = () => DateTime.now().toISO();

export { generateCreationDate };
