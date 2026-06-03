import type { MediaAsset } from '../../data/media'

const cropAspect: Record<MediaAsset['orientation'], string> = {
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
}

// Tile genérico de mídia — autoplay para vídeos (respeitando reduced motion),
// lazy para imagens. Clique abre o lightbox via `onOpen`.
// Compartilhado entre a esteira de capítulos (Chapters) e a página de Galeria.
//
// Modos de renderização:
//   - large:   herói (aspect responsivo, caption no topo)
//   - natural: proporção nativa (w-full h-auto) — usado no masonry da Galeria,
//              empacota sem buracos. Mídias com `cropScale` (bordas borradas
//              estilo Reels) caem num box de aspect fixo + object-cover + scale.
//   - default: preenche o pai (absolute inset-0), exige container com aspect.
export function MediaTile({
  media,
  reduced,
  onOpen,
  large = false,
  natural = false,
}: {
  media: MediaAsset
  reduced: boolean
  onOpen: (media: MediaAsset) => void
  large?: boolean
  natural?: boolean
}) {
  // TODO: ASSET REAL — mídias com `priority: 'star'` devem virar vídeo curto em movimento
  // assim que o Ricardo enviar os arquivos do Drive (Centopeia e bichinhos motorizados).
  const naturalCrop = natural && !!media.cropScale
  const naturalFlow = natural && !media.cropScale

  const largeAspect = large
    ? media.orientation === 'portrait'
      ? 'aspect-[3/4] md:aspect-[16/10]'
      : media.orientation === 'square'
        ? 'aspect-square md:aspect-[16/10]'
        : 'aspect-[4/3] md:aspect-[16/9]'
    : ''

  // cropScale corta bordas borradas (vídeos verticais estilo Reels).
  const scaleStyle = media.cropScale
    ? { transform: `scale(${media.cropScale})`, transformOrigin: 'center center' }
    : null

  // Classe da mídia conforme o modo.
  const mediaClass = large
    ? `block w-full ${largeAspect} object-cover`
    : naturalFlow
      ? 'block w-full h-auto object-cover'
      : 'absolute inset-0 h-full w-full object-cover' // default + naturalCrop

  // Classe do botão wrapper conforme o modo.
  const buttonLayout = large || naturalFlow
    ? 'block w-full'
    : naturalCrop
      ? `block w-full ${cropAspect[media.orientation]}`
      : 'block h-full w-full'

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
        className={mediaClass}
      />
    )
    : (
    <img
      src={media.src}
      alt={media.alt}
      loading="lazy"
      decoding="async"
      style={{ objectPosition: media.objectPosition ?? 'center', ...scaleStyle }}
      className={mediaClass}
    />
  )

  return (
    <button
      type="button"
      onClick={() => onOpen(media)}
      className={`group relative ${buttonLayout} cursor-zoom-in overflow-hidden text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-sun/80`}
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
