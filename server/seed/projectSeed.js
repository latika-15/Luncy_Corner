import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Project from "../models/Project.js";

dotenv.config();

await connectDB();

await Project.deleteMany();

await Project.create({

title:"Cafe Aroma",

slug:"cafe-aroma",

category:"Brand Identity",

shortDescription:"A warm and modern coffee branding project.",

fullDescription:"Designed a complete branding identity including logo, menu, packaging and Instagram creatives.",

thumbnail:"/projects/cafe/thumb.jpg",

coverImage:"/projects/cafe/cover.jpg",

gallery:[

"/projects/cafe/1.jpg",

"/projects/cafe/2.jpg",

"/projects/cafe/3.jpg"

],

colors:[

"#F6E8DC",

"#4B352A",

"#DDB892"

],

fonts:[

"Cormorant Garamond",

"Inter"

],

tools:[

"Canva",

"Photoshop"

],

featured:true

});

console.log("Projects Seeded");

process.exit();