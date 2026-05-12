import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const NAV_LINKS = [
  { label: 'A Escola', to: 'sobre' },
  { label: 'Turmas', to: 'turmas' },
  { label: 'Galeria', to: 'galeria' },
  { label: 'Contato', to: 'contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          to="hero"
          smooth
          duration={500}
          className="flex items-center gap-2 cursor-pointer"
          aria-label="Escola Saber - Início"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-xl shadow"
            style={{ background: '#FFD43B' }}
            aria-hidden="true"
          >
            ⭐
          </div>
          <span
            className={`font-extrabold text-xl tracking-tight transition-colors ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Escola Saber
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              className={`font-semibold text-sm cursor-pointer transition-colors hover:text-[#FF8C42] ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="pre-matricula"
            smooth
            duration={500}
            offset={-80}
            className="btn-orange text-sm cursor-pointer"
            aria-label="Fazer pré-matrícula"
          >
            Fazer Pré-Matrícula
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-gray-700' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              className="block py-3 font-semibold text-gray-700 hover:text-[#FF8C42] cursor-pointer border-b border-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="pre-matricula"
            smooth
            duration={500}
            offset={-80}
            className="btn-orange inline-block mt-4 text-sm cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Fazer Pré-Matrícula
          </Link>
        </div>
      )}
    </header>
  )
}
