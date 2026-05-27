import { mediaAssets, type MediaAsset } from './media'

export type Menu = {
  id: string
  name: string
  pitch: string
  highlights: string[]
  media: MediaAsset
}

export const menus: Menu[] = [
  {
    id: 'kids',
    name: 'Festa Kids',
    pitch: 'O cardápio que a criança adora e a mãe aprova.',
    highlights: [
      'Salgadinhos fritos e assados',
      'Mesa de doces caprichada',
      'Refrigerante e sucos à vontade',
      'Bolo decorado no tema',
    ],
    media: mediaAssets.menuKids,
  },
  {
    id: 'coquetel',
    name: 'Coquetel',
    pitch: 'Pra receber em pé, sem perder a sofisticação do paladar.',
    highlights: [
      'Tábuas de antepastos',
      'Mini-porções quentes',
      'Drinks autorais',
      'Estação de canapés',
    ],
    media: mediaAssets.menuCoquetelTabua,
  },
  {
    id: 'jantar',
    name: 'Jantar',
    pitch: 'Mesa posta, prato servido, conversa boa.',
    highlights: [
      'Entrada quente e fria',
      'Prato principal à escolha',
      'Acompanhamentos quentes',
      'Sobremesa empratada',
    ],
    media: mediaAssets.menuJantarRigatoni,
  },
  {
    id: 'churrasco',
    name: 'Churrasco',
    pitch: 'A festa da chácara que combina com tudo.',
    highlights: [
      'Carnes nobres no carvão',
      'Saladas frescas',
      'Acompanhamentos quentes',
      'Mesa de frios',
    ],
    media: mediaAssets.menuChurrascoSalada,
  },
  {
    id: 'corporativo',
    name: 'Corporativo',
    pitch: 'Almoço ou jantar que reúne o time inteiro.',
    highlights: [
      'Buffet completo',
      'Saladas gourmet',
      'Pratos quentes variados',
      'Sobremesas e cafés',
    ],
    media: mediaAssets.menuCorporativoSalada,
  },
]

export const MENUS_DISCLAIMER =
  'Cada festa é única. Conta pra gente a data e quantas crianças você espera — a gente monta o orçamento do jeitinho da sua festa.'
