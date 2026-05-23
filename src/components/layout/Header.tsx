import { useState } from 'react'
import { Container } from '../ui/Container'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

const navLinks = [
  { href: '#attractions', label: 'Atrações', num: '01' },
  { href: '#differentials', label: 'Diferenciais', num: '02' },
  { href: '#structure', label: 'A chácara', num: '03' },
  { href: '#menus', label: 'Cozinha', num: '04' },
  { href: '#faq', label: 'Dúvidas', num: '05' },
  { href: '#location', label: 'Visitar', num: '06' },
]

export function Header() {
  const scrolled = useScrollPosition(60)
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? 'glass'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-4 md:py-5">
        <a
          href="#hero"
          className="flex items-center gap-4 group"
          aria-label="Tropical Park Kids — início"
        >
          <img
            src="/logo-tropical.png"
            alt=""
            aria-hidden="true"
            className="h-10 w-10 rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
            width={40}
            height={40}
          />
          <span
            className={`hidden sm:flex flex-col leading-none transition-colors duration-500 ${
              scrolled || open ? 'text-forest' : 'text-parchment'
            }`}
          >
            <span
              className="font-display font-normal text-xl tracking-tight"
              style={{ fontVariationSettings: '"opsz" 48, "SOFT" 40' }}
            >
              Tropical Park
            </span>
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.28em] mt-1.5 ${
                scrolled || open ? 'text-ink-muted' : 'text-parchment/70'
              }`}
            >
              Chácara · Catanduva
            </span>
          </span>
        </a>

        <nav
          className="hidden lg:flex items-center gap-7"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group inline-flex items-baseline gap-2 text-sm transition-colors ${
                scrolled || open
                  ? 'text-ink-soft hover:text-forest'
                  : 'text-parchment/85 hover:text-parchment'
              }`}
            >
              <span
                className={`font-mono text-[10px] tracking-[0.18em] transition-opacity ${
                  scrolled || open ? 'text-ink-muted' : 'text-parchment/55'
                }`}
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                {link.num}
              </span>
              <span className="font-body relative">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={buildWhatsAppUrl('header')}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.22em] pb-1 border-b transition-colors ${
              scrolled || open
                ? 'text-forest border-forest/50 hover:border-forest'
                : 'text-parchment border-parchment/50 hover:border-parchment'
            }`}
          >
            <span>Falar com o concierge</span>
            <span aria-hidden="true">→</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className={`lg:hidden inline-flex items-center justify-center h-10 w-10 transition-colors ${
              scrolled || open ? 'text-forest' : 'text-parchment'
            }`}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                <path d="M4 4 L16 16 M16 4 L4 16" />
              </svg>
            ) : (
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                <path d="M0 1 H22 M0 7 H22 M0 13 H22" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-parchment">
          <Container className="py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 py-3 border-b border-ink/8 text-ink hover:text-forest transition"
              >
                <span
                  className="font-mono text-[10px] tracking-[0.18em] text-ink-muted"
                  style={{ fontFeatureSettings: '"tnum"' }}
                >
                  {link.num}
                </span>
                <span
                  className="font-display text-2xl font-light"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 40' }}
                >
                  {link.label}
                </span>
              </a>
            ))}
            <a
              href={buildWhatsAppUrl('header')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-between bg-forest text-parchment px-6 py-4 text-[12px] uppercase tracking-[0.22em]"
              onClick={() => setOpen(false)}
            >
              <span>Falar com o concierge</span>
              <span aria-hidden="true">→</span>
            </a>
          </Container>
        </div>
      )}
    </header>
  )
}
