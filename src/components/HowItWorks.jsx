import React from 'react'
import '../assets/styles/HowItWorks.scss'
import chromeIcon from '../assets/images/work1.png'
import linkedinIcon from '../assets/images/work2.png'
import enrichedIcon from '../assets/images/work3.png'
import syncIcon from '../assets/images/work4.png'
const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Install the Extension',
      description: 'Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.',
     icon: <img src={chromeIcon} alt="Chrome Icon" width='100%' height='100%' style={{ marginRight: '10px' }} />
    },
    {
      number: 2,
      title: 'Browse LinkedIn',
      description: 'Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.',
      icon: <img src={linkedinIcon} alt="LinkedIn Icon" width='100%' height='100%' style={{ marginRight: '10px' }} />
    },
    {
      number: 3,
      title: 'Get Enriched Data',
      description: 'Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.',
      icon: <img src={enrichedIcon} alt="Enriched Icon" width='100%' height='100%' style={{ marginRight: '10px' }} />
    },
    {
      number: 4,
      title: 'Sync to CRM Instantly',
      description: 'Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow ups.',
      icon: <img src={syncIcon} alt="Sync Icon" width='100%' height='100%' style={{ marginRight: '10px' }} />
    }
  ]

  return (
    <section className="how-it-works">
      <div className="how-it-works-ball"></div>
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">How it Works</h2>
          <p className="how-it-works-subtitle">From setup to success in <span style={{ color: '#090F4E' ,fontWeight: 'bold'}}>4 simple steps</span></p>
        </div>

        <div className="steps-container">
          <svg className="steps-connector" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path 
              d="M 0,50 Q 125,30 250,50 T 500,50 T 750,50 T 1000,50" 
              fill="none" 
              stroke="#2D96BC" 
              strokeWidth="15"
            />
          </svg>
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-visual-wrapper">
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="how-it-works-cta">
          <button className="cta-button-primary">
            Try LeadCRM Now
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

