import { motion } from 'framer-motion'
import { MapPin, Clock, Calendar, MessageCircle } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionTitle } from '../ui/SectionTitle'
import { Button } from '../ui/Button'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

const highlights = [
  { icon: MapPin, label: 'Região de Catanduva — SP', desc: 'Fácil acesso pela rodovia' },
  { icon: Calendar, label: 'Visitas com hora marcada', desc: 'Manhã ou tarde, sem compromisso' },
  { icon: Clock, label: 'Atendimento 24h via WhatsApp', desc: 'Concierge Digital sempre disponível' },
]

export function Location() {
  return (
    <section id="location" className="section-padding bg-brand-royal text-white">
      <Container>
        <SectionTitle
          eyebrow="Visite a Chácara"
          title="Venha conhecer pessoalmente"
          subtitle="A melhor forma de sentir a atmosfera do Tropical Park Kids é uma visita ao espaço. Agende com nosso Concierge Digital — sem compromisso."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 min-h-[360px]"
          >
            <iframe
              title="Localização da Tropical Park Kids em Catanduva"
              src="https://www.google.com/maps?q=Catanduva,+SP&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[360px] border-0"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between"
          >
            <ul className="space-y-5">
              {highlights.map((h) => {
                const Icon = h.icon
                return (
                  <li
                    key={h.label}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    <div className="h-12 w-12 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-white text-lg leading-tight">
                        {h.label}
                      </p>
                      <p className="text-white/70 text-sm mt-1">{h.desc}</p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="mt-8">
              <Button
                as="a"
                href={buildWhatsAppUrl('location')}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                pulse
                className="w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                Agendar minha visita
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
