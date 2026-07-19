import "./Projects.css";

import useProjects from "../../hooks/useProjects";
import ProjectCard from "../../components/ProjectCard";

function Projects() {
  const {
    projects,
    loading,
    error,
  } = useProjects();

  // Loading State
  if (loading) {
    return (
      <section className="work-page section">
        <div className="container">
          <div className="work-status">
            <h2>Loading Projects...</h2>
          </div>
        </div>
      </section>
    );
  }

  // Error State
  if (error) {
    return (
      <section className="work-page section">
        <div className="container">
          <div className="work-status error">
            <h2>{error}</h2>
          </div>
        </div>
      </section>
    );
  }

  // Empty State
  if (projects.length === 0) {
    return (
      <section className="work-page section">
        <div className="container">
          <div className="work-status">
            <h2>No projects found.</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="work-page section">
      <div className="container">

        <div className="work-heading">
          <h1>Selected Work</h1>

          <p>
            Thoughtfully crafted visual identities,
            social media creatives,
            and presentation designs.
          </p>
        </div>

        <div className="masonry">
          {projects.map((project) => (
            <ProjectCard
              key={project._id || project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;