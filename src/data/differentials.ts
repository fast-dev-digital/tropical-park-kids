import { ParkingSquare, Trophy, TreePine, UtensilsCrossed } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Differential = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  accent: 'green' | 'gold' | 'royal' | 'coral'
}

export const differentials: Differential[] = [
  {
    id: 'estacionamento',
    title: 'Estacionamento privativo dentro da chácara',
    description:
      'Único buffet da região com estacionamento dentro da propriedade. Os convidados descem na porta do salão, sem cruzar rua nem disputar vaga.',
    icon: ParkingSquare,
    accent: 'green',
  },
  {
    id: 'quadra',
    title: 'O maior campo de futebol da região — 12x18m',
    description:
      'Um campo imenso, fora de série, que galpão fechado nenhum chega perto. Espaço grande de verdade para recreação dirigida, pelada entre convidados e dinâmicas em grupo no meio da festa.',
    icon: Trophy,
    accent: 'royal',
  },
  {
    id: 'chacara-aberta',
    title: 'Chácara aberta, integrada à natureza',
    description:
      'Aqui não é galpão. É chácara de verdade — área coberta, gramado, árvores grandes e céu aberto compondo o cenário. Os convidados percebem a diferença antes de sentar.',
    icon: TreePine,
    accent: 'gold',
  },
  {
    id: 'fartura',
    title: 'Serviço por fartura, sem racionamento',
    description:
      'A cozinha reabastece as estações enquanto houver gente servindo — não no relógio. Ninguém volta para o buffet e encontra travessa vazia.',
    icon: UtensilsCrossed,
    accent: 'coral',
  },
]
