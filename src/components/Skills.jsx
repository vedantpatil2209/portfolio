import { skills } from '../data/skills'
import SectionLabel from './SectionLabel'

function Skills() {
  return (
    <section id="skills" className="panel panel-skills">
      <SectionLabel number="05" text="Technical Skills" />

      <h2>Skills</h2>
      <p className="panel-caption">
        Technologies and tools I use while building, analyzing, and experimenting with practical
        digital solutions.
      </p>

      <div className="skills-grid" aria-label="Skill categories">
        {skills.map((category, index) => (
          <div key={category.heading} className="skill-group">
            <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
            <div className="skill-content">
              <h3>{category.heading}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
