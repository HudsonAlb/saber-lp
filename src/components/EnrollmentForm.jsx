import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'

const TURMAS = ['Berçário', 'Maternal', 'Pré I', 'Pré II', '1º ano', '2º ao 5º ano']

function maskWhatsApp(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export default function EnrollmentForm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [selectedTurmas, setSelectedTurmas] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm()

  const wpp = watch('whatsapp', '')

  const handleWhatsApp = (e) => {
    const masked = maskWhatsApp(e.target.value)
    setValue('whatsapp', masked, { shouldValidate: true })
  }

  const toggleTurma = (turma) => {
    setSelectedTurmas((prev) =>
      prev.includes(turma) ? prev.filter((t) => t !== turma) : [...prev, turma]
    )
  }

  const onSubmit = async (data) => {
    if (selectedTurmas.length === 0) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
    reset()
    setSelectedTurmas([])
  }

  const inputClass = (hasError) =>
    `w-full rounded-xl border-2 px-4 py-3 text-sm font-medium text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-[#FF8C42] ${
      hasError ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
    }`

  const labelClass = 'block text-sm font-bold text-gray-700 mb-1.5'

  return (
    <section
      id="pre-matricula"
      ref={ref}
      className="py-20 md:py-28 bg-white"
      aria-label="Formulário de pré-matrícula"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="rounded-3xl border-2 p-8 md:p-10 shadow-xl"
          style={{ borderColor: '#FF8C42' }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-3xl" aria-hidden="true">📝</span>
            <h2 className="section-title mt-2">Pré-matrícula gratuita</h2>
            <p className="text-gray-500 mt-2 text-sm">
              Preencha os dados abaixo e nossa equipe entrará em contato em até 24h.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 flex flex-col items-center gap-4"
                role="alert"
                aria-live="polite"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-lg"
                  style={{ backgroundColor: '#FFD43B' }}
                  aria-hidden="true"
                >
                  🎉
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800">Pré-matrícula enviada!</h3>
                <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
                  Recebemos sua solicitação com sucesso. Nossa equipe vai entrar em contato pelo
                  WhatsApp informado em breve!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-orange mt-2"
                >
                  Enviar outra solicitação
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Nome do responsável */}
                <div>
                  <label htmlFor="responsavel" className={labelClass}>
                    Nome do responsável <span className="text-[#FF8C42]">*</span>
                  </label>
                  <input
                    id="responsavel"
                    type="text"
                    placeholder="Ex: Maria da Silva"
                    autoComplete="name"
                    className={inputClass(errors.responsavel)}
                    aria-invalid={!!errors.responsavel}
                    aria-describedby={errors.responsavel ? 'err-responsavel' : undefined}
                    {...register('responsavel', { required: 'Nome do responsável é obrigatório' })}
                  />
                  {errors.responsavel && (
                    <p id="err-responsavel" className="text-red-500 text-xs mt-1 font-medium" role="alert">
                      {errors.responsavel.message}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className={labelClass}>
                    WhatsApp <span className="text-[#FF8C42]">*</span>
                  </label>
                  <input
                    id="whatsapp"
                    type="tel"
                    placeholder="(81) 99999-9999"
                    autoComplete="tel"
                    className={inputClass(errors.whatsapp)}
                    aria-invalid={!!errors.whatsapp}
                    aria-describedby={errors.whatsapp ? 'err-whatsapp' : undefined}
                    value={wpp}
                    {...register('whatsapp', {
                      required: 'WhatsApp é obrigatório',
                      minLength: { value: 14, message: 'Número incompleto' },
                      onChange: handleWhatsApp,
                    })}
                  />
                  {errors.whatsapp && (
                    <p id="err-whatsapp" className="text-red-500 text-xs mt-1 font-medium" role="alert">
                      {errors.whatsapp.message}
                    </p>
                  )}
                </div>

                {/* Nome da criança */}
                <div>
                  <label htmlFor="crianca" className={labelClass}>
                    Nome da criança <span className="text-[#FF8C42]">*</span>
                  </label>
                  <input
                    id="crianca"
                    type="text"
                    placeholder="Ex: João Pedro"
                    className={inputClass(errors.crianca)}
                    aria-invalid={!!errors.crianca}
                    aria-describedby={errors.crianca ? 'err-crianca' : undefined}
                    {...register('crianca', { required: 'Nome da criança é obrigatório' })}
                  />
                  {errors.crianca && (
                    <p id="err-crianca" className="text-red-500 text-xs mt-1 font-medium" role="alert">
                      {errors.crianca.message}
                    </p>
                  )}
                </div>

                {/* Data de nascimento */}
                <div>
                  <label htmlFor="nascimento" className={labelClass}>
                    Data de nascimento <span className="text-[#FF8C42]">*</span>
                  </label>
                  <input
                    id="nascimento"
                    type="date"
                    className={inputClass(errors.nascimento)}
                    aria-invalid={!!errors.nascimento}
                    aria-describedby={errors.nascimento ? 'err-nascimento' : undefined}
                    {...register('nascimento', { required: 'Data de nascimento é obrigatória' })}
                  />
                  {errors.nascimento && (
                    <p id="err-nascimento" className="text-red-500 text-xs mt-1 font-medium" role="alert">
                      {errors.nascimento.message}
                    </p>
                  )}
                </div>

                {/* Turma de interesse */}
                <div>
                  <p className={labelClass}>
                    Turma de interesse <span className="text-[#FF8C42]">*</span>
                  </p>
                  <div
                    className="flex flex-wrap gap-2"
                    role="group"
                    aria-label="Selecione a turma de interesse"
                  >
                    {TURMAS.map((turma) => {
                      const active = selectedTurmas.includes(turma)
                      return (
                        <button
                          key={turma}
                          type="button"
                          onClick={() => toggleTurma(turma)}
                          aria-pressed={active}
                          className={`chip ${active ? 'chip-active' : 'chip-inactive'}`}
                        >
                          {turma}
                        </button>
                      )
                    })}
                  </div>
                  {selectedTurmas.length === 0 && (
                    <p className="text-gray-400 text-xs mt-1.5 font-medium">
                      Selecione pelo menos uma turma
                    </p>
                  )}
                </div>

                {/* Mensagem opcional */}
                <div>
                  <label htmlFor="mensagem" className={labelClass}>
                    Mensagem <span className="text-gray-400 font-normal">(opcional)</span>
                  </label>
                  <textarea
                    id="mensagem"
                    rows={3}
                    placeholder="Alguma dúvida ou informação adicional?"
                    className={`${inputClass(false)} resize-none`}
                    {...register('mensagem')}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || selectedTurmas.length === 0}
                  className="btn-orange w-full text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  aria-busy={loading}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    'Garantir Minha Vaga'
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  🔒 Seus dados estão seguros e não serão compartilhados com terceiros.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
