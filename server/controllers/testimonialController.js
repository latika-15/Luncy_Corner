import ReviewCode from "../models/ReviewCode.js";
import Testimonial from "../models/Testimonial.js";
import generateReviewCode from "../utils/generateReviewCode.js";

/* ------------------------------
   Generate Review Code
------------------------------- */

export const generateCode = async (req, res) => {
  try {
    if (req.headers["x-admin-secret"] !== process.env.ADMIN_SECRET) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const { clientName, clientCompany, projectSlug } = req.body;

    const code = generateReviewCode();

    const reviewCode = await ReviewCode.create({
      clientName,
      clientCompany,
      projectSlug,
      code,
    });

    res.status(201).json({
      success: true,
      message: "Review code generated.",
      data: reviewCode,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ------------------------------
   Verify Review Code
------------------------------- */

export const verifyReviewCode = async (req, res) => {
  try {
    const { code } = req.body;

    const reviewCode = await ReviewCode.findOne({
      code: code.toUpperCase(),
    });

    if (!reviewCode) {
      return res.status(404).json({
        success: false,
        message: "Invalid review code.",
      });
    }

    if (reviewCode.used) {
      return res.status(400).json({
        success: false,
        message: "This review code has already been used.",
      });
    }

    res.json({
      success: true,
      clientName: reviewCode.clientName,
      clientCompany: reviewCode.clientCompany,
      projectSlug: reviewCode.projectSlug,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ------------------------------
   Submit Testimonial
------------------------------- */

export const submitTestimonial = async (req, res) => {
  try {
    const { code, rating, message } = req.body;

    const reviewCode = await ReviewCode.findOne({
      code: code.toUpperCase(),
    });

    if (!reviewCode) {
      return res.status(404).json({
        success: false,
        message: "Invalid review code.",
      });
    }

    if (reviewCode.used) {
      return res.status(400).json({
        success: false,
        message: "Review code already used.",
      });
    }

    const testimonial = await Testimonial.create({
      clientName: reviewCode.clientName,
      clientCompany: reviewCode.clientCompany,
      projectSlug: reviewCode.projectSlug,
      rating,
      message,
    });

    reviewCode.used = true;
    await reviewCode.save();

    res.status(201).json({
      success: true,
      message: "Thank you for your review.",
      data: testimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ------------------------------
   Get Approved Testimonials
------------------------------- */

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({
      approved: true,
    }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ------------------------------
   Get Testimonials by Project
------------------------------- */

export const getProjectTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({
      projectSlug: req.params.slug,
      approved: true,
    });

    res.json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};