import Contact from "../models/Contact.js";
import { validationResult } from "express-validator";

export const createContact = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  try {
    // const contact = await Contact.create(req.body);

    const {
  name,
  email,
  phone,
  service,
  message,
} = req.body;

const contact = await Contact.create({
  name,
  email,
  phone,
  service,
  message,
});

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};