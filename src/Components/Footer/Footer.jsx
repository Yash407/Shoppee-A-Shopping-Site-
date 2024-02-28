import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

import footer_logo from '../Assets/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Shoppee</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
       <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img className='footer-icon' src={instagram_icon} alt="" />
            <img className='footer-icon' src={pintester_icon} alt="" />
            <img className='footer-icon' src={whatsapp_icon} alt="" />
        </div>
       </div>
       <div className="footer-copyright">
        <hr />
        <p>Copyright @2023 - All Right Reserved</p>
       </div>
    </div>
  )
}

export default Footer 
