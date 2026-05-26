import { mediaAssets, type MediaAsset } from './media'

export type Menu = {
  id: string
  name: string
  tagline: string
  description: string
  highlights: string[]
  media?: MediaAsset
}

export const menus: Menu[] = [
  {
    id: 'coquetel-premium',
    name: 'Coquetel Premium',
    tagline: 'Recepção sofisticada em formato volante',
    description:
      'Estações gourmet, finger foods autorais e sobremesas em miniatura, servidos em ritmo elegante.',
    highlights: ['Estações temáticas', 'Finger foods autorais', 'Sobremesas signature'],
    media: mediaAssets.menuCoquetelTabua,
  },
  {
    id: 'jantar-franco-americano',
    name: 'Jantar Franco-Americano',
    tagline: 'Serviço empratado com inspiração internacional',
    description:
      'Entrada, prato principal empratado e mesa de sobremesas — francesa clássica com sotaque contemporâneo.',
    highlights: ['Serviço empratado', 'Entrada e prato principal', 'Mesa de sobremesas'],
    media: mediaAssets.menuJantarRigatoni,
  },
  {
    id: 'churrasco-gourmet',
    name: 'Churrasco Gourmet',
    tagline: 'Cortes nobres assados na hora',
    description:
      'Cortes nobres assados por chef especializado, com guarnições selecionadas e mesa de saladas.',
    highlights: ['Cortes nobres', 'Chef ao vivo', 'Guarnições gourmet'],
    media: mediaAssets.menuChurrascoSalada,
  },
  {
    id: 'menu-kids',
    name: 'Menu Kids Festa',
    tagline: 'Cardápio infantil e mesa de doces',
    description:
      'Salgadinhos clássicos, mini hambúrgueres, batatas, mesa de doces finos e bem-casados.',
    highlights: ['Salgados de festa', 'Estação de mini burgers', 'Mesa de doces finos'],
    media: mediaAssets.menuKids,
  },
  {
    id: 'menu-corporativo',
    name: 'Menu Corporativo Executivo',
    tagline: 'Almoços e coffee breaks profissionais',
    description:
      'Coffee breaks completos, almoço executivo e brunchs para confraternizações e treinamentos.',
    highlights: ['Coffee break completo', 'Almoço executivo', 'Atendimento discreto'],
    media: mediaAssets.menuCorporativoSalada,
  },
]
