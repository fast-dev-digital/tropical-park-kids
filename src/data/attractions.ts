import { mediaAssets, type MediaAsset } from './media'

export type Attraction = {
  id: string
  name: string
  tagline: string
  description: string
  media: MediaAsset
  accentColor: 'coral' | 'sun' | 'grass' | 'sky' | 'grape'
}

// Copy minimalista — fotos comandam, texto sustenta.
// Tom de descoberta: descreve o que existe, sem tentar convencer.
// TODO: ASSET REAL DO CLIENTE — algumas mídias podem ser substituídas pelas fotos profissionais do Drive do Ricardo.
export const attractions: Attraction[] = [
  {
    id: 'centopeia',
    name: 'Trenzinho Centopeia',
    tagline: 'Exclusivo',
    description: 'Vagões iluminados percorrendo o complexo inteiro.',
    media: mediaAssets.centopeiaSalaoStar,
    accentColor: 'coral',
  },
  {
    id: 'bichinhos',
    name: 'Bichinhos motorizados',
    tagline: 'Estilo shopping',
    description: 'Dragão, Banguela, Patrulha Canina — em todas as festas.',
    media: mediaAssets.carrinhosCriancas01,
    accentColor: 'sun',
  },
  {
    id: 'campo',
    name: 'Quadra poliesportiva 12×18',
    tagline: 'Recreação aberta',
    description: 'Campo gramado para esporte e brincadeira livre.',
    media: mediaAssets.futebolCriancasSquare,
    accentColor: 'grass',
  },
  {
    id: 'brinquedao',
    name: 'Brinquedão e carrossel',
    tagline: 'Estrutura interna',
    description: 'Brinquedão tubular, piscina de bolinhas e carrossel mecânico.',
    media: mediaAssets.brinquedaoVideo,
    accentColor: 'sky',
  },
]
