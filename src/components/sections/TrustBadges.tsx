import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { trustBadges } from '../../data/trustBadges'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

function useCountUp(target: number, active: boolean, duration = 1600) {
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
  index,
}: {
  badge: (typeof trustBadges)[number]
  active: boolean
  index: number
}) {
  const value = useCountUp(badge.value, active)
  const num = String(index + 1).padStart(2, '0')
  return (
    <div className="grid grid-cols-12 gap-4 items-baseline py-10 md:py-14 border-t border-forest/20 last:border-b last:border-forest/20">
      <span
        className="col-span-2 md:col-span-1 font-mono text-number uppercase text-forest/60 self-start pt-3"
        style={{ fontFeatureSettings: '"tnum"' }}
      >
        {num}
      </span>
      <div className="col-span-10 md:col-span-5 lg:col-span-4">
        <span
          className="font-display font-light text-forest leading-[0.9] tracking-[-0.025em]"
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
            fontVariationSettings: '"opsz" 144, "SOFT" 30',
            fontFeatureSettings: '"tnum"',
          }}
        >
          {badge.prefix}
          {value}
          <span className="text-forest/70 text-[0.5em] align-baseline ml-1">
            {badge.suffix}
          </span>
        </span>
      </div>
      <p
        className="col-span-12 md:col-span-6 lg:col-span-7 font-display italic text-forest text-xl md:text-2xl leading-snug max-w-md"
        style={{ fontVariationSettings: '"opsz" 48, "SOFT" 70' }}
      >
        {badge.label.toLowerCase()} —{' '}
        <span className="not-italic font-body text-base text-ink-soft">
          {badge.caption.toLowerCase()}
        </span>
      </p>
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
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="trust"
      ref={ref}
      className="section-padding bg-parchment relative"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 text-ink-muted">
              <span
                className="font-mono text-number uppercase"
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                06 — Em números
              </span>
              <span className="h-px w-12 bg-ink/25" aria-hidden="true" />
              <span className="kicker">Confiança comprovada</span>
            </div>
            <h2
              className="mt-7 font-display font-light text-forest text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] tracking-[-0.018em]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
            >
              Uma operação madura,{' '}
              <em
                className="italic"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
              >
                pronta
              </em>{' '}
              para a sua data.
            </h2>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9 lg:pt-4">
            <p className="text-ink-soft text-lg leading-relaxed">
              Quatro indicadores que descrevem como a chácara opera no
              dia-a-dia — antes, durante e depois do seu evento.
            </p>
          </aside>
        </motion.div>

        <div>
          {trustBadges.map((b, i) => (
            <BadgeStat key={b.id} badge={b} active={active} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
