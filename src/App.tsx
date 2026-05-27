import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { WhatsAppFAB } from './components/cta/WhatsAppFAB'
import { Hero } from './components/sections/Hero'
import { Chapters } from './components/sections/Chapters'
import { EventTypes } from './components/sections/EventTypes'
import { Opcionais } from './components/sections/Opcionais'
import { FAQ } from './components/sections/FAQ'
import { Location } from './components/sections/Location'
import { FinalCTA } from './components/sections/FinalCTA'

// Fluxo v2.2 — esteira visual mobile-first.
// 1. Hero — promessa em 4 palavras.
// 2. Chapters — Entrada → Atrações → Gastronomia → Decoração → Ar livre.
// 3. EventTypes — tira horizontal compacta.
// 4. Opcionais — chips que abrem WhatsApp (gatilho de descoberta).
// 5. FAQ — respostas curtas, redireciona pro WhatsApp.
// 6. Location — mapa + endereço.
// 7. FinalCTA — agendamento.
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Chapters />
        <EventTypes />
        <Opcionais />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}

export default App
