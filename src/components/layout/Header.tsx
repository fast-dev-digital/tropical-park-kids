import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

const navLinks = [
  { href: '#entrada', label: 'Entrada' },
  { href: '#atracoes', label: 'Atrações' },
  { href: '#gastronomia', label: 'Gastronomia' },
  { href: '#events', label: 'Eventos' },
  { href: '#location', label: 'Onde estamos' },
]

export function Header() {
  const scrolled = useScrollPosition(40)
  const [open, setOpen] = useState(false)
  const reduced = usePrefersReducedMotion()
  const solidHeader = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solidHeader
          ? 'bg-cream/95 backdrop-blur-md border-b border-ink/8 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-3 md:py-4">
        <a
          href="#hero"
          className="flex items-center gap-3 group"
          aria-label="Tropical Park Kids — início"
        >
          <img
            src="/logo-tropical.png"
            alt=""
            aria-hidden="true"
            className="h-12 w-12 md:h-14 md:w-14 rounded-2xl object-cover shadow-soft transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-105"
            width={56}
            height={56}
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span
              className={`font-display font-bold text-xl md:text-2xl transition-colors ${
                solidHeader ? 'text-ink' : 'text-cream drop-shadow-md'
              }`}
            >
              Tropical Park <span className="text-coral">Kids</span>
            </span>
            <span
              className={`font-body text-xs font-semibold transition-colors ${
                solidHeader ? 'text-ink-soft' : 'text-cream/90 drop-shadow'
              }`}
            >
              Complexo de Eventos · Catanduva
            </span>
          </span>
        </a>

        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-full text-sm font-bold transition-colors ${
                solidHeader
                  ? 'text-ink-soft hover:text-coral hover:bg-coral/8'
                  : 'text-cream/90 hover:text-cream hover:bg-cream/12'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={buildWhatsAppUrl('hero')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-sun text-ink font-bold text-sm px-5 py-2.5 rounded-full shadow-playful hover:bg-sun-deep hover:-translate-y-0.5 transition-all"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Agendar visita</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className={`lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full transition-colors ${
              solidHeader
                ? 'text-ink bg-cream-deep'
                : 'text-cream bg-ink/20 backdrop-blur'
            }`}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 5 L17 17 M17 5 L5 17" />
              </svg>
            ) : (
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M2 2 H20 M2 8 H20 M2 14 H20" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={reduced ? undefined : { opacity: 1, height: 'auto' }}
            exit={reduced ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.65, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-cream border-t border-ink/8"
          >
            <Container className="py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={reduced ? false : { opacity: 0, x: -8 }}
                  animate={reduced ? undefined : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: reduced ? 0 : i * 0.04 }}
                  className="flex items-center justify-between py-3 px-2 rounded-2xl text-lg font-display font-semibold text-ink hover:bg-cream-deep transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-coral text-xl" aria-hidden="true">→</span>
                </motion.a>
              ))}
              <a
                href={buildWhatsAppUrl('hero')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-sun text-ink font-bold text-base px-6 py-4 rounded-full shadow-playful"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span>Agendar visita</span>
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.1-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5l-.9-2.1c-.2-.5-.5-.4-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1.1 2.8 1.2 3 .1.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.3c1.4.7 3 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 15.2 3.6 13.6 3.6 12 3.6 7.4 7.4 3.6 12 3.6S20.4 7.4 20.4 12 16.6 20.3 12 20.3z"/>
    </svg>
  )
}
