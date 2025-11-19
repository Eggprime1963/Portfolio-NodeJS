import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [profileVisible, setProfileVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [socialVisible, setSocialVisible] = useState(false);

  useEffect(() => {
    // Staggered animation timing
    const profileTimer = setTimeout(() => {
      setProfileVisible(true);
    }, 300);

    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 800);

    const socialTimer = setTimeout(() => {
      setSocialVisible(true);
    }, 1200);

    return () => {
      clearTimeout(profileTimer);
      clearTimeout(textTimer);
      clearTimeout(socialTimer);
    };
  }, []);

  useEffect(() => {
      const body = document.querySelector('#root');

      body.scrollIntoView({
          behavior: 'smooth'
      }, 500)

  }, []);

  return (
    <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner"
             style={{backgroundImage: `url('/images/cover_bg_3.jpg')`}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t js-fullheight">
              <div className="display-tc js-fullheight">
                <div className={`profile-thumb animate-box ${profileVisible ? 'fadeIn animated-fast' : ''}`}
                     style={{background: `url('/images/user-3.jpg') center center / cover no-repeat`, border: '0px'}}>
                </div>
                <h1 className={`animate-box ${textVisible ? 'fadeInUp animated-fast' : ''}`}>
                  <span>Dang Phuong Khoi Nguyen</span>
                </h1>
                <h3 className={`animate-box ${textVisible ? 'fadeInUp animated-fast' : ''}`} 
                    style={{animationDelay: '0.2s'}}>
                  <span>Web / Application Designer</span>
                </h3>
                <div className={`fh5co-social-icons animate-box ${socialVisible ? 'fadeInUp animated-fast' : ''}`}
                     style={{animationDelay: '0.4s', marginTop: '25px'}}>
                  <ul style={{paddingLeft: '0px'}}>
                    <li><a href="https://www.facebook.com/angphuongkhoinguyen" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/dang-phuong-khoi-nguyen-3b74682a4/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"></i></a></li>
                    <li><a href="https://github.com/Eggprime1963" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gototop js-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      </div>
    </header>
  );
};

export default Hero;