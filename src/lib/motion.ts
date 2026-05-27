import type { MotionProps } from 'framer-motion'

export const revealViewport = {
  once: true,
  margin: '-80px',
} as const

export function revealFrom(
  reduced: boolean,
  direction: 'up' | 'left' | 'right' = 'up',
  delay = 0,
): MotionProps {
  if (reduced) return { initial: false as const }

  const axis =
    direction === 'up'
      ? { y: 24 }
      : direction === 'left'
        ? { x: -34 }
        : { x: 34 }

  return {
    initial: { opacity: 0, ...axis },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: revealViewport,
    transition: {
      duration: 0.72,
      delay,
      ease: 'easeOut' as const,
    },
  }
}

export function popIn(reduced: boolean, delay = 0): MotionProps {
  if (reduced) return { initial: false as const }

  return {
    initial: { opacity: 0, scale: 0.92, y: 16 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    viewport: revealViewport,
    transition: {
      duration: 0.58,
      delay,
      ease: 'easeOut' as const,
    },
  }
}
