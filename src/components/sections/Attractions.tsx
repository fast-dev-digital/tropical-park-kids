import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { attractions } from '../../data/attractions'
import { popIn, revealFrom } from '../../lib/motion'

const accentBg: Record<string, string> = {
  coral: 'bg-coral',
  sun: 'bg-sun',
  grass: 'bg-grass',
  sky: 'bg-sky',
  grape: 'bg-grape',
}
const accentText: Record<string, string> = {
  coral: 'text-cream',
  sun: 'text-ink',
  grass: 'text-cream',
  sky: 'text-cream',
  grape: 'text-cream',
}

export function Attractions() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="attractions" className="section-pad bg-cream-deep relative overflow-hidden">
      <Container>
        <motion.div className="max-w-2xl mb-14" {...revealFrom(reduced, 'left')}>
          <span className="pill-sun">As atrações</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-ink mt-4 leading-[1.04]">
            Diversão que a gente <span className="text-coral">só tem aqui</span>.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Brinquedos e atrações que viraram a marca da Tropical Park. Cada festa tem
            tudo isso incluso — sem cobrar extra.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {attractions.map((a, i) => (
            <motion.article
              key={a.id}
              {...popIn(reduced, i * 0.08)}
              className="group relative overflow-hidden rounded-3xl bg-ink shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden">
                {a.media.type === 'video' ? (
                  <video
                    src={a.media.src}
                    poster={a.media.poster}
                    autoPlay={!reduced}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    aria-label={a.media.alt}
                  />
                ) : (
                  <img
                    src={a.media.src}
                    alt={a.media.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              </div>

              <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-end">
                <span
                  className={`inline-flex w-fit items-center rounded-full ${accentBg[a.accentColor]} ${accentText[a.accentColor]} px-3 py-1 text-xs font-bold uppercase tracking-wide mb-3`}
                >
                  {a.tagline}
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-cream leading-tight">
                  {a.name}
                </h3>
                <p className="mt-2 text-cream/90 text-sm md:text-base leading-relaxed max-w-md">
                  {a.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          {...revealFrom(reduced, 'up', 0.12)}
        >
          <Button
            as="a"
            href={buildWhatsAppUrl('attractions')}
            target="_blank"
            rel="noopener noreferrer"
            variant="sun"
            size="lg"
          >
            <span>Quero essa festa aqui</span>
            <span aria-hidden="true" className="text-xl">→</span>
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
