import React from 'react'
import meImg from '../images/fabio-mountain.png'
import { FaCss3Alt, FaHtml5, FaSass, FaReact, FaPython, FaBootstrap, FaFigma, FaDatabase } from 'react-icons/fa'
import { SiJavascript, SiFirebase,  } from 'react-icons/si'

const About = () => {
  return (
    <div>
         <main id="about">
        <h1 className="lg-heading">About <span className="text-secondary">Me</span></h1>
        
        <h2 className="sm-heading">Here I go...</h2>

        <div className="about-info">
            <img src={meImg} alt="Fabio" className="bio-image" />

            <div className="bio">
                <h3 className="text-secondary">BIO</h3>
                <p className="sm-heading">I am a self-taught front end web developer. After working many years as a construction specialist, I decided it was time for a change. Since then, I've been studying and applying myself to become a web developer. It's been a tough journey but I became a competent web developer. I also discovered soft skills that I did not know I had. I am excited to announce that I am open for business.</p>
            </div>            
            <div className="job job-1">
                <div className="lang-icons">
                <FaHtml5 /> 
                <FaCss3Alt />
                <SiJavascript /> 
                <FaSass />
                <FaDatabase /> 
                </div>
                <div className="lang-icons">
                <FaReact /> 
                <FaPython /> 
                <FaBootstrap /> 
                <FaFigma />
                <SiFirebase />
                </div>
            </div>
            <div className="job job-2">
                <h3>Skills</h3>
                <p>Teamwork, focus, problem-solving, attention to detail, communication, time-Keeping, result oriented.</p>
            </div>
            <div className="job job-3">
                <h3>FREELANCER</h3>
                <p>As a freelancer Web Developer, I've been working on projects for friends and myself.</p>
            </div>
        </div>

    </main>
    </div>
  )
}

export default About
