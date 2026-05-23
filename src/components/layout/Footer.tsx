import { Container } from '../ui/Container'

// TODO: substituir pelos perfis reais do cliente antes do launch.
const SOCIAL = {
  instagram: 'https://instagram.com/tropicalparkkids',
  facebook: 'https://facebook.com/tropicalparkkids',
}

// TODO: confirmar e-mail e WhatsApp oficiais antes do launch.
const CONTACT = {
  whatsappHref: 'https://wa.me/5517999999999',
  whatsappLabel: '(17) 9 9999-9999',
  email: 'contato@tropicalparkkids.com.br',
}

const colophon = [
  { num: '01', href: '#hero', label: 'Início' },
  { num: '02', href: '#attractions', label: 'Atrações exclusivas' },
  { num: '03', href: '#differentials', label: 'Diferenciais' },
  { num: '04', href: '#structure', label: 'A chácara' },
  { num: '05', href: '#events', label: 'Tipos de evento' },
  { num: '06', href: '#menus', label: 'Cozinha' },
  { num: '07', href: '#faq', label: 'Dúvidas' },
  { num: '08', href: '#location', label: 'Visitar' },
]

export function Footer() {
  return (
    <footer className="bg-forest text-parchment">
      <Container className="pt-24 pb-12 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 text-parchment/70">
              <span
                className="font-mono text-number uppercase"
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                Capítulo final
              </span>
              <span className="h-px w-12 bg-parchment/40" aria-hidden="true" />
            </div>
            <p
              className="mt-8 font-display font-light text-3xl md:text-4xl leading-[1.08] text-parchment"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
            >
              Sua data é um dia.{' '}
              <em
                className="italic"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
              >
                A lembrança
              </em>{' '}
              que sai daqui dura uma vida.
            </p>

            <div className="mt-10 flex flex-col gap-4 text-parchment/80">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-3 hover:text-parchment transition-colors"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-parchment/55">
                  WhatsApp
                </span>
                <span
                  className="font-display text-2xl font-light"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 40' }}
                >
                  {CONTACT.whatsappLabel}
                </span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group inline-flex items-baseline gap-3 hover:text-parchment transition-colors"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-parchment/55">
                  E-mail
                </span>
                <span className="font-body text-base">{CONTACT.email}</span>
              </a>
              <p className="inline-flex items-baseline gap-3 text-parchment/80">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-parchment/55">
                  Endereço
                </span>
                <span className="font-body text-base">
                  Região rural — Catanduva, SP
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-8">
            <div className="flex items-center gap-4 text-parchment/55">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.22em]"
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                Sumário
              </span>
              <span className="h-px flex-1 bg-parchment/25" aria-hidden="true" />
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3">
              {colophon.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="group inline-flex items-baseline gap-2 text-parchment/80 hover:text-parchment transition-colors"
                  >
                    <span
                      className="font-mono text-[10px] tracking-[0.18em] text-parchment/45"
                      style={{ fontFeatureSettings: '"tnum"' }}
                    >
                      {c.num}
                    </span>
                    <span className="font-body text-[15px]">{c.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-5 text-parchment/70">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-parchment transition"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] border-b border-parchment/40 pb-0.5">
                  Instagram
                </span>
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-parchment transition"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] border-b border-parchment/40 pb-0.5">
                  Facebook
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-parchment/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-parchment/55 font-mono">
          <span>© 2026 Tropical Park Kids · Todos os direitos reservados</span>
          <span>
            Desenvolvido por{' '}
            <a href="#" className="text-parchment border-b border-parchment/40 hover:border-parchment pb-0.5 transition-colors">
              Fast Development
            </a>
          </span>
        </div>
      </Container>
    </footer>
  )
}
