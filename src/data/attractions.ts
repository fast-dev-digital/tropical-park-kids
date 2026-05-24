import { Train, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { mediaAssets, type MediaAsset } from './media'

export type Attraction = {
  id: string
  badge: string
  title: string
  tagline: string
  description: string
  highlights: string[]
  media: MediaAsset
  supportMedia: MediaAsset[]
  visualNote: string
  icon: LucideIcon
  accent: 'gold' | 'coral'
}

export const attractions: Attraction[] = [
  {
    id: 'trenzinho-centopeia',
    badge: 'Exclusivo na região',
    title: 'Trenzinho Centopeia',
    tagline: 'Atração mecânica iluminada',
    description:
      'Vagões em formato de tambor com iluminação LED que percorrem o salão e a área externa. Uma experiência cinematográfica que para a festa para todo mundo embarcar — crianças, pais e convidados.',
    highlights: [
      'Circulação pelo salão e chácara',
      'Iluminação LED nos vagões',
      'Operação por equipe treinada',
    ],
    media: mediaAssets.centopeiaSalaoStar,
    supportMedia: [mediaAssets.centopeiaChacara, mediaAssets.centopeiaQuadraNoite],
    visualNote: 'Registro real da Centopeia em movimento',
    icon: Train,
    accent: 'gold',
  },
  {
    id: 'bichinhos-motorizados',
    badge: 'Importados exclusivos',
    title: 'Bichinhos do Shopping',
    tagline: 'Pelúcias motorizadas que andam de verdade',
    description:
      'Dragão, Banguela, Patrulha Canina e companhia — os mesmos bichinhos que as crianças amam montar no shopping, dentro do seu evento. Sem fila, sem ficha, com monitor dedicado.',
    highlights: [
      'Dragão, Banguela e Patrulha Canina',
      'Monitor exclusivo por turno',
      'Operação contínua durante o evento',
    ],
    media: mediaAssets.carrinhosSalaoVideo,
    supportMedia: [mediaAssets.salaoBrinquedaoStar, mediaAssets.carrinhosPista],
    visualNote: 'Contexto real de atrações motorizadas no salão',
    icon: Sparkles,
    accent: 'coral',
  },
]
