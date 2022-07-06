import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


const data = [
  {
    avatar: AVTR1,
    name: "John Doe",
    review: "modi temporibus quibusdam et autem repellat provident occaecati excepturi optio reprehenderit"
  },
  {
    avatar: AVTR2,
    name: "Jane Doe",
    review: "modi temporibus quibusdam et autem repellat provident occaecati excepturi optio reprehenderit"
  },
  {
    avatar: AVTR3,
    name: "Shawn Doe",
    review: "modi temporibus quibusdam et autem repellat provident occaecati excepturi optio reprehenderit"
  },
  {
    avatar: AVTR4,
    name: "Michael Doe",
    review: "modi temporibus quibusdam et autem repellat provident occaecati excepturi optio reprehenderit"
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className='testimonial' >
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials