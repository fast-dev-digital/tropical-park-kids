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
  'proof',
  'faq',
  'location',
]

const bubbleMessages = [
  'Agende sua visita guiada',
  'Tire suas dúvidas 24/7',
  'Fale com nosso concierge digital',
  'Consulte a disponibilidade da sua data',
  'Receba o cardápio detalhado',
  'Conheça a Centopeia de pertinho',
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
          transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 1] }}
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
                className="relative max-w-[calc(100vw-5.5rem)] md:max-w-[230px] rounded-md rounded-br-sm bg-white px-4 py-2.5 text-[13px] leading-snug text-ink shadow-editorial ring-1 ring-ink/10 font-body"
              >
                {currentBubble}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 right-3 h-3 w-3 rotate-45 bg-white ring-1 ring-ink/10"
                  style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                />
              </motion.a>
            )}
          </AnimatePresence>

          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com o concierge no WhatsApp"
            whileHover={reduced ? undefined : { scale: 1.06 }}
            whileTap={reduced ? undefined : { scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] shadow-editorial ring-1 ring-black/10 transition-colors hover:bg-[#1ebe5d]"
          >
            {!reduced && (
              <>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-[#25D366]"
                />
              </>
            )}
            <WhatsAppIcon className="relative h-6 w-6 text-white md:h-7 md:w-7" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16 3C9 3 4 8 4 15c0 2 1 5 2 7l-2 7 7-2c2 1 3 1 5 1 7 0 12-5 12-12S23 3 16 3Zm0 22c-2 0-3 0-5-1l-1-1-3 1 1-3-1-1c-1-2-1-3-1-5C6 10 10 6 16 6s10 4 10 10-4 9-10 9Z" />
      <path d="M21 18c-1 0-2-1-2-1s-1 1-1 1c-2-1-4-3-5-5 0 0 1-1 1-2 0 0-1-2-2-2h-1c-1 0-2 1-2 2 0 4 5 10 10 11 1 0 2-1 2-2v-2Z" />
    </svg>
  )
}
