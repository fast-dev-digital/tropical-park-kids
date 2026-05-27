export type FaqItem = {
  q: string
  a: string
}

// Respostas curtas. Sem prosa. Quando faz sentido, redireciona pro WhatsApp.
export const faq: FaqItem[] = [
  {
    q: 'Qual a capacidade do espaço?',
    a: 'De 50 a 250 convidados, com folga.',
  },
  {
    q: 'Vocês fazem a decoração temática?',
    a: 'Sim — fechamos com você ou recebemos a sua equipe.',
  },
  {
    q: 'Como funciona a recreação?',
    a: 'Monitores treinados acompanham as atrações e a brincadeira livre.',
  },
  {
    q: 'Há estacionamento para os convidados?',
    a: 'Privativo, interno, cercado. Único da região.',
  },
  {
    q: 'Como recebo a proposta comercial?',
    a: 'Pelo WhatsApp. Cada evento tem uma proposta sob medida.',
  },
  {
    q: 'Posso visitar antes de fechar?',
    a: 'Sim — agendamos pelo WhatsApp.',
  },
  {
    q: 'Atendem restrições alimentares?',
    a: 'Vegetariano, sem lactose, sem glúten — basta avisar.',
  },
  {
    q: 'Realizam outros tipos de evento?',
    a: 'Casamento, 15 anos, formatura, corporativo e bodas.',
  },
]
