import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: Props) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
            light ? 'text-brand-gold' : 'text-brand-green'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight ${
          light ? 'text-white' : 'text-brand-royal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-white/80' : 'text-ink-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
