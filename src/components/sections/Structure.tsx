import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { SectionTitle } from '../ui/SectionTitle'
import { Lightbox } from '../ui/Lightbox'
import { gallery } from '../../data/gallery'

export function Structure() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const open = (i: number) => setActiveIndex(i)
  const close = () => setActiveIndex(null)
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length))
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length))

  return (
    <section id="structure" className="section-padding bg-white">
      <Container>
        <SectionTitle
          eyebrow="A Estrutura"
          title="Um cenário onde cada detalhe importa"
          subtitle="Salão coberto, gramado, brinquedos de grande porte e banheiros de alto padrão. Não é um galpão adaptado — é uma chácara projetada para receber bem do começo ao fim."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {gallery.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => open(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/40 ${
                item.span === 'wide'
                  ? 'col-span-2 row-span-1'
                  : item.span === 'tall'
                    ? 'row-span-2'
                    : ''
              }`}
              aria-label={`Ampliar: ${item.alt}`}
            >
              <img
                src={item.thumb}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-royal-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 right-3 text-white text-xs md:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                {item.alt}
              </span>
            </motion.button>
          ))}
        </div>
      </Container>

      {activeIndex !== null && (
        <Lightbox
          images={gallery}
          index={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
