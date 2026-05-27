import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'sun' | 'coral' | 'ghost' | 'white'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 font-body font-bold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun/50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97]'

const variants: Record<Variant, string> = {
  // Primário — amarelo sol, texto grafite. Sombra colorida que aquece.
  sun:
    'bg-sun text-ink shadow-playful hover:bg-sun-deep hover:shadow-coral hover:-translate-y-0.5',
  // Secundário — coral, texto creme.
  coral:
    'bg-coral text-cream shadow-coral hover:bg-coral-deep hover:-translate-y-0.5',
  // Terciário — sem fundo, borda fina, hover preenche.
  ghost:
    'bg-transparent text-ink border-2 border-ink/15 hover:border-ink/40 hover:bg-cream-deep',
  // Inverso — para uso sobre fundos escuros/fotos. Branco com texto grafite.
  white:
    'bg-cream text-ink shadow-soft hover:bg-white hover:-translate-y-0.5',
}

const sizes: Record<Size, string> = {
  sm: 'text-sm px-5 py-2.5',
  md: 'text-base px-6 py-3',
  lg: 'text-lg px-8 py-4',
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
    variant = 'sun',
    size = 'md',
    className = '',
    children,
    ...rest
  } = props as CommonProps & { as?: 'a' | 'button' }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

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
