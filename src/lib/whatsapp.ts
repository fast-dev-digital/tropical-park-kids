export const WHATSAPP_NUMBER = '5517997756925'

export type SectionContext =
  | 'hero'
  | 'promise'
  | 'attractions'
  | 'gallery'
  | 'events'
  | 'menus'
  | 'proof'
  | 'differentials'
  | 'location'
  | 'faq'
  | 'final'
  | 'header'

const messages: Record<SectionContext, string> = {
  hero: 'Oi! Vim pelo site e quero saber como fazer a festa do meu filho aí na Tropical Park.',
  promise: 'Oi! Vim pelo site da Tropical Park e quero entender como funciona — pode me ajudar?',
  attractions:
    'Oi! Vi a Centopeia e os bichinhos no site — meu filho vai amar. Como faço pra reservar uma festa?',
  gallery:
    'Oi! Vi as fotos da galeria e gostei muito. Como faço pra agendar uma visita e conhecer a chácara?',
  events:
    'Oi! Quero saber mais sobre os tipos de festa que vocês fazem — pode me passar mais detalhes?',
  menus:
    'Oi! Queria ver as opções de cardápio pra montar a festa do meu filho.',
  proof:
    'Oi! Li os depoimentos das outras mães e quero conhecer a chácara — como agendo uma visita?',
  differentials:
    'Oi! Vi que tem estacionamento privativo e campo de futebol — quero entender melhor a estrutura.',
  location: 'Oi! Queria saber como chegar e qual a melhor data pra visitar a chácara.',
  faq: 'Oi! Tenho algumas dúvidas sobre a festa antes de fechar. Pode me ajudar?',
  final: 'Oi! Quero marcar uma visita na chácara pra conhecer e fazer a festa do meu filho aí.',
  header: 'Oi! Vim pelo site da Tropical Park Kids e quero fazer um orçamento.',
}

export function buildWhatsAppUrl(section: SectionContext = 'header'): string {
  const text = encodeURIComponent(messages[section])
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
