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

export const eventTypes: EventType[] = [
  {
    id: 'infantil',
    name: 'Festa infantil',
    hook: 'Do jeitinho que ele sonhou',
    body:
      'Aniversário com tema, decoração, brinquedos, atrações e a fartura do buffet. A festa que a turma da escola vai comentar por meses.',
    media: mediaAssets.decoracaoTematicaStar,
    highlight: true,
    accent: 'coral',
  },
  {
    id: 'quinze',
    name: '15 anos',
    hook: 'A noite que ela vai guardar',
    body:
      'Salão decorado, mesa posta, espaço aberto pra dançar — sem o frio de salão alugado.',
    media: mediaAssets.salaoMesas01,
    accent: 'grape',
  },
  {
    id: 'casamento',
    name: 'Casamento',
    hook: 'Vocês dois, a chácara, o pôr do sol',
    body:
      'Cerimônia ao ar livre, recepção no salão, fotos com a natureza de fundo.',
    media: mediaAssets.salaoCasamento,
    accent: 'sun',
  },
  {
    id: 'formatura',
    name: 'Formatura',
    hook: 'Pra fechar a turma com chave de ouro',
    body:
      'Espaço pra dançar até de madrugada, com estacionamento pros pais que vão buscar.',
    media: mediaAssets.salaoConvidados,
    accent: 'grass',
  },
  {
    id: 'corporativo',
    name: 'Eventos corporativos',
    hook: 'Confraternização que ninguém quer sair',
    body:
      'Estrutura completa pra confraternização, lançamento ou treinamento da empresa.',
    media: mediaAssets.salaoAmbienteApoio,
    accent: 'sky',
  },
]
