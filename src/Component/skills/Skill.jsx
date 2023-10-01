// import React from 'react'
// import './skill.css'
// function Skill() {
//   return (
//     <div className="skills-wrapper">
//         <h2 className='heading'>my <span>skill</span></h2>


//        <div className="main-skill">
//             <div className="technical-skills-section">
//                 <h1>technical skills</h1>
//                 <div className="skills-bar">
//                     <div className="info">
//                         <p>Html</p>
//                         <p>70%</p>
//                     </div>
//                     <div className="bar">
//                         <span className='html'></span>
//                     </div>
//                 </div>



//                 <div className="skills-bar">
//                     <div className="info">
//                         <p>Html</p>
//                         <p>70%</p>
//                     </div>
//                     <div className="bar">
//                         <span className='css'></span>
//                     </div>
//                 </div>




//                 <div className="skills-bar">
//                     <div className="info">
//                         <p>Html</p>
//                         <p>70%</p>
//                     </div>
//                     <div className="bar">
//                         <span className='javascript'></span>
//                     </div>
//                 </div>



//                 <div className="skills-bar">
//                     <div className="info">
//                         <p>Html</p>
//                         <p>70%</p>
//                     </div>
//                     <div className="bar">
//                         <span className='react'></span>
//                     </div>
//                 </div>

//                 <div className="skills-bar">
//                     <div className="info">
//                         <p>Html</p>
//                         <p>70%</p>
//                     </div>
//                     <div className="bar">
//                         <span className='node'></span>
//                     </div>
//                 </div>
//             </div>
//             <div className="professional-skills-section">
//                 <div className="professional-skills">
//                     <h1>professional skills</h1>
//                 </div>

//             </div>
//         {/* </main-skills> */}
//         </div>
        
//     </div>
//   )
// }

// export default Skill


import React from 'react';
import './skill.css';
import { useState,useEffect } from 'react';
function Skill() {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 100);  // A small delay to ensure the animation triggers.

        return () => clearTimeout(timer); // Clean up the timer to prevent issues.
    }, []);
  const technicalSkills = [
    { name: 'Html', percentage: '85%', class: 'html' },
    { name: 'CSS', percentage: '80%', class: 'css' },
    { name: 'JavaScript', percentage: '80%', class: 'javascript' },
    { name: 'React', percentage: '85%', class: 'react' },
    { name: 'Express', percentage: '90%', class: 'Express' },
    { name: 'Mongodb', percentage: '90%', class: 'Mongodb' },
  ];


  const professionalSkills = [
    { name: 'Teamwork', percentage: '80%', class: 'teamwork' },
    { name: 'Communication', percentage: '70%', class: 'communication' },
    { name: 'Creativity', percentage: '70%', class: 'creativity' },
    { name: 'Problem Solving', percentage: '90%', class: 'problem' },
   
  ];

  return (
    
    <div className='skills-wrapper' id='skills'>
      <h2 className="heading">my <span>skill</span></h2>

      <div className="main-skill">
        <div className="technical-skills-section">
          <h2>Technical Skills</h2>

          {technicalSkills.map(skill => (
            <div className="skills-bar" key={skill.name}>
              <div className="info">
                <p>{skill.name}</p>
                <p>{skill.percentage}</p>
              </div>
              <div className="bar">
                <span className={skill.class}></span>
              </div>
            </div>
          ))}

        </div>

        <div className="professional-skills-section">
          <h2>Professional Skills</h2>
          {/* Add the professional skills here */}

          {professionalSkills.map(skill => (
            <div className="skills-bar" key={skill.name}>
              <div className="info">
                <p>{skill.name}</p>
                <p>{skill.percentage}</p>
              </div>
              <div className="bar">
                <span className={skill.class}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill;
