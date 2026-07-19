import express from "express";

import {

verifyReviewCode,

submitTestimonial,

getTestimonials,

generateCode,

getProjectTestimonials

} from "../controllers/testimonialController.js";

const router = express.Router();

// Public Routes
router.get("/", getTestimonials);

router.get("/project/:slug", getProjectTestimonials);

router.post("/verify", verifyReviewCode);

router.post("/submit", submitTestimonial);

// Admin Route
router.post("/generate", generateCode);

export default router;