import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolder} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
    <div className='about__header'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    </div>
    <div className='container about__container'>
      
      <div className='about__me'>
        <div className='about__me-image'>
        <img src={Me}></img>
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ years experience</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>10+ Locally</small>
          </article>

          <article className='about__card'>
            <AiOutlineFolder className='about__icon'/>
            <h5>Projects</h5>
            <small>100+ Projects Completed</small>
          </article>
        </div>
        <p>
        My name is Seth Stephens and I am an inspiring full stack developer. I am currently pursuing
        a bachelors in computer science with a focus in software engineering and machine learning.
        Full Stack Developer with 3+ years of hands-on experience designing, developing, and implementing 
        applications and solutions using a range of technologies and programming languages. Seeking to leverage 
        broad development experience and hands-on technical expertise in a challenging role as a Full-stack Developer.
      </p>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About;