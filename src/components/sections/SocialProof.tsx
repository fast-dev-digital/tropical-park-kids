import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { EditorialMark } from '../ui/EditorialMark'
import { socialProofItems } from '../../data/socialProof'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function SocialProof() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="proof" className="section-padding bg-forest text-parchment relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.12] mix-blend-overlay pointer-events-none" aria-hidden="true" />
      <Container>
        <EditorialMark
          number="07"
          kicker="Confiança"
          tone="light"
          title={
            <>
              Antes de escolher, a família precisa{' '}
              <em className="italic" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}>
                sentir
              </em>{' '}
              o lugar.
            </>
          }
          lede="A confiança aqui se apoia no que pode ser visto: percurso, equipe, atrações, cozinha e estrutura funcionando como uma experiência única."
        />

        <ol className="mt-20 md:mt-28">
          {socialProofItems.map((item, i) => (
            <motion.li
              key={item.id}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.65, 0.3, 1] }}
              className="grid grid-cols-12 gap-6 md:gap-10 border-t border-parchment/15 py-8 md:py-10 last:border-b last:border-parchment/15"
            >
              <span
                className="col-span-2 md:col-span-1 font-mono text-number uppercase text-parchment/55"
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="col-span-10 md:col-span-4 font-display font-light text-parchment text-2xl md:text-3xl leading-[1.08]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                {item.label}
              </h3>
              <p className="col-span-12 md:col-span-7 text-parchment/80 text-base md:text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
