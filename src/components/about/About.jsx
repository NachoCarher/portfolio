import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.jpg'
import {FaAward} from 'react-icons/fa'
import {MdLanguage} from 'react-icons/md'
import {FaUniversity} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>No Experience</small>
            </article>

            <article className="about__card">
              <MdLanguage className="about__icon" />
              <h5>Languages</h5>
              <small>English C1 Certificate</small>
              <br />
              <small>Native Level in Spanish</small>

            </article>

            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>Education</h5>
              <small>Computer Engineering at the University of Granada</small>
            </article>
          </div>

          <p>
            My name is Ignacio, I am currently finishing my studies in the degree of Computer Engineering at the University of Granada and I am open to new projects.
          </p>

          <p>
            I am a curious and restless person, constantly looking for new things to do, both personally and in my professional life. Enthusiastic about the search for simplicity and functionality and being able to combine them with the use of the latest technologies, which is what really excites me and is my main motivation. I always try to know the latest, so I am used to learn fast and adapt to new situations.
          </p>

          <p>
            I have spent a whole academic year living in Poland, at the University of Łódź through the Erasmus+ programme. I feel comfortable working with people and I have no problem communicating in English.
            </p>

          <p>
            If you want to talk to me about how I could contribute, collaborate or simply ask for more information about me, please do not hesitate to contact me, I will be happy to help you.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About