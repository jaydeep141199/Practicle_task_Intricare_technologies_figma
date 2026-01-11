import React from 'react'
import '../assets/styles/KeyFeatures.scss'

const KeyFeatures = () => {
  const features = [
    {
      icon: '👤',
      text: 'Access to',
      boldText: '700M+ Contacts'
    },
    {
      icon: '🖱️',
      text: '',
      boldText: 'One click push',
      textAfter: 'to CRM'
    },
    {
      icon: '⚙️',
      text: '',
      boldText: 'Custom Field',
      textAfter: 'Mapping'
    },
    {
      icon: '📦',
      text: 'Advanced',
      boldText: 'Waterfall Enrichment'
    }
  ]

  // Duplicate features for seamless scrolling
  const duplicatedFeatures = [...features, ...features, ...features]

  return (
    <section className="key-features">
      <div className="features-wrapper">
        <div className="features-track">
          {duplicatedFeatures.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <p className="feature-text">
                {feature.text && <span>{feature.text} </span>}
                <strong>{feature.boldText}</strong>
                {feature.textAfter && <span> {feature.textAfter}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures

