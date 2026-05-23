export const WHATSAPP_NUMBER = '5517999999999'

export type SectionContext =
  | 'hero'
  | 'structure'
  | 'events'
  | 'menus'
  | 'location'
  | 'header'

const messages: Record<SectionContext, string> = {
  hero: 'Olá! Vim pelo site da Tropical Park Kids e gostaria de conhecer a estrutura da chácara.',
  structure:
    'Olá! Vi as fotos da chácara no site e gostaria de agendar uma visita presencial.',
  events:
    'Olá! Tenho interesse em realizar um evento na Tropical Park Kids. Pode me passar mais detalhes?',
  menus:
    'Olá! Gostaria de receber o detalhamento dos cardápios disponíveis para minha data.',
  location:
    'Olá! Gostaria de informações sobre como chegar e disponibilidade de agenda da chácara.',
  header:
    'Olá! Gostaria de falar com o Concierge Digital da Tropical Park Kids.',
}

export function buildWhatsAppUrl(section: SectionContext = 'header'): string {
  const text = encodeURIComponent(messages[section])
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
