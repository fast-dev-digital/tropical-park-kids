import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { heroMedia } from '../../data/media'

export function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-end"
      aria-label="Apresentação da Tropical Park Kids"
    >
      <div className="absolute inset-0 z-0">
        <picture className="block h-full w-full">
          <source srcSet={heroMedia.mobileSrc} media="(max-width: 767px)" />
          <img
            src={heroMedia.src}
            alt={heroMedia.alt}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-hero-overlay" />
        {/* Reforço de contraste mobile — compensa fotos mais claras em telas pequenas */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-forest-deep/90 to-transparent md:hidden" />
        <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Marca editorial no topo */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-32 md:pt-40">
        <Container>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 text-parchment"
          >
            <span className="kicker">Chácara de eventos</span>
          </motion.div>
        </Container>
      </div>

      <Container className="relative z-10 pb-16 md:pb-24">
        <div className="max-w-4xl">
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display font-light text-parchment leading-[0.96] tracking-[-0.022em]"
            style={{
              fontSize: 'clamp(2.75rem, 7.5vw, 6.5rem)',
              fontVariationSettings: '"opsz" 144, "SOFT" 30',
            }}
          >
            A festa que ninguém esquece{' '}
            <em
              className="not-italic text-parchment"
              style={{ fontStyle: 'italic', fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
            >
              acontece
            </em>{' '}
            em uma{' '}
            <span className="text-ember" style={{ fontStyle: 'italic' }}>
              chácara
            </span>
            <span className="text-parchment">.</span>
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-8 max-w-prose text-lg md:text-xl text-parchment leading-relaxed"
          >
            A única chácara da região de Catanduva pensada para que as pessoas
            que você ama guardem esse dia para sempre.
          </motion.p>

          <motion.ul
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-parchment/90"
            style={{ fontFeatureSettings: '"tnum"' }}
          >
            <li>Estacionamento privativo</li>
            <li aria-hidden="true" className="text-parchment/40">·</li>
            <li>Campo 12×18</li>
            <li aria-hidden="true" className="text-parchment/40">·</li>
            <li>Atrações exclusivas</li>
          </motion.ul>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
          >
            <Button
              as="a"
              href={buildWhatsAppUrl('hero')}
              target="_blank"
              rel="noopener noreferrer"
              variant="solid"
              size="lg"
              className="!border-parchment !bg-parchment !text-forest hover:!border-parchment-deep hover:!bg-parchment-deep"
            >
              <span>Agendar visita guiada</span>
              <ArrowMark />
            </Button>
            <a
              href="#attractions"
              className="inline-flex items-center gap-3 text-parchment/90 hover:text-parchment text-sm uppercase tracking-[0.22em] pb-1 border-b border-parchment/40 hover:border-parchment transition-colors"
            >
              <span>Ver a experiência</span>
              <ArrowDownMark />
            </a>
          </motion.div>
        </div>
      </Container>

      {/* Rodapé editorial do hero — pista de scroll discreta */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 hidden sm:flex items-center gap-3 text-parchment/60">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.3em]"
          style={{ fontFeatureSettings: '"tnum"' }}
        >
          Role para conhecer
        </span>
        <span className="h-12 w-px bg-parchment/40" aria-hidden="true" />
      </div>
    </section>
  )
}

function ArrowMark() {
  return (
    <svg
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M0 5 H18 M14 1 L18 5 L14 9" />
    </svg>
  )
}

function ArrowDownMark() {
  return (
    <svg
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M5 0 V12 M1 8 L5 12 L9 8" />
    </svg>
  )
}
