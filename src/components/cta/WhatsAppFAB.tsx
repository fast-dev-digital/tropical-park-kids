import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { buildWhatsAppUrl, type SectionContext } from '../../lib/whatsapp'
import { useActiveSection } from '../../hooks/useActiveSection'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const sectionIds: SectionContext[] = [
  'hero',
  'attractions',
  'differentials',
  'structure',
  'events',
  'menus',
  'trust',
  'faq',
  'location',
]

const labelMap: Record<SectionContext, string> = {
  hero: 'Fale com o concierge',
  attractions: 'Quero essa atração no meu evento',
  differentials: 'Conhecer pessoalmente',
  structure: 'Agendar uma visita',
  events: 'Conversar sobre meu evento',
  menus: 'Receber o cardápio detalhado',
  trust: 'Consultar minha data',
  faq: 'Tenho mais perguntas',
  location: 'Marcar uma visita',
  header: 'Falar com o concierge',
}

export function WhatsAppFAB() {
  const active = useActiveSection(sectionIds, 'hero')
  const [visible, setVisible] = useState(false)
  const reduced = usePrefersReducedMotion()
  const prevActive = useRef<SectionContext | null>(null)
  const [labelKey, setLabelKey] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1400)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (prevActive.current === active) return
    prevActive.current = active
    setLabelKey((k) => k + 1)
  }, [active])

  const href = useMemo(() => buildWhatsAppUrl(active), [active])
  const label = labelMap[active]

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 1] }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 group"
        >
          <span className="flex items-center gap-3 bg-forest text-parchment shadow-editorial pl-5 pr-4 py-3.5 transition-colors duration-300 hover:bg-forest-deep">
            <span className="relative h-2 w-2 shrink-0">
              <span className="absolute inset-0 rounded-full bg-ember" aria-hidden="true" />
              {!reduced && (
                <span
                  className="absolute inset-0 rounded-full bg-ember/60 animate-ping"
                  aria-hidden="true"
                />
              )}
            </span>
            <span className="hidden sm:inline-flex flex-col leading-none min-w-[140px] overflow-hidden">
              <span
                className="font-mono text-[9px] uppercase tracking-[0.28em] text-parchment/60"
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                Concierge · WhatsApp
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={labelKey}
                  initial={reduced ? false : { opacity: 0, y: 6 }}
                  animate={reduced ? undefined : { opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="font-body text-[13px] mt-1.5"
                >
                  {label}
                </motion.span>
              </AnimatePresence>
            </span>
            <span
              className="font-mono text-base ml-1 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
