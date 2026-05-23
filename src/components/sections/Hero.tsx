import { motion } from 'framer-motion'
import { ArrowDown, MessageCircle } from 'lucide-react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const POSTER =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=70'
const VIDEO_MP4 =
  'https://cdn.coverr.co/videos/coverr-wedding-decoration-7156/1080p.mp4'

export function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      aria-label="Apresentação da Tropical Park Kids"
    >
      <div className="absolute inset-0 z-0">
        {reduced ? (
          <img
            src={POSTER}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        ) : (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={POSTER}
            aria-hidden="true"
          >
            <source src={VIDEO_MP4} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <Container className="relative z-10 text-center text-white py-32">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-[0.2em] uppercase mb-6"
        >
          Catanduva & Região
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-premium text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl mx-auto drop-shadow-lg"
        >
          Sua Chácara Exclusiva para{' '}
          <span className="text-brand-gold">Eventos Inesquecíveis</span> em
          Catanduva.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
        >
          Infraestrutura completa, brinquedos modernos e 5 cardápios exclusivos
          para Casamentos, 15 Anos, Festas Infantis e Eventos Corporativos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            as="a"
            href="#structure"
            variant="primary"
            size="lg"
            pulse
          >
            Conhecer Estrutura
            <ArrowDown size={20} />
          </Button>
          <Button
            as="a"
            href={buildWhatsAppUrl('hero')}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </Button>
        </motion.div>

        <motion.a
          href="#structure"
          aria-label="Rolar para a próxima seção"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white animate-bounce-gentle"
        >
          <ArrowDown size={28} />
        </motion.a>
      </Container>
    </section>
  )
}
