import '../styles/components.css';

export default function FloatingCV() {
  return (
    <a
      href="/CV-Mochamad-Dwi-Febriansyah.pdf"
      download
      className="floating-btn"
      aria-label="Download CV"
      title="Download CV"
    >
      <svg
        className="floating-btn__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span className="floating-btn__text font-heading">CV</span>
    </a>
  );
}
