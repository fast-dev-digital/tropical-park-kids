export type Menu = {
  id: string
  name: string
  tagline: string
  description: string
  highlights: string[]
}

export const menus: Menu[] = [
  {
    id: 'coquetel-premium',
    name: 'Coquetel Premium',
    tagline: 'Recepção sofisticada em formato volante',
    description:
      'Estações gourmet, finger foods autorais e sobremesas em miniatura, servidos por equipe uniformizada em ritmo elegante de coquetel.',
    highlights: ['Estações temáticas', 'Finger foods autorais', 'Sobremesas signature'],
  },
  {
    id: 'jantar-franco-americano',
    name: 'Jantar Franco-Americano',
    tagline: 'Serviço empratado com inspiração internacional',
    description:
      'Entrada, prato principal empratado e mesa de sobremesas, com inspiração na cozinha clássica francesa e influência contemporânea americana.',
    highlights: ['Serviço empratado', 'Entrada e prato principal', 'Mesa de sobremesas'],
  },
  {
    id: 'churrasco-gourmet',
    name: 'Churrasco Gourmet',
    tagline: 'Cortes nobres assados na hora',
    description:
      'Cortes nobres preparados na churrasqueira por chef especializado, acompanhados de guarnições selecionadas e mesa de saladas.',
    highlights: ['Cortes nobres', 'Chef ao vivo', 'Guarnições gourmet'],
  },
  {
    id: 'menu-kids',
    name: 'Menu Kids Festa',
    tagline: 'Cardápio infantil e mesa de doces',
    description:
      'Salgadinhos clássicos de festa, mini hambúrgueres, batatas, mesa de doces finos e bem-casados pensados para o público infantil.',
    highlights: ['Salgados de festa', 'Estação de mini burgers', 'Mesa de doces finos'],
  },
  {
    id: 'menu-corporativo',
    name: 'Menu Corporativo Executivo',
    tagline: 'Almoços e coffee breaks profissionais',
    description:
      'Coffee breaks completos, estações de almoço executivo e brunchs para confraternizações, seminários e treinamentos corporativos.',
    highlights: ['Coffee break completo', 'Almoço executivo', 'Atendimento discreto'],
  },
]
