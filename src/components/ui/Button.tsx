import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/40 disabled:opacity-60 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-gold text-ink hover:bg-brand-gold-dark shadow-lg shadow-brand-gold/30 hover:shadow-xl hover:-translate-y-0.5',
  secondary:
    'bg-brand-green text-white hover:bg-brand-green-dark shadow-md hover:-translate-y-0.5',
  ghost: 'text-ink hover:text-brand-green hover:bg-brand-green/5',
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-brand-royal',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  pulse?: boolean
  children: ReactNode
  className?: string
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

export function Button(props: ButtonProps | AnchorProps) {
  const {
    variant = 'primary',
    size = 'md',
    pulse = false,
    className = '',
    children,
    ...rest
  } = props as CommonProps & { as?: 'a' | 'button' }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${pulse ? 'animate-pulse-soft' : ''} ${className}`

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
