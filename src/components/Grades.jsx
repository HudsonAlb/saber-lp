import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const GRADES = [
  {
    icon: '🍼',
    title: 'Educação Infantil',
    sub: 'Berçário & Maternal',
    ages: '0 a 3 anos',
    description: 'Desenvolvimento sensorial, afetivo e motor em um ambiente seguro e estimulante.',
    bg: '#FFD43B',
    textColor: 'text-gray-800',
  },
  {
    icon: '🎒',
    title: 'Pré-escola',
    sub: 'Pré I & Pré II',
    ages: '4 a 5 anos',
    description: 'Preparação para a alfabetização com foco em criatividade, sociabilidade e autonomia.',
    bg: '#FF8C42',
    textColor: 'text-white',
  },
  {
    icon: '📚',
    title: 'Ensino Fundamental',
    sub: '1º ao 5º ano',
    ages: '6 a 10 anos',
    description: 'Base sólida de conhecimento com metodologia ativa e professores especializados.',
    bg: '#F5F5F5',
    textColor: 'text-gray-800',
  },
]

export default function Grades() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="turmas" ref={ref} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: '#FF8C42' }}
          >
            Nossas turmas
          </span>
          <h2 className="section-title mt-2">Para cada fase, o melhor cuidado</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Organizamos as turmas respeitando o desenvolvimento natural de cada faixa etária.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {GRADES.map((grade, i) => (
            <motion.article
              key={grade.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.14 }}
              className={`rounded-3xl p-8 flex flex-col gap-4 cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${grade.textColor}`}
              style={{ backgroundColor: grade.bg }}
            >
              <div className="text-5xl" aria-hidden="true">{grade.icon}</div>
              <div>
                <h3 className="text-xl font-extrabold leading-tight">{grade.title}</h3>
                <p className={`font-semibold text-sm mt-0.5 ${grade.bg === '#FF8C42' ? 'text-white/80' : 'text-gray-500'}`}>
                  {grade.sub}
                </p>
              </div>
              <div
                className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full w-fit ${
                  grade.bg === '#FF8C42'
                    ? 'bg-white/20 text-white'
                    : 'bg-black/8 text-gray-700'
                }`}
                style={grade.bg !== '#FF8C42' ? { backgroundColor: 'rgba(0,0,0,0.06)' } : {}}
              >
                <span aria-hidden="true">👶</span>
                {grade.ages}
              </div>
              <p className={`text-sm leading-relaxed ${grade.bg === '#FF8C42' ? 'text-white/90' : 'text-gray-600'}`}>
                {grade.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
