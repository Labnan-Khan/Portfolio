import React from 'react'
import './skill.css'
import 'aos/dist/aos.css'


function Skill() {
  return (
    <div id='skill' className='skill'>
      <h2>My Skills</h2>
      <div className='skillDiv'>
     
        <div className='skill1'
         data-aos="fade-up"
          data-aos-duration="1500">HTML</div>

        <div className='skill1'
         data-aos="fade-up"
          data-aos-duration="1600">CSS</div>

          <div className='skill1'
         data-aos="fade-up"
          data-aos-duration="1700">Tailwind</div> 
            

        <div className='skill1'
         data-aos="fade-up"
          data-aos-duration="1800">JavaScript</div> 

        <div className='skill1'
         data-aos="fade-up"
          data-aos-duration="1900">Bootstrap</div> 

        <div className='skill1'
         data-aos="fade-up"
          data-aos-duration="2000">React</div> 

        <div className='skill1'
         data-aos="fade-up"
          data-aos-duration="2100">Node</div> 

        <div className='skill1'
         data-aos="fade-up"
          data-aos-duration="2200">Express</div> 

        <div className='skill1'
         data-aos="fade-up"
          data-aos-duration="2300">MongoDb</div> 

        <div className='skill1'
         data-aos="fade-up"
          data-aos-duration="4400">Git&Github</div> 

      </div>
      
    </div>
  )
}

export default Skill
