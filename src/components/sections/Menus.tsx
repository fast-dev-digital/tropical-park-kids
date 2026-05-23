import { motion } from 'framer-motion'
import { UtensilsCrossed, Sparkles, MessageCircle } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionTitle } from '../ui/SectionTitle'
import { Button } from '../ui/Button'
import { menus } from '../../data/menus'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

export function Menus() {
  return (
    <section id="menus" className="section-padding bg-white">
      <Container>
        <SectionTitle
          eyebrow="Cardápios autorais"
          title="Cinco caminhos, uma cozinha que serve por fartura"
          subtitle="Pontos de partida — não jaulas. Cada cardápio é ajustado à proposta do seu evento, ao perfil dos convidados e a restrições alimentares específicas."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menus.map((menu, i) => (
            <motion.article
              key={menu.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl p-7 border border-slate-200 hover:border-brand-gold hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-brand-green text-xs font-semibold tracking-[0.18em] uppercase">
                <UtensilsCrossed size={14} />
                {menu.tagline}
              </div>
              <h3 className="mt-3 font-display font-bold text-2xl text-brand-royal leading-tight">
                {menu.name}
              </h3>
              <p className="mt-3 text-ink-muted text-sm leading-relaxed">
                {menu.description}
              </p>
              <ul className="mt-5 space-y-2">
                {menu.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-ink">
                    <Sparkles size={14} className="text-brand-gold shrink-0 mt-1" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-start gap-3 text-ink-muted bg-brand-gold/10 border border-brand-gold/30 rounded-2xl px-6 py-4 text-sm md:text-base">
            <Sparkles size={20} className="text-brand-gold-dark shrink-0 mt-0.5" />
            <p className="italic text-left">
              Consulte nosso Concierge Digital para obter o orçamento
              personalizado com base na data do seu evento e no número de
              convidados.
            </p>
          </div>
          <div className="mt-8">
            <Button
              as="a"
              href={buildWhatsAppUrl('menus')}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              <MessageCircle size={20} />
              Falar com o Concierge Digital
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
