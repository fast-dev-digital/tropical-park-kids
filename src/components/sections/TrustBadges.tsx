import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { MediaFrame } from '../ui/MediaFrame'
import { trustBadges } from '../../data/trustBadges'
import { mediaAssets } from '../../data/media'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

function BadgeStat({
  badge,
  index,
}: {
  badge: (typeof trustBadges)[number]
  index: number
}) {
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
          className="font-display font-light text-forest leading-[0.92] tracking-[-0.018em]"
          style={{
            fontSize: 'clamp(2.75rem, 6vw, 4.8rem)',
            fontVariationSettings: '"opsz" 144, "SOFT" 30',
            fontFeatureSettings: '"tnum"',
          }}
        >
          {badge.marker}
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
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="trust"
      className="section-padding bg-parchment relative"
    >
      <Container>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
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
                06 — Provas
              </span>
              <span className="h-px w-12 bg-ink/25" aria-hidden="true" />
              <span className="kicker">Confiança visível</span>
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
              Quatro sinais concretos que a família percebe caminhando pelo
              espaço — antes de decidir a data e o formato da celebração.
            </p>
            <MediaFrame
              asset={mediaAssets.quadraEntardecerStar}
              autoPlay={!reduced}
              className="mt-8 aspect-[4/5]"
            />
          </aside>
        </motion.div>

        <div>
          {trustBadges.map((b, i) => (
            <BadgeStat key={b.id} badge={b} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
