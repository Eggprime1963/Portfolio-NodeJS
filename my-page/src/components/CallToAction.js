import React, { useState, useEffect, useRef } from 'react';

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ctaRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('fh5co-consult');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div id="fh5co-started" className="fh5co-bg-dark" ref={ctaRef}>
      <div className="overlay"></div>
      <div className="container">
        <div className={`row animate-box ${isVisible ? 'fadeInUp animated-fast' : ''}`}>
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Ready to Build Amazing Web Experiences!</h2>
            <p>I'm excited to contribute my React.js and Node.js skills to dynamic development teams. 
            Let's collaborate on creating innovative web solutions that make a real impact.</p>
            <p>
              <button 
                className="btn btn-default btn-lg"
                onClick={scrollToContact}
              >
                CONTACT ME
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;