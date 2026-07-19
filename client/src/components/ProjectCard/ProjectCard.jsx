import "./ProjectCard.css";

function ProjectCard({project}){

return(

<article className="project-card">

<img
src={project.image}
alt={project.title}
/>

<div className="overlay">

<span>

{project.category}

</span>

<h3>

{project.title}

</h3>

<p>

{project.year}

</p>

<button>

View Case Study →

</button>

</div>

</article>

)

}

export default ProjectCard;