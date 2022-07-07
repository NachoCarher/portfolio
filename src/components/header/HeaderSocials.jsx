import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ignacio-c-6303b1209" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/NachoCarher" target="_blank"><FaGithub /></a>
        <a href="https://instagram.com/nachoch6?r=nametag" target="_blank"><BsInstagram /></a>

    </div>
  )
}

export default HeaderSocials