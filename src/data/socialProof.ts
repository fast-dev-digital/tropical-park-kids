export type Testimonial = {
  id: string
  name: string
  role: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'mae-helena',
    name: 'Helena B.',
    role: 'Mãe da Manuela, 6 anos',
    quote:
      'A Manuela ainda fala da Centopeia. A festa foi exatamente o que eu sonhei e os adultos elogiaram a comida o tempo todo.',
  },
  {
    id: 'mae-juliana',
    name: 'Juliana M.',
    role: 'Mãe do Gabriel, 5 anos',
    quote:
      'Cheguei estressada e saí descansada. A equipe cuidou das crianças e eu pude curtir com os convidados. Recomendo de olhos fechados.',
  },
  {
    id: 'noiva-larissa',
    name: 'Larissa P.',
    role: 'Casou em 2025',
    quote:
      'Casamos na chácara e foi mágico. Cerimônia ao ar livre, recepção no salão. Os convidados não queriam ir embora.',
  },
]

export const stats = [
  { value: '500+', label: 'festas realizadas' },
  { value: '8', label: 'anos cuidando de festas' },
  { value: '12×18', label: 'metros de campo' },
  { value: '4.9★', label: 'avaliação Google' },
]
