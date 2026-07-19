import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
        trim:true
    },

    slug:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },

    category:{
        type:String,
        required:true,
        enum:[
            "Brand Identity",
            "Social Media",
            "Poster Design",
            "UI Design",
            "Creative"
        ]
    },

    shortDescription:{
        type:String,
        required:true,
        maxlength:180
    },

    fullDescription:{
        type:String,
        required:true
    },

    thumbnail:{
        type:String,
        required:true
    },

    coverImage:{
        type:String,
        required:true
    },

    gallery:[String],

    colors:[String],

    fonts:[String],

    tools:[String],

    featured:{
        type:Boolean,
        default:false
    },

    liveLink:{
        type:String,
        default:""
    },

    behanceLink:{
        type:String,
        default:""
    },

    githubLink:{
        type:String,
        default:""
    }

},
{
    timestamps:true
});

export default mongoose.model("Project",projectSchema);