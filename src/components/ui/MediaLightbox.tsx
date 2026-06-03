import { useEffect } from 'react'
import { X } from 'lucide-react'
import type { MediaAsset } from '../../data/media'

// Modal de mídia em tela cheia — fecha no Esc ou clique fora. Vídeos com controls.
// Compartilhado entre a esteira de capítulos (Chapters) e a página de Galeria.
export function MediaLightbox({
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
