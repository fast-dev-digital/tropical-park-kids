import { MapPin, Phone, Mail } from 'lucide-react'
import { Container } from '../ui/Container'

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const navColumns = [
  {
    title: 'Navegação',
    links: [
      { href: '#hero', label: 'Início' },
      { href: '#structure', label: 'Estrutura' },
      { href: '#events', label: 'Tipos de Evento' },
      { href: '#menus', label: 'Cardápios' },
      { href: '#location', label: 'Localização' },
    ],
  },
  {
    title: 'Eventos',
    links: [
      { href: '#events', label: 'Casamentos' },
      { href: '#events', label: 'Festas Infantis' },
      { href: '#events', label: '15 Anos & Adulto' },
      { href: '#events', label: 'Corporativos' },
      { href: '#events', label: 'Formaturas' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-brand-royal-dark text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-tropical.png"
                alt="Tropical Park Kids"
                className="h-14 w-14 rounded-full object-cover shadow-lg"
                width={56}
                height={56}
                loading="lazy"
              />
              <span className="font-display font-bold text-lg leading-tight">
                Tropical Park <span className="text-brand-gold">Kids</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Chácara exclusiva para eventos inesquecíveis em Catanduva e região.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/10 hover:bg-brand-gold hover:text-ink transition"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white/10 hover:bg-brand-gold hover:text-ink transition"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {navColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display font-bold text-white mb-4 text-base">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-brand-gold text-sm transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display font-bold text-white mb-4 text-base">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-gold" />
                <span>Região de Catanduva — SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-brand-gold" />
                <a href="https://wa.me/5517999999999" className="hover:text-brand-gold">
                  Concierge Digital 24h
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-brand-gold" />
                <a href="mailto:contato@tropicalparkkids.com" className="hover:text-brand-gold">
                  contato@tropicalparkkids.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-white/60">
          Copyright © 2026 Tropical Park Kids. Todos os direitos reservados.
          {' '}Desenvolvido por{' '}
          <a
            href="#"
            className="text-brand-gold hover:underline"
          >
            Fast Development
          </a>
          .
        </div>
      </Container>
    </footer>
  )
}
