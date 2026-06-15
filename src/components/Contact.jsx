import { CONTACT } from '../data/portfolio';
import '../styles/contact.css';

const CONTACT_LINKS = [
  {
    key: 'email',
    icon: '📧',
    label: 'Email',
    getHref: (data) => `mailto:${data.email}`,
    getText: (data) => data.email,
    newTab: false,
    color: '#EC4899',
  },
  {
    key: 'github',
    icon: '💻',
    label: 'GitHub',
    getHref: (data) => data.github,
    getText: (data) => 'github.com/dwifebriansyah',
    newTab: true,
    color: '#22C55E',
  },
  {
    key: 'linkedin',
    icon: '💼',
    label: 'LinkedIn',
    getHref: (data) => data.linkedin,
    getText: (data) => 'linkedin.com/in/dwifebriansyah',
    newTab: true,
    color: '#2563EB',
  },
  {
    key: 'whatsapp',
    icon: '💬',
    label: 'WhatsApp',
    getHref: (data) => data.whatsapp,
    getText: () => '+62 812-2604-7345',
    newTab: true,
    color: '#22C55E',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-label="Contact">
      <div className="contact__container">
        <h2 className="contact__heading font-heading animate-on-scroll">
          Mari Berkolaborasi!
          <span className="contact__heading-accent" aria-hidden="true" />
        </h2>

        <p className="contact__subtitle animate-on-scroll">
          Tertarik untuk bekerja sama atau punya pertanyaan? Jangan ragu untuk menghubungi saya
          melalui salah satu kanal di bawah ini.
        </p>

        <div className="contact__grid">
          {CONTACT_LINKS.map((link, index) => (
            <a
              key={link.key}
              href={link.getHref(CONTACT)}
              className="contact-card animate-on-scroll"
              style={{
                '--card-color': link.color,
                animationDelay: `${index * 100}ms`,
              }}
              {...(link.newTab
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              aria-label={`${link.label}: ${link.getText(CONTACT)}`}
            >
              <span className="contact-card__icon" aria-hidden="true">
                {link.icon}
              </span>
              <span className="contact-card__label font-heading">{link.label}</span>
              <span className="contact-card__text font-mono">{link.getText(CONTACT)}</span>
            </a>
          ))}
        </div>

        <footer className="contact__footer">
          <p className="contact__copyright">
            © 2025 Mochamad Dwi Febriansyah. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
