import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problems from './components/Problems'
import MarketOpportunity from './components/MarketOpportunity'
import Solution from './components/Solution'
import Features from './components/Features'
import WhoCanApply from './components/WhoCanApply'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <MarketOpportunity />
        <Solution />
        <Features />
        <WhoCanApply />
        <Benefits />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App