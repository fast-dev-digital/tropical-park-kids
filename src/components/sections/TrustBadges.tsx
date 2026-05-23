import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { trustBadges } from '../../data/trustBadges'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (!active) return
    if (reduced) {
      setValue(target)
      return
    }
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration, reduced])

  return value
}

function BadgeStat({
  badge,
  active,
}: {
  badge: (typeof trustBadges)[number]
  active: boolean
}) {
  const value = useCountUp(badge.value, active)
  return (
    <div className="text-center">
      <div className="font-premium text-brand-gold text-5xl md:text-6xl lg:text-7xl leading-none">
        {badge.prefix}
        {value}
        {badge.suffix}
      </div>
      <p className="mt-3 font-display font-bold text-white text-base md:text-lg uppercase tracking-wide">
        {badge.label}
      </p>
      <p className="mt-1 text-white/70 text-sm">{badge.caption}</p>
    </div>
  )
}

export function TrustBadges() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="trust"
      ref={ref}
      className="section-padding bg-brand-royal text-white"
    >
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-brand-gold">
            Confiança em números
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            Uma operação madura, pronta para a sua data
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6"
        >
          {trustBadges.map((b) => (
            <BadgeStat key={b.id} badge={b} active={active} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
