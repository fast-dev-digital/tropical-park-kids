export type TrustBadge = {
  id: string
  marker: string
  label: string
  caption: string
}

export const trustBadges: TrustBadge[] = [
  {
    id: 'estacionamento',
    marker: 'Interno',
    label: 'Estacionamento privativo',
    caption: 'Chegada mais segura, dentro da própria chácara',
  },
  {
    id: 'chacara',
    marker: 'Aberta',
    label: 'Chácara integrada à natureza',
    caption: 'Um evento que respira fora do formato de salão de festa fechado',
  },
  {
    id: 'quadra',
    marker: '12x18',
    label: 'Maior campo da região',
    caption: 'Espaço de futebol imenso, fora de série',
  },
  {
    id: 'fartura',
    marker: 'Fartura',
    label: 'Cozinha em movimento',
    caption: 'Buffet pensado para abundância durante a experiência',
  },
]
