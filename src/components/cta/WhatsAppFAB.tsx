import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { buildWhatsAppUrl, type SectionContext } from '../../lib/whatsapp'
import { useActiveSection } from '../../hooks/useActiveSection'

const sectionIds: SectionContext[] = [
  'hero',
  'structure',
  'events',
  'menus',
  'location',
]

const labelMap: Record<SectionContext, string> = {
  hero: 'Tire suas dúvidas com nosso Concierge',
  structure: 'Quer ver pessoalmente? Agende uma visita',
  events: 'Que tipo de evento você está planejando?',
  menus: 'Quer o cardápio completo? Fale com o Concierge',
  location: 'Vamos marcar sua visita?',
  header: 'Fale com o Concierge Digital',
}

export function WhatsAppFAB() {
  const active = useActiveSection(sectionIds, 'hero')
  const [visible, setVisible] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const prevActive = useRef<SectionContext | null>(null)

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(true)
      setTooltipOpen(true)
      const auto = setTimeout(() => setTooltipOpen(false), 5000)
      ;(t as unknown as { _auto?: ReturnType<typeof setTimeout> })._auto = auto
    }, 1800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!visible) return
    if (prevActive.current === active) return
    prevActive.current = active
    setTooltipOpen(true)
    const t = setTimeout(() => setTooltipOpen(false), 5000)
    return () => clearTimeout(t)
  }, [active, visible])

  const href = useMemo(() => buildWhatsAppUrl(active), [active])
  const label = labelMap[active]

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 40 }}
          transition={{ type: 'spring', stiffness: 240, damping: 18 }}
          className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 flex items-end gap-3"
        >
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 12, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="hidden sm:flex items-center gap-2 mb-1 mr-1 bg-white rounded-2xl shadow-2xl px-4 py-3 max-w-[260px] border border-slate-200 relative"
              >
                <span className="text-sm text-ink font-medium leading-snug">
                  {label}
                </span>
                <button
                  type="button"
                  onClick={() => setTooltipOpen(false)}
                  aria-label="Fechar dica"
                  className="text-ink-muted hover:text-ink p-1 -m-1"
                >
                  <X size={14} />
                </button>
                <span
                  className="absolute -right-1.5 bottom-5 h-3 w-3 bg-white border-r border-b border-slate-200 rotate-[-45deg]"
                  aria-hidden="true"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setTooltipOpen(true)}
            className="relative flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 animate-pulse-soft"
          >
            <MessageCircle size={28} strokeWidth={2.2} />
            <span className="sr-only">Falar com o Concierge Digital no WhatsApp</span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
