import { motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  GraduationCap,
  Heart,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '../ui/Container'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { eventTypes } from '../../data/eventTypes'
import { popIn, revealFrom } from '../../lib/motion'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

// Festa infantil mantém foto (especialidade — visual vende).
// Demais tipos viram ícone sobre fundo cor accent — sem imagem.
// Decisão: foto adulta = ambígua / redundante com Chapters. Ícone = leitura instantânea.
const eventIcons: Record<string, LucideIcon> = {
  quinze: Sparkles,
  casamento: Heart,
  formatura: GraduationCap,
  corporativo: BriefcaseBusiness,
}

const accentBg: Record<string, string> = {
  coral: 'bg-coral',
  sun: 'bg-sun',
  grass: 'bg-grass',
  sky: 'bg-sky',
  grape: 'bg-grape',
}
const accentText: Record<string, string> = {
  coral: 'text-cream',
  sun: 'text-ink',
  grass: 'text-cream',
  sky: 'text-cream',
  grape: 'text-cream',
}

export function EventTypes() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="events" className="section-pad bg-cream-deep relative overflow-hidden">
      <Container>
        <motion.div className="max-w-2xl mb-8 md:mb-10" {...revealFrom(reduced, 'left')}>
          <span className="inline-block font-display text-xs tracking-[0.22em] uppercase text-grass-deep font-semibold">
            Tipos de evento
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-ink mt-4 leading-[1.02]">
            O que rola por aqui.
          </h2>
        </motion.div>

        <ul className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {eventTypes.map((e, i) => {
            const Icon = eventIcons[e.id]
            const isHighlight = !!e.highlight
            const accent = e.accent
            const cardClass = isHighlight
              ? 'col-span-2 md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto bg-ink'
              : `aspect-[3/4] ${accentBg[accent]}`

            return (
              <motion.li
                key={e.id}
                {...popIn(reduced, i * 0.05)}
                className={`relative overflow-hidden rounded-2xl group ${cardClass}`}
              >
                <a
                  href={buildWhatsAppUrl('events')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex flex-col"
                  aria-label={`Perguntar sobre ${e.name} no WhatsApp`}
                >
                  {isHighlight ? (
                    <>
                      <img
                        src={e.media.src}
                        alt={e.media.alt}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                      <div className="relative mt-auto p-4 md:p-5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-sun text-ink px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] uppercase mb-2">
                          <span className="h-1 w-1 rounded-full bg-coral" />
                          Especialidade
                        </span>
                        <p className="font-display font-bold text-cream text-lg md:text-2xl leading-tight">
                          {e.name}
                        </p>
                      </div>
                    </>
                  ) : (
                    // Card de ícone — sem foto. Ícone grande centralizado + nome embaixo.
                    <div className={`flex h-full w-full flex-col items-center justify-center p-4 md:p-5 text-center ${accentText[accent]} transition-transform duration-300 group-hover:scale-[1.02]`}>
                      {Icon && (
                        <Icon
                          size={48}
                          strokeWidth={1.5}
                          aria-hidden="true"
                          className="md:h-16 md:w-16 mb-3 opacity-95"
                        />
                      )}
                      <p className="font-display font-bold text-base md:text-xl leading-tight">
                        {e.name}
                      </p>
                    </div>
                  )}
                </a>
              </motion.li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
