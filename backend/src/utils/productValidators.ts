import { body } from "express-validator";

const createProductValidators = [
  body("name", "name field must not be empty").notEmpty(),
  body("name", "name must be a valid string").isString(),
  body("name", "name must not be more than 512 characters").isLength({ max: 512 }),
];

export default { createProductValidators };
