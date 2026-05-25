import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { MediaAsset } from '../../data/media'

type Props = {
  items: MediaAsset[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ items, index, onClose, onPrev, onNext }: Props) {
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const previousFocusRef = useRef<Element | null>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'Tab') {
        const dialog = dialogRef.current
        if (!dialog) return
        const focusable = Array.from(
          dialog.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null)

        if (focusable.length === 0) {
          e.preventDefault()
          return
        }

        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handler)
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = original
    }
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    previousFocusRef.current = document.activeElement
    closeRef.current?.focus()
    return () => {
      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus()
      }
    }
  }, [])

  const current = items[index]
  if (!current) return null
  const mediaType = current.type === 'video' ? 'vídeo' : 'imagem'

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Visualização ampliada de ${mediaType}: ${current.caption}`}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose() }}
        aria-label="Fechar"
        className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
      >
        <X size={24} />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Mídia anterior"
        className="absolute left-2 md:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Próxima mídia"
        className="absolute right-2 md:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
      >
        <ChevronRight size={28} />
      </button>

      <div className="max-h-[88vh] max-w-[92vw]" onClick={(e) => e.stopPropagation()}>
        {current.type === 'video' ? (
          <video
            key={current.id}
            src={current.src}
            poster={current.poster}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="max-h-[82vh] max-w-[92vw] object-contain shadow-2xl"
            aria-label={current.alt}
          />
        ) : (
          <img
            src={current.src}
            alt={current.alt}
            loading="lazy"
            decoding="async"
            className="max-h-[82vh] max-w-[92vw] object-contain shadow-2xl"
          />
        )}
        <div className="mt-4 max-w-[82vw] text-center">
          <p className="font-display italic text-base text-white/90">{current.caption}</p>
          <p className="mt-1 font-body text-sm text-white/60">{current.alt}</p>
        </div>
      </div>
    </div>
  )
}
