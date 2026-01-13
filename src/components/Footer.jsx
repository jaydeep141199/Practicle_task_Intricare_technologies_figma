import React from 'react'
import '../assets/styles/Footer.scss'
import logo from '../assets/images/logo.png'
import chromeWebStoreIcon from '../assets/images/availablecrome.png'
import facebookIcon from '../assets/images/facebook.png'
import twitterIcon from '../assets/images/twiter.png'
import linkedinIcon from '../assets/images/linkdin.png'
import instagramIcon from '../assets/images/insta.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Left Section - Branding */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="LeadCRM Logo" className="logo-image" />
              <span className="logo-text">LEADCRM.IO</span>
            </div>
            <p className="footer-tagline">
              LeadCRM is LinkedIn integration tool for your CRM.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </div>

          {/* Integrations Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">Integrations</h3>
            <ul className="footer-list">
              <li><a href="#">HubSpot</a></li>
              <li><a href="#">Salesforce</a></li>
              <li><a href="#">Pipedrive</a></li>
              <li>
                <a href="#">Close.io</a>
                <span className="coming-soon">Coming Soon</span>  
              </li>
              <li>
                <a href="#">Insightly</a>
                <span className="coming-soon">Coming Soon</span>
              </li>
            </ul>
          </div>

          {/* Alternative Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">Alternative</h3>
            <ul className="footer-list">
              <li><a href="#">Surfe VS LeadCRM</a></li>
              <li><a href="#">Linkmatch Alternative</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">Legal</h3>
            <ul className="footer-list">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>

          {/* Right Section - Contact */}
          <div className="footer-contact">
            <h3 className="footer-column-title">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:support@leadcrm.io">support@leadcrm.io</a>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+12315387466">+1 231-538-7466</a>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                <a href="#">Help Center</a>
              </div>
            </div>
            <a href="#" className="chrome-button-wrapper">
              <img src={chromeWebStoreIcon} alt="Available in Chrome" className="chrome-button" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-disclaimer">
            Disclaimer: LeadCRM is not endorsed or certified by Linkedin. All Linkedin(tm) logos and trademarks displayed on this tool are property of Linkedin. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.
          </p>
          <p className="footer-copyright">
            Copyright © 2025 LeadCRM. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
