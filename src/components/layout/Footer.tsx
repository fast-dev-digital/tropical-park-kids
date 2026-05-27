import { Container } from '../ui/Container'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

export function Footer() {
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
                  Buffet infantil em chácara
                </p>
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed max-w-xs">
              A festa do seu filho do jeitinho que ele sonhou — em uma chácara
              de verdade, em Catanduva.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-sun text-sm uppercase tracking-wider mb-4">
              Vem ver
            </h3>
            <ul className="space-y-2">
              <FooterLink href="#attractions">Atrações</FooterLink>
              <FooterLink href="#gallery">Galeria</FooterLink>
              <FooterLink href="#events">Tipos de festa</FooterLink>
              <FooterLink href="#menus">Cardápios</FooterLink>
              <FooterLink href="#location">Onde estamos</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sun text-sm uppercase tracking-wider mb-4">
              Fala com a gente
            </h3>
            <a
              href={buildWhatsAppUrl('hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sun text-ink font-bold text-sm px-5 py-2.5 rounded-full hover:bg-sun-deep transition-colors"
            >
              <span>Fazer orçamento</span>
              <span aria-hidden="true">→</span>
            </a>
            <p className="mt-4 text-cream/70 text-sm">
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
