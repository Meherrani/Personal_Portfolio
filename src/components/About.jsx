import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal as="h2" className="section__heading">
        <span className="section__index">01.</span> About Me
      </Reveal>

      <div className="about__grid">
        <Reveal delay={0.1} className="about__text">
          <p>{about.summary}</p>
        </Reveal>

        <motion.div
          className="about__stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {about.highlights.map((h) => (
            <motion.div
              key={h.label}
              className="about__stat"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <span className="about__stat-value">{h.value}</span>
              <span className="about__stat-label">{h.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
