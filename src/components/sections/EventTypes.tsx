import { motion } from 'framer-motion'
import { BriefcaseBusiness, GraduationCap, Heart, Sparkles } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { eventTypes } from '../../data/eventTypes'
import { popIn, revealFrom } from '../../lib/motion'

const accentMap: Record<string, { bg: string; text: string }> = {
  coral: { bg: 'bg-coral', text: 'text-cream' },
  sun: { bg: 'bg-sun', text: 'text-ink' },
  grass: { bg: 'bg-grass', text: 'text-cream' },
  sky: { bg: 'bg-sky', text: 'text-cream' },
  grape: { bg: 'bg-grape', text: 'text-cream' },
}

const eventIcons = {
  quinze: Sparkles,
  casamento: Heart,
  formatura: GraduationCap,
  corporativo: BriefcaseBusiness,
}

export function EventTypes() {
  const reduced = usePrefersReducedMotion()
  const featured = eventTypes.find((e) => e.highlight)!
  const rest = eventTypes.filter((e) => !e.highlight)

  return (
    <section id="events" className="section-pad bg-cream relative overflow-hidden">
      <Container>
        <motion.div className="max-w-2xl mb-12" {...revealFrom(reduced, 'left')}>
          <span className="pill-grass">Pra cada motivo</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink mt-4 leading-[1.05]">
            A chácara que se transforma <em className="not-italic text-coral">com você</em>.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Festa infantil é o nosso forte — mas a chácara recebe muito mais que isso.
          </p>
        </motion.div>

        {/* Festa Infantil em destaque */}
        <motion.article
          {...revealFrom(reduced, 'up')}
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
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {rest.map((e, i) => {
            const accent = accentMap[e.accent]
            const Icon = eventIcons[e.id as keyof typeof eventIcons]
            return (
              <motion.li
                key={e.id}
                {...popIn(reduced, i * 0.07)}
                className="group relative overflow-hidden rounded-3xl bg-cream-deep p-6 shadow-soft transition-transform hover:-translate-y-1"
              >
                <div
                  className={`mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl ${accent.bg} ${accent.text} shadow-soft`}
                  aria-hidden="true"
                >
                  <Icon size={28} strokeWidth={2.2} />
                </div>
                <span
                  className={`inline-flex w-fit items-center rounded-full ${accent.bg} ${accent.text} px-3 py-1 text-xs font-bold mb-3`}
                >
                  {e.name}
                </span>
                <p className="font-display font-bold text-xl text-ink leading-tight">{e.hook}</p>
                <p className="mt-2 text-ink-soft text-sm leading-relaxed">{e.body}</p>
              </motion.li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
