export type FAQItem = {
  id: string
  question: string
  answer: string
}

export const faq: FAQItem[] = [
  {
    id: 'data-fechada',
    question: 'Vocês trabalham com agenda exclusiva no dia do evento?',
    answer:
      'Sim. A chácara é reservada inteira para um único evento por data. Você não divide estrutura, equipe nem estacionamento com nenhuma outra festa — toda a operação é dedicada à sua celebração.',
  },
  {
    id: 'visita',
    question: 'Posso visitar a chácara antes de decidir?',
    answer:
      'Recomendamos. Agendamos visitas guiadas com hora marcada, sem compromisso, para você sentir a atmosfera, conhecer a equipe e validar se a proposta combina com o evento que você imagina.',
  },
  {
    id: 'cardapio',
    question: 'O cardápio pode ser personalizado para o meu evento?',
    answer:
      'Sim. Nossos cinco cardápios são pontos de partida, não jaulas. Adaptamos seleção de pratos, restrições alimentares, mesas temáticas e estações especiais conforme o perfil dos seus convidados.',
  },
  {
    id: 'adulto',
    question: 'A chácara comporta cerimônia adulta (casamento, 15 anos, corporativo)?',
    answer:
      'Sim. O espaço foi pensado em duas camadas: ambiente sofisticado para cerimônia e recepção adulta, e infraestrutura completa de festa infantil quando a ocasião pede. Você escolhe o tom; nós montamos o cenário.',
  },
  {
    id: 'reserva',
    question: 'Como funciona a reserva da data?',
    answer:
      'A reserva é confirmada por contrato após o aceite da proposta personalizada. Fale com o Concierge Digital pelo WhatsApp para checar a disponibilidade da sua data e receber o orçamento detalhado.',
  },
  {
    id: 'incluso',
    question: 'O que está incluído na proposta?',
    answer:
      'Estrutura completa da chácara (área coberta, gramado, quadra, estacionamento privativo), equipe de cozinha e salão, montagem, atrações exclusivas conforme pacote escolhido e suporte de produção. Os detalhes específicos do seu evento são alinhados pessoalmente.',
  },
]
