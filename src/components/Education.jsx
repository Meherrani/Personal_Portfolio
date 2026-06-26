import Reveal from './Reveal'
import { education, certifications } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="section">
      <Reveal as="h2" className="section__heading">
        <span className="section__index">03.</span> Education
      </Reveal>

      <div className="education__grid">
        {education.map((ed, i) => (
          <Reveal key={ed.school} delay={i * 0.1} className="education__card">
            <h3>{ed.degree}</h3>
            <p className="education__school">{ed.school}</p>
            {ed.period && <span className="education__period">{ed.period}</span>}
            {ed.details && <p className="education__details">{ed.details}</p>}
          </Reveal>
        ))}
      </div>

      {certifications?.length > 0 && (
        <Reveal delay={0.15} className="certifications">
          <h3 className="certifications__title">Certifications</h3>
          <ul className="certifications__list">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </Reveal>
      )}
    </section>
  )
}
