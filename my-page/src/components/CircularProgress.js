import React, { useEffect, useRef } from 'react';

const CircularProgress = ({ percentage, name, isVisible, delay = 0 }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 60;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#e6e6e6';
    ctx.lineWidth = 8;
    ctx.stroke();

    // Animate progress circle
    let currentPercentage = 0;
    const targetPercentage = percentage;
    const animationDuration = 2000; // 2 seconds
    const startTime = Date.now() + delay;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      
      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / animationDuration, 1);
      currentPercentage = targetPercentage * progress;

      // Clear and redraw
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = '#e6e6e6';
      ctx.lineWidth = 8;
      ctx.stroke();

      // Progress circle
      ctx.beginPath();
      const startAngle = -Math.PI / 2; // Start at top
      const endAngle = startAngle + (currentPercentage / 100) * 2 * Math.PI;
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.strokeStyle = '#FF9000';
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';
      ctx.stroke();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible, percentage, delay]);

  return (
    <div 
      ref={containerRef}
      className={`chart animate-box ${isVisible ? 'fadeInUp animated-fast' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <canvas 
        ref={canvasRef}
        width="140" 
        height="140"
      />
      <span>
        <strong>{name}</strong>
        {percentage}%
      </span>
    </div>
  );
};

export default CircularProgress;