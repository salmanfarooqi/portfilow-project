import React from 'react'
import  "./projects.css"
import {AiFillGithub} from 'react-icons/ai';

function Project() {
  return (
    <div className="projects-wrapper" id='projects' >
        <div className="heading-text" >
        <h1>Our <span>projects</span></h1>
        </div>

        <div className="cards-container">
            <div className="card">
            <img src='./images/frontend.png'></img>
           <div className="icon-section">
                <h1>Ecommerce website </h1>
                <a href='https://github.com/salmanfarooqi/Ecommerce-project'
                 target='_blank' ><AiFillGithub  className='icon'/> </a>

                </div>
            
            </div>
            <div className="card">
            <img src='./images/backend.png'></img>
           <div className="icon-section">
                <h1>Hospital Mangement  </h1>
                <a href='https://github.com/salmanfarooqi/Hospital-Mangement-system/'
                 target='_blank' ><AiFillGithub  className='icon'/> </a>

                </div>
               
            </div>
            <div className="card">
                <img src='./images/ui.png'></img>
                <div className="icon-section">
                <h1>E learning </h1>
                <a href='https://github.com/salmanfarooqi/E-learning/'
                 target='_blank' ><AiFillGithub  className='icon'/> </a>

                </div>
               
               
            </div>
        </div>
        
    </div>
  )
}

export default Project;