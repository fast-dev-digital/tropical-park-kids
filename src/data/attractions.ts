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
    title: 'Trenzinho do Mundo dos Animais e das Aves',
    tagline: 'Passeio guiado pela fazendinha da chácara',
    description:
      'O trenzinho para a festa e leva as crianças até a fazendinha — onde dar comida ao cavalo na mão só acontece aqui.',
    highlights: [
      'Passeio guiado do salão à fazendinha',
      'Gansos, patos, porquinhos, coelhos, carneiros',
      'Alimentar o cavalo na mão',
    ],
    media: mediaAssets.centopeiaSalaoStar,
    supportMedia: [
      mediaAssets.centopeiaChacara,
      mediaAssets.centopeiaQuadraNoite,
      mediaAssets.salaoInfantil,
    ],
    visualNote: 'Registro real do trenzinho a caminho da fazendinha',
    icon: Train,
    accent: 'gold',
  },
  {
    id: 'carrossel-parque',
    badge: 'Inédito na região',
    title: 'Carrossel de parque de diversões',
    tagline: 'Estrutura mecânica clássica dentro do salão',
    description:
      'Carrossel mecânico de verdade dentro do salão — a mesma atração que as crianças procuram no parque, montada na festa.',
    highlights: [
      'Estrutura mecânica modelo de parque',
      'Cavalinhos e mini-bugguinhos',
      'Monitor dedicado',
    ],
    media: mediaAssets.carrinhosSalaoVideo,
    supportMedia: [
      mediaAssets.salaoBrinquedaoStar,
      mediaAssets.carrinhosPista,
      mediaAssets.carrinhosCriancas01,
    ],
    visualNote: 'Atração mecânica em uso durante a festa',
    icon: Sparkles,
    accent: 'coral',
  },
]
