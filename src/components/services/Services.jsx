import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Other Aptitudes</h5>
      <h2>Capabilities</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Competences</h3>
          </div>
        
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Teamwork </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Motivated attitude</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Self-criticism </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adaptability</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Good communication skills </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Self-sufficient</p>
            </li>
          </ul>
        </article>

        {/* END OF FIRST SERVICE */}

        <article className='service'>
          <div className="service__head">
            <h3>Educational Achievements</h3>
          </div>
        
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Honourable mention in Artificial Intelligence</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Excellent in High-performance web servers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Excellent in Multimedia Systems</p>
            </li>
          </ul>
        </article>

        {/* END OF SECOND SERVICE */}

        <article className='service'>
          <div className="service__head">
            <h3>Courses</h3>
          </div>
        
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Java, SoloLearn</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Python, SoloLearn</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>C++, SoloLearn</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JavaScript, SoloLearn</p>
            </li>

          </ul>
        </article>

        {/* END OF THIRD SERVICE */}

      </div>
    </section>
  )
}

export default Services