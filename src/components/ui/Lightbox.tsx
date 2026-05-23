import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  images: { src: string; alt: string }[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handler)
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = original
    }
  }, [onClose, onPrev, onNext])

  const current = images[index]
  if (!current) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada"
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <button
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
        aria-label="Imagem anterior"
        className="absolute left-2 md:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Próxima imagem"
        className="absolute right-2 md:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
      >
        <ChevronRight size={28} />
      </button>

      <img
        src={current.src}
        alt={current.alt}
        className="max-h-[88vh] max-w-[92vw] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
