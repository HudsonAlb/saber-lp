import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote:
      'A Escola Saber transformou a vida do meu filho. Ele era tímido e chegava chorando nos primeiros dias. Em menos de um mês, não queria mais ir embora! Os professores são incríveis, realmente se importam com cada criança.',
    name: 'Ana Claudia Ferreira',
    detail: 'Mãe do Lucas, 4 anos — Pré I',
    initials: 'AC',
  },
  {
    quote:
      'Escolhi a Escola Saber depois de visitar várias escolas em Escada. O que me conquistou foi a atenção individual que cada professora dá aos alunos. Minha filha aprendeu a ler no Pré II e está no 1º ano com excelente desempenho!',
    name: 'Roberto Santos',
    detail: 'Pai da Isabela, 6 anos — 1º ano',
    initials: 'RS',
  },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#FFD43B" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.539 1.118L10 15.347l-3.358 2.44c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.65 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="galeria"
      ref={ref}
      className="py-20 md:py-28 bg-gray-50"
      aria-label="Depoimentos de pais"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: '#FF8C42' }}
          >
            Depoimentos
          </span>
          <h2 className="section-title mt-2">O que as famílias dizem</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-md flex flex-col gap-4"
            >
              <Stars />
              <p className="text-gray-700 leading-relaxed text-sm italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-100">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-black text-gray-800 text-sm flex-shrink-0"
                  style={{ backgroundColor: '#FFD43B' }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic font-extrabold text-gray-800 text-sm">{t.name}</cite>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{t.detail}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
