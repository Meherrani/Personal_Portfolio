import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal as="h2" className="section__heading">
        <span className="section__index">02.</span> Experience
      </Reveal>

      <div className="timeline">
        <motion.div
          className="timeline__line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />

        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.15} className="timeline__item">
            <motion.div
              className="timeline__dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 + 0.2, type: 'spring', stiffness: 300, damping: 20 }}
            />
            <div className="timeline__card">
              <div className="timeline__card-header">
                <h3>{job.role}</h3>
                <span className="timeline__period">{job.period}</span>
              </div>
              <p className="timeline__company">
                {job.company} · {job.location}
              </p>
              <ul>
                {job.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
