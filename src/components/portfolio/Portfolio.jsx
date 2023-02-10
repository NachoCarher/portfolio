import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-img-sm.PNG'
import IMG2 from '../../assets/gericht-restaurant-img-sm.PNG'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My Portfolio Template',
    github: 'https://github.com/NachoCarher/portfolio',
    demo: "https://nachocarher.github.io/portfolio/"
  }, 
  {
    id: 2,
    image: IMG2,
    title: 'Gericht Restaurant',
    github: 'https://github.com/NachoCarher/gericht-restaurant',
    demo: "https://nachocarher-gericht-restaurant.netlify.app/"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio