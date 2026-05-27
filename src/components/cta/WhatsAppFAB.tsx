import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { buildWhatsAppUrl, type SectionContext } from '../../lib/whatsapp'
import { useActiveSection } from '../../hooks/useActiveSection'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const sectionIds: SectionContext[] = [
  'hero',
  'entrada',
  'atracoes',
  'gastronomia',
  'decoracao',
  'campo',
  'events',
  'opcionais',
  'faq',
  'location',
  'final',
]

// Bubbles em tom de descoberta — verbos de ação que induzem curiosidade.
const bubbleMessages = [
  'Descubra os detalhes',
  'Pergunte sobre datas',
  'Veja como funciona',
  'Solicite a proposta',
  'Marque uma visita',
  'Tire suas dúvidas',
]

const BUBBLE_INTERVAL_MS = 30000
const BUBBLE_VISIBLE_MS = 6000

export function WhatsAppFAB() {
  const active = useActiveSection(sectionIds, 'hero')
  const [visible, setVisible] = useState(false)
  const [bubbleIndex, setBubbleIndex] = useState<number | null>(null)
  const reduced = usePrefersReducedMotion()
  const rotationRef = useRef(0)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1400)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!visible || reduced) return

    let hideTimer: ReturnType<typeof setTimeout>

    const showBubble = () => {
      const next = rotationRef.current % bubbleMessages.length
      rotationRef.current += 1
      setBubbleIndex(next)
      hideTimer = setTimeout(() => setBubbleIndex(null), BUBBLE_VISIBLE_MS)
    }

    const firstTimer = setTimeout(showBubble, 4000)
    const interval = setInterval(showBubble, BUBBLE_INTERVAL_MS)

    return () => {
      clearTimeout(firstTimer)
      clearTimeout(hideTimer)
      clearInterval(interval)
    }
  }, [visible, reduced])

  const href = useMemo(() => buildWhatsAppUrl(active), [active])
  const currentBubble = bubbleIndex !== null ? bubbleMessages[bubbleIndex] : null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 1] }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {currentBubble && (
              <motion.a
                key={currentBubble}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={reduced ? false : { opacity: 0, x: 12, scale: 0.92 }}
                animate={reduced ? undefined : { opacity: 1, x: 0, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, x: 12, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 1] }}
                className="relative max-w-[calc(100vw-5.5rem)] md:max-w-[240px] rounded-2xl rounded-br-sm bg-cream px-4 py-2.5 text-[13px] leading-snug text-ink shadow-soft ring-1 ring-ink/10 font-body font-semibold"
              >
                {currentBubble}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 right-3 h-3 w-3 rotate-45 bg-cream ring-1 ring-ink/10"
                  style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                />
              </motion.a>
            )}
          </AnimatePresence>

          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            whileHover={reduced ? undefined : { scale: 1.08 }}
            whileTap={reduced ? undefined : { scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#25D366] shadow-playful ring-2 ring-cream transition-colors hover:bg-[#1ebe5d]"
          >
            {!reduced && (
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping"
              />
            )}
            <WhatsAppIcon className="relative h-7 w-7 text-white md:h-8 md:w-8" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.1-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5l-.9-2.1c-.2-.5-.5-.4-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1.1 2.8 1.2 3 .1.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.3c1.4.7 3 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 15.2 3.6 13.6 3.6 12 3.6 7.4 7.4 3.6 12 3.6S20.4 7.4 20.4 12 16.6 20.3 12 20.3z" />
    </svg>
  )
}
