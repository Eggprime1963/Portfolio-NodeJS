import React, { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = servicesRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const services = [
    {
      icon: 'icon-eyedropper',
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using React.js, HTML5, CSS3, and modern JavaScript frameworks'
    },
    {
      icon: 'icon-earth',
      title: 'Web Applications',
      description: 'Building full-stack web applications with Node.js backend integration and RESTful API consumption'
    },
    {
      icon: 'icon-equalizer',
      title: 'UI/UX Implementation',
      description: 'Converting design mockups into pixel-perfect, responsive web interfaces with focus on user experience'
    },
    {
      icon: 'icon-mobile',
      title: 'Mobile-First Design',
      description: 'Developing mobile-responsive websites that work seamlessly across all devices and screen sizes'
    },
    {
      icon: 'icon-layers2',
      title: 'Component Development',
      description: 'Creating reusable React components and maintaining clean, modular code architecture for scalability'
    },
    {
      icon: 'icon-stats-dots',
      title: 'Performance Optimization',
      description: 'Optimizing web applications for fast loading times, smooth animations, and excellent user performance'
    }
  ];

  return (
    <div id="fh5co-features" className={`animate-box ${isVisible ? 'fadeIn animated-fast' : ''}`} ref={servicesRef}>
      <div className="container">
        <div className="services-padding">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>My Services</h2>
            </div>
          </div>
          <div className="row">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="col-md-4 text-center">
                <div className={`feature-left animate-box ${isVisible ? 'fadeInUp animated-fast' : ''}`} 
                     style={{animationDelay: `${index * 0.1}s`}}>
                  <span className="icon">
                    <i className={service.icon}></i>
                  </span>
                  <div className="feature-copy">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            {services.slice(3, 6).map((service, index) => (
              <div key={index + 3} className="col-md-4 text-center">
                <div className={`feature-left animate-box ${isVisible ? 'fadeInUp animated-fast' : ''}`} 
                     style={{animationDelay: `${(index + 3) * 0.1}s`}}>
                  <span className="icon">
                    <i className={service.icon}></i>
                  </span>
                  <div className="feature-copy">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
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

export default Services;