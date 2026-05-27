import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../ui/Container'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { faq } from '../../data/faq'

export function FAQ() {
  const reduced = usePrefersReducedMotion()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad bg-cream relative overflow-hidden">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="pill-grass">Tira sua dúvida</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink mt-4 leading-[1.05]">
            Antes de fechar, é normal querer saber.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            As perguntas que mais ouvimos das mães e responsáveis.
          </p>
        </div>

        <ul className="max-w-3xl mx-auto space-y-3">
          {faq.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <li
                key={item.q}
                className={`bg-cream-deep rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? 'ring-2 ring-coral' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}-panel`}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left font-display font-bold text-ink text-base md:text-lg hover:bg-cream-dark/40 transition-colors"
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 inline-grid place-items-center h-8 w-8 rounded-full text-xl font-bold transition-all ${
                      isOpen ? 'bg-coral text-cream rotate-45' : 'bg-cream text-ink'
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}-panel`}
                      key="panel"
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={reduced ? undefined : { height: 'auto', opacity: 1 }}
                      exit={reduced ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.2, 0.65, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-ink-soft leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
