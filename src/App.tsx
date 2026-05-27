import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Demais seções (QuickPromise, Attractions, Gallery, EventTypes, Menus, SocialProof,
            Differentials, Location, FAQ, FinalCTA) entram na Etapa 2 após validação da Hero. */}
        <section id="attractions" className="section-pad bg-cream-deep">
          <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
            <p className="font-display text-2xl text-ink-soft text-center">
              Em construção · próximas seções na Etapa 2
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
