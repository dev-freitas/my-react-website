import React from 'react'
import thatsMe from '../images/socialcard.png'
import webset from '../images/webset.png'
import githubfinder from '../images/githubfinder.png'
import bathSpa from '../images/bathClone.png'
import dashboard from '../images/dashboard.png'
import contactApp from '../images/contact.png'
import remindMe from '../images/remind.png'
import weather from '../images/weather.png'
import miracles from '../images/miracles.png'




const Portfolio = () => {
  return (
    <div>
         <main id="work">
        <h1 className="lg-heading"><span className="text-secondary">Code</span> Mine <span className="text-secondary">Check</span> You <span className="text-secondary">Will</span>!</h1>
        
        <h2 className="sm-heading">Yes, I did it on purpose.</h2>

        <div className="projects">

            <div className="item">
            <a href="https://main.d2xezl3c8ldauu.amplifyapp.com/">
                    <img src={dashboard} alt="Social card" />
                </a>
            </div>
            <div className="item">
            <a href="https://main.d1pymykytmobew.amplifyapp.com/">
                    <img src={contactApp} alt="Social card" />
                </a>
            </div>
            <div className="item">
            <a href="https://dev-freitas.github.io/Remind-me-app/">
                    <img src={remindMe} alt="Social card" />
                </a>
            </div>
            <div className="item">
            <a href="https://main.ds90bnhezy2ij.amplifyapp.com/">
                    <img src={miracles} alt="Social card" />
                </a>
            </div>

            <div className="item">
            <a href="https://dev-freitas.github.io/webset/">
                    <img src={webset} alt="Webset" />
                </a>
            </div>

            <div className="item">
            <a href="https://dev-freitas.github.io/Bath-Spa-Clone/">
                    <img src={bathSpa} alt="bath spa clone" />
                </a>
            </div>

            <div className="item">
            <a href="https://dev-freitas.github.io/Github-User-Finder/">
                    <img src={githubfinder} alt="github user" />
                </a>
            </div>
            
            <div className="item">
            <a href="https://dev-freitas.github.io/weather-app/">
                    <img src={weather} alt="github user" />
                </a>
            </div>

            <div className="item">
            <a href="https://dev155.d299p753gg2dmk.amplifyapp.com/">
                    <img src={thatsMe} alt="Social card" />
                </a>
            </div>
        </div>

    </main>
    </div>
  )
}

export default Portfolio
