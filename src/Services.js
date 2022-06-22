import React from 'react';
import './Services.css'

function Services() {
    return (
        <div className='services pb-5'>
            <h1 className='service-heading p-3 mb-5'>SKILLS</h1>
            <div >
                    <div className='d-flex justify-content-center container skill-container'>
                    <div className='mb-3'>
                        <img src="images/html&css.jpg" alt="" srcset="" className='w-75'/>
                    </div>
                    <div className=' d-flex flex-column justify-content-center align-items-center w-25'>
                        <img src="images/bootstrap.jpg" alt="" srcset="" className='w-25'/>
                    </div>
                    <div className='d-flex  align-items-center justify-content-center w-25'>
                        <img src="images/tailwind.png" alt="" srcset="" className='w-50 '/>
                        {/* <p>Tailwind</p> */}
                    </div>
                    </div>
                    <div className='d-flex justify-content-center mt-4 skill-container'>
                    <div className=' flex-column d-flex align-items-center justify-content-center w-25'>
                        <img src="images/materialUi.png" alt="" srcset="" className='w-25'/>
                        <p>Material UI</p>
                    </div>
                    <div className=' flex-column d-flex align-items-center justify-content-center pt-2 w-25'>
                        <img src="images/react-native.png" alt="" srcset="" className='w-25' />
                        <p>ReactJS</p>
                    </div>
                    <div className=' flex-column d-flex align-items-center justify-content-center w-25'>
                        <img src="images/nodeJs.png" alt="" srcset="" className='w-50'/>
                        <p>NodeJS</p>
                    </div>
                    </div>
                    <div className='d-flex justify-content-center mt-4 pb-5 skill-container'>
                    <div className=' flex-column d-flex align-items-center justify-content-center w-25'>
                        <img src="images/expressJS.jpg" alt="" srcset="" className='w-50'/>
                    </div>
                    <div className=' w-25'>
                        <img src="images/mongoDB.png" alt="" srcset="" className='w-25'/>
                        <p>MongoDB</p>
                    </div>
                    <div className=' flex-column d-flex align-items-center justify-content-center'>
                        <img src="images/firebase.png" alt="" srcset="" className='w-50'/>
                        <p>Firebase</p>
                    </div>
                    </div>
                    
                    
            </div>
        </div>
    )
}

export default Services
