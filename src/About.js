import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
      <p className='p-3 mb-5'>ABOUT</p>
    <div className='d-flex container align-items-center justify-content-between pt-5'>
        <div className='border p-4 rounded-3 w-50'>
        Hello beautiful people, I am Arshad, a web designer and developer with about 3 years of experience. Expertise in Web designing, MERN Stack Development, Frontend and Backend stuffs. 
As your website is the icon of your business, I can create a website just as your business needs.
        </div>
        <div className='pic-container'>
        <img src='images/arshad3.png' className='pic'/>
        </div>
    </div>
    </div>    
  )
}

export default About