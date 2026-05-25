import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { EditorialMark } from '../ui/EditorialMark'
import { MediaFrame } from '../ui/MediaFrame'
import { eventTypes } from '../../data/eventTypes'
import { eventTypeMedia } from '../../data/media'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function EventTypes() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="events" className="section-padding bg-parchment relative">
      <Container>
        <EditorialMark
          number="04"
          kicker="Tipos de evento"
          title={
            <>
              Para cada celebração,{' '}
              <em
                className="italic"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
              >
                a mesma exigência
              </em>
              .
            </>
          }
          lede="A chácara recebe da brincadeira infantil à cerimônia adulta — com a equipe ajustando o tom sem mudar o padrão."
        />

        <ol className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2">
          {eventTypes.map((evt, i) => {
            const num = String(i + 1).padStart(2, '0')
            const isFirstRow = i < 2
            const isFirstCol = i % 2 === 0
            const media = eventTypeMedia[evt.id as keyof typeof eventTypeMedia]
            return (
              <motion.li
                key={evt.id}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`
                  relative p-8 md:p-12 lg:p-14
                  ${isFirstRow ? 'border-t border-ink/15' : ''}
                  border-b border-ink/15
                  ${isFirstCol ? 'md:border-r md:border-ink/15' : ''}
                `}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-mono text-number uppercase text-ember"
                    style={{ fontFeatureSettings: '"tnum"' }}
                  >
                    {num}
                  </span>
                  <span className="kicker text-ink-muted">
                    {evt.id === 'casamento'
                      ? 'Cerimônia & recepção'
                      : evt.id === 'infantil'
                        ? 'Festa & recreação'
                        : evt.id === 'adulto'
                          ? 'Celebração adulta'
                          : 'Encontro corporativo'}
                  </span>
                </div>
                <h3
                  className="mt-6 font-display font-light text-forest text-4xl md:text-5xl leading-[1.02] tracking-[-0.018em]"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
                >
                  {evt.title}
                </h3>
                <p className="mt-5 text-ink-soft text-lg leading-relaxed max-w-prose">
                  {evt.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {evt.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted border-b border-ink/20 pb-1"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {media && (
                  <MediaFrame
                    asset={media}
                    priority={media.priority === 'star'}
                    showCaption={false}
                    className="mt-10 aspect-[4/5] md:aspect-[16/10]"
                  />
                )}
                {evt.supportMedia && evt.supportMedia.length > 0 && (
                  <div className="mt-3 flex gap-2 md:gap-3">
                    {evt.supportMedia.map((asset) => (
                      <div key={asset.id} className="flex-1 min-w-0">
                        <MediaFrame
                          asset={asset}
                          autoPlay={asset.type === 'video'}
                          showCaption={false}
                          className="aspect-square"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </motion.li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
