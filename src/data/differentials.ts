import { ParkingSquare, Trophy, TreePine, UtensilsCrossed } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { mediaAssets, type MediaAsset } from './media'

export type Differential = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  accent: 'green' | 'gold' | 'royal' | 'coral'
  media?: MediaAsset
}

export const differentials: Differential[] = [
  {
    id: 'estacionamento',
    title: 'Estacionamento privativo dentro da chácara',
    description:
      'Único buffet da região com estacionamento dentro da propriedade — os convidados descem na porta do salão.',
    icon: ParkingSquare,
    accent: 'green',
    media: mediaAssets.entradaSalao,
  },
  {
    id: 'quadra',
    title: 'O maior campo de futebol da região — 12x18m',
    description:
      'Campo imenso, fora de série, que salão de festa fechado nenhum chega perto — recreação, pelada e dinâmicas em grupo.',
    icon: Trophy,
    accent: 'royal',
    media: mediaAssets.futebolCriancasSquare,
  },
  {
    id: 'chacara-aberta',
    title: 'Chácara aberta, integrada à natureza',
    description:
      'Não é só um salão de festa. Área coberta, gramado, árvores grandes e céu aberto — os convidados percebem antes de sentar.',
    icon: TreePine,
    accent: 'gold',
    media: mediaAssets.centopeiaChacara,
  },
  {
    id: 'fartura',
    title: 'Serviço com fartura, sem racionamento',
    description:
      'A cozinha reabastece enquanto houver gente servindo — ninguém volta ao buffet e encontra travessa vazia.',
    icon: UtensilsCrossed,
    accent: 'coral',
    media: mediaAssets.buffetFartura,
  },
]
