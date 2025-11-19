import React, { useState, useEffect, useRef } from 'react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const achievementsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = achievementsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const achievements = [
    {
      id: 1,
      image: '/images/portfolio-1.jpg',
      date: 'Oct. 2024',
      title: 'City Skyline Animation',
      description: 'Created an interactive CSS animation showcasing a dynamic city skyline with responsive design and smooth transitions.',
      author: 'James Dang',
      link: 'https://eggprime1963.github.io/city/'
    },
    {
      id: 2,
      image: '/images/portfolio-3.jpg',
      date: 'Jan. 2025',
      title: 'React Portfolio Website',
      description: 'Built a full-featured portfolio website using React.js with modern animations, responsive design, and component architecture.',
      author: 'James Dang',
      link: '#'
    },
    {
      id: 3,
      image: '/images/portfolio-4.jpg',
      date: 'Sep. 2025',
      title: 'PlantSmart',
      description: 'Architected a full-stack plant IoT management PWA using React, Node.js, PostgreSQL, and Python (AI).',
      link: 'https://eggprime1963.github.io/survey/'
    }
  ];

  return (
    <div id="fh5co-blog" ref={achievementsRef}>
      <div className="container">
        <div className={`row animate-box ${isVisible ? 'fadeInUp animated-fast' : ''}`}>
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Recent Projects</h2>
            <p>Showcasing my latest web development projects that demonstrate proficiency in React.js, 
            responsive design, and modern frontend development practices.</p>
          </div>
        </div>
        <div className="row">
          {achievements.map((achievement, index) => (
            <div key={achievement.id} className="col-md-4">
              <div className={`fh5co-blog animate-box ${isVisible ? 'fadeInUp animated-fast' : ''}`} 
                   style={{animationDelay: `${index * 0.1}s`}}>
                <div 
                  className="blog-bg" 
                  style={{backgroundImage: `url('${achievement.image}')`}}
                  onClick={() => console.log(`Clicked ${achievement.title}`)}
                ></div>
                <div className="blog-text">
                  <span className="posted_on">{achievement.date}</span>
                  <h3 className='blog-title justify' >
                      {achievement.title}
                  </h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;