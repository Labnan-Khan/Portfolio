import React from 'react'
import { asset } from '../../../public/icon'
import './contact.css'

function Contact() {
  return (
    <div id='contact' className='contact'>
        <h3>Social Contact</h3>
        <div className='social'>
            <a href="https://www.linkedin.com/in/labnan-khan-b748462a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                <img src={asset.linkedin} alt="" /></a>
            <a href="https://github.com/Labnan-Khan" target='_blank'><img src={asset.github} alt="" /></a>
            <a href="https://wa.me/923303540034" target='_blank'><img src={asset.whatsapp} alt="" /></a>
            {/* <a href="mailto:labnankhan078@gmail.com" target='_blank'><img src={asset.gmail} alt="" /></a> */}
      </div>
    </div>
  )
}

export default Contact
