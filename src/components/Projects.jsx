import { projects } from '../data/projects'
import SectionLabel from './SectionLabel'

function Projects() {
  return (
    <section id="projects" className="panel panel-projects">
      <SectionLabel number="03" text="Selected Projects" />

      <h2>Selected Projects</h2>
      <p className="panel-caption">
        A few projects that showcase my technical skills and problem-solving approach.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-header">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <div className="tech-stack">
              {project.technologies.map((tech) => (
                <span key={`${project.id}-${tech}`}>{tech}</span>
              ))}
            </div>

            <ul className="project-points">
              {project.details.map((detail) => (
                <li key={`${project.id}-${detail}`}>{detail}</li>
              ))}
            </ul>

            <div className="project-links">
              {project.repository ? (
                <a href={project.repository} target="_blank" rel="noopener noreferrer">
                  View Repository
                </a>
              ) : (
                <span className="meta-disabled">Repository</span>
              )}

              {project.liveDemo ? (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  View Live Demo
                </a>
              ) : (
                <span className="meta-disabled">Live Demo</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
