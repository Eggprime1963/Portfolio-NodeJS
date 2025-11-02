import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Achievements from './components/Achievements';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';
import './bootstrap.css';
import './animate.css';
import './icomoon.css';
import './style.css';
import './react-animations.css';
import './App.css';

function App() {
  useEffect(() => {
    // Add loader functionality
    const loader = document.createElement('div');
    loader.className = 'fh5co-loader';
    document.body.appendChild(loader);
    
    setTimeout(() => {
      if (document.body.contains(loader)) {
        document.body.removeChild(loader);
      }
    }, 1000);

    // Set full height for hero section
    const setFullHeight = () => {
      const elements = document.querySelectorAll('.js-fullheight');
      elements.forEach(el => {
        el.style.height = `${window.innerHeight}px`;
      });
    };

    setFullHeight();
    window.addEventListener('resize', setFullHeight);

    // Initialize scroll to top functionality
    const handleScroll = () => {
      const goToTop = document.querySelector('.js-top');
      if (window.scrollY > 200) {
        goToTop?.classList.add('active');
      } else {
        goToTop?.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', setFullHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="page">
      <Hero />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Portfolio />
      <Achievements />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
