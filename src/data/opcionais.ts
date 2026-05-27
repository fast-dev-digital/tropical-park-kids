// Opcionais — chips de descoberta. Não detalham nada.
// Cada chip abre WhatsApp com uma pergunta específica → mantém o gatilho de curiosidade.
export type Opcional = {
  id: string
  label: string
  question: string
}

export const opcionais: Opcional[] = [
  {
    id: 'bolo-cenografico',
    label: 'Bolo cenográfico',
    question: 'Olá! Queria saber sobre o bolo cenográfico opcional.',
  },
  {
    id: 'lembrancinha',
    label: 'Lembrancinha personalizada',
    question: 'Olá! Como funciona a lembrancinha personalizada?',
  },
  {
    id: 'decoracao-tema',
    label: 'Decoração temática completa',
    question: 'Olá! Quero saber sobre decoração temática completa.',
  },
  {
    id: 'animacao',
    label: 'Animação especial',
    question: 'Olá! Vocês oferecem animação especial?',
  },
  {
    id: 'fotografia',
    label: 'Fotografia e vídeo',
    question: 'Olá! Como funciona o serviço de fotografia/vídeo?',
  },
  {
    id: 'open-bar',
    label: 'Open bar adulto',
    question: 'Olá! Vocês têm opção de open bar para os adultos?',
  },
  {
    id: 'horario-estendido',
    label: 'Horário estendido',
    question: 'Olá! É possível estender o horário da festa?',
  },
  {
    id: 'convidados-extras',
    label: 'Convidados extras',
    question: 'Olá! Como funciona se eu tiver convidados acima do combinado?',
  },
]
