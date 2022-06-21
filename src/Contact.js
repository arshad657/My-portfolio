import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div id='contact'>
            <div class="d-flex flex-row bd-highlight container justify-content-center">
                <div class="p-2 bd-highlight bor">
                    <p>Contact Me</p>
                </div>
                <div className='arrow'>
                <i class="fas fa-greater-than "></i>
                </div>

                <div class="p-2 second">
                    
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
            
        </div>
    )
}

export default Contact
