
import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("data",form.current)

        emailjs.sendForm('service_e5hgeim', 'template_vimpmj8', form.current, 'thMy18lC454Pc7vQp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact-wrapper" id="contact">
            <h1 className='heading'>Contact<span>us</span></h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className="input-box">
                    <div className="input-fields">

                        <input type="text" placeholder='Enter Name' name="user_name" />
                        <span className='focus'></span>


                    </div>



                    <div className="input-fields">

                        <input type="email" placeholder='Enter Email'  name="user_email" />
                        <span className='focus'></span>
                    </div>

                </div>



                <div className="input-box">
                    <div className="input-fields">

                        <input type="phone" placeholder='Enter phone' name='user_phone' />
                        <span className='focus'></span>


                    </div>



                    <div className="input-fields">

                        <input type="text" placeholder='Email subject'  name='email_subject'/>
                        <span className='focus'></span>
                    </div>

                </div>



        <div className="text-fields">
            
        <textarea  id="text"  cols='10' rows='10'   name="message"
                placeholder='Your Message' ></textarea>
                <span className='focus'></span>

        </div>
ss
             

      <div className="btx-btn-box">
        <button type='submit' className='btn'>submit</button>
        </div>
    




            </form>
        </div>
    )
}

export default Contact