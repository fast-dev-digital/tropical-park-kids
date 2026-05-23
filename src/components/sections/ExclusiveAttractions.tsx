import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { EditorialMark } from '../ui/EditorialMark'
import { Button } from '../ui/Button'
import { attractions } from '../../data/attractions'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function ExclusiveAttractions() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="attractions" className="section-padding bg-parchment relative">
      <Container>
        <EditorialMark
          number="01"
          kicker="Atrações exclusivas"
          title={
            <>
              O que as crianças{' '}
              <em
                className="italic"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
              >
                vão contar
              </em>{' '}
              na escola na segunda-feira.
            </>
          }
          lede="Duas experiências mecânicas que só existem aqui na região de Catanduva. Não é decoração, não é cenário — é atração de verdade que para a festa e faz todo mundo embarcar."
        />

        <div className="mt-20 md:mt-28 space-y-32 md:space-y-40">
          {attractions.map((a, i) => {
            const reverse = i % 2 === 1
            const num = String(i + 1).padStart(2, '0')
            return (
              <motion.article
                key={a.id}
                initial={reduced ? false : { opacity: 0, y: 32 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div
                  className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}
                >
                  <figure className="relative overflow-hidden bg-forest/5">
                    {/* TODO: ASSET REAL DO CLIENTE — foto/vídeo curto da atração */}
                    <img
                      src={a.image}
                      alt={a.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[4/5] md:aspect-[5/6] object-cover"
                    />
                    <figcaption className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 text-parchment font-mono text-[10px] uppercase tracking-[0.22em] flex items-center gap-3">
                      <span style={{ fontFeatureSettings: '"tnum"' }}>
                        Plate {num}
                      </span>
                      <span className="h-px w-10 bg-parchment/60" aria-hidden="true" />
                      <span className="italic font-display normal-case tracking-normal text-sm text-parchment/90">
                        {a.tagline}
                      </span>
                    </figcaption>
                  </figure>
                </div>

                <div
                  className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="font-mono text-number uppercase text-ember"
                      style={{ fontFeatureSettings: '"tnum"' }}
                    >
                      {num}
                    </span>
                    <span
                      className="h-px w-10 bg-ink/25"
                      aria-hidden="true"
                    />
                    <span className="kicker text-ember">{a.badge}</span>
                  </div>

                  <h3
                    className="mt-6 font-display font-light text-forest text-4xl md:text-5xl leading-[1.02] tracking-[-0.018em]"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
                  >
                    {a.title.split(' ').map((word, idx, arr) =>
                      idx === arr.length - 1 ? (
                        <em
                          key={idx}
                          className="italic"
                          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
                        >
                          {word}
                        </em>
                      ) : (
                        <span key={idx}>{word} </span>
                      ),
                    )}
                  </h3>

                  <p className="mt-6 text-ink-soft text-lg leading-relaxed">
                    {a.description}
                  </p>

                  <ul className="mt-8 space-y-3.5 border-t border-ink/15">
                    {a.highlights.map((h, idx) => (
                      <li
                        key={h}
                        className="flex items-baseline gap-4 pt-3.5 border-b border-ink/10 pb-3.5"
                      >
                        <span
                          className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint min-w-[2ch]"
                          style={{ fontFeatureSettings: '"tnum"' }}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="font-body text-ink">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-24 md:mt-32 pt-12 border-t border-ink/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p
            className="font-display italic text-2xl md:text-3xl text-forest max-w-narrow leading-snug"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
          >
            "Esses detalhes não estão no orçamento de outros buffets."
          </p>
          <Button
            as="a"
            href={buildWhatsAppUrl('attractions')}
            target="_blank"
            rel="noopener noreferrer"
            variant="solid"
            size="md"
          >
            <span>Quero essa experiência</span>
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
