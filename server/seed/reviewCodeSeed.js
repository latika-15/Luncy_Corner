import dotenv from "dotenv";
import connectDB from "../config/db.js";
import ReviewCode from "../models/ReviewCode.js";

dotenv.config();

await connectDB();

await ReviewCode.deleteMany();

await ReviewCode.create({
  clientName: "Cafe Aroma",
  code: "LUNCY-1234",
});

console.log("Review code added.");

process.exit();