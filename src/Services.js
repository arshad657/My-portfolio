import React from 'react';
import './Services.css'

function Services() {
    return (
        <div className='table-text' id='services'>
            <h1>Skills</h1>
            <div>
            
                <table class="table table-bordered w-75 text-white mx-auto">
                    
                    <tbody>
                        <tr>
                        <td>
                        <img src="images/html&css.jpg" alt="" />
                        <p >HTML5 & CSS3</p>
                        </td>
                        <td >
                        <img src="images/materialUi.png" alt="" className='w-25'/>
                        <p>Material UI</p>
                        </td>
                        <td className='w-25'>
                        <img src="images/nodejs.png" alt="" className='w-25'/>
                        <p>Node JS</p>
                        
                        </td>
                        </tr>
                        <tr>    
                        <td>
                        <img src="images/react-native.png" alt="" className='w-25'/>
                        <p>React Native</p>
                        </td>
                        <td >
                        <img src="images/firebase.png" alt="" className='w-25'/>
                        <p>Firebase</p>
                        </td>
                        <td>
                        <img src="images/nextjs.png" alt="" className='w-50'/>
                        <p>Next js</p>
                        </td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        </div>
    )
}

export default Services
