import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
function hrefFunction(){
    Swal.fire(
      'Thankyou!',
      'Your message has been',
      'success'
    )
     
  }
function Contactscreen() {
    return (
        <section className='contact'>
            <div className='content1'>
                <h2><b>Contact Us</b></h2>
                <p><b>Baked goods have been around for thousands of years.Baked goods have been around for thousands of years.</b>
                </p>

            </div>
            <div className='container2'>
                <div className='contactInfo'>
                    <div className='box2'>
                        <div className='icon'><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div className='text'>
                            <h3><b>Address</b></h3>
                            <p><b>4651 GLA University , </b> </p>
                            <span><b>Mathura, Uttar Pradesh</b></span>

                        </div>
                    </div>
                    <div className='box2'>
                        <div className='icon'><i class="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div className='text'>
                            <h3><b>Phone</b></h3>
                            <p>5026-756-869</p>

                        </div>
                    </div>
                    <div className='box2'>
                        <div className='icon'><i class="fa fa-envelope-o" aria-hidden="true"></i>
                        </div>
                        <div className='text'>
                            <h3>Email</h3>
                            <p></p>

                        </div>
                    </div>
                </div>
                <div className='contactForm'>
                    <form>
                        <h2><b>Send Message</b></h2>
                        <div className='inputBox' >
                            <input type='text' name='' required='required' />
                            <span>Full Name</span>
                        </div>
                        <br></br>
                        <div className='inputBox'>
                            <input type='text' name='' required='required' />
                            <span>Email</span>
                        </div>
                        <br></br>
                        <div className='inputBox'>
                           <textarea required='required' ></textarea>
                           <span> <b></b>Type your Message...</span>
                        </div>
                        <br></br>
                        <div className='inputBox'>
                            <button><input type='submit' name='' value='Send' onClick={()=>hrefFunction()}/></button>
                          </div>

                    </form>
                </div>

            </div>


        </section>
    )
}


export default Contactscreen