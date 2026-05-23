import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { SectionTitle } from '../ui/SectionTitle'
import { eventTypes } from '../../data/eventTypes'

const accentMap = {
  green: 'from-brand-green/10 to-brand-green/0 group-hover:border-brand-green text-brand-green',
  gold: 'from-brand-gold/15 to-brand-gold/0 group-hover:border-brand-gold text-brand-gold-dark',
  royal: 'from-brand-royal/10 to-brand-royal/0 group-hover:border-brand-royal text-brand-royal',
  coral: 'from-playful-coral/15 to-playful-coral/0 group-hover:border-playful-coral text-playful-coral',
} as const

export function EventTypes() {
  return (
    <section id="events" className="section-padding bg-slate-50">
      <Container>
        <SectionTitle
          eyebrow="Tipos de Eventos"
          title="Versatilidade para celebrar o que importa"
          subtitle="Estrutura preparada para receber desde a brincadeira infantil até a sofisticação de uma cerimônia ao ar livre."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((evt, i) => {
            const Icon = evt.icon
            const accent = accentMap[evt.accent]
            return (
              <motion.article
                key={evt.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl p-7 bg-white border-2 border-transparent transition-all duration-300 shadow-sm hover:shadow-xl`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-50 pointer-events-none ${accent}`} />
                <div className="relative">
                  <div className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white shadow-md ${accent.split(' ').filter(c => c.startsWith('text-')).join(' ')}`}>
                    <Icon size={28} strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-xl text-brand-royal">
                    {evt.title}
                  </h3>
                  <p className="mt-2 text-ink-muted text-sm leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
