import React from 'react'
import '../assets/styles/Hero.scss'
import rocketIcon from '../assets/images/rocket.png'
import arrowIcon from '../assets/images/line.png'
import hubspotIcon from '../assets/images/first.png'
import pipedriveIcon from '../assets/images/second.png'
import salesforceIcon from '../assets/images/third.png'
import chromeIcon from '../assets/images/platform1.png'
import g2Icon from '../assets/images/platform2.png'
import chromeWebStoreIcon from '../assets/images/crome.png'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-banner">
        <span className="rocket-icon"><img src={rocketIcon} alt="Rocket Icon" width={15} height={15} /></span>
        <span>Thousands of Professionals using LeadCRM</span>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-headline">
          LinkedIn CRM Integration Capture, Sync and Enrich in{' '}
          <span className="highlight">
            Both Ways
            <span className="highlight-underline"></span>
          </span>
        </h1>
        
        <p className="hero-subheadline">
          Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles. 
          Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.
        </p>
        
        <div className="works-with">
          <span className="works-with-label">Works with</span>
          <div className="crm-logos">
            <div className="crm-logo hubspot">
              <img src={hubspotIcon} alt="HubSpot Icon" width={50} height={50} />
            </div>
            <div className="crm-logo pipedrive">
              <img src={pipedriveIcon} alt="Pipedrive Icon" width={50} height={50} />
            </div>
            <div className="crm-logo salesforce">
              <img src={salesforceIcon} alt="Salesforce Icon" width={50} height={50} />
            </div>
          </div>
        </div>
        
        <div className="ratings">
          <div className="rating-item">
          <img src={chromeIcon} alt="Chrome Icon" width={80} height={80} />
            <div className="stars">★★★★★</div>
            <span className="rating-score">5/5</span>
          </div>
          <div className="rating-item">
            <img src={g2Icon} alt="G2 Icon" className="rating-icon-img" />
            <div className="stars">★★★★★</div>
            <span className="rating-score">5/5</span>
          </div>
        </div>
        
        <div className="hero-cta">
          <button className="btn-chrome">
          <div className="btn-chrome-text">
              <span className="btn-chrome-label">Available in</span>
              <span className="btn-chrome-store">Chrome Web Store</span>
            </div>
            <img src={chromeWebStoreIcon} alt="Chrome Web Store Icon" className="btn-chrome-logo" />
          </button>
          <button className="btn-trial">Get a Free Trial Now!</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
