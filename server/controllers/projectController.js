import Project from "../models/Project.js";

/* -----------------------------
Get All Projects
------------------------------ */

export const getProjects = async(req,res)=>{

try{

const projects=await Project.find().sort({

createdAt:-1

});

res.status(200).json({

success:true,

data:projects

});

}

catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};

/* -----------------------------
Featured Projects
------------------------------ */

export const getFeaturedProjects=async(req,res)=>{

try{

const featured=await Project.find({

featured:true

});

res.status(200).json({

success:true,

data:featured

});

}

catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};

export const getProject=async(req,res)=>{

try{

const project=await Project.findOne({

slug:req.params.slug

});

if(!project){

return res.status(404).json({

success:false,

message:"Project not found."

});

}

res.status(200).json({

success:true,

data:project

});

}

catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};