import Header from '../components/Header'
import Hero from '../components/Hero'
import PorQueExistimos from '../components/PorQueExistimos'
import QueHacemos from '../components/QueHacemos'
import AQuienNosDirigimos from '../components/AQuienNosDirigimos'
import ComoLoHacemos from '../components/ComoLoHacemos'
import Impacto from '../components/Impacto'
import SumaTuEnergia from '../components/SumaTuEnergia'
import Credibilidad from '../components/Credibilidad'
import Ideas from '../components/Ideas'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import MadeWithAI from '../components/MadeWithAI'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PorQueExistimos />
        <QueHacemos />
        <AQuienNosDirigimos />
        <ComoLoHacemos />
        <Impacto />
        <SumaTuEnergia />
        <Credibilidad />
        <Ideas />
      </main>
      <Footer />
      <MadeWithAI />
      <CookieBanner />
    </>
  )
}
