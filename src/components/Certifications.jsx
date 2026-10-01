import { certifications } from '../data/certifications'
import SectionLabel from './SectionLabel'

function Certifications() {
  return (
    <section id="certifications" className="panel panel-certifications">
      <SectionLabel number="06" text="Certifications" />

      <h2>Certifications</h2>

      <ul className="certification-list">
        {certifications.map((item) => (
          <li key={item.id} className="certification-item">
            <div className="certification-main">
              <span className="cert-number">{item.number}</span>
              <div className="cert-copy">
                <span className="cert-title">{item.title}</span>
                <span className="cert-issuer">Issuer: {item.issuer}</span>
              </div>
            </div>

            {item.credentialUrl ? (
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
                aria-label={`Open verification link for ${item.title}`}
              >
                ↗
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Certifications
