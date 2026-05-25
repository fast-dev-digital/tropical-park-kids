// TODO: substituir o número de WhatsApp pelo do cliente Ricardo antes do launch.
export const WHATSAPP_NUMBER = '5517999999999'

export type SectionContext =
  | 'hero'
  | 'attractions'
  | 'differentials'
  | 'structure'
  | 'events'
  | 'menus'
  | 'trust'
  | 'proof'
  | 'faq'
  | 'location'
  | 'header'

const messages: Record<SectionContext, string> = {
  hero: 'Olá! Vim pelo site da Tropical Park Kids e gostaria de conhecer a experiência da chácara.',
  attractions:
    'Olá! Vi a Centopeia e os bichinhos do shopping no site — quero levar essa experiência para o meu evento.',
  differentials:
    'Olá! Quero entender melhor o estacionamento privativo e a estrutura aberta da chácara.',
  structure:
    'Olá! Vi as fotos da chácara no site e gostaria de agendar uma visita presencial.',
  events:
    'Olá! Tenho interesse em realizar um evento na Tropical Park Kids. Pode me passar mais detalhes?',
  menus:
    'Olá! Gostaria de receber o detalhamento dos cardápios disponíveis para a minha data.',
  trust:
    'Olá! Quero conversar sobre a disponibilidade de agenda e como funciona a reserva.',
  proof:
    'Olá! Gostaria de sentir melhor a estrutura da chácara em uma visita guiada.',
  faq: 'Olá! Tenho perguntas específicas antes de fechar e gostaria de falar com o Concierge.',
  location:
    'Olá! Gostaria de informações sobre como chegar e disponibilidade de agenda da chácara.',
  header:
    'Olá! Gostaria de falar com o Concierge Digital da Tropical Park Kids.',
}

export function buildWhatsAppUrl(section: SectionContext = 'header'): string {
  const text = encodeURIComponent(messages[section])
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
