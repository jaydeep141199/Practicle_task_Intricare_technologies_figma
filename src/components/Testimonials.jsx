import React, { useState } from 'react'
import '../assets/styles/Testimonials.scss'
import arrowLeftIcon from '../assets/images/left.png'
import arrowRightIcon from '../assets/images/right.png'
import capterraIcon from '../assets/images/platform2.png'
import person2 from '../assets/images/Avatar2.png'
import person3 from '../assets/images/Avatar3.png'
import person1 from '../assets/images/Avatar1.png'
import starIcon from '../assets/images/star.png'
import starFilledIcon from '../assets/images/star.png'
  const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      name: "David Fincher",
      platform: "On Capterra",
      icon: <img src={capterraIcon} alt="Capterra Icon" width={70} height={70} />,
      avatar: <img src={person1} alt="Person Icon" width={50} height={50} />
    },
    {
      id: 2,
      quote: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
      name: "Lillian Williams",
      platform: "On Capterra",
      icon: <img src={capterraIcon} alt="Capterra Icon" width={70} height={70} />,
      avatar: <img src={person2} alt="Person Icon" width={50} height={50} />
    },
    {
      id: 3,
      quote: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      name: "Michael",
      platform: "On Capterra",
      icon: <img src={capterraIcon} alt="Capterra Icon" width={70} height={70} />,
      avatar: <img src={person3} alt="Person Icon" width={50} height={50} />
    },
    {
      id: 4,
      quote: "LeadCRM has transformed how I manage my LinkedIn leads. The integration is seamless and the data enrichment feature saves me hours every week.",
      name: "Sarah Johnson",
      platform: "On Capterra",
      icon: <img src={capterraIcon} alt="Capterra Icon" width={70} height={70} />,
      avatar: <img src={person1} alt="Person Icon" width={50} height={50} />
    },
    {
      id: 5,
      quote: "Excellent tool for sales professionals. The CRM sync works flawlessly and the customer support team is always ready to help.",
      name: "Robert Chen",
      platform: "On Capterra",
      icon: <img src={capterraIcon} alt="Capterra Icon" width={70} height={70} />,
      avatar: <img src={person2} alt="Person Icon" width={50} height={50} />
    },
    {
      id: 6,
      quote: "The best LinkedIn CRM integration I've used. It's intuitive, reliable, and has significantly improved my sales process.",
      name: "Emily Davis",
      platform: "On Capterra",
      icon: <img src={capterraIcon} alt="Capterra Icon" width={100} height={100} />,
      avatar: <img src={person1} alt="Person Icon" width={50} height={50} />
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsPerView = 3

  const maxIndex = testimonials.length - cardsPerView

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex < maxIndex ? prevIndex + 1 : 0
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex > 0 ? prevIndex - 1 : maxIndex
    })
  }


  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What people are saying about LeadCRM</h2>
          <div className="testimonials-navigation">
            <button 
              className="nav-button prev-button" 
              onClick={prevSlide}
              aria-label="Previous testimonials"
            >
            <img src={arrowRightIcon} alt="Previous testimonials" width={10} height={15}   />  
            </button>
            <button 
              className="nav-button next-button" 
              onClick={nextSlide}
              aria-label="Next testimonials"
            >
            <img src={arrowLeftIcon} alt="Next testimonials" width={10} height={15}   />  
            </button>
          </div>
        </div>

        <div className="testimonials-carousel">
          <div 
            className="testimonials-slider"
            style={{
              transform: `translateX(calc(-${currentIndex} * ((100% - 4rem) / ${cardsPerView} + 2rem)))`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-quote">
                  {/* <span className="quote-mark">"</span> */}
                  <p>{`"${testimonial.quote}"`}</p>
                  <div className="testimonial-rating">
                  <div className="rating-logo">
                    {testimonial.icon}
                  </div>
                  <div className="stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img src={starFilledIcon} alt="Star Icon" width={20} height={20} key={index} />
                  ))}
                  </div>
                </div>
                </div>
                
               
              <hr />
                <div className="testimonial-author">
                {testimonial.avatar}
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-platform">{testimonial.platform}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

