import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: 15, suffix: '+', label: 'Anos de história' },
  { value: 420, suffix: '+', label: 'Alunos matriculados' },
  { value: 98, suffix: '%', label: 'Aprovação no fundamental' },
  { value: 32, suffix: '', label: 'Professores especializados' },
]

function AnimatedNumber({ target, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{ backgroundColor: '#FFD43B' }}
      className="py-10 md:py-12"
      aria-label="Números da escola"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center gap-1"
            >
              <p className="text-4xl md:text-5xl font-black text-gray-800">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} active={inView} />
              </p>
              <p className="text-sm md:text-base font-semibold text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
