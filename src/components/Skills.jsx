import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal as="h2" className="section__heading">
        <span className="section__index">04.</span> Skills
      </Reveal>

      <div className="skills__list">
        {skills.map((skill, i) => (
          <Reveal key={skill.name} delay={i * 0.06} className="skill">
            <div className="skill__row">
              <span className="skill__name">{skill.name}</span>
              <span className="skill__level">{skill.level}%</span>
            </div>
            <div className="skill__bar">
              <motion.div
                className="skill__fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
