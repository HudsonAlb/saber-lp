import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    title: 'Preencha o formulário',
    desc: 'Informe os dados do responsável e da criança no formulário de pré-matrícula logo abaixo. Leva menos de 2 minutos!',
  },
  {
    num: '02',
    title: 'Receba o contato da escola',
    desc: 'Nossa equipe entrará em contato pelo WhatsApp em até 24 horas para confirmar disponibilidade e agendar uma visita.',
  },
  {
    num: '03',
    title: 'Garanta a vaga do seu filho',
    desc: 'Compareça à escola, conheça as instalações e finalize a matrícula com toda a documentação necessária.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{ backgroundColor: '#FFF0E6' }}
      className="py-20 md:py-28"
      aria-label="Como fazer a pré-matrícula"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: '#FF8C42' }}
          >
            Passo a passo
          </span>
          <h2 className="section-title mt-2">Como fazer a pré-matrícula</h2>
          <p className="text-gray-500 mt-3">
            Simples, rápido e sem burocracia.
          </p>
        </motion.div>

        {/* Steps */}
        <ol className="relative flex flex-col gap-0" role="list">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.16 }}
              className="relative flex gap-6"
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  className="absolute left-5 top-14 w-0.5 h-full -translate-x-1/2"
                  style={{ backgroundColor: '#FF8C42', opacity: 0.3 }}
                  aria-hidden="true"
                />
              )}

              {/* Circle number */}
              <div className="flex-shrink-0 z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm shadow-md"
                  style={{ backgroundColor: '#FF8C42' }}
                  aria-hidden="true"
                >
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <div className="pb-10">
                <h3 className="font-extrabold text-gray-800 text-lg leading-snug">{step.title}</h3>
                <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">{step.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
