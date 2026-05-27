import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { eventTypes } from '../../data/eventTypes'

const accentMap: Record<string, { bg: string; text: string }> = {
  coral: { bg: 'bg-coral', text: 'text-cream' },
  sun: { bg: 'bg-sun', text: 'text-ink' },
  grass: { bg: 'bg-grass', text: 'text-cream' },
  sky: { bg: 'bg-sky', text: 'text-cream' },
  grape: { bg: 'bg-grape', text: 'text-cream' },
}

export function EventTypes() {
  const reduced = usePrefersReducedMotion()
  const featured = eventTypes.find((e) => e.highlight)!
  const rest = eventTypes.filter((e) => !e.highlight)

  return (
    <section id="events" className="section-pad bg-cream relative overflow-hidden">
      <Container>
        <div className="max-w-2xl mb-12">
          <span className="pill-grass">Pra cada motivo</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink mt-4 leading-[1.05]">
            A chácara que se transforma <em className="not-italic text-coral">com você</em>.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Festa infantil é o nosso forte — mas a chácara recebe muito mais que isso.
          </p>
        </div>

        {/* Festa Infantil em destaque */}
        <motion.article
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-0 rounded-4xl overflow-hidden bg-coral shadow-coral mb-6"
        >
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
            <img
              src={featured.media.src}
              alt={featured.media.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 p-8 md:p-10 lg:p-12 text-cream flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sun text-ink px-4 py-1.5 text-sm font-bold mb-4">
              <span className="h-2 w-2 rounded-full bg-coral" />
              Nosso forte
            </span>
            <h3 className="font-display font-bold text-3xl md:text-4xl leading-tight">
              {featured.name}
            </h3>
            <p className="mt-2 font-display text-xl text-cream/95 italic">{featured.hook}</p>
            <p className="mt-4 text-cream/95 leading-relaxed">{featured.body}</p>
            <div className="mt-7">
              <Button
                as="a"
                href={buildWhatsAppUrl('events')}
                target="_blank"
                rel="noopener noreferrer"
                variant="sun"
                size="md"
              >
                <span>Quero festa infantil</span>
                <span aria-hidden="true" className="text-xl">→</span>
              </Button>
            </div>
          </div>
        </motion.article>

        {/* Resto em grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {rest.map((e, i) => {
            const accent = accentMap[e.accent]
            return (
              <motion.li
                key={e.id}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: reduced ? 0 : i * 0.06 }}
                className="group relative overflow-hidden rounded-3xl bg-ink shadow-soft"
              >
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={e.media.src}
                    alt={e.media.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                </div>
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span
                    className={`inline-flex w-fit items-center rounded-full ${accent.bg} ${accent.text} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2`}
                  >
                    {e.name}
                  </span>
                  <p className="font-display font-bold text-xl text-cream leading-tight">{e.hook}</p>
                  <p className="mt-1 text-cream/85 text-sm">{e.body}</p>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
