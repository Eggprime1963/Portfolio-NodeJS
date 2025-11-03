import React, { useState, useEffect, useRef } from 'react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const resumeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = resumeRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div id="fh5co-resume" className="fh5co-bg-color" ref={resumeRef}>
      <div className="container">
        <div className={`row animate-box ${isVisible ? 'fadeInUp animated-fast' : ''}`}>
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>My Resume</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-md-offset-0">
            <ul className="timeline">
              <li className={`timeline-heading text-center animate-box ${isVisible ? 'fadeInUp animated-fast' : ''}`}>
                <div><h3>Education</h3></div>
              </li>
              <li className={`timeline-inverted animate-box ${isVisible ? 'fadeInRight animated-fast' : ''}`}>
                <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Bachelor's in Software Engineering</h3>
                    <span className="company">University - 9/2023 - Present</span>
                  </div>
                  <div className="timeline-body">
                    <p>Currently pursuing a degree in Software Engineering with focus on web development technologies, 
                    data structures, algorithms, and software engineering principles. Coursework includes React.js, Node.js, Java, and Python programming.</p>
                  </div>
                </div>
              </li>
              <li className={`animate-box timeline-unverted ${isVisible ? 'fadeInLeft animated-fast' : ''}`}>
                <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Web Development Certification</h3>
                    <span className="company">Self-Study & Online Courses - 2023</span>
                  </div>
                  <div className="timeline-body">
                    <p>Completed comprehensive web development courses focusing on modern frontend frameworks including React.js, 
                    responsive design principles, and full-stack development with Node.js and Express.</p>
                  </div>
                </div>
              </li>
              <li className={`timeline-inverted animate-box ${isVisible ? 'fadeInRight animated-fast' : ''}`}>
                <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Programming Fundamentals</h3>
                    <span className="company">Self-Study & Online Courses - 2023</span>
                  </div>
                  <div className="timeline-body">
                    <p>Strong foundation in programming concepts through Java and Python. 
                    Learned object-oriented programming, data structures, algorithms, and software development lifecycle methodologies.</p>
                  </div>
                </div>
              </li>
              <li className={`animate-box timeline-unverted ${isVisible ? 'fadeInLeft animated-fast' : ''}`}>
                <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">High School Diploma</h3>
                    <span className="company">Secondary Education - 2016 - 2020</span>
                  </div>
                  <div className="timeline-body">
                    <p>Completed secondary education with focus on mathematics and computer science fundamentals. 
                    Developed early interest in programming and web technologies leading to pursuit of Software Engineering degree.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;