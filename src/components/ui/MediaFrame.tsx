import type { MediaAsset } from '../../data/media'

type Props = {
  asset: MediaAsset
  className?: string
  mediaClassName?: string
  captionClassName?: string
  showCaption?: boolean
  autoPlay?: boolean
  priority?: boolean
}

export function MediaFrame({
  asset,
  className = '',
  mediaClassName = '',
  captionClassName = '',
  showCaption = true,
  autoPlay = false,
  priority = false,
}: Props) {
  const mediaClasses = `h-full w-full object-cover ${mediaClassName}`
  const style = { objectPosition: asset.objectPosition ?? 'center' }

  return (
    <figure className={`relative overflow-hidden bg-cream-deep ${className}`}>
      {asset.type === 'video' ? (
        <video
          className={mediaClasses}
          style={style}
          src={asset.src}
          poster={asset.poster}
          autoPlay={autoPlay}
          muted={autoPlay}
          loop={autoPlay}
          playsInline
          preload={autoPlay ? 'metadata' : 'none'}
          aria-label={asset.alt}
        />
      ) : (
        <img
          src={asset.src}
          alt={asset.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          className={mediaClasses}
          style={style}
        />
      )}

      {showCaption && (
        <>
          <span
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent"
            aria-hidden="true"
          />
          <figcaption
            className={`absolute bottom-4 left-4 right-4 flex items-baseline gap-3 text-cream ${captionClassName}`}
          >
          <span
            className="font-body text-[11px] font-bold text-cream/80"
          >
            {asset.type === 'video' ? 'Video' : 'Foto'}
          </span>
          <span className="h-px w-8 bg-cream/55" aria-hidden="true" />
          <span className="font-display font-semibold text-sm leading-tight text-cream">
            {asset.caption}
          </span>
          </figcaption>
        </>
      )}
    </figure>
  )
}
