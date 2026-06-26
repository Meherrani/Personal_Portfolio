import { motion } from 'framer-motion'
import { profile } from '../data/content'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const letterContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.4 } },
}

const letter = {
  hidden: { opacity: 0, y: 40, rotateX: -60 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div className="hero__content" variants={container} initial="hidden" animate="visible">
        <motion.p className="hero__greeting" variants={item}>
          Hi, my name is
        </motion.p>

        <motion.h1 className="hero__name" variants={letterContainer} initial="hidden" animate="visible">
          {profile.name.split('').map((char, i) => (
            <motion.span key={i} variants={letter} style={{ display: 'inline-block' }}>
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2 className="hero__title" variants={item}>
          {profile.title}
        </motion.h2>

        <motion.p className="hero__tagline" variants={item}>
          {profile.tagline}
        </motion.p>

        <motion.div className="hero__cta" variants={item}>
          <a
            className="btn btn--primary"
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View Projects
          </a>
          <a
            className="btn btn--ghost"
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.div
          className="hero__scroll-dot"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
