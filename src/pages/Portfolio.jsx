import React from 'react'
import thatsMe from '../images/socialcard.png'
import webset from '../images/webset.png'
import githubfinder from '../images/githubfinder.png'
import increment from '../images/increment.png'
import agency from '../images/agency.png'
import bathSpa from '../images/bathClone.png'



const Portfolio = () => {
  return (
    <div>
         <main id="work">
        <h1 className="lg-heading"><span className="text-secondary">Code</span> Mine <span className="text-secondary">Check</span> You <span className="text-secondary">Will</span>!</h1>
        
        <h2 className="sm-heading">Yes, I did it on purpose.</h2>

        <div className="projects">

            <div className="item">
            <a href="https://dev155.d299p753gg2dmk.amplifyapp.com/">
                    <img src={thatsMe} alt="Social card" />
                </a>
            </div>

            <div className="item">
            <a href="https://dev-freitas.github.io/webset/">
                    <img src={webset} alt="Social card" />
                </a>
            </div>

            <div className="item">
            <a href="https://dev-freitas.github.io/Bath-Spa-Clone/">
                    <img src={githubfinder} alt="Social card" />
                </a>
            </div>

            <div className="item">
            <a href="https://dev-freitas.github.io/Github-User-Finder/">
                    <img src={increment} alt="Social card" />
                </a>
            </div>

            <div class="item">
            <a href="https://dev-freitas.github.io/aulascr/">
                    <img src={agency} alt="agency" />
                </a>
            </div>
            <div class="item">
            <a href="https://dev-freitas.github.io/Bath-Spa-Clone/">
                    <img src={bathSpa} alt="Bath spa" />
                </a>
            </div>



        </div>

    </main>
    </div>
  )
}

export default Portfolio
