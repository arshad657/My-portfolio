import React, { useEffect } from 'react'
import './Home.css';
import {gsap} from 'gsap'
  
function Home() {

  
  useEffect(() => {
    gsap.from(['.items'], {
      stagger: 0.3,
      delay: 6,
      duration: 3,
      y: 50,
      ease: 'Expo.easeInOut',
      opacity: 0
    }) 
  },[])
  useEffect(() => {
    gsap.from(['.pic'], {
      stagger: 0.3,
      delay: 1,
      duration: 3,
      y: 0,
      ease: 'Expo.easeInOut',
      opacity: 1
    }) 
  },[])
  
    
  
  

    return (
    

        
    <div className='d-flex mt-5 home'>
      <div className='home-des'>
      <h1 className='text items'>I am Arshad. I am a</h1>
      <img src="images/mern.png" alt="" className='items mern-pic'/>
      <h1 className='text items'>Stack Developer</h1>
      <div>
      <a href='https://drive.google.com/file/d/1gr4WoR2EK5cyEvlXv5HhQFKaSOZ-ypuy/view?usp=sharing' className='cv-btn items' target="_blank">My CV</a>
      </div>
      <br />
      
      </div>
    
      {/* <img src='images/arshad4.png' className='pic'/> */}
        </div>
      
    )
}

export default Home
