import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { ExclusiveAttractions } from './components/sections/ExclusiveAttractions'
import { Differentials } from './components/sections/Differentials'
import { Structure } from './components/sections/Structure'
import { EventTypes } from './components/sections/EventTypes'
import { Menus } from './components/sections/Menus'
import { TrustBadges } from './components/sections/TrustBadges'
import { SocialProof } from './components/sections/SocialProof'
import { FAQ } from './components/sections/FAQ'
import { Location } from './components/sections/Location'
import { WhatsAppFAB } from './components/cta/WhatsAppFAB'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExclusiveAttractions />
        <Differentials />
        <Structure />
        <EventTypes />
        <Menus />
        <TrustBadges />
        <SocialProof />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}

export default App
