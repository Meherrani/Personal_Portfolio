import { motion } from 'framer-motion'

const blobs = [
  { size: 420, top: '-10%', left: '-8%', color: 'var(--accent)', duration: 22 },
  { size: 360, top: '50%', left: '70%', color: 'var(--accent-2)', duration: 26 },
  { size: 320, top: '75%', left: '5%', color: 'var(--accent-3)', duration: 30 },
]

export default function AnimatedBackground() {
  return (
    <div className="bg-canvas" aria-hidden="true">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="bg-blob"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: b.color,
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      <div className="bg-grid" />
    </div>
  )
}
