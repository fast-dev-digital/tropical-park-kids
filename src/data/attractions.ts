import { mediaAssets, type MediaAsset } from './media'

export type Attraction = {
  id: string
  name: string
  tagline: string
  description: string
  media: MediaAsset
  accentColor: 'coral' | 'sun' | 'grass' | 'sky' | 'grape'
}

export const attractions: Attraction[] = [
  {
    id: 'centopeia',
    name: 'Trenzinho Centopeia',
    tagline: 'A estrela da festa',
    description:
      'Os vagões de tambor iluminados saem do salão e dão a volta pela chácara. Não tem criança que não pede pra andar de novo.',
    media: mediaAssets.centopeiaSalaoStar,
    accentColor: 'coral',
  },
  {
    id: 'bichinhos',
    name: 'Bichinhos motorizados',
    tagline: 'Direto do shopping pra festa',
    description:
      'Dragão, Banguela, Patrulha Canina — os mesmos bichinhos que sua filha implora pra andar no shopping, agora dentro da festa dela.',
    media: mediaAssets.carrinhosCriancas01,
    accentColor: 'sun',
  },
  {
    id: 'campo',
    name: 'Campo de futebol 12×18',
    tagline: 'Pra criança correr de verdade',
    description:
      'Espaço aberto, gramado, pra jogar bola e correr o quanto quiser. Sem aglomeração, sem briga por brinquedo.',
    media: mediaAssets.futebolCriancasVideo,
    accentColor: 'grass',
  },
  {
    id: 'brinquedao',
    name: 'Brinquedão e carrossel',
    tagline: 'Diversão sem parar',
    description:
      'Brinquedão tubular com escorregadores, piscina de bolinhas e carrossel mecânico que gira sem cansar.',
    media: mediaAssets.brinquedaoVideo,
    accentColor: 'sky',
  },
]
