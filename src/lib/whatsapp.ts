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
  | 'galeria'
  | 'header'

// Mensagens em tom de descoberta — gatilho de curiosidade, não urgência.
// Cada uma deve gerar uma pergunta que só o WhatsApp resolve.
const messages: Record<SectionContext, string> = {
  hero: 'Olá! Vim pelo site e quero conhecer o espaço!',
  entrada: 'Olá! Como funciona o acesso ao complexo e o estacionamento?',
  atracoes: 'Olá! Quero saber mais sobre a Centopeia e os bichinhos motorizados.',
  gastronomia: 'Olá! Quero conhecer as opções de gastronomia.',
  decoracao: 'Olá! Quero saber como funciona a decoração temática.',
  campo: 'Olá! Como funciona o uso do campo e da área externa?',
  events: 'Olá! Realizam meu tipo de evento? Quero saber mais.',
  opcionais: 'Olá! Quero saber sobre os opcionais para incrementar o evento.',
  faq: 'Olá! Tenho algumas dúvidas sobre o complexo.',
  location: 'Olá! Quero agendar uma visita ao complexo.',
  final: 'Olá! Quero agendar uma visita para conhecer pessoalmente.',
  galeria: 'Olá! Vi a galeria de fotos e quero saber mais sobre o espaço.',
  header: 'Olá! Vim pelo site da Tropical Park Kids e quero conhecer o espaço!',
}

export function buildWhatsAppUrl(section: SectionContext = 'header'): string {
  const text = encodeURIComponent(messages[section])
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

// Versão livre — usada por opcionais.ts, que carrega a própria pergunta.
export function buildWhatsAppUrlFromText(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
