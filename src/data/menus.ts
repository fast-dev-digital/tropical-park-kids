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
    pitch: 'Pra receber em pé, com mesa bonita e conversa solta.',
    highlights: [
      'Tábuas de antepastos',
      'Mini-porções quentes',
      'Drinks da casa',
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
]

export const MENUS_DISCLAIMER =
  'Cada festa é única. Conta pra gente a data e quantas crianças você espera — a gente monta o orçamento do jeitinho da sua festa.'
