import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-lilac-clouds"
      aria-label="Tropical Park Kids — Complexo de Eventos em Catanduva"
    >
      {/* Camada extra de glow amarelo no topo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% -15%, rgba(255, 224, 138, 0.18), transparent 55%)',
        }}
      />

      <Container className="relative z-10 min-h-[100svh] flex flex-col pt-24 md:pt-28 pb-16 md:pb-20">
        {/* Pílula sutil no topo */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: -8 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 backdrop-blur-sm border border-cream/25 text-cream px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-sun" aria-hidden="true" />
            Complexo de Eventos · Catanduva
          </span>
        </motion.div>

        {/* Grid principal */}
        <div className="mt-12 md:mt-0 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna conteúdo */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-display font-bold text-cream leading-[1.02] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(2.75rem, 7.5vw, 6.25rem)' }}
            >
              Onde sua festa se torna um
              <br />
              <span className="text-sun">Sonho Inesquecível!</span>
            </motion.h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-7 max-w-md text-base md:text-lg text-cream/85 leading-relaxed font-light"
            >
              Atrações exclusivas, estrutura premium e gastronomia farta — em
              Catanduva.
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Button
                as="a"
                href={buildWhatsAppUrl('hero')}
                target="_blank"
                rel="noopener noreferrer"
                variant="sun"
                size="lg"
              >
                <span>Agendar visita</span>
                <span aria-hidden="true" className="text-lg">→</span>
              </Button>
              <a
                href="#attractions"
                className="inline-flex items-center justify-center gap-2 text-cream/90 hover:text-sun font-display font-medium text-sm tracking-[0.12em] uppercase px-2 py-2 transition-colors"
              >
                <span>Conhecer espaço</span>
                <span aria-hidden="true">↓</span>
              </a>
            </motion.div>
          </div>

          {/* Coluna logo */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.92 }}
            animate={reduced ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.65, 0.3, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* TODO: ASSET REAL DO CLIENTE — manter logo até receber imagem hero do Drive. */}
            <img
              src="/transparent-background-logo.png"
              alt="Tropical Park Kids"
              fetchPriority="high"
              decoding="async"
              className={`w-48 sm:w-64 md:w-80 lg:w-full max-w-md drop-shadow-2xl ${
                reduced ? '' : 'animate-float'
              }`}
              style={{ filter: 'drop-shadow(0 30px 40px rgba(43, 25, 80, 0.45))' }}
            />
          </motion.div>
        </div>

        {/* Whisper de scroll na base */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced ? undefined : { opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden lg:flex items-center gap-3 mt-12 text-cream/55 text-[11px] tracking-[0.32em] uppercase font-semibold"
        >
          <span className="block h-px w-10 bg-cream/40" />
          Role para descobrir
        </motion.div>
      </Container>
    </section>
  )
}
