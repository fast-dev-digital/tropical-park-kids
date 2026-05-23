import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { EditorialMark } from '../ui/EditorialMark'
import { Button } from '../ui/Button'
import { menus } from '../../data/menus'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function Menus() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="menus" className="section-padding bg-parchment-deep relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <EditorialMark
            number="05"
            kicker="Cozinha autoral"
            className="lg:col-span-7"
            title={
              <>
                Cinco caminhos.{' '}
                <em
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
                >
                  Uma cozinha
                </em>{' '}
                que serve por fartura.
              </>
            }
            lede="Pontos de partida — não jaulas. Cada cardápio é ajustado à proposta do evento, ao perfil dos convidados e a restrições alimentares específicas."
          />

          <aside className="lg:col-span-4 lg:col-start-9 lg:pt-4">
            <p
              className="text-ink-soft italic font-display text-lg leading-relaxed"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
            >
              "Consulte nosso Concierge Digital para obter o orçamento
              personalizado com base na data do seu evento e número de
              convidados."
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              — Política da casa
            </p>
          </aside>
        </div>

        <ol className="mt-20 md:mt-28">
          {menus.map((menu, i) => {
            const num = String(i + 1).padStart(2, '0')
            return (
              <motion.li
                key={menu.id}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (i % 5) * 0.06 }}
                className="grid grid-cols-12 gap-6 md:gap-10 items-baseline border-t border-ink/15 py-10 md:py-14 last:border-b last:border-ink/15"
              >
                <span
                  className="col-span-2 md:col-span-1 font-mono text-number uppercase text-ember self-start pt-3"
                  style={{ fontFeatureSettings: '"tnum"' }}
                >
                  {num}
                </span>

                <div className="col-span-10 md:col-span-5 lg:col-span-4">
                  <p className="kicker text-ink-muted">{menu.tagline}</p>
                  <h3
                    className="mt-3 font-display font-light text-forest text-3xl md:text-4xl leading-[1.05] tracking-[-0.018em]"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
                  >
                    {menu.name}
                  </h3>
                </div>

                <p className="col-span-12 md:col-span-6 lg:col-span-5 text-ink-soft text-base md:text-lg leading-relaxed">
                  {menu.description}
                </p>

                <ul className="col-span-12 lg:col-span-2 flex flex-col gap-1.5 text-ink-soft text-[13px] md:text-sm">
                  {menu.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-baseline gap-2 italic font-display leading-snug"
                      style={{ fontVariationSettings: '"opsz" 14, "SOFT" 70' }}
                    >
                      <span aria-hidden="true">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            )
          })}
        </ol>

        <div className="mt-16 md:mt-20 pt-10 border-t border-ink/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted max-w-md">
            Cardápio personalizável · Consultar disponibilidade da data antes
            de fechar
          </p>
          <Button
            as="a"
            href={buildWhatsAppUrl('menus')}
            target="_blank"
            rel="noopener noreferrer"
            variant="solid"
            size="md"
          >
            <span>Falar com o concierge</span>
            <ArrowMark />
          </Button>
        </div>
      </Container>
    </section>
  )
}

function ArrowMark() {
  return (
    <svg
      width="18"
      height="9"
      viewBox="0 0 18 9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M0 4.5 H16 M12 0.5 L16 4.5 L12 8.5" />
    </svg>
  )
}
