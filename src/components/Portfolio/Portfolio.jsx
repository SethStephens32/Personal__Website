import React from 'react'
import './portfolio.css'
import QUOTE from '../../assets/random-quote.jpg'

const data = [
  {
    id: 1,
    image: QUOTE,
    title: "Random Quote Generator",
    github: 'https://github.com/SethStephens32',
    demo: 'https://sethstephens32.github.io/Random-Quote-Generator/'
  },
  {
    id: 1,
    image: QUOTE,
    title: "Random Quote Generator",
    github: 'https://github.com/SethStephens32',
    demo: 'https://sethstephens32.github.io/Random-Quote-Generator/'
  },
  {
    id: 2,
    image: QUOTE,
    title: "Random Quote Generator",
    github: 'https://github.com/SethStephens32',
    demo: 'https://sethstephens32.github.io/Random-Quote-Generator/'
  },
  {
    id: 3,
    image: QUOTE,
    title: "Random Quote Generator",
    github: 'https://github.com/SethStephens32',
    demo: 'https://sethstephens32.github.io/Random-Quote-Generator/'
  },
  {
    id: 4,
    image: QUOTE,
    title: "Random Quote Generator",
    github: 'https://github.com/SethStephens32',
    demo: 'https://sethstephens32.github.io/Random-Quote-Generator/'
  },
  {
    id: 5,
    image: QUOTE,
    title: "Random Quote Generator",
    github: 'https://github.com/SethStephens32',
    demo: 'https://sethstephens32.github.io/Random-Quote-Generator/'
  },
  {
    id: 6,
    image: QUOTE,
    title: "Random Quote Generator",
    github: 'https://github.com/SethStephens32',
    demo: 'https://sethstephens32.github.io/Random-Quote-Generator/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <div className='portfolio__header'>
    <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
    </div>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title}></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn'>Github</a>
          <a href={demo} className='btn -btn-primary' target='_blank'> Live Demo</a>
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