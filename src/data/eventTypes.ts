import { Heart, PartyPopper, Cake, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { mediaAssets, type MediaAsset } from './media'

export type EventType = {
  id: string
  title: string
  description: string
  tags: string[]
  icon: LucideIcon
  accent: 'green' | 'gold' | 'royal' | 'coral'
  supportMedia?: MediaAsset[]
}

export const eventTypes: EventType[] = [
  {
    id: 'casamento',
    title: 'Casamentos',
    description:
      'Cerimônia ao céu aberto, recepção sob coberta — para quem prefere chácara a salão.',
    tags: ['Cerimônia ao ar livre', 'Recepção sob coberta', 'Buffet com fartura'],
    icon: Heart,
    accent: 'royal',
    supportMedia: [
      mediaAssets.entradaDecoradaVideo,
      mediaAssets.salaoMesas02,
    ],
  },
  {
    id: 'infantil',
    title: 'Festa Infantil',
    description:
      'Atrações exclusivas, monitores dedicados e espaço para a criança correr de verdade.',
    tags: ['Atrações exclusivas', 'Recreação dirigida', 'Estacionamento privativo'],
    icon: PartyPopper,
    accent: 'coral',
    supportMedia: [
      mediaAssets.decoracaoPatrulhaCaninaVideo,
      mediaAssets.decoracaoTematicaVideo,
      mediaAssets.decoracaoTematica,
    ],
  },
  {
    id: 'adulto',
    title: '15 Anos & Adulto',
    description:
      'Ambiente elegante, pista, iluminação cênica — para a noite render até o final.',
    tags: ['Pista de dança', 'Iluminação cênica', 'Estrutura completa'],
    icon: Cake,
    accent: 'gold',
    supportMedia: [
      mediaAssets.salaoConvidados,
      mediaAssets.lembrancinhasDecoracaoVideo,
      mediaAssets.decoracaoEntradaStar,
    ],
  },
  {
    id: 'corporativo',
    title: 'Corporativo & Formaturas',
    description:
      'Confraternizações e formaturas com discrição, pontualidade e atendimento profissional.',
    tags: ['Atendimento discreto', 'Logística pontual', 'Salão privativo'],
    icon: Briefcase,
    accent: 'green',
    supportMedia: [
      mediaAssets.salaoAmbienteApoio,
    ],
  },
]
