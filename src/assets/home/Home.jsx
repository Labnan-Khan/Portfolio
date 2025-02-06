import React, { useEffect } from 'react'
import { asset } from '../../../public/icon'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Home() {

  useEffect(()=>{
    Aos.init({
      duration:700,
      once:true,
      mirror:false,
    })
  },[])

  return (
    <div id='home' className='home'>
      <img src={asset.myPic} alt="" />
      <h1 data-aos="zoom-in">Hello, I<sup>,</sup>m LABNAN KHAN</h1>
      <p>
        A Full Stack developer with a strong emphasis on
          Frontend technologies, dedicated to enhancing 
          Backend skills to deliver comprensive Web
           solutions
      </p>
      
      <div className="container">
	      <div className="field">
		     
		      <div className="scroll"></div>
		     
	      </div>
      </div>
    </div>
  )
}

export default Home
