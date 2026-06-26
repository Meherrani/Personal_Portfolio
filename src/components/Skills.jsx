import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { skills } from '../data/content'

const tagContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const tag = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal as="h2" className="section__heading">
        <span className="section__index">04.</span> Skills
      </Reveal>

      <div className="skills__categories">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06} className="skill-group">
            <h3 className="skill-group__title">{group.category}</h3>
            <motion.ul
              className="skill-group__tags"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={tagContainer}
            >
              {group.items.map((item) => (
                <motion.li key={item} variants={tag} whileHover={{ y: -3, transition: { duration: 0.15 } }}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
