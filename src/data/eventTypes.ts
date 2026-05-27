import { mediaAssets, type MediaAsset } from './media'

export type EventType = {
  id: string
  name: string
  hook: string
  body: string
  media: MediaAsset
  highlight?: boolean
  accent: 'coral' | 'sun' | 'grass' | 'sky' | 'grape'
}

// Hooks curtos, body de uma linha. Foto resolve o resto.
// TODO: ASSET REAL DO CLIENTE — substituir mídias dos eventos quando o Ricardo enviar.
export const eventTypes: EventType[] = [
  {
    id: 'infantil',
    name: 'Festa infantil',
    hook: 'Nossa especialidade.',
    body: 'Aniversário com tema, atrações exclusivas e estrutura completa.',
    media: mediaAssets.decoracaoTematicaStar,
    highlight: true,
    accent: 'coral',
  },
  {
    id: 'quinze',
    name: '15 anos',
    hook: 'Salão amplo, área externa.',
    body: 'Espaço para cerimônia, pista e jantar.',
    media: mediaAssets.salaoMesas01,
    accent: 'grape',
  },
  {
    id: 'casamento',
    name: 'Casamento',
    hook: 'Cerimônia ao ar livre.',
    body: 'Recepção no salão, fotos com a natureza ao redor.',
    media: mediaAssets.salaoCasamento,
    accent: 'sun',
  },
  {
    id: 'formatura',
    name: 'Formatura',
    hook: 'Estrutura completa.',
    body: 'Pista, jantar e estacionamento próprio.',
    media: mediaAssets.salaoConvidados,
    accent: 'grass',
  },
  {
    id: 'corporativo',
    name: 'Eventos corporativos',
    hook: 'Confraternização sem aperto.',
    body: 'Espaço integrado, estrutura para treinamento e festa.',
    media: mediaAssets.salaoAmbienteApoio,
    accent: 'sky',
  },
]
