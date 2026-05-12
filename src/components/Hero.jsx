import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background image */}
      <img
        src="https://images.pexels.com/photos/8617938/pexels-photo-8617938.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[center_70%]"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.65) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto flex flex-col items-center gap-5">
        {/* Location badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold"
        >
          <span aria-hidden="true">📍</span>
          Escada-PE
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-lg"
        >
          Um lugar onde cada criança{' '}
          <span style={{ color: '#FFD43B' }}>brilha</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="text-lg sm:text-xl text-white/90 font-medium max-w-xl leading-relaxed drop-shadow"
        >
          Do berçário ao 5º ano, oferecemos educação de qualidade com carinho,
          segurança e dedicação para o seu filho crescer feliz.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="flex flex-col sm:flex-row gap-3 mt-2"
        >
          <Link
            to="pre-matricula"
            smooth
            duration={600}
            offset={-80}
            className="btn-orange text-base cursor-pointer"
            aria-label="Garantir minha vaga na pré-matrícula"
          >
            Garantir Minha Vaga
          </Link>
          <Link
            to="sobre"
            smooth
            duration={600}
            offset={-80}
            className="btn-outline-white text-base cursor-pointer"
            aria-label="Conhecer a escola"
          >
            Conhecer a Escola
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60"
        aria-hidden="true"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Rolar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
