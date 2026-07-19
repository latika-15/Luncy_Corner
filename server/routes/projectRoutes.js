import express from "express";

import{

getProjects,

getProject,

getFeaturedProjects

}from "../controllers/projectController.js";

const router=express.Router();

router.get("/",getProjects);

router.get("/featured",getFeaturedProjects);

router.get("/:slug",getProject);

export default router;