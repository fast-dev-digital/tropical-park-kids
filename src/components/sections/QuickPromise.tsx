import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { popIn, revealFrom } from '../../lib/motion'

const promises = [
  {
    icon: '😌',
    title: 'Sem preocupação',
    body: 'A gente recebe, decora, anima e serve. Você só precisa curtir.',
    color: 'bg-coral text-cream',
  },
  {
    icon: '🍰',
    title: 'Fartura sempre',
    body: 'Mesa cheia do começo ao fim. Ninguém sai com fome daqui.',
    color: 'bg-sun text-ink',
  },
  {
    icon: '🎉',
    title: 'Atrações exclusivas',
    body: 'Trenzinho Centopeia e bichinhos motorizados — só aqui.',
    color: 'bg-grass text-cream',
  },
  {
    icon: '🛡️',
    title: 'Equipe que cuida',
    body: 'Monitores treinados pra cuidar dos pequenos enquanto você relaxa.',
    color: 'bg-sky text-cream',
  },
]

export function QuickPromise() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="promise" className="section-pad bg-cream relative overflow-hidden">
      <Container>
        <motion.div
          className="max-w-2xl mx-auto text-center mb-14"
          {...revealFrom(reduced, 'up')}
        >
          <span className="pill-coral">Por que a gente</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink mt-4 leading-[1.05]">
            Festa de criança boa é assim.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Quatro coisas que você não vai abrir mão depois que vier aqui.
          </p>
        </motion.div>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {promises.map((p, i) => (
            <motion.li
              key={p.title}
              {...popIn(reduced, i * 0.08)}
              className="bg-cream-deep rounded-3xl p-6 md:p-7 hover:-translate-y-1 transition-transform"
            >
              <div className={`h-14 w-14 md:h-16 md:w-16 rounded-2xl ${p.color} grid place-items-center text-3xl shadow-soft mb-4`}>
                <span aria-hidden="true">{p.icon}</span>
              </div>
              <h3 className="font-display font-bold text-xl text-ink leading-tight">{p.title}</h3>
              <p className="mt-2 text-sm md:text-base text-ink-soft leading-relaxed">{p.body}</p>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
