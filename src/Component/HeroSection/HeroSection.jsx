import React from 'react'
import './heroSection.css'
 import { AiFillInstagram} from 'react-icons/ai';
 import {AiFillLinkedin} from 'react-icons/ai';
 import { AiFillFacebook} from 'react-icons/ai';
 import { Typewriter } from 'react-simple-typewriter'
function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Replace with the actual path to your PDF file
    link.download = 'resume.pdf'; // Specify the download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="hero-section-wrapper"  id="Home">
        <div className="hero-section-content">
     

        <h1>Hi , I am <span>salman Farooqi</span></h1> 
         <div className="text-animation">
            <h3>


            <Typewriter
            words={["Mern stack developer"]}
            loop={5}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
            </h3>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
            <br />rror exercitationem magni suscipit nesciun</p>

            <div className="buttons">
                <button className='btn btn1' onClick={handleDownload}>download cv</button>
               <a href="#contact"><button className='btn'>Let's talk</button></a> 
            </div>

            <div className="herosection-icons">
              <ul>

              <a href='https://www.instagram.com/salmanfarooqi2001/' target='_blank' ><li><AiFillInstagram /></li> </a>
             <a href='https://www.linkedin.com/in/salman-farooqi-82554125a/' target='_blank' >    <li><AiFillLinkedin /></li> </a>
            <a href='https://www.facebook.com/salman.farooqi.98478' target='_blank' > <li><AiFillFacebook/></li></a>
              </ul>
            </div>


            <div className="imageHover"></div>



        </div>

        
    </div>
  )
}

export default HeroSection