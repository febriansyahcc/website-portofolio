import { HERO_DATA } from '../data/portfolio';
import '../styles/hero.css';

export default function Hero() {
  const { name, title, role, summary, cta, photo } = HERO_DATA;

  const handleScrollTo = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" aria-label="Hero introduction">
      {/* Decorative floating shapes */}
      <div className="hero__shape hero__shape--1" aria-hidden="true" />
      <div className="hero__shape hero__shape--2" aria-hidden="true" />
      <div className="hero__shape hero__shape--3" aria-hidden="true" />
      <div className="hero__shape hero__shape--4" aria-hidden="true" />

      <div className="hero__container">
        {/* Left: text content */}
        <div className="hero__content">
          <h1 className="hero__name font-heading animate-on-scroll">
            {name}
            <span className="hero__badge">{title}</span>
          </h1>

          <p className="hero__role animate-on-scroll">{role}</p>

          <p className="hero__summary animate-on-scroll">{summary}</p>

          <div className="hero__cta animate-on-scroll">
            <a
              href={cta.primary.target}
              className="btn btn--primary"
              onClick={(e) => handleScrollTo(e, cta.primary.target)}
              aria-label={cta.primary.text}
            >
              {cta.primary.text}
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${cta.secondary.target.replace(/^\//, '')}`}
              className="btn btn--secondary"
              download
              aria-label={cta.secondary.text}
            >
              {cta.secondary.text}
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div className="hero__photo-wrapper animate-on-scroll">
          {photo ? (
            <img src={`${import.meta.env.BASE_URL}${photo.replace(/^\//, '')}`} alt={`Photo of ${name}`} className="hero__photo hero__photo-img" />
          ) : (
            <div className="hero__photo" aria-label={`Photo of ${name}`}>
              <span className="hero__initials font-heading">MDF</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
