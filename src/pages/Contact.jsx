import React from 'react'
import {FaPhoneAlt, FaEnvelope, FaGlobe} from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
         <main id="contact">
        <h1 className="lg-heading">Contact <span className="text-secondary"><i className="fa-solid fa-comment"></i></span></h1>
        
        <h2 className="sm-heading">This is how you can get in touch....</h2>

        <div className="contact">
            <div className="contact-list">
               <a href="tel:+07824567397"><h1 className="lg-heading contact-item"><FaPhoneAlt /><span className="text-secondary"> 07824 567 397</span></h1></a> 
               <a href="mailto:fdfreitas@gmail.com"><h1 className="lg-heading contact-item"><FaEnvelope /><span className="text-secondary"> fdfreitas@gmail.com</span></h1></a> 
               <a href="https://github.com/dev-freitas"><h1 className="lg-heading contact-item"><FaGlobe /><span className="text-secondary"> https://github.com/dev-freitas</span></h1></a> 
            </div>
        </div>

    </main>
    </div>
  )
}

export default Contact
