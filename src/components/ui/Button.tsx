import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'solid' | 'outline' | 'link' | 'inverse'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center gap-3 font-body font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment focus-visible:ring-forest disabled:opacity-50 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  // Sólido escuro — forest com texto pergaminho. CTA principal sem brilho extra.
  solid:
    'bg-forest text-parchment hover:bg-forest-deep border border-forest hover:border-forest-deep',
  // Outline editorial — fina borda forest, texto forest.
  outline:
    'border border-forest text-forest hover:bg-forest hover:text-parchment',
  // Inverse — para uso em fundos escuros (Hero, Location).
  inverse:
    'border border-parchment/70 text-parchment hover:bg-parchment hover:text-forest',
  // Link com seta — para CTAs secundários e in-text.
  link:
    'text-forest border-b border-forest/40 hover:border-forest pb-1',
}

const sizes: Record<Size, string> = {
  sm: 'text-[12px] uppercase tracking-[0.18em] px-5 py-2.5',
  md: 'text-[13px] uppercase tracking-[0.18em] px-7 py-3.5',
  lg: 'text-[13px] uppercase tracking-[0.22em] px-9 py-4',
}

const linkSizes: Record<Size, string> = {
  sm: 'text-[12px] uppercase tracking-[0.18em]',
  md: 'text-[13px] uppercase tracking-[0.18em]',
  lg: 'text-sm uppercase tracking-[0.22em]',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

export function Button(props: ButtonProps | AnchorProps) {
  const {
    variant = 'solid',
    size = 'md',
    className = '',
    children,
    ...rest
  } = props as CommonProps & { as?: 'a' | 'button' }

  const sizeClass = variant === 'link' ? linkSizes[size] : sizes[size]
  const classes = `${base} ${variants[variant]} ${sizeClass} ${className}`

  if ((props as AnchorProps).as === 'a') {
    const { as: _as, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { as?: 'a' }
    return (
      <a className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  const { as: _as, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
