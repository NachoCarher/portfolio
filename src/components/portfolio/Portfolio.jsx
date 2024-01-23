import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/gericht-restaurant-img-sm.PNG'
import IMG3 from '../../assets/pokemon-finder.png'

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'Gericht Restaurant',
    github: 'https://github.com/NachoCarher/gericht-restaurant',
    demo: "https://nachocarher-gericht-restaurant.netlify.app/",
    description : "Restaurant webpage made with React following Javascript Mastery's YouTube tutorial."
  },
  {
    id: 2,
    image: IMG3,
    title: 'Pokemon Finder',
    github: 'https://github.com/NachoCarher/react-buscador-pokemon',
    demo: "https://nachocarher-pokemon-finder.netlify.app/",
    description : "Pokemon finder made with React"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo, description }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
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