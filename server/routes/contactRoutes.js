import express from "express";
import { createContact } from "../controllers/contactController.js";
import { contactValidation } from "../validation/contactValidation.js";

const router = express.Router();

router.post("/", contactValidation, createContact);

export default router;