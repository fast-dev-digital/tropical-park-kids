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
      'Cerimônia ao ar livre, recepção sob coberta e serviço de buffet refinado para a noite mais especial dos seus sonhos.',
    icon: Heart,
    accent: 'royal',
  },
  {
    id: 'infantil',
    title: 'Festa Infantil',
    description:
      'Brinquedos modernos de grande porte, monitores treinados e cardápio kids para uma experiência inesquecível.',
    icon: PartyPopper,
    accent: 'coral',
  },
  {
    id: 'adulto',
    title: '15 Anos & Adulto',
    description:
      'Ambiente elegante para debutantes, aniversários e celebrações com pista de dança e estrutura completa.',
    icon: Cake,
    accent: 'gold',
  },
  {
    id: 'corporativo',
    title: 'Corporativo & Formaturas',
    description:
      'Confraternizações, formaturas e seminários com infraestrutura discreta e atendimento profissional.',
    icon: Briefcase,
    accent: 'green',
  },
]
