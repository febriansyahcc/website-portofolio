import { EXPERIENCE } from '../data/portfolio';
import '../styles/timeline.css';

function TimelineItem({ item, side }) {
  const colorMap = {
    professional: '#2563EB',
    academic: '#FACC15',
  };

  const badgeColor = colorMap[item.type] || '#2563EB';

  return (
    <div
      className={`timeline__item timeline__item--${side} animate-on-scroll`}
      data-type={item.type}
    >
      {/* The dot on the center line */}
      <div
        className="timeline__dot"
        style={{ backgroundColor: badgeColor }}
        aria-hidden="true"
      />

      <div className="timeline__card">
        <span
          className="timeline__year font-mono"
          style={{ backgroundColor: badgeColor, color: item.type === 'academic' ? '#000' : '#fff' }}
        >
          {item.year}
        </span>
        <h3 className="timeline__title font-heading">{item.title}</h3>
        <p className="timeline__company">{item.company}</p>
        <p className="timeline__desc">{item.description}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
  // Interleave professional and academic by year (descending)
  const { professional, academic } = EXPERIENCE;
  const maxLen = Math.max(professional.length, academic.length);

  const interleaved = [];
  for (let i = 0; i < maxLen; i++) {
    if (professional[i]) {
      interleaved.push({ ...professional[i], _side: 'left' });
    }
    if (academic[i]) {
      interleaved.push({ ...academic[i], _side: 'right' });
    }
  }

  return (
    <section id="experience" className="timeline" aria-label="Experience">
      <div className="timeline__container">
        <h2 className="section-title font-heading animate-on-scroll">
          Pengalaman
          <span className="section-title__accent" aria-hidden="true" />
        </h2>

        <div className="timeline__labels animate-on-scroll">
          <span className="timeline__label timeline__label--left">
            💼 Profesional
          </span>
          <span className="timeline__label timeline__label--right">
            🎓 Akademik & Komunitas
          </span>
        </div>

        <div className="timeline__track">
          {/* Center vertical line */}
          <div className="timeline__line" aria-hidden="true" />

          {interleaved.map((item, index) => (
            <TimelineItem
              key={`${item.type}-${item.year}-${index}`}
              item={item}
              side={item._side}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
