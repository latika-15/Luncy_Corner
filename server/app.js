import express from "express";

import cors from "cors";

import helmet from "helmet";

import morgan from "morgan";

import projectRoutes from "./routes/projectRoutes.js";

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/projects", projectRoutes);

app.get("/",(req,res)=>{

res.json({

success:true,

message:"Welcome to Luncy Corner API"

})

})

export default app;