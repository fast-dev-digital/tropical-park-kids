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
      'O trenzinho para a festa, embarca as crianças no salão e atravessa a chácara até a fazendinha. Lá descem para conhecer gansos, patos, angolas, porquinhos, coelhos e carneiros de perto. O ponto alto, que só acontece aqui, é dar comida ao cavalo na palma da mão.',
    highlights: [
      'Passeio guiado do salão até a fazendinha',
      'Gansos, patos, angolas, porquinhos, coelhos e carneiros',
      'Alimentar o cavalo na mão — exclusividade da casa',
    ],
    media: mediaAssets.centopeiaSalaoStar,
    supportMedia: [mediaAssets.centopeiaChacara, mediaAssets.centopeiaQuadraNoite],
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
      'Um carrossel mecânico de verdade, com cavalinhos e mini-bugguinhos girando no centro do salão. A mesma atração que as crianças procuram no parque, montada na festa — algo que nenhum outro buffet da região oferece.',
    highlights: [
      'Estrutura mecânica real, modelo de parque',
      'Cavalinhos clássicos e mini-bugguinhos',
      'Operação contínua com monitor dedicado',
    ],
    media: mediaAssets.carrinhosSalaoVideo,
    supportMedia: [mediaAssets.salaoBrinquedaoStar, mediaAssets.carrinhosPista],
    visualNote: 'Atração mecânica em uso durante a festa',
    icon: Sparkles,
    accent: 'coral',
  },
]
