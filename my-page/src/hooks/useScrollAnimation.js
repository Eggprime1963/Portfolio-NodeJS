import { useEffect, useRef } from 'react';

// Custom hook for scroll-triggered animations
export const useScrollAnimation = (animationClass = 'fadeInUp', threshold = 0.1) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.classList.add('animate-box', animationClass, 'animated-fast');
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animationClass, threshold]);

  return elementRef;
};

// Custom hook for waypoint animations (for multiple elements)
export const useWaypointAnimation = (threshold = 0.1) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animateBoxes = entry.target.querySelectorAll('.animate-box');
          
          animateBoxes.forEach((box, index) => {
            setTimeout(() => {
              const effect = box.dataset.animateEffect || 'fadeInUp';
              box.classList.add(effect, 'animated-fast');
            }, index * 100);
          });
        }
      },
      { threshold }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [threshold]);

  return containerRef;
};