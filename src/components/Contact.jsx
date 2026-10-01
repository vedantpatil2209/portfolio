import { personalLinks } from '../data/links'
import SectionLabel from './SectionLabel'

const contactDetails = [
  { label: 'Email Me', href: personalLinks.email, type: 'mail' },
  { label: 'Call Me', href: personalLinks.phone, type: 'tel' },
  { label: 'LinkedIn', href: personalLinks.linkedin, type: 'external' },
  { label: 'GitHub', href: personalLinks.github, type: 'external' },
]

function Contact() {
  return (
    <section id="contact" className="panel panel-contact">
      <SectionLabel number="07" text="Let's Connect" />

      <h2>Let&apos;s Connect</h2>
      <p className="panel-caption">
        I&apos;m always open to discussing new opportunities, collaborations, and interesting
        projects.
      </p>

      <div className="contact-list">
        <div className="contact-row">
          <span className="contact-label">Email:</span>
          <a href={personalLinks.email}>patilvedant369@gmail.com</a>
        </div>

        <div className="contact-row">
          <span className="contact-label">Phone:</span>
          <a href={personalLinks.phone}>+91 9420703554</a>
        </div>

        <div className="contact-row">
          <span className="contact-label">LinkedIn:</span>
          <a href={personalLinks.linkedin} target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/vedant-patil-22--/
          </a>
        </div>

        <div className="contact-row">
          <span className="contact-label">GitHub:</span>
          <a href={personalLinks.github} target="_blank" rel="noopener noreferrer">
            https://github.com/vedantpatil2209
          </a>
        </div>
      </div>

      <div className="contact-actions">
        {contactDetails.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="contact-action"
            target={item.type === 'external' ? '_blank' : undefined}
            rel={item.type === 'external' ? 'noopener noreferrer' : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
