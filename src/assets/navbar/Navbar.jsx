import React from 'react'
import { asset } from '../../../public/icon'
import { Link } from 'react-scroll'
import './nav.css'
function Navbar() {
  return (
    <div className='navbar'>
        
        <ul className='item'>

            <li><Link to='home' smooth={true} duration={500}>HOME</Link></li>
            <li><Link to='about' smooth={true} duration={500}>ABOUT</Link></li>
            <li><Link to='skill' smooth={true} duration={500}>SKILLS</Link></li>
            <li><Link to='project' smooth={true} duration={500}>PROJECTS</Link></li>
            <li><Link to='contact' smooth={true} duration={500}>CONTACT</Link></li>

        </ul>
      </div>
    
  )
}

export default Navbar
