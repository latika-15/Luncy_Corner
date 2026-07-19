import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import Project from "../models/Project.js";

dotenv.config();

const projects = [
  {
    title: "Cafe Aroma",
    slug: "cafe-aroma",
    category: "Brand Identity",
    description:
      "A modern café branding project featuring a warm, elegant and minimal visual identity.",

    thumbnail:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",

    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e"
    ],

    tools: [
      "Canva",
      "Photoshop"
    ],

    year: 2026,

    featured: true
  },

  {
    title: "Bloom Fashion",

    slug: "bloom-fashion",

    category: "Instagram Design",

    description:
      "Luxury fashion social media branding with soft pastel aesthetics.",

    thumbnail:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",

    gallery: [],

    tools: [
      "Canva"
    ],

    year: 2026,

    featured: false
  }

];

const seedProjects = async () => {

    try{

        await connectDB();

        await Project.deleteMany();

        await Project.insertMany(projects);

        console.log("✅ Projects Seeded");

        process.exit();

    }

    catch(error){

        console.log(error);

        process.exit(1);

    }

}

seedProjects();