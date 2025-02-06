import React from 'react'
import './about.css'
import { asset } from '../../../public/icon'
function About() {
  return (
    <div id='about' className='about'>
        <h2>About Me</h2>
      <dir className="aboutP">
        <p> 
        I<sup>,</sup>m Labnan Khan, a passionate MERN Stack Developer 
        with experience in building scalable, 
        high-performance web applications. I focus on 
        frontend development, ensuring that every
         website or web application I create not only
          looks great but also performs flawlessly.
        </p>
        <p>
        Whether you're looking to create an e-commerce
        platform, a portfolio site, or a business-critical 
        web application, I bring a mix of creativity and
        technical expertise to every project.
        </p>
        <p>
        I<sup>,</sup>m always open to new opportunities where
         I can contribute, learn, and grow. If you<sup>,</sup>re
          looking for a developer who<sup>,</sup>s passionate about
           turning ideas into reality and scaling businesses
            through innovative web applications, feel
             free to connect with me. Let<sup>,</sup>s create
              something awesome together!
              
            
        </p>
        </dir>   
      
    </div>
  )
}

export default About
