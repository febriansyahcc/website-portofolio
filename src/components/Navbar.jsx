import { useState, useEffect, useCallback } from 'react';
import { NAV_LINKS } from '../data/portfolio';
import '../styles/navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.target.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (e, target) => {
      e.preventDefault();
      setMenuOpen(false);

      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    []
  );

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__container">
        {/* Logo */}
        <a
          href="#hero"
          className="navbar__logo font-heading"
          onClick={(e) => handleNavClick(e, '#hero')}
          aria-label="Go to top"
        >
          riyan.dev
        </a>

        {/* Desktop nav links */}
        <ul className="navbar__links" role="menubar">
          {NAV_LINKS.map((link) => (
            <li key={link.target} role="none">
              <a
                href={link.target}
                role="menuitem"
                className={`navbar__link${
                  activeSection === link.target ? ' navbar__link--active' : ''
                }`}
                onClick={(e) => handleNavClick(e, link.target)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li role="none">
            <a
              href={`${import.meta.env.BASE_URL}CV-Mochamad-Dwi-Febriansyah.pdf`}
              className="navbar__cv-btn"
              download
              role="menuitem"
              aria-label="Download CV"
            >
              📄 CV
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}
        role="menu"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.target}
            href={link.target}
            role="menuitem"
            className={`navbar__mobile-link${
              activeSection === link.target ? ' navbar__mobile-link--active' : ''
            }`}
            onClick={(e) => handleNavClick(e, link.target)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
        <a
          href={`${import.meta.env.BASE_URL}CV-Mochamad-Dwi-Febriansyah.pdf`}
          className="navbar__cv-btn navbar__cv-btn--mobile"
          download
          role="menuitem"
          aria-label="Download CV"
          tabIndex={menuOpen ? 0 : -1}
        >
          📄 Download CV
        </a>
      </div>
    </nav>
  );
}
