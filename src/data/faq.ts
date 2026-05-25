export type FAQItem = {
  id: string
  question: string
  answer: string
  bullets?: string[]
}

export const faq: FAQItem[] = [
  {
    id: 'data-fechada',
    question: 'Vocês trabalham com agenda exclusiva no dia do evento?',
    answer:
      'Sim. Um único evento por data, sem divisão de estrutura.',
    bullets: [
      'Chácara inteira reservada para a sua celebração',
      'Equipe dedicada do início ao fim',
      'Estacionamento exclusivo do evento',
    ],
  },
  {
    id: 'visita',
    question: 'Posso visitar a chácara antes de decidir?',
    answer:
      'Recomendamos — agendamos visitas guiadas sem compromisso.',
    bullets: [
      'Sentir a atmosfera do espaço',
      'Conhecer a equipe pessoalmente',
      'Validar a proposta para o evento que você imagina',
    ],
  },
  {
    id: 'cardapio',
    question: 'O cardápio pode ser personalizado para o meu evento?',
    answer:
      'Sim. Os cinco cardápios são ponto de partida, não jaula.',
    bullets: [
      'Seleção de pratos ajustada ao perfil dos convidados',
      'Restrições alimentares atendidas',
      'Mesas temáticas e estações especiais',
    ],
  },
  {
    id: 'adulto',
    question: 'A chácara comporta cerimônia adulta (casamento, 15 anos, corporativo)?',
    answer:
      'Sim. O espaço opera em duas camadas — você escolhe o tom.',
    bullets: [
      'Cerimônia e recepção adulta sofisticadas',
      'Infraestrutura completa para festa infantil',
      'Cenário montado conforme a ocasião',
    ],
  },
  {
    id: 'reserva',
    question: 'Como funciona a reserva da data?',
    answer:
      'Confirmada por contrato após o aceite da proposta personalizada.',
    bullets: [
      'Checar disponibilidade da data pelo WhatsApp',
      'Receber orçamento detalhado',
      'Confirmar a reserva por contrato',
    ],
  },
  {
    id: 'incluso',
    question: 'O que está incluído na proposta?',
    answer:
      'Estrutura, equipe, montagem e atrações — alinhadas ao seu evento.',
    bullets: [
      'Área coberta, gramado, quadra e estacionamento privativo',
      'Equipe de cozinha e salão',
      'Montagem e suporte de produção',
      'Atrações exclusivas conforme pacote escolhido',
    ],
  },
]
