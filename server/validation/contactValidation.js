import { body } from "express-validator";

export const contactValidation = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 40 })
    .withMessage("Name must be between 2 and 40 characters"),

  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please enter a valid email"),

   body("phone")
  .matches(/^(?:\+91|91)?[6-9]\d{9}$/)
  .withMessage("Please enter a valid Indian mobile number"),

  body("service")
    .notEmpty()
    .withMessage("Please select a service"),

  body("message")
    .trim()
    .isLength({ min: 20, max: 800 })
    .withMessage("Message should be between 20 and 800 characters"),
];