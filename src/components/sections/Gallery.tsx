import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Lightbox } from '../ui/Lightbox'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import {
  galleryFilters,
  filterGallery,
  type GalleryFilter,
} from '../../data/gallery'

export function Gallery() {
  const reduced = usePrefersReducedMotion()
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('tudo')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const items = useMemo(() => filterGallery(activeFilter), [activeFilter])

  return (
    <section id="gallery" className="section-pad bg-cream relative overflow-hidden">
      <Container>
        <div className="max-w-2xl mb-10">
          <span className="pill-sky">Pra você sentir o lugar</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink mt-4 leading-[1.05]">
            Cada festa vira <span className="text-coral">história</span>.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Fotos reais das festas que rolaram na chácara. Toca em qualquer uma pra ver maior.
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8 flex flex-wrap gap-2">
          {galleryFilters.map((f) => {
            const active = activeFilter === f.id
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  active
                    ? 'bg-coral text-cream shadow-coral'
                    : 'bg-cream-deep text-ink hover:bg-cream-dark/50'
                }`}
                aria-pressed={active}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {/* Grid masonry-style */}
        <motion.ul
          layout={!reduced}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {items.map((m, i) => (
            <motion.li
              key={m.id}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, scale: 0.92 }}
              animate={reduced ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: reduced ? 0 : Math.min(i * 0.02, 0.3) }}
              className={`relative overflow-hidden rounded-2xl bg-ink/5 group cursor-pointer ${
                m.orientation === 'portrait'
                  ? 'aspect-[3/4]'
                  : m.orientation === 'square'
                    ? 'aspect-square'
                    : 'aspect-[4/3]'
              }`}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`Abrir ${m.type === 'video' ? 'vídeo' : 'imagem'}: ${m.caption}`}
                className="absolute inset-0 w-full h-full"
              >
                {m.type === 'video' ? (
                  <>
                    <img
                      src={m.poster}
                      alt={m.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-cream/95 grid place-items-center shadow-soft text-coral group-hover:scale-110 transition-transform">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 md:h-6 md:w-6 ml-0.5">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                  </>
                ) : (
                  <img
                    src={m.src}
                    alt={m.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-cream text-xs md:text-sm font-bold">{m.caption}</p>
                </div>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </Container>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length))
          }
          onNext={() =>
            setLightboxIndex((i) => (i === null ? null : (i + 1) % items.length))
          }
        />
      )}
    </section>
  )
}
