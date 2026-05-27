import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { revealFrom } from '../../lib/motion'

const ADDRESS =
  'Estr. Vicinal José Frias Garcia (CTV 461), 150 - Res. Paraíso, Catanduva - SP, 15809-230'
const MAPS_EMBED =
  `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`

export function Location() {
  const reduced = usePrefersReducedMotion()
  const [mapVisible, setMapVisible] = useState(false)
  const mapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = mapRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true)
          obs.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="location" className="section-pad bg-cream-deep relative overflow-hidden">
      <Container>
        <motion.div className="max-w-2xl mb-10" {...revealFrom(reduced, 'left')}>
          <span className="pill-coral">Vem nos ver</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink mt-4 leading-[1.05]">
            A chácara fica em <span className="text-coral">Catanduva</span>.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Marca uma visita pelo WhatsApp — a gente recebe, mostra cada cantinho e tira suas dúvidas no lugar.
          </p>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-5 md:gap-6"
        >
          <div ref={mapRef} className="lg:col-span-7 rounded-3xl overflow-hidden bg-ink/5 aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
            {mapVisible ? (
              <iframe
                src={MAPS_EMBED}
                title="Localização da Tropical Park Kids em Catanduva"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            ) : (
              <div className="h-full w-full grid place-items-center text-ink-soft">
                <span className="text-sm">Carregando o mapa...</span>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 bg-cream rounded-3xl p-6 md:p-8 shadow-soft flex flex-col">
            <div className="flex-1 space-y-5">
              <InfoRow icon="📍" title="Endereço">
                {ADDRESS}
              </InfoRow>
              <InfoRow icon="🕐" title="Visita agendada">
                Combinamos um horário que cabe na sua agenda.
              </InfoRow>
              <InfoRow icon="🎂" title="Datas disponíveis">
                Final de semana e feriado lotam rápido. Garante a sua.
              </InfoRow>
              <InfoRow icon="🚗" title="Estacionamento">
                Privativo, dentro da chácara.
              </InfoRow>
            </div>

            <div className="mt-7">
              <Button
                as="a"
                href={buildWhatsAppUrl('location')}
                target="_blank"
                rel="noopener noreferrer"
                variant="sun"
                size="lg"
                className="w-full"
              >
                <span>Marcar visita pelo WhatsApp</span>
                <span aria-hidden="true" className="text-xl">→</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-2xl shrink-0" aria-hidden="true">{icon}</span>
      <div>
        <p className="font-display font-bold text-ink text-base">{title}</p>
        <p className="text-ink-soft text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  )
}
