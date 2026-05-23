import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionTitle } from '../ui/SectionTitle'
import { Button } from '../ui/Button'
import { faq } from '../../data/faq'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faq[0]?.id ?? null)
  const reduced = usePrefersReducedMotion()

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="faq" className="section-padding bg-white">
      <Container>
        <SectionTitle
          eyebrow="Perguntas frequentes"
          title="O que famílias e noivos perguntam antes de fechar"
          subtitle="Respondemos com clareza para que sua decisão seja baseada em experiência, não em dúvida."
        />

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-3">
            {faq.map((item) => {
              const isOpen = openId === item.id
              return (
                <li
                  key={item.id}
                  className={`rounded-2xl border transition-colors ${
                    isOpen
                      ? 'border-brand-gold/60 bg-brand-gold/5'
                      : 'border-slate-200 bg-white hover:border-brand-green/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/40 rounded-2xl"
                  >
                    <span className="font-display font-bold text-base md:text-lg text-brand-royal leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={22}
                      className={`shrink-0 text-brand-green transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    />
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
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 text-ink-muted leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>

          <div className="mt-12 text-center">
            <p className="text-ink-muted mb-5">
              Ainda restou alguma dúvida? Fale com o Concierge Digital.
            </p>
            <Button
              as="a"
              href={buildWhatsAppUrl('faq')}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              pulse
            >
              <MessageCircle size={20} />
              Solicitar orçamento personalizado
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
