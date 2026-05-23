import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Structure } from './components/sections/Structure'
import { EventTypes } from './components/sections/EventTypes'
import { Menus } from './components/sections/Menus'
import { Location } from './components/sections/Location'
import { WhatsAppFAB } from './components/cta/WhatsAppFAB'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Structure />
        <EventTypes />
        <Menus />
        <Location />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}

export default App
