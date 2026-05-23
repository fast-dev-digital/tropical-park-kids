import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionTitle } from '../ui/SectionTitle'
import { Button } from '../ui/Button'
import { attractions } from '../../data/attractions'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const accentBadge = {
  gold: 'bg-brand-gold text-ink',
  coral: 'bg-playful-coral text-white',
} as const

const accentRing = {
  gold: 'ring-brand-gold/30',
  coral: 'ring-playful-coral/30',
} as const

const accentIcon = {
  gold: 'text-brand-gold',
  coral: 'text-playful-coral',
} as const

export function ExclusiveAttractions() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="attractions" className="section-padding bg-white">
      <Container>
        <SectionTitle
          eyebrow="O Fator UAU"
          title={
            <>
              Atrações que <span className="text-brand-gold">ninguém mais tem</span> na região
            </>
          }
          subtitle="Duas experiências exclusivas que transformam a festa em memória — o tipo de detalhe que faz convidado parar de comer pra filmar."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {attractions.map((a, i) => {
            const Icon = a.icon
            return (
              <motion.article
                key={a.id}
                initial={reduced ? false : { opacity: 0, y: 32 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ${accentRing[a.accent]} hover:shadow-2xl transition-shadow duration-500`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* TODO: ASSET REAL DO CLIENTE — foto/vídeo curto da atração */}
                  <img
                    src={a.image}
                    alt={a.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-royal-dark/60 via-transparent to-transparent" />
                  <span
                    className={`absolute top-4 left-4 inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full shadow-md ${accentBadge[a.accent]}`}
                  >
                    {a.badge}
                  </span>
                </div>

                <div className="p-7 md:p-9">
                  <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase text-ink-muted">
                    <Icon size={16} className={accentIcon[a.accent]} />
                    {a.tagline}
                  </div>
                  <h3 className="mt-3 font-display font-bold text-2xl md:text-3xl text-brand-royal leading-tight">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-ink-muted leading-relaxed">
                    {a.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {a.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-ink"
                      >
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${a.accent === 'gold' ? 'bg-brand-gold' : 'bg-playful-coral'}`}
                          aria-hidden="true"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <Button
            as="a"
            href={buildWhatsAppUrl('attractions')}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
          >
            <MessageCircle size={20} />
            Quero essa experiência no meu evento
          </Button>
        </div>
      </Container>
    </section>
  )
}
