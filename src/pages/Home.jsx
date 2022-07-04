import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import meImg from '../images/fabiohome1.png'
import meImg2 from '../images/fabiohome2.png'
import meImg3 from '../images/fabiohome3.png'
import meImg4 from '../images/fabiohome4.png'

const Home = () => {
  return (
    <div className="home-container">
      <img src={meImg} alt="me" className='home-img'/>
      <div>
          <main id="home">
          <h1 className="lg-heading">Fabio <span className="text-secondary">Freitas</span></h1>
          
          <h2 className="sm-heading">Front End Web Developer</h2>
          
          <div className="icons">
              <a href="https://www.linkedin.com/in/fabio-freitas-98969a62/"><FaLinkedin /></a>
              <a href="https://github.com/dev-freitas" ><FaGithub /></a>
          </div>
      </main>
      </div>
      <img src={meImg2} alt="me" className='home-img2'/>
      <img src={meImg3} alt="me" className='home-img3'/>
      <img src={meImg4} alt="me" className='home-img4'/>
    </div>
  )
}

export default Home
