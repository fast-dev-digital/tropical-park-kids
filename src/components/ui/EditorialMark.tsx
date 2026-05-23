import type { ReactNode } from 'react'

type Props = {
  number: string
  kicker: string
  title: ReactNode
  lede?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * Cabeçalho editorial de seção.
 * Substitui o SectionTitle genérico — numeração mono + hairline + serif protagonista.
 */
export function EditorialMark({
  number,
  kicker,
  title,
  lede,
  align = 'left',
  tone = 'dark',
  className = '',
}: Props) {
  const isLight = tone === 'light'
  const alignCls = align === 'center' ? 'text-center' : 'text-left'

  return (
    <header
      className={`${alignCls} ${className} ${align === 'center' ? 'mx-auto max-w-narrow' : 'max-w-narrow'}`}
    >
      <div
        className={`flex items-center gap-4 ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
      >
        <span
          className={`font-mono text-number uppercase ${
            isLight ? 'text-parchment/70' : 'text-ink-muted'
          }`}
          style={{ fontFeatureSettings: '"tnum"' }}
        >
          {number}
        </span>
        <span
          className={`h-px w-12 ${isLight ? 'bg-parchment/40' : 'bg-ink/25'}`}
          aria-hidden="true"
        />
        <span
          className={`kicker ${isLight ? 'text-parchment/80' : 'text-ink-muted'}`}
        >
          {kicker}
        </span>
      </div>

      <h2
        className={`mt-7 font-display font-light text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] tracking-[-0.018em] ${
          isLight ? 'text-parchment' : 'text-forest'
        }`}
        style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
      >
        {title}
      </h2>

      {lede && (
        <p
          className={`mt-6 max-w-prose text-lg leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${isLight ? 'text-parchment/80' : 'text-ink-soft'}`}
        >
          {lede}
        </p>
      )}
    </header>
  )
}
