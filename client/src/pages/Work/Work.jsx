import "./Work.css";

import projects from "../../data/projects";

import ProjectCard from "../../components/ProjectCard";

function Work(){

return(

<section className="work-page section">

<div className="container">

<div className="work-heading">

<h1>

Selected Work

</h1>

<p>

Thoughtfully crafted visual identities,
social media creatives,
and presentation designs.

</p>

</div>

<div className="masonry">

{

projects.map(project=>(

<ProjectCard

key={project.id}

project={project}

/>

))

}

</div>

</div>

</section>

)

}

export default Work;