import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
     <div>
        <input type="email" placeholder='Your Email id'/></div> 
        <button>Subscribe</button>
    </div>
  )
}

export default Newsletter
