import { useEffect, useState } from 'react'
import type { SectionContext } from '../lib/whatsapp'

export function useActiveSection(
  ids: SectionContext[],
  fallback: SectionContext = 'header',
): SectionContext {
  const [active, setActive] = useState<SectionContext>(fallback)

  useEffect(() => {
    const elements = ids
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((x): x is { id: SectionContext; el: HTMLElement } => !!x.el)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          const match = elements.find((e) => e.el === visible.target)
          if (match) setActive(match.id)
        }
      },
      { threshold: [0.3, 0.6] },
    )

    elements.forEach(({ el }) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
