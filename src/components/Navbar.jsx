import { useEffect, useState } from 'react'
import { personalLinks } from '../data/links'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
]

function Navbar({ resumeAvailable }) {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-10% 0px -50% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="topbar">
      <div className="brand-block">
        <span className="brand-mark">VP</span>
        <span className="brand-name">Vedant Patil</span>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'nav-link is-active' : 'nav-link'}
          >
            {item.label}
          </a>
        ))}

        {resumeAvailable ? (
          <a
            href={personalLinks.resume}
            download="Vedant_Patil_Resume.pdf"
            className="nav-link nav-resume"
          >
            Resume
          </a>
        ) : (
          <span className="nav-link nav-disabled">Resume</span>
        )}
      </nav>
    </header>
  )
}

export default Navbar
