import { useEffect,useState } from "react";

import { getProjects } from "../services/projectService";

const useProjects = ()=>{

const [projects,setProjects]=useState([]);

const [loading,setLoading]=useState(true);

const [error,setError]=useState("");

useEffect(()=>{

const fetchProjects=async()=>{

try{

const data=await getProjects();

setProjects(data);

}

catch(err){

setError(err.message);

}

finally{

setLoading(false);

}

}

fetchProjects();

},[]);

return{

projects,

loading,

error

}

}

export default useProjects;