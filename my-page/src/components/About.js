import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const currentRef = aboutRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

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
    <div id="fh5co-about" ref={aboutRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className={`animate-box ${isVisible ? 'fadeInUp animated-fast' : ''}`}>
              About Me
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="info">
              <li className={`animate-box ${isVisible ? 'fadeInLeft animated-fast' : ''}`} 
                  style={{animationDelay: '0.1s'}}>
                <span className="first-block">Full Name:</span>
                <span className="second-block">Dang Phuong Khoi Nguyen (James Dang)</span>
              </li>
              <li className={`animate-box ${isVisible ? 'fadeInLeft animated-fast' : ''}`} 
                  style={{animationDelay: '0.2s'}}>
                <span className="first-block">Phone:</span>
                <span className="second-block">(+84)964 574 040</span>
              </li>
              <li className={`animate-box ${isVisible ? 'fadeInLeft animated-fast' : ''}`} 
                  style={{animationDelay: '0.3s'}}>
                <span className="first-block">Email:</span>
                <span className="second-block">
                  <p className="nl">jamesdpkn.commerce</p>
                  <p className="nl">@gmail.com</p>
                </span>
              </li>
              <li className={`animate-box ${isVisible ? 'fadeInLeft animated-fast' : ''}`} 
                  style={{animationDelay: '0.4s'}}>
                <span className="first-block">Github:</span>
                <span className="second-block">
                  <p className="nl">https://github.com/</p>
                  <p className="nl">Eggprime1963</p>
                </span>
              </li>
              <li className={`animate-box ${isVisible ? 'fadeInLeft animated-fast' : ''}`} 
                  style={{animationDelay: '0.5s'}}>
                <span className="first-block">Address:</span>
                <span className="second-block">15/28 Van Cao Street, Thuan Hoa District, Hue City, Vietnam</span>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <h2 className={`animate-box ${isVisible ? 'fadeInRight animated-fast' : ''}`}>
              Hello There!
            </h2>
            <p className={`animate-box ${isVisible ? 'fadeInRight animated-fast' : ''}`} 
               style={{animationDelay: '0.1s'}}>
              As a junior studying Software Engineering, I seek to contribute my technical knowledge and problem-solving abilities 
              to support software development and collaborative team projects in a professional environment. With a strong foundation 
              in coding with React and Node.js, along with having experience with Java and Python, I deliver impactful results by 
              collaborating effectively with dynamic teams to achieve shared objectives.
            </p>
            <p className={`animate-box ${isVisible ? 'fadeInRight animated-fast' : ''}`} 
               style={{animationDelay: '0.2s'}}>
              I am enthusiastic about contributing to front-end development projects while deepening my expertise in modern frameworks 
              and expanding my skills through real-world application. I enjoy creating new projects and developing valuable resources 
              that solve real problems and enhance user experiences.
            </p>
            <p className={`animate-box ${isVisible ? 'fadeInRight animated-fast' : ''}`} 
               style={{animationDelay: '0.3s'}}>
              <ul className="fh5co-social-icons">
                <li><a href="https://www.facebook.com/angphuongkhoinguyen" target="_blank" rel="noopener noreferrer"><i className="icon-facebook3"></i></a></li>
                <li><a href="https://www.linkedin.com/in/dang-phuong-khoi-nguyen-3b74682a4/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"></i></a></li>
                <li><a href="https://github.com/Eggprime1963" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;