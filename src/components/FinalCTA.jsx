import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-scroll'

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{ backgroundColor: '#FFD43B' }}
      className="py-20 md:py-24"
      aria-label="Chamada para ação final"
    >
      <div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="flex flex-col items-center gap-5"
        >
          <span className="text-5xl" aria-hidden="true">⏳</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 leading-tight">
            As vagas para 2025 estão<br />
            <span style={{ color: '#FF8C42' }}>quase esgotadas!</span>
          </h2>
          <p className="text-gray-700 font-medium max-w-lg text-base leading-relaxed">
            Não perca a chance de garantir o melhor começo para o seu filho.
            Faça agora a pré-matrícula e nosso time entra em contato em até 24 horas.
          </p>
          <Link
            to="pre-matricula"
            smooth
            duration={600}
            offset={-80}
            className="btn-orange text-base cursor-pointer mt-1"
            aria-label="Garantir minha vaga na pré-matrícula"
          >
            Garantir Minha Vaga Agora
          </Link>
          <p className="text-xs text-gray-600 font-medium">
            🔒 Gratuito · Sem compromisso · Resposta em 24h
          </p>
        </motion.div>
      </div>
    </section>
  )
}
