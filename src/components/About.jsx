import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const DIFERENCIAIS = [
  'Ambiente seguro, acolhedor e estimulante',
  'Pedagogia lúdica com foco no desenvolvimento integral',
  'Professores com formação específica por faixa etária',
  'Alimentação nutritiva e supervisionada',
  'Área externa com parque e espaços de leitura',
  'Comunicação direta e transparente com as famílias',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
              alt="Sala de aula da Escola Saber com crianças aprendendo"
              className="rounded-3xl w-full object-cover shadow-xl aspect-[4/3]"
            />
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3"
            >
              <span className="text-3xl" aria-hidden="true">🏆</span>
              <div>
                <p className="font-black text-gray-800 text-sm leading-tight">Referência</p>
                <p className="text-xs text-gray-500 font-medium">em Escada-PE</p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#FF8C42' }}
            >
              Sobre a escola
            </span>
            <h2 className="section-title">
              Educação com afeto e excelência desde 2009
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              A Escola Saber nasceu do sonho de oferecer uma educação que vai além dos
              conteúdos. Aqui, cada criança é vista em sua singularidade, e o aprendizado
              acontece de forma natural, prazerosa e significativa. Somos parceiros das
              famílias na missão de formar cidadãos felizes, criativos e preparados para
              o futuro.
            </p>

            <ul className="grid gap-2.5 mt-1" role="list">
              {DIFERENCIAIS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: '#FFD43B' }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-gray-700 font-medium text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
