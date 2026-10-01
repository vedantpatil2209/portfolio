import SectionLabel from './SectionLabel'
import { personalLinks } from '../data/links'

const interests = [
  'Full-Stack Web Development',
  'Frontend Engineering',
  'Data Science',
  'AI Applications',
  'Database Management',
]

function Hero({ resumeAvailable }) {
  return (
    <section id="home" className="panel panel-hero">
      <SectionLabel number="01" text="Computer Science Engineering Student" />

      <h1>Vedant Patil.</h1>

      <p className="hero-quote">
        “Computer Science Engineering student exploring the intersection of software
        development, data analytics, and artificial intelligence.”
      </p>

      <p className="hero-copy">
        I&apos;m a Computer Science Engineering student at Walchand Institute of Technology,
        Solapur, interested in building practical applications, understanding complex systems,
        and turning ideas into functional digital solutions.
      </p>

      <ul className="interest-list" aria-label="Areas of interest">
        {interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>

      <div className="details-grid">
        <div className="detail-item">
          <span className="detail-label">Location</span>
          <span className="detail-value">Solapur, Maharashtra, India</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Status</span>
          <span className="detail-value">Open to Opportunities</span>
        </div>
      </div>

      <div className="action-row">
        <a href="#projects" className="primary-link">
          View My Work
        </a>

        {resumeAvailable ? (
          <a
            href={personalLinks.resume}
            download="Vedant_Patil_Resume.pdf"
            className="secondary-link"
          >
            Download Resume
          </a>
        ) : (
          <span className="link-disabled">Resume unavailable</span>
        )}
      </div>

      <div className="social-row" aria-label="Social links">
        <a href={personalLinks.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={personalLinks.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={personalLinks.email}>Email</a>
      </div>
    </section>
  )
}

export default Hero
