import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, PlayCircle } from 'lucide-react'
import { Container } from '../ui/Container'
import { EditorialMark } from '../ui/EditorialMark'
import { Lightbox } from '../ui/Lightbox'
import { gallery } from '../../data/gallery'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function Structure() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const reduced = usePrefersReducedMotion()

  const selected = gallery[selectedIndex]
  const selectedNumber = String(selectedIndex + 1).padStart(2, '0')
  const total = String(gallery.length).padStart(2, '0')

  const showPrev = () => setSelectedIndex((i) => (i - 1 + gallery.length) % gallery.length)
  const showNext = () => setSelectedIndex((i) => (i + 1) % gallery.length)
  const open = (i: number) => setLightboxIndex(i)
  const close = () => setLightboxIndex(null)
  const prev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length))
  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % gallery.length))

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
                Plates 01—{String(gallery.length).padStart(2, '0')}
              </span>
              <span className="h-px flex-1 bg-ink/20" aria-hidden="true" />
            </div>
            <p className="text-ink-soft italic font-display text-lg leading-relaxed">
              O acervo inteiro continua aqui, mas em ritmo de revista: uma
              plate por vez, miniaturas abaixo e tela cheia quando a imagem
              pedir pausa.
            </p>
          </aside>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 1] }}
          className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch"
        >
          <div className="lg:col-span-8">
            <button
              type="button"
              onClick={() => open(selectedIndex)}
              className="group relative block h-full w-full overflow-hidden bg-forest/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment-deep focus-visible:ring-forest"
              aria-label={`Abrir em tela cheia: ${selected.alt}`}
            >
              <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[16/10]">
                {selected.type === 'video' ? (
                  <video
                    key={selected.id}
                    src={selected.src}
                    poster={selected.poster}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: selected.objectPosition ?? 'center' }}
                    autoPlay={!reduced}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={selected.alt}
                  />
                ) : (
                  <img
                    src={selected.src}
                    alt={selected.alt}
                    loading={selectedIndex === 0 ? 'eager' : 'lazy'}
                    decoding={selectedIndex === 0 ? 'sync' : 'async'}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.02]"
                    style={{ objectPosition: selected.objectPosition ?? 'center' }}
                  />
                )}
                <span
                  className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent"
                  aria-hidden="true"
                />
                {selected.type === 'video' && (
                  <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-parchment/90 text-forest shadow-plate">
                    <PlayCircle size={24} aria-hidden="true" />
                  </span>
                )}
                <span className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center bg-parchment/90 text-forest opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 size={21} aria-hidden="true" />
                </span>
                <span className="absolute bottom-5 left-5 right-5 flex items-baseline gap-4 text-parchment">
                  <span
                    className="font-mono text-number uppercase text-parchment/75"
                    style={{ fontFeatureSettings: '"tnum"' }}
                  >
                    Plate {selectedNumber}/{total}
                  </span>
                  <span className="h-px w-10 bg-parchment/50" aria-hidden="true" />
                  <span className="font-display italic text-xl md:text-2xl leading-tight">
                    {selected.caption}
                  </span>
                </span>
              </div>
            </button>
          </div>

          <aside className="lg:col-span-4 border-t border-ink/15 lg:border-t-0 lg:border-l lg:border-ink/15 lg:pl-8 pt-6 lg:pt-0 flex flex-col justify-between gap-8">
            <div>
              <p
                className="font-mono text-number uppercase text-ember"
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                {selectedNumber} — {selected.type === 'video' ? 'Vídeo' : 'Foto'}
              </p>
              <h3
                className="mt-5 font-display font-light text-forest text-3xl md:text-4xl leading-[1.05] tracking-[-0.018em]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                {selected.caption}
              </h3>
              <p className="mt-5 text-ink-soft text-lg leading-relaxed">
                {selected.alt}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={showPrev}
                aria-label="Mídia anterior"
                className="inline-flex h-12 w-12 items-center justify-center border border-forest/30 text-forest transition-colors hover:bg-forest hover:text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Próxima mídia"
                className="inline-flex h-12 w-12 items-center justify-center border border-forest/30 text-forest transition-colors hover:bg-forest hover:text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => open(selectedIndex)}
                className="ml-auto inline-flex items-center gap-3 border-b border-forest/40 pb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-forest transition-colors hover:border-forest"
              >
                <span>Tela cheia</span>
                <Maximize2 size={16} aria-hidden="true" />
              </button>
            </div>
          </aside>
        </motion.div>

        <div className="mt-5 md:mt-6 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 overflow-x-auto">
          <div className="flex gap-3 pb-3 lg:grid lg:grid-cols-12 lg:gap-3 lg:pb-0">
            {gallery.map((item, i) => {
              const preview = item.type === 'video' ? item.poster! : item.src
              const selectedThumb = i === selectedIndex
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedIndex(i)}
                  aria-label={`Selecionar plate ${String(i + 1).padStart(2, '0')}: ${item.caption}`}
                  aria-current={selectedThumb ? 'true' : undefined}
                  className={`relative h-24 w-20 shrink-0 overflow-hidden bg-forest/10 lg:col-span-1 lg:h-20 lg:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                    selectedThumb ? 'ring-2 ring-forest ring-offset-2 ring-offset-parchment-deep' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={preview}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: item.objectPosition ?? 'center' }}
                  />
                  {item.type === 'video' && (
                    <span className="absolute inset-0 flex items-center justify-center text-parchment drop-shadow">
                      <PlayCircle size={20} aria-hidden="true" />
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </Container>

      {lightboxIndex !== null && (
        <Lightbox
          items={gallery}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
