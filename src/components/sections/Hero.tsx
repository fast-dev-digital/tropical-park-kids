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
      aria-label="Tropical Park Kids — a festa que ele vai lembrar pra sempre"
    >
      {/* Camada extra de iluminação amena no topo, pra reforçar o glow amarelo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% -15%, rgba(255,224,138,0.18), transparent 55%)',
        }}
      />

      <Container className="relative z-10 min-h-[100svh] flex flex-col pt-24 md:pt-28 pb-16 md:pb-20">
        {/* Pílula no topo */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: -8 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-sun text-ink px-4 py-1.5 text-sm font-bold shadow-playful">
            <span className="inline-block h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
            Buffet infantil · Catanduva
          </span>
        </motion.div>

        {/* Grid principal: conteúdo + logo */}
        <div className="mt-10 md:mt-0 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Coluna do conteúdo */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-bold text-cream leading-[1.04] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)' }}
            >
              A festa que vocês vão{' '}
              <span className="relative inline-block">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-6px] top-[58%] bottom-[6%] bg-sun -rotate-2 rounded-md"
                />
                <span className="relative z-10 text-cream">se lembrar</span>
              </span>{' '}
              pra sempre.
            </motion.h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-6 max-w-xl text-lg md:text-xl text-cream/95 leading-relaxed font-medium"
            >
              Buffet infantil em uma chácara de verdade. Trenzinho, campo de futebol,
              brinquedão e fartura — pra criança brincar o dia inteiro e a mãe
              curtir sem preocupação.
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Button
                as="a"
                href={buildWhatsAppUrl('hero')}
                target="_blank"
                rel="noopener noreferrer"
                variant="sun"
                size="lg"
              >
                <span>Quero fazer minha festa aqui</span>
                <span aria-hidden="true" className="text-xl">→</span>
              </Button>
              <a
                href="#attractions"
                className="inline-flex items-center justify-center gap-2 text-cream font-bold text-base px-2 py-2 hover:text-sun transition-colors"
              >
                <span>Ver as atrações</span>
                <span aria-hidden="true">↓</span>
              </a>
            </motion.div>

            {/* Pilares rápidos */}
            <motion.ul
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
            >
              <HeroPillar icon="🚗" label="Estacionamento privativo" />
              <HeroPillar icon="⚽" label="Campo 12×18" />
              <HeroPillar icon="🚂" label="Trenzinho Centopeia" />
              <HeroPillar icon="🍰" label="Buffet farto" />
            </motion.ul>
          </div>

          {/* Coluna do logo */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.92 }}
            animate={reduced ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.65, 0.3, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
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
      </Container>
    </section>
  )
}

function HeroPillar({ icon, label }: { icon: string; label: string }) {
  return (
    <li className="flex items-center gap-2 rounded-2xl bg-cream/15 backdrop-blur-sm border border-cream/20 px-3 py-2.5">
      <span className="text-xl" aria-hidden="true">{icon}</span>
      <span className="text-cream text-xs sm:text-sm font-bold leading-tight">{label}</span>
    </li>
  )
}
