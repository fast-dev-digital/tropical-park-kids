import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { testimonials, stats } from '../../data/socialProof'
import { popIn, revealFrom } from '../../lib/motion'

export function SocialProof() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="proof" className="section-pad bg-grape relative overflow-hidden">
      {/* Camada de iluminação suave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 30% 20%, rgba(255,255,255,0.18), transparent 65%), ' +
            'radial-gradient(circle at 88% 80%, rgba(255,224,138,0.16), transparent 55%)',
        }}
      />

      <Container className="relative z-10">
        <motion.div className="max-w-2xl mb-12" {...revealFrom(reduced, 'left')}>
          <span className="inline-flex items-center gap-2 rounded-full bg-sun text-ink px-4 py-1.5 text-sm font-bold">
            Mães contam
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-cream mt-4 leading-[1.05]">
            500+ festas. Centenas de mães felizes.
          </h2>
          <p className="mt-4 text-lg text-cream/90">
            Cada festa que sai daqui vira história. Aqui vão algumas que as mães autorizaram a gente compartilhar.
          </p>
        </motion.div>

        {/* Stats em fileira */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.li
              key={s.label}
              {...popIn(reduced, i * 0.06)}
              className="bg-cream/12 backdrop-blur-sm border border-cream/20 rounded-2xl p-5 text-center"
            >
              <p className="font-display font-bold text-3xl md:text-4xl text-sun">{s.value}</p>
              <p className="mt-1 text-cream/85 text-sm font-semibold uppercase tracking-wide">
                {s.label}
              </p>
            </motion.li>
          ))}
        </ul>

        {/* Depoimentos */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.li
              key={t.id}
              {...popIn(reduced, i * 0.08)}
              className="bg-cream rounded-3xl p-6 md:p-7 shadow-soft"
            >
              <div className="flex gap-1 mb-3" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} aria-hidden="true" className="text-sun text-lg">★</span>
                ))}
              </div>
              <p className="text-ink leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 pt-5 border-t border-ink/10">
                <p className="font-display font-bold text-ink">{t.name}</p>
                <p className="text-ink-soft text-sm">{t.role}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
