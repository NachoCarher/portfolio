import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>IGNACIO CARVAJAL</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#capabilities">Capabilites</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/*<li><a href="#testimonials">Testimonials</a></li>*/}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/nachoch6?r=nametag"><FiInstagram /></a>
        {/*<a href="https://facebook.com"><FaFacebookF /></a>*/}
      </div>

      <div className="footer__copyright">
        <small>&copy; Ignacio Carvajal. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer