export type Differential = {
  id: string
  icon: string
  title: string
  description: string
}

export const differentials: Differential[] = [
  {
    id: 'estacionamento',
    icon: '🚗',
    title: 'Estacionamento privativo',
    description:
      'Único buffet da região dentro de uma chácara com estacionamento próprio cercado. Seus convidados não vão dar volta no quarteirão.',
  },
  {
    id: 'chacara',
    icon: '🌳',
    title: 'Chácara aberta, com natureza',
    description:
      'Não é galpão fechado. É chácara de verdade — área externa, ar livre, espaço pra criança respirar e correr.',
  },
  {
    id: 'campo',
    icon: '⚽',
    title: 'Campo de futebol 12×18',
    description:
      'Quadra poliesportiva pra recreação e brincadeira coletiva. Festa de menino vira partidão.',
  },
  {
    id: 'fartura',
    icon: '🍰',
    title: 'Buffet com fartura',
    description:
      'A gente serve até o fim. Ninguém sai com fome, ninguém recebe reclamação de comida que acabou.',
  },
  {
    id: 'seguranca',
    icon: '🛡️',
    title: 'Equipe que cuida',
    description:
      'Monitores treinados, brinquedos com manutenção em dia, ambiente fechado e seguro pra criança soltar.',
  },
  {
    id: 'flexibilidade',
    icon: '🎀',
    title: 'Festa do jeitinho que você sonhou',
    description:
      'Tema, decoração, lembrancinha — a gente adapta pro que a aniversariante (e você) imaginou.',
  },
]
