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
      'O único buffet da região com estacionamento interno e seguro — sua família e seus convidados desembarcam dentro da propriedade, sem cruzar rua nem disputar vaga.',
    icon: ParkingSquare,
    accent: 'green',
  },
  {
    id: 'quadra',
    title: 'Quadra poliesportiva 12x18m',
    description:
      'Área esportiva dedicada para recreação dirigida, dinâmicas e atividades em grupo — o tipo de espaço que galpão fechado nenhum oferece.',
    icon: Trophy,
    accent: 'royal',
  },
  {
    id: 'chacara-aberta',
    title: 'Chácara aberta, integrada à natureza',
    description:
      'Fuja do formato galpão. Aqui o evento acontece entre área coberta, gramado, árvores e céu aberto — uma atmosfera que muda completamente a percepção dos convidados.',
    icon: TreePine,
    accent: 'gold',
  },
  {
    id: 'fartura',
    title: 'Serviço por fartura, sem racionamento',
    description:
      'Buffet operado no modelo de abundância contínua. Cozinha treinada para reabastecer estações enquanto houver convidado — não no relógio.',
    icon: UtensilsCrossed,
    accent: 'coral',
  },
]
