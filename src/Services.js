import React from 'react';
import './Services.css'

function Services() {
    return (
        <div id='services' className='services pb-5'>
            <h1 className='service-heading p-3 mb-5'>SKILLS</h1>
            <div >
                    <div className='d-flex justify-content-around container skill-container '>
                    <div className='mb-3 '>
                        <img src="images/html&css.jpg" alt="" srcset="" className='w-75 '/>
                    </div>
                    <div className='skill-item d-flex flex-column justify-content-center align-items-center'>
                        <img src="images/bootstrap.jpg" alt="" srcset="" className='w-25 '/>
                    </div>
                    <div className='d-flex skill-item align-items-center justify-content-center '>
                        <img src="images/tailwind.png" alt="" srcset="" className='w-50 '/>
                        {/* <p>Tailwind</p> */}
                    </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-evenly mt-4 skill-container'>
                    <div className='skill-item flex-column d-flex align-items-center justify-content-center '>
                        <img src="images/matarialUi.png" alt="" srcset="" className='w-25'/>
                        <p>Material UI</p>
                    </div>
                    <div className='skill-item d-flex flex-column align-items-center justify-content-center'>
                        <img src="images/mongoDB.png" alt="" srcset="" className='w-25'/>
                        <p>MongoDB</p>
                    </div>
                    <div className='skill-item flex-column d-flex align-items-center justify-content-center'>
                        <img src="images/expressJS.jpg" alt="" srcset="" className='w-50'/>
                    </div>
                    
                    </div>
                    <hr />
                    <div className='d-flex justify-content-center mt-4 pb-5 skill-container'>
                    <div className='skill-item flex-column d-flex align-items-center justify-content-center '>
                        <img src="images/nodeJs.png" alt="" srcset="" className='w-50'/>
                        <p>NodeJS</p>
                    </div>
                    <div className='skill-item flex-column d-flex align-items-center justify-content-center'>
                        <img src="images/firebase.png" alt="" srcset="" className='w-50'/>
                        <p>Firebase</p>
                    </div>
                    <div className='skill-item flex-column d-flex align-items-center justify-content-center pt-2'>
                        <img src="images/react-native.png" alt="" srcset="" className='w-25' />
                        <p>ReactJS</p>
                    </div>
                    </div>
                    
                    
            </div>
        </div>
    )
}

export default Services
