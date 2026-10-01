import SectionLabel from './SectionLabel'

function Experience() {
  return (
    <section id="experience" className="panel panel-experience">
      <SectionLabel number="04" text="Experience" />

      <h2>Experience</h2>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">
            <span>March 2025</span>
            <span>–</span>
            <span>April 2025</span>
          </div>

          <div className="timeline-content">
            <div className="timeline-header">
              <h3>Data Science Intern</h3>
              <span>SkillCraft Technology</span>
              <span className="timeline-location">Remote</span>
            </div>

            <ul className="timeline-list">
              <li>
                Executed data cleaning, exploratory data analysis, and predictive modeling
                workflows using Python on real-world datasets.
              </li>
              <li>
                Applied correlation analysis and hypothesis testing to derive actionable insights
                and improve model performance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
