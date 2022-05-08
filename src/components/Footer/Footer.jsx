import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className=''></a>

      <ul className='permalinks'>
        <li><a href='#'>HOME</a></li>
        <li><a href='#about'>ABOUT</a></li>
        <li><a href='#experience'>EXPEREINCE</a></li>
        <li><a href='#portfolio'>PORTFOLIO</a></li>
        <li><a href='#contact'>CONTACT</a></li>
      </ul>

      <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/seth-stephens-42509120b/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/SethStephens32" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/seth__stephens/" target="_blank"><FaInstagram/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Seth Stephens. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer