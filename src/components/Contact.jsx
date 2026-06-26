import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <Reveal as="h2" className="section__heading">
        <span className="section__index">06.</span> Get In Touch
      </Reveal>

      <Reveal delay={0.1} className="contact__text">
        <p>
          I'm currently open to new opportunities. Whether you have a question, a project idea, or
          just want to say hi, my inbox is always open.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <motion.a
          className="btn btn--primary btn--large"
          href={`mailto:${profile.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Say Hello
        </motion.a>
      </Reveal>

      <Reveal delay={0.3} className="contact__links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </Reveal>
    </section>
  )
}
