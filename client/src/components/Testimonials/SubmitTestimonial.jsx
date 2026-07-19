import Testimonial from "../models/Testimonial.js";
import ReviewCode from "../models/ReviewCode.js";

export const submitTestimonial = async (req, res) => {
  try {
    const {
      code,
      rating,
      message,
    } = req.body;

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

    const testimonial = await Testimonial.create({
      clientName: reviewCode.clientName,
      rating,
      message,
    });

    reviewCode.used = true;
    await reviewCode.save();

    return res.status(201).json({
      success: true,
      message: "Thank you for your review.",
      data: testimonial,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};