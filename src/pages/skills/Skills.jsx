import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 90 },
  { name: 'Javascript', percentage: 80 },
  { name: 'React JS', percentage: 70 },
  { name: 'Next JS', percentage: 60 },
];

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        
        {/* Chap taraf: Sarlavha va Tavsif */}
        <div className="skills-left">
          <span className="skills-subtitle">My Skills</span>
          <h2 className="skills-title">
            You Can Imagine I <br /> Can Do
          </h2>
          <p className="skills-description">
            I am working on a professional, visually sophisticated and
            technologically proficient, responsive and multi-functional
            creative personal resume portfolio template Aali
          </p>
        </div>

        {/* O'ng taraf: Progress barlar */}
        <div className="skills-right">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;