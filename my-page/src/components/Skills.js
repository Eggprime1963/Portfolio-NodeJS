import React, { useState, useEffect, useRef } from 'react';
import CircularProgress from './CircularProgress';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const skillsRef = useRef(null);

  const circularSkills = [
    { name: 'Java', percentage: 75 },
    { name: 'Python', percentage: 75 },
    { name: 'Next.js', percentage: 85 },
    { name: 'React.js', percentage: 90 },
    { name: 'Express.js', percentage: 85 },
    { name: 'HTML5', percentage: 90 },
    { name: 'CSS3', percentage: 90 },
    { name: 'SQL', percentage: 80 }
  ];

  const progressSkills = [
    { name: 'Git/GitHub', percentage: 85 },
    { name: 'Responsive Design', percentage: 85 },
    { name: 'Problem Solving', percentage: 80 },
    { name: 'Teamwork', percentage: 80 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !skillsAnimated) {
          setIsVisible(true);
          setTimeout(() => {
            setSkillsAnimated(true);
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [skillsAnimated]);

  return (
    <div id="fh5co-skills" className={`animate-box ${isVisible ? 'fadeIn animated-fast' : ''}`} ref={skillsRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Skills</h2>
          </div>
        </div>
        <div className="row row-pb-md">
          {circularSkills.map((skill, index) => (
            <div key={skill.name} className="col-md-3 col-sm-6 col-xs-12 text-center">
              <CircularProgress
                percentage={skill.percentage}
                name={skill.name}
                isVisible={isVisible}
                delay={index * 100}
              />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-6">
            {progressSkills.slice(0, 3).map((skill, index) => (
              <div key={skill.name} className={`progress-wrap animate-box ${isVisible ? 'fadeInLeft animated-fast' : ''}`} 
                   style={{animationDelay: `${index * 0.1}s`}}>
                <h3><span className="name-left">{skill.name}</span><span className="value-right">{skill.percentage}%</span></h3>
                <div className="progress">
                  <div 
                    className={`progress-bar progress-bar-${index + 1} progress-bar-striped active`}
                    role="progressbar" 
                    aria-valuenow={skill.percentage} 
                    aria-valuemin="0" 
                    aria-valuemax="100" 
                    style={{ 
                      width: skillsAnimated ? `${skill.percentage}%` : '0%',
                      transition: 'width 1.5s ease-in-out'
                    }}
                  >
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            {progressSkills.slice(3, 6).map((skill, index) => (
              <div key={skill.name} className={`progress-wrap animate-box ${isVisible ? 'fadeInRight animated-fast' : ''}`} 
                   style={{animationDelay: `${(index + 3) * 0.1}s`}}>
                <h3><span className="name-left">{skill.name}</span><span className="value-right">{skill.percentage}%</span></h3>
                <div className="progress">
                  <div 
                    className={`progress-bar progress-bar-${index + 4} progress-bar-striped active`}
                    role="progressbar" 
                    aria-valuenow={skill.percentage} 
                    aria-valuemin="0" 
                    aria-valuemax="100" 
                    style={{ 
                      width: skillsAnimated ? `${skill.percentage}%` : '0%',
                      transition: 'width 1.5s ease-in-out'
                    }}
                  >
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;