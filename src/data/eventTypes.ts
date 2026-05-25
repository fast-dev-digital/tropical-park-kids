import { Heart, PartyPopper, Cake, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type EventType = {
  id: string
  title: string
  description: string
  tags: string[]
  icon: LucideIcon
  accent: 'green' | 'gold' | 'royal' | 'coral'
}

export const eventTypes: EventType[] = [
  {
    id: 'casamento',
    title: 'Casamentos',
    description:
      'Cerimônia ao céu aberto, recepção sob coberta — para quem prefere chácara a salão.',
    tags: ['Cerimônia ao ar livre', 'Recepção sob coberta', 'Buffet por fartura'],
    icon: Heart,
    accent: 'royal',
  },
  {
    id: 'infantil',
    title: 'Festa Infantil',
    description:
      'Atrações exclusivas, monitores dedicados e espaço para a criança correr de verdade.',
    tags: ['Atrações exclusivas', 'Recreação dirigida', 'Estacionamento privativo'],
    icon: PartyPopper,
    accent: 'coral',
  },
  {
    id: 'adulto',
    title: '15 Anos & Adulto',
    description:
      'Ambiente elegante, pista, iluminação cênica — para a noite render até o final.',
    tags: ['Pista de dança', 'Iluminação cênica', 'Estrutura completa'],
    icon: Cake,
    accent: 'gold',
  },
  {
    id: 'corporativo',
    title: 'Corporativo & Formaturas',
    description:
      'Confraternizações e formaturas com discrição, pontualidade e atendimento profissional.',
    tags: ['Atendimento discreto', 'Logística pontual', 'Salão privativo'],
    icon: Briefcase,
    accent: 'green',
  },
]
