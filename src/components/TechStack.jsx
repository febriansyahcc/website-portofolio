import { TECH_STACK } from '../data/portfolio';
import '../styles/techstack.css';

const CATEGORIES = [
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks & Libraries' },
  { key: 'tools', label: 'Tools & Databases' },
];

export default function TechStack() {
  return (
    <section id="techstack" className="techstack bg-secondary" aria-label="Tech Stack">
      <div className="techstack__container">
        <h2 className="section-title font-heading animate-on-scroll">
          Tech Stack
          <span className="section-title__accent" aria-hidden="true" />
        </h2>

        <div className="techstack__grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.key} className="techstack__column animate-on-scroll">
              <h3 className="techstack__category font-heading">{cat.label}</h3>
              <div className="techstack__items">
                {TECH_STACK[cat.key].map((tech, index) => (
                  <span
                    key={tech.name}
                    className="tech-item font-mono animate-on-scroll"
                    style={{
                      '--tech-color': tech.color,
                      animationDelay: `${index * 60}ms`,
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
