import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { EditorialMark } from '../ui/EditorialMark'
import { Button } from '../ui/Button'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const highlights = [
  {
    num: '01',
    label: 'Região rural — Catanduva, SP',
    desc: 'Fácil acesso pela rodovia, estacionamento privativo dentro da propriedade.',
  },
  {
    num: '02',
    label: 'Visitas com hora marcada',
    desc: 'Manhã ou tarde, sem compromisso. Você caminha pela chácara com nossa equipe.',
  },
  {
    num: '03',
    label: 'Concierge no WhatsApp',
    desc: 'Atendimento humano em horário comercial. Sem bots, sem fila de chat.',
  },
]

function useInViewOnce<T extends Element>(rootMargin = '300px') {
  const ref = useRef<T | null>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || seen) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSeen(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, seen])

  return { ref, seen }
}

export function Location() {
  const { ref, seen } = useInViewOnce<HTMLDivElement>()
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="location"
      className="section-padding bg-parchment-deep relative"
    >
      <Container>
        <EditorialMark
          number="08"
          kicker="Visitar a chácara"
          title={
            <>
              A melhor forma de decidir{' '}
              <em
                className="italic"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
              >
                é caminhar
              </em>{' '}
              pelo terreno.
            </>
          }
          lede="A foto não consegue contar o tamanho do gramado nem a sombra das árvores. Marque uma visita guiada — em meio dia você sai com decisão tomada."
        />

        <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            ref={ref}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[5/4] bg-forest/10 overflow-hidden"
          >
            {seen ? (
              <iframe
                title="Localização da Tropical Park Kids em Catanduva"
                src="https://www.google.com/maps?q=Catanduva,+SP&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0 filter saturate-[0.85]"
                allowFullScreen
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center text-forest/30"
                aria-hidden="true"
              >
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.22em]"
                  style={{ fontFeatureSettings: '"tnum"' }}
                >
                  Carregando mapa
                </span>
              </div>
            )}
          </motion.div>

          <div className="lg:col-span-5 lg:pl-4">
            <ol>
              {highlights.map((h, i) => (
                <motion.li
                  key={h.num}
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="grid grid-cols-12 gap-3 items-baseline border-t border-ink/15 py-7 last:border-b last:border-ink/15"
                >
                  <span
                    className="col-span-2 font-mono text-number uppercase text-ember"
                    style={{ fontFeatureSettings: '"tnum"' }}
                  >
                    {h.num}
                  </span>
                  <div className="col-span-10">
                    <h3
                      className="font-display font-light text-xl md:text-2xl leading-[1.15] tracking-[-0.012em] text-forest"
                      style={{ fontVariationSettings: '"opsz" 48, "SOFT" 30' }}
                    >
                      {h.label}
                    </h3>
                    <p className="mt-2 text-ink-soft leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <div className="mt-10">
              <Button
                as="a"
                href={buildWhatsAppUrl('location')}
                target="_blank"
                rel="noopener noreferrer"
                variant="solid"
                size="lg"
                className="w-full sm:w-auto"
              >
                <span>Agendar minha visita</span>
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
