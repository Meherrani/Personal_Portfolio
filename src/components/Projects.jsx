import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal as="h2" className="section__heading">
        <span className="section__index">05.</span> Projects
      </Reveal>

      <div className="projects__grid">
        {projects.map((proj, i) => (
          <Reveal key={proj.title} delay={i * 0.12} className="project-card-wrapper">
            <motion.div
              className="project-card"
              whileHover={{ y: -10, transition: { duration: 0.25, ease: 'easeOut' } }}
            >
              <div className="project-card__top">
                <span className="project-card__folder">📁</span>
                <div className="project-card__links">
                  {proj.repo && (
                    <a href={proj.repo} target="_blank" rel="noreferrer" aria-label="Repository">
                      ↗ Code
                    </a>
                  )}
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" aria-label="Live link">
                      ↗ Live
                    </a>
                  )}
                </div>
              </div>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <ul className="project-card__tags">
                {proj.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
