

import React from 'react';
import './skill.css';
import { useState,useEffect } from 'react';
function Skill() {
  
   
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
