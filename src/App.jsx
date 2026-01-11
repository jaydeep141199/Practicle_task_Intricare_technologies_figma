import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import KeyFeatures from './components/KeyFeatures'
import HowItWorks from './components/HowItWorks'
import Comparison from './components/Comparison'
import LinkedInSalesSolutions from './components/LinkedInSalesSolutions'
import SupportedLeadCRM from './components/SupportedLeadCRM'
import LeadManagementBanner from './components/LeadManagementBanner'
import Testimonials from './components/Testimonials'
import BottomCTA from './components/BottomCTA'
import Footer from './components/Footer'
import './assets/styles/App.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <KeyFeatures />
      <Comparison />
      <BottomCTA />
      <HowItWorks />
      <Testimonials />
      <LinkedInSalesSolutions />
      <SupportedLeadCRM />
      <LeadManagementBanner />
      <Footer />
    </div>
  )
}

export default App

