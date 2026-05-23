import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { SectionTitle } from '../ui/SectionTitle'
import { differentials } from '../../data/differentials'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const accentBg: Record<string, string> = {
  green: 'bg-brand-green/10 text-brand-green',
  gold: 'bg-brand-gold/15 text-brand-gold-dark',
  royal: 'bg-brand-royal/10 text-brand-royal',
  coral: 'bg-playful-coral/15 text-playful-coral',
}

export function Differentials() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="differentials" className="section-padding bg-slate-50">
      <Container>
        <SectionTitle
          eyebrow="Diferenciais únicos"
          title={
            <>
              O que <span className="text-brand-green">só a Tropical</span> entrega
            </>
          }
          subtitle="Quatro vantagens estruturais que mudam a experiência do seu convidado — e que nenhum concorrente da região oferece ao mesmo tempo."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {differentials.map((d, i) => {
            const Icon = d.icon
            return (
              <motion.article
                key={d.id}
                initial={reduced ? false : { opacity: 0, y: 28 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group bg-white rounded-3xl p-7 md:p-8 border border-slate-200 hover:border-brand-green/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`shrink-0 h-16 w-16 rounded-2xl flex items-center justify-center ${accentBg[d.accent]} group-hover:scale-105 transition-transform`}
                  >
                    <Icon size={30} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-brand-royal leading-tight">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-ink-muted leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
