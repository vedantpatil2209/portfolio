import SectionLabel from './SectionLabel'

function About() {
  return (
    <section id="about" className="panel panel-about">
      <SectionLabel number="02" text="About / Background" />

      <h2>About</h2>

      <div className="about-copy">
        <p>
          I&apos;m a Computer Science Engineering student at Walchand Institute of Technology,
          Solapur, interested in exploring technology through building, experimenting, and
          solving problems.
        </p>
        <p>
          My experience includes working on full-stack web applications, developing data-driven
          solutions, and exploring AI-powered applications. I enjoy understanding how different
          parts of a system work together, whether that&apos;s designing an interactive frontend,
          structuring a database, developing backend functionality, or extracting meaningful
          insights from data.
        </p>
        <p>
          Through my projects and internship experience, I&apos;ve worked with technologies including
          Python, JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, and data
          analytics tools.
        </p>
      </div>

      <div className="about-meta">
        <div className="meta-block">
          <span className="meta-label">Education</span>
          <h3>Walchand Institute of Technology, Solapur</h3>
          <p>B.Tech. Computer Science and Engineering</p>
          <p>2023–2027</p>
          <p>CGPA: 8.7/10</p>
        </div>

        <div className="meta-block">
          <span className="meta-label">Location</span>
          <p>Solapur, Maharashtra, India.</p>
        </div>
      </div>

      <div className="interest-list-box">
        <span className="meta-label">Professional interests</span>
        <ul>
          <li>Frontend Engineering</li>
          <li>UI/UX</li>
          <li>Data Science and Analytics</li>
          <li>Artificial Intelligence Applications</li>
          <li>Prompt Engineering</li>
          <li>Database Management</li>
        </ul>
      </div>
    </section>
  )
}

export default About
