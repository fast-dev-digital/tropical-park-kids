import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../ui/Container'
import { EditorialMark } from '../ui/EditorialMark'
import { Button } from '../ui/Button'
import { faq } from '../../data/faq'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)
  const reduced = usePrefersReducedMotion()

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="faq" className="section-padding bg-parchment relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <EditorialMark
            number="08"
            kicker="Antes de fechar"
            className="lg:col-span-7"
            title={
              <>
                O que famílias e noivos{' '}
                <em
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
                >
                  perguntam
                </em>{' '}
                primeiro.
              </>
            }
            lede="Respondemos com clareza para que sua decisão seja baseada em experiência, não em dúvida."
          />

          <aside className="lg:col-span-4 lg:col-start-9 lg:pt-4">
            <p
              className="font-display italic text-ink-soft text-lg leading-relaxed"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
            >
              Não vamos falar de preço aqui — disso a gente conversa pelo
              WhatsApp, com a sua data e o número de convidados na mesa.
            </p>
          </aside>
        </div>

        <ul className="mt-20 md:mt-28 max-w-narrow mx-auto">
          {faq.map((item, i) => {
            const isOpen = openId === item.id
            const num = String(i + 1).padStart(2, '0')
            return (
              <li
                key={item.id}
                className="border-t border-ink/15 last:border-b last:border-ink/15"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  className="w-full grid grid-cols-12 gap-4 items-baseline py-7 md:py-8 text-left transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment focus-visible:ring-forest"
                >
                  <span
                    className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted self-start pt-2"
                    style={{ fontFeatureSettings: '"tnum"' }}
                  >
                    {num}
                  </span>
                  <span
                    className="col-span-9 md:col-span-10 font-display font-light text-xl md:text-2xl leading-[1.2] tracking-[-0.012em] text-ink"
                    style={{ fontVariationSettings: '"opsz" 48, "SOFT" 30' }}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`col-span-1 self-start pt-2 font-mono text-2xl leading-none text-forest transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${item.id}`}
                      key="panel"
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={
                        reduced ? undefined : { height: 'auto', opacity: 1 }
                      }
                      exit={reduced ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-12 gap-4 pb-8 md:pb-10">
                        <div className="col-span-2 md:col-span-1" aria-hidden="true" />
                        <p className="col-span-10 md:col-span-10 text-ink-soft text-base md:text-lg leading-relaxed max-w-prose">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>

        <div className="mt-20 text-center max-w-narrow mx-auto">
          <p
            className="font-display italic text-forest text-2xl md:text-3xl leading-snug"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
          >
            Ficou alguma dúvida?
          </p>
          <p className="mt-3 text-ink-soft">
            Mande uma mensagem. Respondemos pessoalmente, em horário comercial.
          </p>
          <div className="mt-8">
            <Button
              as="a"
              href={buildWhatsAppUrl('faq')}
              target="_blank"
              rel="noopener noreferrer"
              variant="solid"
              size="lg"
            >
              <span>Falar com o concierge</span>
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
