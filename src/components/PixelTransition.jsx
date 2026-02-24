import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const PixelTransition = ({ 
  firstContent, 
  secondContent, 
  gridSize = 8, 
  pixelColor = '#ffffff',
  once = false,
  animationStepDuration = 0.4,
  className = '',
  ...props 
}) => {
  const containerRef = useRef(null);
  const [isFirstContent, setIsFirstContent] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const cols = Math.ceil(rect.width / gridSize);
    const rows = Math.ceil(rect.height / gridSize);

    // Create pixel grid
    const pixels = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.cssText = `
          position: absolute;
          width: ${gridSize}px;
          height: ${gridSize}px;
          background-color: ${pixelColor};
          left: ${j * gridSize}px;
          top: ${i * gridSize}px;
          opacity: 0;
          transform: scale(0);
        `;
        container.appendChild(pixel);
        pixels.push(pixel);
      }
    }

    const animatePixels = () => {
      if (isAnimating) return;
      setIsAnimating(true);

      // Randomize pixel order
      const shuffled = [...pixels].sort(() => Math.random() - 0.5);
      
      // Animate pixels in
      const tl = gsap.timeline();
      shuffled.forEach((pixel, index) => {
        tl.to(pixel, {
          opacity: 1,
          scale: 1,
          duration: animationStepDuration / 10,
          ease: "power2.out"
        }, index * 0.01);
      });

      // Switch content
      tl.call(() => {
        setIsFirstContent(!isFirstContent);
      });

      // Animate pixels out
      shuffled.forEach((pixel, index) => {
        tl.to(pixel, {
          opacity: 0,
          scale: 0,
          duration: animationStepDuration / 10,
          ease: "power2.in"
        }, (shuffled.length * 0.01) + index * 0.01);
      });

      tl.call(() => {
        setIsAnimating(false);
        if (once) {
          // Clean up pixels if animation should only run once
          pixels.forEach(pixel => pixel.remove());
        }
      });
    };

    // Initial animation
    if (!once) {
      const handleClick = () => animatePixels();
      container.addEventListener('click', handleClick);
      
      return () => {
        container.removeEventListener('click', handleClick);
        pixels.forEach(pixel => pixel.remove());
      };
    } else {
      // Run animation once immediately
      setTimeout(animatePixels, 100);
      return () => pixels.forEach(pixel => pixel.remove());
    }
  }, [gridSize, pixelColor, once, animationStepDuration, isAnimating, isFirstContent]);

  return (
    <div 
      ref={containerRef} 
      className={`pixel-transition ${className}`}
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        cursor: once ? 'default' : 'pointer'
      }}
      {...props}
    >
      <div style={{ 
        position: 'absolute', 
        inset: 0,
        opacity: isFirstContent ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}>
        {firstContent}
      </div>
      <div style={{ 
        position: 'absolute', 
        inset: 0,
        opacity: isFirstContent ? 0 : 1,
        transition: 'opacity 0.3s ease'
      }}>
        {secondContent}
      </div>
    </div>
  );
};

export default PixelTransition;
