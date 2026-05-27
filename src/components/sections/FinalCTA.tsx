import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function FinalCTA() {
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="final"
      className="relative overflow-hidden bg-lilac-clouds py-28 md:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% -15%, rgba(255, 224, 138, 0.2), transparent 55%)',
        }}
      />

      <Container className="relative z-10 text-center">
        <motion.img
          src="/transparent-background-logo.png"
          alt="Tropical Park Kids"
          loading="lazy"
          decoding="async"
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className={`mx-auto w-40 md:w-52 lg:w-60 drop-shadow-2xl ${reduced ? '' : 'animate-float'}`}
          style={{ filter: 'drop-shadow(0 24px 36px rgba(43, 25, 80, 0.45))' }}
        />

        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-cream mt-8 leading-[1.02] mx-auto max-w-3xl"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.75rem)' }}
        >
          Conheça o espaço.
        </motion.h2>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 mx-auto max-w-md text-base md:text-lg text-cream/85 font-light"
        >
          Agende uma visita. A estrutura fala por si.
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            as="a"
            href={buildWhatsAppUrl('final')}
            target="_blank"
            rel="noopener noreferrer"
            variant="sun"
            size="lg"
          >
            <span>Agendar visita</span>
            <span aria-hidden="true" className="text-lg">→</span>
          </Button>
          <Button
            as="a"
            href="#location"
            variant="white"
            size="lg"
          >
            <span>Ver localização</span>
            <span aria-hidden="true" className="text-lg">↓</span>
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
