import React, { useState, useEffect, useRef } from 'react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const portfolioRef = useRef(null);

  const portfolioItems = [
    { 
      id: 1, 
      title: 'City Skyline', 
      category: 'CSS', 
      image: '/images/portfolio-1.jpg',
      link: 'https://eggprime1963.github.io/city/'
    },
    { 
      id: 2, 
      title: 'Football Survey', 
      category: 'HTML', 
      image: '/images/portfolio-2.jpg',
      link: 'https://eggprime1963.github.io/survey/'
    },
    { 
      id: 3, 
      title: 'LearningWebsite', 
      category: 'Java', 
      image: '/images/portfolio-3.jpg',
      link: 'https://github.com/Eggprime1963/Assignmemt'
    },
    { 
      id: 4, 
      title: 'PlantSmart', 
      category: 'Next.js + Express.js', 
      image: '/images/portfolio-4.jpg',
      link: 'https://github.com/FA25-SWP391-G4/SWP391-Plant-Monitoring-System'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = portfolioRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleProjectClick = (item) => {
    if (item.link && item.link !== '#') {
      window.open(item.link, '_blank');
    } else {
      console.log(`Clicked ${item.title}`);
    }
  };

  return (
    <div id="fh5co-work" className="fh5co-bg-dark" ref={portfolioRef}>
      <div className="container">
        <div className={`row animate-box ${isVisible ? 'fadeInUp animated-fast' : ''}`}>
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Work</h2>
          </div>
        </div>
        <div className="row">
          {portfolioItems.map((item, index) => (
            <div key={item.id} className="col-md-3 text-center col-padding">
              <div 
                className={`work animate-box ${isVisible ? 'fadeInUp animated-fast' : ''}`}
                style={{
                  animationDelay: `${index * 0.1}s`, 
                  cursor: 'pointer',
                  backgroundImage: `url('${item.image}')`
                }}
                onClick={() => handleProjectClick(item)}
              >
                <div className="desc">
                  <h3>{item.title}</h3>
                  <span>{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;