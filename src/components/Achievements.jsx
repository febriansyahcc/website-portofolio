import { ACHIEVEMENTS } from '../data/portfolio';
import '../styles/achievements.css';

const LEVEL_COLORS = {
  gold: '#FACC15',
  silver: '#C0C0C0',
  education: '#2563EB',
};

const LEVEL_BG = {
  gold: '#FFFBEB',
  silver: '#F5F5F5',
  education: '#EFF6FF',
};

function AchievementItem({ item, index }) {
  const accentColor = LEVEL_COLORS[item.level] || '#22C55E';
  const bgColor = LEVEL_BG[item.level] || '#F0FDF4';

  return (
    <div
      className="achievement animate-on-scroll"
      style={{
        '--accent-color': accentColor,
        animationDelay: `${index * 120}ms`,
      }}
    >
      <div
        className="achievement__icon"
        style={{ backgroundColor: bgColor }}
        aria-hidden="true"
      >
        <span className="achievement__emoji">{item.icon}</span>
      </div>

      <div className="achievement__content">
        <h3 className="achievement__title font-heading">{item.title}</h3>
        <p className="achievement__desc">{item.description}</p>
      </div>

      <div className="achievement__check" aria-hidden="true">
        {item.level === 'education' ? '🎓' : '✅'}
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="achievements" aria-label="Achievements and Education">
      <div className="achievements__container">
        <h2 className="section-title font-heading animate-on-scroll">
          Prestasi & Pendidikan
          <span className="section-title__accent" aria-hidden="true" />
        </h2>

        <div className="achievements__list">
          {ACHIEVEMENTS.map((item, index) => (
            <AchievementItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
