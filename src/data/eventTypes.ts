import { Heart, PartyPopper, Cake, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type EventType = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  accent: 'green' | 'gold' | 'royal' | 'coral'
}

export const eventTypes: EventType[] = [
  {
    id: 'casamento',
    title: 'Casamentos',
    description:
      'Cerimônia ao ar livre sob o céu, recepção sob coberta e o tempo certo entre cada momento. Para quem prefere a chácara a um salão de festas.',
    icon: Heart,
    accent: 'royal',
  },
  {
    id: 'infantil',
    title: 'Festa Infantil',
    description:
      'Atrações exclusivas, monitores dedicados e espaço para a criança correr de verdade. O tipo de festa que a turma da escola comenta por meses.',
    icon: PartyPopper,
    accent: 'coral',
  },
  {
    id: 'adulto',
    title: '15 Anos & Adulto',
    description:
      'Ambiente elegante para debutantes e celebrações sofisticadas. Pista, iluminação cênica e estrutura para a noite render até o final.',
    icon: Cake,
    accent: 'gold',
  },
  {
    id: 'corporativo',
    title: 'Corporativo & Formaturas',
    description:
      'Confraternizações, formaturas e encontros corporativos com discrição, pontualidade e atendimento profissional do início ao último convidado.',
    icon: Briefcase,
    accent: 'green',
  },
]
