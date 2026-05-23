import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { EditorialMark } from '../ui/EditorialMark'
import { Lightbox } from '../ui/Lightbox'
import { gallery } from '../../data/gallery'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function Structure() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const reduced = usePrefersReducedMotion()

  const open = (i: number) => setActiveIndex(i)
  const close = () => setActiveIndex(null)
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length))
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length))

  // Layout editorial: imagens em ritmos diferentes ao invés de grid uniforme.
  // Cada item tem um "peso" visual definido pela coluna que ocupa.
  const layout = [
    { item: gallery[0], cols: 'lg:col-span-8', aspect: 'aspect-[4/3]' },
    { item: gallery[1], cols: 'lg:col-span-4', aspect: 'aspect-[3/4]' },
    { item: gallery[2], cols: 'lg:col-span-5', aspect: 'aspect-[4/5]' },
    { item: gallery[3], cols: 'lg:col-span-7', aspect: 'aspect-[16/10]' },
    { item: gallery[4], cols: 'lg:col-span-12', aspect: 'aspect-[21/9]' },
    { item: gallery[5], cols: 'lg:col-span-4', aspect: 'aspect-[3/4]' },
    { item: gallery[6], cols: 'lg:col-span-4', aspect: 'aspect-[1/1]' },
    { item: gallery[7], cols: 'lg:col-span-4', aspect: 'aspect-[4/5]' },
  ].filter((x) => !!x.item)

  return (
    <section id="structure" className="section-padding bg-parchment-deep relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <EditorialMark
            number="03"
            kicker="A chácara"
            className="lg:col-span-7"
            title={
              <>
                Não é um galpão adaptado.{' '}
                <em
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
                >
                  É uma chácara
                </em>{' '}
                construída pra receber.
              </>
            }
            lede="Salão coberto, gramado aberto, brinquedos de grande porte, banheiros de alto padrão e cada uma das árvores no lugar certo. Ande pelo terreno."
          />

          <aside className="lg:col-span-4 lg:col-start-9 lg:pt-4">
            <div className="flex items-center gap-4 text-ink-muted mb-4">
              <span
                className="font-mono text-number uppercase"
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                Plates 01—08
              </span>
              <span className="h-px flex-1 bg-ink/20" aria-hidden="true" />
            </div>
            <p className="text-ink-soft italic font-display text-lg leading-relaxed">
              Toque uma foto para abrir em tela cheia. As setas do teclado
              navegam pela galeria.
            </p>
          </aside>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4">
          {layout.map((entry, i) => {
            const realIndex = gallery.findIndex((g) => g.id === entry.item!.id)
            const num = String(realIndex + 1).padStart(2, '0')
            return (
              <motion.button
                key={entry.item!.id}
                type="button"
                onClick={() => open(realIndex)}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
                className={`group relative overflow-hidden bg-forest/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment-deep focus-visible:ring-forest col-span-2 ${entry.cols} ${entry.aspect}`}
                aria-label={`Ampliar: ${entry.item!.alt}`}
              >
                <img
                  src={entry.item!.thumb}
                  alt={entry.item!.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                <span
                  className="absolute inset-0 bg-forest/0 group-hover:bg-forest/30 transition-colors duration-500"
                  aria-hidden="true"
                />
                <span className="absolute bottom-3 left-3 right-3 flex items-baseline gap-3 text-parchment opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.22em] text-parchment/80"
                    style={{ fontFeatureSettings: '"tnum"' }}
                  >
                    {num}
                  </span>
                  <span className="font-display italic text-sm md:text-base leading-tight text-parchment">
                    {entry.item!.alt}
                  </span>
                </span>
              </motion.button>
            )
          })}
        </div>
      </Container>

      {activeIndex !== null && (
        <Lightbox
          images={gallery}
          index={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
