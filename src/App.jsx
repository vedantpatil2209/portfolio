import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PhilosophyStrip from './components/PhilosophyStrip'

function App() {
  const [resumeAvailable, setResumeAvailable] = useState(false)

  useEffect(() => {
    fetch('/VedantPatilResume.pdf', { method: 'HEAD' })
      .then((response) => setResumeAvailable(response.ok))
      .catch(() => setResumeAvailable(false))
  }, [])

  return (
    <div className="portfolio-shell">
      <Navbar resumeAvailable={resumeAvailable} />

      <main className="editorial-grid">
        <Hero resumeAvailable={resumeAvailable} />
        <PhilosophyStrip />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
