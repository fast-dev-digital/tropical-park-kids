import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { menus, MENUS_DISCLAIMER } from '../../data/menus'

export function Menus() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="menus" className="section-pad bg-cream-deep relative overflow-hidden">
      <Container>
        <div className="max-w-2xl mb-12">
          <span className="pill-sun">Na mesa</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink mt-4 leading-[1.05]">
            Cinco cardápios pra você escolher.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Da festa infantil ao jantar adulto. Cada um pode ser adaptado com restrições
            alimentares — basta avisar.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {menus.map((m, i) => (
            <motion.li
              key={m.id}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: reduced ? 0 : i * 0.07 }}
              className="bg-cream rounded-3xl overflow-hidden shadow-soft hover:-translate-y-1 transition-transform"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={m.media.src}
                  alt={m.media.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-2xl text-ink leading-tight">{m.name}</h3>
                <p className="mt-2 text-ink-soft text-sm leading-relaxed">{m.pitch}</p>
                <ul className="mt-4 space-y-1.5">
                  {m.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-ink-soft">
                      <span aria-hidden="true" className="text-coral mt-0.5">●</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Disclaimer obrigatório §7 CLAUDE.md */}
        <div className="mt-12 mx-auto max-w-3xl bg-cream rounded-3xl p-6 md:p-8 border-2 border-sun text-center">
          <p className="font-display font-semibold text-lg md:text-xl text-ink leading-relaxed">
            {MENUS_DISCLAIMER}
          </p>
          <div className="mt-5">
            <Button
              as="a"
              href={buildWhatsAppUrl('menus')}
              target="_blank"
              rel="noopener noreferrer"
              variant="sun"
              size="lg"
            >
              <span>Receber meu orçamento</span>
              <span aria-hidden="true" className="text-xl">→</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
