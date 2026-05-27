import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { WhatsAppFAB } from './components/cta/WhatsAppFAB'
import { Attractions } from './components/sections/Attractions'
import { Differentials } from './components/sections/Differentials'
import { EventTypes } from './components/sections/EventTypes'
import { FAQ } from './components/sections/FAQ'
import { FinalCTA } from './components/sections/FinalCTA'
import { Gallery } from './components/sections/Gallery'
import { Hero } from './components/sections/Hero'
import { Location } from './components/sections/Location'
import { Menus } from './components/sections/Menus'
import { QuickPromise } from './components/sections/QuickPromise'
import { SocialProof } from './components/sections/SocialProof'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickPromise />
        <Attractions />
        <Gallery />
        <EventTypes />
        <Menus />
        <SocialProof />
        <Differentials />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}

export default App
