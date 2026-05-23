import { useState } from 'react'
import { Menu as MenuIcon, X, MessageCircle } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

const navLinks = [
  { href: '#attractions', label: 'Atrações' },
  { href: '#differentials', label: 'Diferenciais' },
  { href: '#structure', label: 'Estrutura' },
  { href: '#menus', label: 'Cardápios' },
  { href: '#faq', label: 'Dúvidas' },
  { href: '#location', label: 'Visitar' },
]

export function Header() {
  const scrolled = useScrollPosition(60)
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'glass py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group" aria-label="Tropical Park Kids — início">
          <img
            src="/logo-tropical.png"
            alt="Tropical Park Kids"
            className={`transition-all duration-300 ${
              scrolled ? 'h-11 w-11' : 'h-14 w-14'
            } rounded-full object-cover shadow-md group-hover:scale-105`}
            width={56}
            height={56}
          />
          <span
            className={`hidden sm:block font-display font-bold leading-tight transition-colors ${
              scrolled ? 'text-brand-royal' : 'text-white drop-shadow-md'
            }`}
          >
            Tropical Park <span className="text-brand-green">Kids</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                scrolled
                  ? 'text-ink hover:text-brand-green hover:bg-brand-green/5'
                  : 'text-white/95 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            as="a"
            href={buildWhatsAppUrl('header')}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
            pulse
            className="hidden md:inline-flex"
          >
            <MessageCircle size={16} />
            Orçamento 24h
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className={`lg:hidden p-2 rounded-full transition ${
              scrolled ? 'text-ink hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {open ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-slate-200/60 bg-white">
          <Container className="py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-semibold text-ink hover:bg-brand-green/5 hover:text-brand-green transition"
              >
                {link.label}
              </a>
            ))}
            <Button
              as="a"
              href={buildWhatsAppUrl('header')}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              className="mt-3"
            >
              <MessageCircle size={18} /> Orçamento 24h
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
