import { Container } from '../ui/Container'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

// `linkBase` resolve as âncoras de seção fora da LP (ver Header). Vazio na LP,
// '/' na galeria — para que '#location' vire '/#location' e volte à home.
type Props = { linkBase?: string }

export function Footer({ linkBase = '' }: Props) {
  const resolveHref = (href: string) =>
    href.startsWith('#') ? `${linkBase}${href}` : href
  return (
    <footer className="bg-ink text-cream pt-16 pb-8" id="footer">
      <Container>
        <div className="grid gap-10 md:grid-cols-3 md:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-tropical.png"
                alt=""
                aria-hidden="true"
                className="h-12 w-12 rounded-2xl"
                width={48}
                height={48}
              />
              <div>
                <p className="font-display font-bold text-xl">
                  Tropical Park <span className="text-coral">Kids</span>
                </p>
                <p className="text-cream/70 text-sm font-semibold">
                  Complexo de Eventos
                </p>
              </div>
            </div>
            <p className="text-cream/75 text-sm leading-relaxed max-w-xs font-light">
              Estrutura premium, atrações exclusivas e gastronomia farta — em
              Catanduva.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-sun text-xs uppercase tracking-[0.22em] mb-4">
              Navegar
            </h3>
            <ul className="space-y-2">
              <FooterLink href={resolveHref('#atracoes')}>Atrações</FooterLink>
              <FooterLink href={resolveHref('#gastronomia')}>Gastronomia</FooterLink>
              <FooterLink href={resolveHref('#events')}>Tipos de festa</FooterLink>
              <FooterLink href={resolveHref('#opcionais')}>Opcionais</FooterLink>
              <FooterLink href="/galeria">Galeria</FooterLink>
              <FooterLink href={resolveHref('#location')}>Onde estamos</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sun text-xs uppercase tracking-[0.22em] mb-4">
              Contato
            </h3>
            <a
              href={buildWhatsAppUrl('header')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sun text-ink font-bold text-sm px-5 py-2.5 rounded-full hover:bg-sun-deep transition-colors"
            >
              <span>Agendar visita</span>
              <span aria-hidden="true">→</span>
            </a>
            <p className="mt-4 text-cream/65 text-sm font-light">
              Catanduva · SP
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/15 text-cream/60 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Tropical Park Kids · Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-cream/85 hover:text-sun font-semibold text-sm transition-colors"
      >
        {children}
      </a>
    </li>
  )
}
