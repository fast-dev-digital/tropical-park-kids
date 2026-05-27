import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { differentials } from '../../data/differentials'

const cardColors = [
  'bg-coral text-cream',
  'bg-grass text-cream',
  'bg-sky text-cream',
  'bg-sun text-ink',
  'bg-grape text-cream',
  'bg-ink text-cream',
]

export function Differentials() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="differentials" className="section-pad bg-cream relative overflow-hidden">
      <Container>
        <div className="max-w-2xl mb-12">
          <span className="pill-sky">Por dentro da chácara</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink mt-4 leading-[1.05]">
            O que faz a Tropical Park <span className="text-coral">diferente</span>.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Não é "mais um buffet". A gente é a única chácara da região de Catanduva
            pensada de ponta a ponta pra festa de criança rolar redondo.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {differentials.map((d, i) => (
            <motion.li
              key={d.id}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: reduced ? 0 : i * 0.07 }}
              className={`${cardColors[i % cardColors.length]} rounded-3xl p-6 md:p-7 hover:-translate-y-1 transition-transform`}
            >
              <div className="text-4xl mb-3" aria-hidden="true">{d.icon}</div>
              <h3 className="font-display font-bold text-xl md:text-2xl leading-tight">
                {d.title}
              </h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed opacity-95">
                {d.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
