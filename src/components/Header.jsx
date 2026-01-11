import '../assets/styles/Header.scss'
import React from 'react'
import logo from '../assets/images/logo.png'
import dropdownArrow from '../assets/images/arrow.png'
import loginIcon from '../assets/images/Frame.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div><img src={logo} alt="LeadCRM.IO" width={150} height={50} /></div>
        </div>
        
        <nav className="nav">
          <div className="nav-item">
            Product <span className="dropdown-arrow"><img src={dropdownArrow} alt="Dropdown Arrow" width={15} height={10} style={{ marginLeft: '5px', marginTop: '8px' }}/></span>
          </div>
          <div className="nav-item">
            Pricing <span className="dropdown-arrow"><img src={dropdownArrow} alt="Dropdown Arrow" width={15} height={10} style={{ marginLeft: '5px', marginTop: '8px' }}/></span>
          </div>
          <div className="nav-item">
            Resources <span className="dropdown-arrow"><img src={dropdownArrow} alt="Dropdown Arrow" width={15} height={10} style={{ marginLeft: '5px', marginTop: '8px' }}/></span>
          </div>  
          <div className="nav-item">
            Company <span className="dropdown-arrow"><img src={dropdownArrow} alt="Dropdown Arrow" width={15} height={10} style={{ marginLeft: '5px', marginTop: '8px' }}/></span>
          </div>
        </nav>
        
        <div className="header-actions">
          <button className="btn-primary">Get Your Free Account</button>
          <button className="btn-login">
            <span className="login-icon"><img src={loginIcon} alt="Login Icon" width={20} height={20} /></span> Login
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

