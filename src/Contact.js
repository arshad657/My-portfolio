import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div id='contact' className='pb-5'>
                <div class="p-3 contact-heading"> 
                    <p>Contact Me</p>
                </div>
                <div class="p-2 second d-flex align-items-center justify-content-evenly">
                    <div>
                        <img src="images/graphic-contact.png" className='w-75 mt-5 pt-5' alt="" srcset="" />
                    </div>
                    
                <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item black ">
                    <h2 class="accordion-header black" id="flush-headingOne">
                    <button class="accordion-button collapsed black " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <div class="p-2 contact-options black">
                        <i class="fas fa-phone"></i> Call Me
                        </div>
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body"> <code> +880 19819-11829</code></div>
                    </div>
                </div>
                <hr /> 
                <div class="accordion-item black">
                    <h2 class="accordion-header black" id="flush-headingTwo">
                    <button class="accordion-button collapsed black " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <div class="p-2 contact-options black">
                        <i class="fas fa-comment"></i> Email
                        </div>
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body"> <code> ahmedarshad8565@gmail.com</code></div>
                    </div>
                </div>
                </div>

                     
                    
                </div>
        </div>
    )
}

export default Contact
