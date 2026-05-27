import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Container } from '../ui/Container'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { popIn, revealFrom } from '../../lib/motion'
import { chapters, type Chapter } from '../../data/chapters'
import { buildWhatsAppUrl, type SectionContext } from '../../lib/whatsapp'
import type { MediaAsset } from '../../data/media'

// Esteira visual em capítulos. Cada capítulo é uma section própria com `id`,
// pra que o FAB contextual e o menu funcionem. Mídia comanda — texto fica num
// marcador discreto e numa frase opcional.
//
// Layout mobile-first:
//   - Hero do capítulo: full-bleed, aspect-[3/4] ou 16/9 conforme orientação
//   - Grid de apoio: 2 colunas no mobile, 3 a partir de md
//   - Chip de descoberta inline no canto inferior direito do hero
//   - Cor de acento muda por capítulo
export function Chapters() {
  const reduced = usePrefersReducedMotion()
  const [selectedMedia, setSelectedMedia] = useState<MediaAsset | null>(null)

  return (
    <div className="bg-cream">
      {chapters.map((chapter, i) => (
        <ChapterBlock
          key={chapter.id}
          chapter={chapter}
          reduced={reduced}
          onOpenMedia={setSelectedMedia}
          isLast={i === chapters.length - 1}
        />
      ))}
      <MediaLightbox media={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </div>
  )
}

const accentText: Record<Chapter['accent'], string> = {
  coral: 'text-coral',
  sun: 'text-sun-deep',
  grass: 'text-grass-deep',
  sky: 'text-sky-deep',
  grape: 'text-grape',
}
const accentLine: Record<Chapter['accent'], string> = {
  coral: 'bg-coral',
  sun: 'bg-sun',
  grass: 'bg-grass',
  sky: 'bg-sky',
  grape: 'bg-grape',
}
const accentChipBg: Record<Chapter['accent'], string> = {
  coral: 'bg-coral text-cream',
  sun: 'bg-sun text-ink',
  grass: 'bg-grass text-cream',
  sky: 'bg-sky text-cream',
  grape: 'bg-grape text-cream',
}

function ChapterBlock({
  chapter,
  reduced,
  onOpenMedia,
  isLast,
}: {
  chapter: Chapter
  reduced: boolean
  onOpenMedia: (media: MediaAsset) => void
  isLast: boolean
}) {
  const sectionId = chapter.id as SectionContext
  const bg = chapter.id === 'gastronomia' || chapter.id === 'decoracao' ? 'bg-cream-deep' : 'bg-cream'

  return (
    <section
      id={chapter.id}
      className={`${bg} ${isLast ? 'pb-20 md:pb-28' : 'pb-12 md:pb-20'} pt-16 md:pt-24 relative overflow-hidden`}
    >
      <Container>
        {/* Header do capítulo */}
        <motion.header
          {...revealFrom(reduced, 'left')}
          className="mb-8 md:mb-10 flex items-end gap-4 md:gap-6"
        >
          <div className={`font-display font-bold text-5xl md:text-7xl ${accentText[chapter.accent]} leading-none`}>
            {chapter.number}
          </div>
          <div className="flex-1 min-w-0">
            <span className="block font-display text-[11px] md:text-xs tracking-[0.28em] uppercase text-ink-mute font-semibold">
              Capítulo
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-ink leading-[1.02] mt-1">
              {chapter.label}
            </h2>
          </div>
          <span className={`hidden md:block h-px flex-1 ${accentLine[chapter.accent]} opacity-30 mb-3`} />
        </motion.header>

        {/* Hero do capítulo — heroMobile substitui no breakpoint < md quando definido */}
        <motion.div
          {...popIn(reduced, 0.05)}
          className="relative overflow-hidden rounded-3xl bg-ink/5 shadow-soft"
        >
          {chapter.heroMobile ? (
            <>
              <div className="md:hidden">
                <MediaTile media={chapter.heroMobile} reduced={reduced} onOpen={onOpenMedia} large />
              </div>
              <div className="hidden md:block">
                <MediaTile media={chapter.hero} reduced={reduced} onOpen={onOpenMedia} large />
              </div>
            </>
          ) : (
            <MediaTile media={chapter.hero} reduced={reduced} onOpen={onOpenMedia} large />
          )}

          {/* Chip de descoberta sobre a mídia */}
          {chapter.whisper && (
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent pointer-events-none">
              <div className="flex flex-wrap items-end justify-between gap-3 pointer-events-auto">
                <p className="font-display text-base md:text-xl text-cream font-medium max-w-md leading-snug">
                  {chapter.whisper}
                </p>
                <a
                  href={buildWhatsAppUrl(sectionId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full ${accentChipBg[chapter.accent]} px-4 py-2 text-xs md:text-sm font-bold shadow-soft hover:-translate-y-0.5 transition-transform`}
                >
                  <span>Descobrir mais</span>
                  <span aria-hidden="true" className="text-base">→</span>
                </a>
              </div>
            </div>
          )}
        </motion.div>

        {/* Grid de apoio */}
        {chapter.support.length > 0 && (
          <ul className="mt-4 md:mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {chapter.support.map((m, i) => (
              <motion.li
                key={m.id}
                {...popIn(reduced, 0.05 + i * 0.04)}
                className="relative overflow-hidden rounded-2xl bg-ink/5 aspect-[3/4]"
              >
                <MediaTile media={m} reduced={reduced} onOpen={onOpenMedia} />
              </motion.li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  )
}

// Tile genérico — autoplay para vídeos (respeitando reduced motion), lazy para imagens.
function MediaTile({
  media,
  reduced,
  onOpen,
  large = false,
}: {
  media: MediaAsset
  reduced: boolean
  onOpen: (media: MediaAsset) => void
  large?: boolean
}) {
  // TODO: ASSET REAL — mídias com `priority: 'star'` devem virar vídeo curto em movimento
  // assim que o Ricardo enviar os arquivos do Drive (Centopeia e bichinhos motorizados).
  const aspectClass = large
    ? media.orientation === 'portrait'
      ? 'aspect-[3/4] md:aspect-[16/10]'
      : media.orientation === 'square'
        ? 'aspect-square md:aspect-[16/10]'
        : 'aspect-[4/3] md:aspect-[16/9]'
    : 'h-full w-full absolute inset-0'

  // cropScale corta bordas borradas (vídeos verticais estilo Reels).
  const scaleStyle = media.cropScale
    ? { transform: `scale(${media.cropScale})`, transformOrigin: 'center center' }
    : null

  const caption = (
    <span
      className={`pointer-events-none absolute ${
        large ? 'left-4 right-4 top-4 md:left-6 md:right-auto md:top-6 md:max-w-sm' : 'bottom-3 left-3 right-3'
      } z-10`}
    >
      <span className="inline-flex max-w-full items-center gap-2 rounded-full bg-ink/75 px-3 py-2 text-left font-display text-xs font-semibold leading-tight text-cream shadow-soft backdrop-blur-md md:text-sm">
        <span className="shrink-0 font-body text-[10px] font-bold uppercase tracking-[0.12em] text-cream/70">
          {media.type === 'video' ? 'Video' : 'Foto'}
        </span>
        <span className="h-3 w-px shrink-0 bg-cream/35" aria-hidden="true" />
        <span className="min-w-0 truncate">{media.caption}</span>
      </span>
    </span>
  )

  const mediaElement = media.type === 'video'
    ? (
      <video
        src={media.src}
        poster={media.poster}
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload={large ? 'metadata' : 'none'}
        aria-label={media.alt}
        style={{ objectPosition: media.objectPosition ?? 'center', ...scaleStyle }}
        className={`${large ? `block w-full ${aspectClass} object-cover` : `${aspectClass} object-cover`}`}
      />
    )
    : (
    <img
      src={media.src}
      alt={media.alt}
      loading="lazy"
      decoding="async"
      style={{ objectPosition: media.objectPosition ?? 'center', ...scaleStyle }}
      className={`${large ? `block w-full ${aspectClass} object-cover` : `${aspectClass} object-cover`}`}
    />
  )

  return (
    <button
      type="button"
      onClick={() => onOpen(media)}
      className="group relative block h-full w-full cursor-zoom-in overflow-hidden text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-sun/80"
      aria-label={`Abrir mídia: ${media.caption}`}
    >
      {mediaElement}
      <span
        className={`pointer-events-none absolute inset-x-0 ${
          large ? 'top-0 h-32 bg-gradient-to-b' : 'bottom-0 h-2/3 bg-gradient-to-t'
        } from-ink/70 via-ink/25 to-transparent opacity-90 transition-opacity group-hover:opacity-100`}
        aria-hidden="true"
      />
      {caption}
    </button>
  )
}

function MediaLightbox({
  media,
  onClose,
}: {
  media: MediaAsset | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!media) return undefined

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [media, onClose])

  if (!media) return null

  const mediaNode = media.type === 'video'
    ? (
      <video
        src={media.src}
        poster={media.poster}
        controls
        playsInline
        className="max-h-[72vh] w-full rounded-2xl bg-ink object-contain"
        aria-label={media.alt}
      />
    )
    : (
      <img
        src={media.src}
        alt={media.alt}
        className="max-h-[72vh] w-full rounded-2xl object-contain"
      />
    )

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={media.caption}
      onClick={onClose}
    >
      <div className="relative z-10 w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute -right-2 -top-12 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink shadow-soft transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-sun/80 md:right-0"
          aria-label="Fechar mídia"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <figure>
          {mediaNode}
          <figcaption className="mt-4 rounded-2xl bg-cream px-4 py-3 text-ink shadow-soft md:px-5">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
              {media.type === 'video' ? 'Video' : 'Foto'}
            </span>
            <p className="mt-1 font-display text-lg font-semibold leading-tight md:text-xl">
              {media.caption}
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
