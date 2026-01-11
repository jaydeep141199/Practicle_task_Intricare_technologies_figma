import React from 'react'
import '../assets/styles/Comparison.scss'
import withoutLeadCRMIcon from '../assets/images/linkdin1.png'
import withLeadCRMIcon from '../assets/images/linkdin2.png'
import closeIcon from '../assets/images/cancel.png'
import crm1 from '../assets/images/crm1.png'
import crm2 from '../assets/images/crm2.png'
import crm3 from '../assets/images/crm3.png'
import crm4 from '../assets/images/crm4.png'
const Comparison = () => {
  const withoutChallenges = [
    {
      title: 'Manual Data Entry',
      stat: '3+ hours wasted daily',
      description: 'Copying LinkedIn contacts to CRM manually plus losing conversation history.'
    },
    {
      title: 'Incomplete Data',
      stat: '60% Data incomplete',
      description: 'LinkedIn profiles missing Email and Phones from 700M+ Database.'
    },
    {
      title: 'No CRM Visibility',
      stat: 'Zero context available',
      description: "Can't see existing CRM contacts when browsing LinkedIn profiles."
    },
    {
      title: 'Limited Productivity',
      stat: 'No smart assistance',
      description: 'Writing messages manually plus no AI assistant for reply, invite or comments.'
    }
  ]

  const withSolutions = [
    {
      title: 'Complete Bi-Directional Sync',
      icon:<img src={crm1} alt="Check" width={40} height={40} />,
      description: 'Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real-time.'
    },
    {
      title: '700M+ Contacts + Enrichment',
      icon:<img src={crm2} alt="Check" width={40} height={40} />,
      description: 'Get verified emails and phone numbers from a vast global database.'
    },
    {
      title: 'CRM Overlay on LinkedIn',
      icon:<img src={crm3} alt="Check" width={40} height={40} />,
      description: 'See full CRM insights directly on LinkedIn profiles without switching tabs.'
    },
    {
      title: 'AI Response + Templates + Bulk Exports',
      icon:<img src={crm4} alt="Check" width={40} height={40} />,
      description: 'Save time with AI-crafted replies, pre-built templates, and one-click data exports.'
    }
  ]

  return (
    <section className="comparison">
      <h2 className="comparison-title">
        Every LinkedIn Prospector faces these daily challenges
      </h2>
      
      <div className="comparison-container">
        <div className="comparison-column without">
          <div className="column-image">
          <img src={withoutLeadCRMIcon} alt="Without LeadCRM" width={'100%'} height={'100%'} />
          </div>
          <h3 className="column-title">Without LeadCRM</h3>
          <div className="challenges-list">
            {withoutChallenges.map((challenge, index) => (
              <div key={index} className="challenge-item">
                <span className="challenge-icon"><img src={closeIcon} alt="Close" width={15} height={20} /></span>
                <div className="challenge-content">
                  <div className="challenge-header">
                    <span className="challenge-title">{challenge.title}</span>
                    <span className="challenge-stat">{challenge.stat}</span>
                  </div>
                  <p className="challenge-description">{challenge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="vs-divider">
          <span className="vs-text">VS</span>
          <div className="vs-line"></div>
        </div>
        
        <div className="comparison-column with">
          <h3 className="column-title">With LeadCRM</h3>
          <div className="column-image">
          <img src={withLeadCRMIcon} alt="With LeadCRM" width={'100%'} height={'100%'} />
          </div>
          <div className="solutions-list">
            {withSolutions.map((solution, index) => (
              <div key={index} className="solution-item">
                <span className="solution-icon">{solution.icon}</span>
                <div className="solution-content">
                  <h4 className="solution-title">{solution.title}</h4>
                  <p className="solution-description">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comparison

