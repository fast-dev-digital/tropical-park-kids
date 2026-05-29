export const WHATSAPP_NUMBER = '5517997756925'

// SectionContext mapeia 1:1 com as âncoras renderizadas em App.tsx (v2.2).
// Sempre que adicionar uma nova section com `id="..."`, adicionar aqui também
// e atualizar o array `sectionIds` em WhatsAppFAB.tsx.
export type SectionContext =
  | 'hero'
  | 'entrada'
  | 'atracoes'
  | 'gastronomia'
  | 'decoracao'
  | 'campo'
  | 'events'
  | 'opcionais'
  | 'faq'
  | 'location'
  | 'final'
  | 'header'

// Mensagem única para todos os pontos que levam ao WhatsApp.
const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Tropical Park Kids e quero conhecer o espaço!'

export function buildWhatsAppUrl(_section: SectionContext = 'header'): string {
  const text = encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

// Mantém compatibilidade com chamadas que antes passavam uma pergunta específica.
export function buildWhatsAppUrlFromText(_text: string): string {
  return buildWhatsAppUrl('header')
}
