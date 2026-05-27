import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import heroDesktop from '../../assets/DESKTOP-hero-final-tropical-park.png'
import heroMobile from '../../assets/MOBILE-hero-final-tropical-park.png'

export function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-lilac-clouds"
      aria-label="Tropical Park Kids — Complexo de Eventos em Catanduva"
    >
      {/* Camada de mídia: imagem final do hero (mobile/desktop) */}
      <picture aria-hidden="true">
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img
          src={heroMobile}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom md:object-right"
        />
      </picture>

      {/* Overlay sutil só no mobile pra reforçar contraste do texto no topo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-grape-deep/40 to-transparent md:hidden"
      />

      <Container className="relative z-10 min-h-[100svh] flex flex-col pt-20 md:pt-28 pb-16 md:pb-20">
        {/* Pílula sutil no topo — apenas desktop (mobile não cabe ao lado da split) */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: -8 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:block"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 backdrop-blur-sm border border-cream/25 text-cream px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-sun" aria-hidden="true" />
            Complexo de Eventos · Catanduva
          </span>
        </motion.div>

        {/* Coluna conteúdo (esquerda em desktop, topo em mobile) */}
        <div className="mt-4 md:mt-0 flex-1 flex flex-col justify-start md:justify-center lg:max-w-[58%]">
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display font-bold text-cream leading-[1.02] tracking-[-0.01em] max-w-[62%] md:max-w-none"
            style={{ fontSize: 'clamp(2.25rem, 7.5vw, 6.25rem)' }}
          >
            Onde sua festa se torna um
            <br />
            <span className="text-sun">Sonho Inesquecível!</span>
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-5 md:mt-7 max-w-[60%] md:max-w-md text-sm md:text-lg text-cream/85 leading-relaxed font-light"
          >
            Atrações exclusivas, estrutura premium e gastronomia farta — em
            Catanduva.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 max-w-[68%] md:max-w-none"
          >
            <Button
              as="a"
              href={buildWhatsAppUrl('hero')}
              target="_blank"
              rel="noopener noreferrer"
              variant="sun"
              size="md"
              className="md:!px-7 md:!py-3.5 md:!text-base"
            >
              <span>Agendar visita</span>
              <span aria-hidden="true" className="text-base md:text-lg">→</span>
            </Button>
            <a
              href="#attractions"
              className="inline-flex items-center gap-2 text-cream/90 hover:text-sun font-display font-medium text-xs md:text-sm tracking-[0.12em] uppercase px-1 md:px-2 py-2 transition-colors"
            >
              <span>Conhecer espaço</span>
              <span aria-hidden="true">↓</span>
            </a>
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
