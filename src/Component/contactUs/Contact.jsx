import React from 'react'
import './contact.css'
function Contact() {
    return (
        <div className="contact-wrapper" id="contact">
            <h1 className='heading'>Contact<span>us</span></h1>
            <form action="#">
                <div className="input-box">
                    <div className="input-fields">

                        <input type="text" placeholder='Enter Name' />
                        <span className='focus'></span>


                    </div>



                    <div className="input-fields">

                        <input type="email" placeholder='Enter Email' />
                        <span className='focus'></span>
                    </div>

                </div>



                <div className="input-box">
                    <div className="input-fields">

                        <input type="text" placeholder='Enter Name' />
                        <span className='focus'></span>


                    </div>



                    <div className="input-fields">

                        <input type="email" placeholder='Enter Email' />
                        <span className='focus'></span>
                    </div>

                </div>



        <div className="text-fields">
            
        <textarea name="" id="text"  cols='10' rows='10'
                placeholder='Your Message'></textarea>
                <span className='focus'></span>

        </div>

             

      <div className="btx-btn-box">
        <button type='submit' className='btn'>submit</button>
        </div>
    




            </form>
        </div>
    )
}

export default Contact