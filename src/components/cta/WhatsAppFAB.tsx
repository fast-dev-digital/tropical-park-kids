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
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex flex-col items-end gap-3"
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
                className="relative max-w-[230px] rounded-2xl rounded-br-sm bg-white px-4 py-2.5 text-[13px] leading-snug text-ink shadow-editorial ring-1 ring-ink/10 font-body"
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
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-editorial ring-1 ring-black/10 transition-colors hover:bg-[#1ebe5d]"
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
            <svg
              viewBox="0 0 32 32"
              className="relative h-7 w-7 fill-white"
              aria-hidden="true"
            >
              <path d="M16.001 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.255.59 4.46 1.713 6.404L3.2 28.8l6.55-1.72A12.78 12.78 0 0 0 16.001 28.8C23.07 28.8 28.8 23.07 28.8 16S23.07 3.2 16.001 3.2Zm0 23.36a10.55 10.55 0 0 1-5.376-1.469l-.385-.229-3.886 1.02 1.038-3.789-.251-.39A10.561 10.561 0 1 1 16.001 26.56Zm5.792-7.91c-.317-.159-1.877-.927-2.168-1.033-.291-.106-.502-.158-.713.16-.211.317-.819 1.032-1.004 1.243-.185.211-.37.238-.687.08-.317-.16-1.339-.494-2.55-1.575-.942-.84-1.578-1.879-1.764-2.196-.185-.317-.02-.488.139-.646.143-.142.317-.37.476-.555.158-.185.211-.317.317-.528.106-.211.053-.396-.026-.555-.08-.158-.713-1.719-.977-2.353-.257-.617-.519-.534-.713-.544l-.608-.011a1.17 1.17 0 0 0-.846.396c-.291.317-1.11 1.085-1.11 2.646 0 1.56 1.137 3.067 1.295 3.278.158.211 2.236 3.416 5.418 4.79.757.327 1.347.522 1.807.668.759.241 1.45.207 1.996.126.609-.091 1.877-.767 2.142-1.508.265-.74.265-1.375.185-1.508-.079-.132-.291-.211-.608-.37Z" />
            </svg>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
