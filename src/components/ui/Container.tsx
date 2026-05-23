import type { HTMLAttributes, ReactNode } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  as?: 'div' | 'section' | 'header' | 'footer' | 'main'
}

export function Container({ children, className = '', as: As = 'div', ...rest }: Props) {
  return (
    <As className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`} {...rest}>
      {children}
    </As>
  )
}
