import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { popIn, revealFrom } from '../../lib/motion'
import { opcionais } from '../../data/opcionais'
import { buildWhatsAppUrlFromText } from '../../lib/whatsapp'

// Chips de "opcionais" — cada um abre o WhatsApp com uma pergunta específica.
// Não detalhamos nada aqui: o ponto é justamente forçar o lead a chamar pra saber.
export function Opcionais() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="opcionais" className="section-pad bg-cream relative overflow-hidden">
      <Container>
        <motion.div className="max-w-2xl mb-8 md:mb-10" {...revealFrom(reduced, 'left')}>
          <span className="inline-block font-display text-xs tracking-[0.22em] uppercase text-grape font-semibold">
            Para incrementar
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-ink mt-4 leading-[1.02]">
            Opcionais.
          </h2>
          <p className="mt-3 text-ink-soft text-base font-light max-w-md">
            Toque em qualquer um para perguntar.
          </p>
        </motion.div>

        <ul className="flex flex-wrap gap-2 md:gap-3">
          {opcionais.map((o, i) => (
            <motion.li key={o.id} {...popIn(reduced, i * 0.03)}>
              <a
                href={buildWhatsAppUrlFromText(o.question)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-cream-deep hover:bg-sun text-ink px-4 py-2.5 md:px-5 md:py-3 text-sm md:text-base font-display font-semibold border border-ink/8 hover:border-ink/0 transition-all hover:-translate-y-0.5 shadow-soft"
                aria-label={`Perguntar sobre ${o.label} no WhatsApp`}
              >
                <span>{o.label}</span>
                <span
                  aria-hidden="true"
                  className="text-ink-mute group-hover:text-ink transition-colors"
                >
                  →
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
