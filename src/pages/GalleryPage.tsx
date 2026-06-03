import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Container } from '../components/ui/Container'
import { MediaTile } from '../components/ui/MediaTile'
import { MediaLightbox } from '../components/ui/MediaLightbox'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { popIn } from '../lib/motion'
import {
  galleryFilters,
  mediaForFilter,
  type GalleryFilter,
  type MediaAsset,
} from '../data/media'
import { buildWhatsAppUrl } from '../lib/whatsapp'

// Página dedicada da galeria — destino do link que o agente de IA envia no
// WhatsApp depois das 3-4 fotos principais. Reúne TODAS as mídias do espaço,
// filtráveis por categoria. Documento próprio (multipage do Vite), por isso
// Header/Footer recebem linkBase="/" para que as âncoras voltem à home.

const aspectByOrientation: Record<MediaAsset['orientation'], string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
}

export function GalleryPage() {
  const reduced = usePrefersReducedMotion()
  const [active, setActive] = useState<GalleryFilter>('destaques')
  const [selectedMedia, setSelectedMedia] = useState<MediaAsset | null>(null)

  const media = useMemo(() => mediaForFilter(active), [active])

  return (
    <>
      <Header linkBase="/" />

      <main>
        {/* Faixa de título — fundo escuro para o header transparente ficar legível */}
        <section className="relative overflow-hidden bg-grape pt-28 pb-12 md:pt-36 md:pb-16">
          <span
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-grape-deep/40 to-transparent"
            aria-hidden="true"
          />
          <Container className="relative">
            <span className="block font-display text-[11px] md:text-xs tracking-[0.28em] uppercase text-cream/70 font-semibold">
              Tropical Park Kids
            </span>
            <h1 className="mt-2 font-display font-bold text-4xl md:text-6xl text-cream leading-[1.02]">
              Galeria.
            </h1>
            <p className="mt-3 font-body text-base md:text-lg text-cream/85 max-w-md">
              O complexo inteiro, em fotos e vídeos.
            </p>
          </Container>
        </section>

        {/* Filtros */}
        <div className="sticky top-[68px] md:top-[76px] z-30 bg-cream/95 backdrop-blur-md border-b border-ink/8">
          <Container className="py-3 md:py-4">
            <ul className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar mídias">
              {galleryFilters.map((filter) => {
                const isActive = filter.id === active
                return (
                  <li key={filter.id}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(filter.id)}
                      className={`rounded-full px-4 py-2 font-display text-sm font-bold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-sun/80 ${
                        isActive
                          ? 'bg-sun text-ink shadow-soft'
                          : 'bg-cream-deep text-ink-soft hover:bg-sun-soft hover:text-ink'
                      }`}
                    >
                      {filter.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </Container>
        </div>

        {/* Grade de mídias */}
        <section className="bg-cream py-8 md:py-12">
          <Container>
            {media.length === 0 ? (
              <p className="py-16 text-center font-body text-ink-soft">
                Nenhuma mídia nesta categoria ainda.
              </p>
            ) : (
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {media.map((m, i) => (
                  <motion.li
                    key={m.id}
                    {...popIn(reduced, Math.min(i * 0.03, 0.3))}
                    className={`relative overflow-hidden rounded-2xl bg-ink/5 ${aspectByOrientation[m.orientation]}`}
                  >
                    <MediaTile media={m} reduced={reduced} onOpen={setSelectedMedia} />
                  </motion.li>
                ))}
              </ul>
            )}
          </Container>
        </section>

        {/* CTA final */}
        <section className="bg-coral">
          <Container className="py-12 md:py-16 text-center">
            <h2 className="font-display font-bold text-2xl md:text-4xl text-cream">
              Quer ver pessoalmente?
            </h2>
            <p className="mt-2 font-body text-cream/85 max-w-md mx-auto">
              Agende uma visita e conheça o espaço de perto.
            </p>
            <a
              href={buildWhatsAppUrl('galeria')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-sun px-6 py-3.5 font-display text-base font-bold text-ink shadow-playful transition-transform hover:-translate-y-0.5"
            >
              <span>Agendar visita</span>
              <span aria-hidden="true">→</span>
            </a>
          </Container>
        </section>
      </main>

      <Footer linkBase="/" />

      <MediaLightbox media={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </>
  )
}
