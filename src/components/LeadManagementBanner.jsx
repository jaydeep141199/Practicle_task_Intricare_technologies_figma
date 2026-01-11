import React from 'react'
import '../assets/styles/LeadManagementBanner.scss'
import mainBanner from '../assets/images/mainbanner.png'
import hubspotIcon from '../assets/images/first.png'
import pipedriveIcon from '../assets/images/second.png'
import salesforceIcon from '../assets/images/third.png'
import capterraIcon from '../assets/images/platform2.png'

const LeadManagementBanner = () => {
  return (
    <section className="lead-management-banner">
      <div className="banner-container">
        {/* Header Section */}
        <div className="banner-header">
          <h2 className="banner-headline">Join Thousands of Professionals Using LeadCRM</h2>
        </div>

        {/* Banner Image */}
          <img src={mainBanner} alt="LeadCRM Features" className="banner-image" />

        {/* CTA Button */}
        <div className="banner-cta">
          <button className="get-started-button">
            Get Started Today
            <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default LeadManagementBanner

