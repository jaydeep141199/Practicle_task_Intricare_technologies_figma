import React from 'react'
import '../assets/styles/SupportedLeadCRM.scss'
import hubspotIcon from '../assets/images/first.png'
import pipedriveIcon from '../assets/images/second.png'
import salesforceIcon from '../assets/images/third.png'
import logo from '../assets/images/logo.png'

const SupportedLeadCRM = () => {
  const linkedinSources = [
    {
      id: 'conversations',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2D96BC" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <line x1="9" y1="10" x2="15" y2="10"/>
          <line x1="9" y1="14" x2="15" y2="14"/>
        </svg>
      ),
      label: 'in Conversation',
      dataPoints: ['Conversations']
    },
    {
      id: 'contacts',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2D96BC" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      label: 'in Contacts',
      dataPoints: ['First Name', 'Last Name']
    },
    {
      id: 'companies',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2D96BC" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      label: 'in Companies',
      dataPoints: ['Company Employees', 'Website']
    }
  ]

  const outputDataPoints = [
    { label: 'Employeer', color: '#C8E6C9', dotColor: '#4CAF50' },
    { label: 'Website', color: '#C8E6C9', dotColor: '#4CAF50' },
    { label: 'Conversations', color: '#FFE0B2', dotColor: '#FF9800' },
    { label: 'Last Name', color: '#FFE0B2', dotColor: '#FF9800' },
    { label: 'First Name', color: '#FFE0B2', dotColor: '#FF9800' }
  ]

  const crmLogos = [
    { name: 'HubSpot', icon: hubspotIcon, alt: 'HubSpot' },
    { name: 'Pipedrive', icon: pipedriveIcon, alt: 'Pipedrive' },
    { name: 'Salesforce', icon: salesforceIcon, alt: 'Salesforce' },
    { name: 'Zoho CRM', icon: salesforceIcon, alt: 'Zoho CRM' }
  ]

  return (
    <section className="supported-leadcrm">
      <div className="supported-container">
        {/* Header Section */}
        <div className="supported-header">
          <div className="header-icon-wrapper">
            <svg className="chat-bubble-icon" width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#B3E5FC"/>
            </svg>
          </div>
          <h2 className="supported-title">Our Supported LeadCRM</h2>
          <p className="supported-description">
            LeadCRM provides Native Integrations with popular CRM tools to make the most out of your Linkedin prospecting. 
            We don't want you to miss any revenue opportunity on the internet!
          </p>
        </div>

        {/* Main Flow Diagram */}
        <div className="flow-diagram">
          {/* SVG Connections for Desktop */}
          <svg className="flow-connections" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {/* Lines from LinkedIn sources to center */}
            <path 
              d="M 100,100 Q 300,150 400,300" 
              stroke="#9ca3af" 
              strokeWidth="2" 
              strokeDasharray="5,5" 
              fill="none" 
              opacity="0.6"
              className="connection-line"
            />
            <path 
              d="M 100,250 Q 300,250 400,300" 
              stroke="#9ca3af" 
              strokeWidth="2" 
              strokeDasharray="5,5" 
              fill="none" 
              opacity="0.6"
              className="connection-line"
            />
            <path 
              d="M 100,400 Q 300,350 400,300" 
              stroke="#9ca3af" 
              strokeWidth="2" 
              strokeDasharray="5,5" 
              fill="none" 
              opacity="0.6"
              className="connection-line"
            />
            {/* Lines from center to CRMs */}
            <path 
              d="M 600,300 Q 700,250 900,150" 
              stroke="#9ca3af" 
              strokeWidth="2" 
              strokeDasharray="5,5" 
              fill="none" 
              opacity="0.6"
              className="connection-line"
            />
            <path 
              d="M 600,300 Q 700,300 900,250" 
              stroke="#9ca3af" 
              strokeWidth="2" 
              strokeDasharray="5,5" 
              fill="none" 
              opacity="0.6"
              className="connection-line"
            />
            <path 
              d="M 600,300 Q 700,350 900,350" 
              stroke="#9ca3af" 
              strokeWidth="2" 
              strokeDasharray="5,5" 
              fill="none" 
              opacity="0.6"
              className="connection-line"
            />
            <path 
              d="M 600,300 Q 700,400 900,450" 
              stroke="#9ca3af" 
              strokeWidth="2" 
              strokeDasharray="5,5" 
              fill="none" 
              opacity="0.6"
              className="connection-line"
            />
          </svg>

          {/* Left Side - LinkedIn Sources */}
          <div className="linkedin-sources">
            {linkedinSources.map((source, index) => (
              <div key={source.id} className="source-item">
                <div className="source-icon-wrapper">
                  {source.icon}
                </div>
                <div className="source-label">{source.label}</div>
                <div className="source-data-points">
                  {source.dataPoints.map((point, idx) => (
                    <div key={idx} className="data-point-in">
                      <span className="data-point-label">{point}</span>
                      <div className="data-point-dot"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Center - LeadCRM Logo */}
          <div className="leadcrm-center">
            <div className="leadcrm-logo-wrapper">
              <img src={logo} alt="LeadCRM Logo" className="leadcrm-logo" />
            </div>
          </div>

          {/* Right Side - CRM Logos */}
          <div className="crm-outputs">
            <div className="output-data-points">
              {outputDataPoints.map((point, index) => (
                <div key={index} className="data-point-out" style={{ '--point-color': point.color, '--dot-color': point.dotColor }}>
                  <div className="data-point-dot" style={{ backgroundColor: point.dotColor }}></div>
                  <span className="data-point-label">{point.label}</span>
                </div>
              ))}
            </div>
            <div className="crm-logos-container">
              {crmLogos.map((crm, index) => (
                <div key={index} className="crm-logo-item">
                  <div className="crm-logo-circle">
                    <img src={crm.icon} alt={crm.alt} className="crm-logo-img" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="supported-cta">
          <button className="integrate-button">
            Lets Integrate your CRM Now!
          </button>
        </div>
      </div>
    </section>
  )
}

export default SupportedLeadCRM

