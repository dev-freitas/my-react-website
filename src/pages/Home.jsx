import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const Home = () => {
  return (
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
  )
}

export default Home
