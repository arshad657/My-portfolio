import React from 'react'
import './About.css'

function About() {
  return (
    <div id='about' className='about'>
      <div>
      <p className='p-3 mb-5'>ABOUT</p>
      </div>

    <div className='d-flex flex-lg-row flex-md-column-reverse flex-sm-column-reverse justify-content-evenly align-items-center pt-5 about-cont'>
        <div className='border p-4 rounded-3 about-des'>
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