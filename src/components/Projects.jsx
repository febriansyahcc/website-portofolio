import { PROJECTS } from '../data/portfolio';
import '../styles/projects.css';

function ProjectCard({ project, index }) {
  const {
    title,
    description,
    features,
    techBadges,
    github,
    live,
    featured,
    color,
  } = project;

  return (
    <article
      className={`project-card${featured ? ' project-card--featured' : ''} animate-on-scroll`}
      style={{
        '--project-color': color,
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="project-card__border" aria-hidden="true" />

      <div className="project-card__body">
        <h3 className="project-card__title font-heading">{title}</h3>
        <p className="project-card__desc">{description}</p>

        {features && features.length > 0 && (
          <ul className="project-card__features" aria-label="Key features">
            {features.slice(0, 3).map((feat) => (
              <li key={feat} className="project-card__feature">
                <span
                  className="project-card__bullet"
                  style={{ backgroundColor: color }}
                  aria-hidden="true"
                />
                {feat}
              </li>
            ))}
          </ul>
        )}

        <div className="project-card__badges" aria-label="Technologies used">
          {techBadges.map((badge) => (
            <span key={badge} className="badge font-mono">
              {badge}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          {github && github !== '#' && (
            <a
              href={github}
              className="btn btn--small btn--outline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${title}`}
            >
              💻 GitHub
            </a>
          )}
          {live && live !== '#' && (
            <a
              href={live}
              className="btn btn--small btn--primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${title}`}
            >
              🚀 Live Demo
            </a>
          )}
          {(!github || github === '#') && (!live || live === '#') && (
            <span className="project-card__coming-soon font-mono">🔒 Private / Coming Soon</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects" aria-label="Projects">
      <div className="projects__container">
        <h2 className="section-title font-heading animate-on-scroll">
          Proyek Saya
          <span className="section-title__accent" aria-hidden="true" />
        </h2>

        <div className="projects__grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
