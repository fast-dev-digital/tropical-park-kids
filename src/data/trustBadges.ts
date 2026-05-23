export type TrustBadge = {
  id: string
  value: number
  suffix?: string
  prefix?: string
  label: string
  caption: string
}

// TODO: NÚMEROS REAIS DO CLIENTE — confirmar com Ricardo antes do launch.
// Os valores abaixo são placeholders conservadores e plausíveis para
// uma chácara estabelecida em Catanduva.
export const trustBadges: TrustBadge[] = [
  {
    id: 'eventos',
    value: 500,
    suffix: '+',
    label: 'Eventos realizados',
    caption: 'Histórias inesquecíveis construídas',
  },
  {
    id: 'anos',
    value: 8,
    suffix: ' anos',
    label: 'De chácara em operação',
    caption: 'Equipe que conhece cada detalhe',
  },
  {
    id: 'area',
    value: 12,
    suffix: 'x18m',
    label: 'Quadra poliesportiva',
    caption: 'Recreação dirigida em área dedicada',
  },
  {
    id: 'concierge',
    value: 24,
    suffix: 'h',
    label: 'Concierge Digital',
    caption: 'Resposta no WhatsApp todos os dias',
  },
]
