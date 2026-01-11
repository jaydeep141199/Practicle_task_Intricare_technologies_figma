import React, { useState } from 'react'
import '../assets/styles/LinkedInSalesSolutions.scss'
import firstLinkdin from '../assets/images/firstlinkdin.png'
import secondLinkdin from '../assets/images/secondlinkdin.png'
import threeLinkdin from '../assets/images/threeLinkdin.png'
const LinkedInSalesSolutions = () => {
  const [activeTab, setActiveTab] = useState('enrichment')

  const tabs = [
    {
      id: 'enrichment',
      label: 'CRM Data Enrichment',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      )
    },
    {
      id: 'sync',
      label: 'CRM Data Sync',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
        </svg>
      )
    },
    {
      id: 'bulk',
      label: 'Bulk Export & Enrichment',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      )
    },
    {
      id: 'ai',
      label: 'AI Productivity',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
          <line x1="12" y1="19" x2="12" y2="22"/>
          <line x1="8" y1="22" x2="16" y2="22"/>
        </svg>
      )
    }
  ]


  return (
    <section className="linkedin-sales-solutions">
      <div className="solutions-container">
        {/* Header Section */}
         
          <div className="header-content">
          <div className="header-text">

            <h2 className="solutions-title">Complete LinkedIn Sales Solutions</h2>
            <p className="solutions-subtitle">Everything you need for professional LinkedIn prospecting.</p>
          </div>
            
            {/* Navigation Tabs */}
            <div className="solutions-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-label">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

        {/* Problem Statement */}
        <div className="problem-statement">
          <p>
            It's hard to find the accurate contact data for every prospects by{' '}
            <span className="problem-tag">Incomplete Data</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="solutions-content">
          {/* Left Side - LeadCRM Solution */}
          <div className="solution-left">
            <h3 className="solution-heading">Here is how LeadCRM tackles that situation.</h3>
            <a href="#" className="solution-link">
              Try LeadCRM Data Enrichment <span>→</span>
            </a>

            <div className="solution-cards">
              {/* Card 1: Verified Email & Phone */}
              <div className="solution-card">
                <div className="card-header-with-icon">
                  <svg className="header-envelope-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <h4 className="card-header-title">Verified Email & Phone</h4>
                </div>
                <img
                  src={firstLinkdin}
                  alt="Verified Email & Phone"
                  className="card-image"
                />
              </div>

              {/* Card 2: 40+ Search Filters */}
              <div className="solution-card">
                <img
                  src={secondLinkdin}
                  alt="40+ Search Filters"
                  className="card-image"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Advanced Waterfall Enrichment */}
          <div className="solution-right">
            {/* Third Card - Without Heading */}
            <div className="solution-card waterfall-card-image">
              <img
                src={threeLinkdin}
                alt="Advanced Waterfall Enrichment"
                className="card-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LinkedInSalesSolutions

