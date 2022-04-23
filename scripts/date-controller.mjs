import { DateTime } from "luxon";

const generateCreationDate = () => DateTime.now().c;

export { generateCreationDate };
