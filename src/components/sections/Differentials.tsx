import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { EditorialMark } from '../ui/EditorialMark'
import { MediaFrame } from '../ui/MediaFrame'
import { differentials } from '../../data/differentials'
import { differentialMedia } from '../../data/media'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function Differentials() {
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="differentials"
      className="section-padding bg-forest text-parchment relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-grain opacity-[0.12] mix-blend-overlay pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <EditorialMark
          number="02"
          kicker="Diferenciais únicos"
          tone="light"
          title={
            <>
              Quatro vantagens que{' '}
              <em
                className="italic"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
              >
                nenhum galpão
              </em>{' '}
              do interior entrega.
            </>
          }
          lede="Não se trata de gosto. São quatro vantagens estruturais — concretas, mensuráveis — que mudam a experiência do seu convidado do estacionamento ao último brinde."
        />

        <ol className="mt-20 md:mt-28">
          {differentials.map((d, i) => {
            const num = String(i + 1).padStart(2, '0')
            return (
              <motion.li
                key={d.id}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group grid grid-cols-12 gap-6 md:gap-10 items-baseline border-t border-parchment/15 py-8 md:py-12 last:border-b last:border-parchment/15 transition-colors hover:bg-parchment/[0.04]"
              >
                <span
                  className="col-span-2 md:col-span-1 font-mono text-number uppercase text-parchment/55 self-start pt-2"
                  style={{ fontFeatureSettings: '"tnum"' }}
                >
                  {num}
                </span>
                <h3
                  className="col-span-10 md:col-span-6 font-display font-light text-parchment text-3xl md:text-[2.5rem] leading-[1.05] tracking-[-0.018em]"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
                >
                  {d.title}
                </h3>
                <p className="col-span-12 md:col-span-5 text-parchment/80 leading-relaxed text-base md:text-[17px]">
                  {d.description}
                </p>
              </motion.li>
            )
          })}
        </ol>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {differentialMedia.map((asset, i) => (
            <motion.div
              key={asset.id}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <MediaFrame
                asset={asset}
                autoPlay={asset.type === 'video'}
                className="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]"
                captionClassName="text-parchment"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-12 gap-6 md:gap-10 items-center">
          <p
            className="col-span-12 md:col-span-7 font-display italic text-parchment text-2xl md:text-3xl leading-snug"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
          >
            Tudo isso num único endereço. Numa única chácara. Numa única data — a sua.
          </p>
          <a
            href="#structure"
            className="col-span-12 md:col-span-5 md:justify-self-end inline-flex items-center gap-3 text-parchment/90 hover:text-parchment text-[13px] uppercase tracking-[0.22em] border-b border-parchment/40 hover:border-parchment pb-1 transition-colors"
          >
            <span>Ver a chácara</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  )
}
