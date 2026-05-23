import { Train, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Attraction = {
  id: string
  badge: string
  title: string
  tagline: string
  description: string
  highlights: string[]
  image: string
  imageAlt: string
  icon: LucideIcon
  accent: 'gold' | 'coral'
}

// TODO: ASSET REAL DO CLIENTE — substituir as imagens abaixo por fotos
// reais do trenzinho e dos bichinhos motorizados na chácara.
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
    image:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1400&q=75',
    imageAlt: 'Festa iluminada com luzes douradas e decoração festiva',
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
    image:
      'https://images.unsplash.com/photo-1464047736614-af63643285bf?auto=format&fit=crop&w=1400&q=75',
    imageAlt: 'Crianças brincando em festa colorida com balões e personagens',
    icon: Sparkles,
    accent: 'coral',
  },
]
