import React from 'react'
import './project.css'
import 'aos/dist/aos.css'

function Project() {
  return (
    <div id='project' className='project'>
      <h2>Projects</h2>
      
      <div className='pc' data-aos="fade-left"
          data-aos-duration="1500" >

        <div className='pcDetail'>
          <h3>ChatAI</h3>
          <p>
            ChatAI is a web-based application that leverages the Gmini API to enable natural language conversations. It offers users an intuitive and interactive chat experience with advanced AI capabilities. Processes and responds to a wide range of user prompts.
          </p>
         <div className='sUsed'>
           <div className='su'>HTML</div>
           <div className='su'>CSS</div>
           <div className='su'>JS</div>
           <div className='su'>react</div>
           <div className='su'>Gmini API</div>
         </div>
        
        </div>

      
     </div>




      <div className='pc' data-aos="fade-right"
          data-aos-duration="1500" >

        <div className='pcDetail'>
          <h3>ChatAI</h3>
          <p>
            ChatAI is a web-based application that leverages the Gmini API to enable natural language conversations. It offers users an intuitive and interactive chat experience with advanced AI capabilities. Processes and responds to a wide range of user prompts.
          </p>
         <div className='sUsed'>
           <div className='su'>HTML</div>
           <div className='su'>CSS</div>
           <div className='su'>JS</div>
           <div className='su'>react</div>
           <div className='su'>Gmini API</div>
         </div>
        
        </div>

      
     </div>


    


      
    </div>
  )
}

export default Project
