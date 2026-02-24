import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const PixelToPhoto = ({ pixelImage, normalImage, alt = "Profile" }) => {
  const [isPixel, setIsPixel] = useState(true);
  const containerRef = useRef(null);
  const pixelRef = useRef(null);
  const photoRef = useRef(null);

  const handleClick = () => {
    if (!containerRef.current) return;

    const pixelImg = pixelRef.current;
    const photoImg = photoRef.current;

    if (isPixel) {
      // Pixel to Photo transition
      const tl = gsap.timeline();
      
      // Create pixel grid effect
      const gridSize = 15;
      const pixelElements = [];
      
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const pixel = document.createElement('div');
          pixel.className = 'transition-pixel';
          pixel.style.cssText = `
            position: absolute;
            width: ${300/gridSize}px;
            height: ${300/gridSize}px;
            background-color: #4ade80;
            left: ${j * (300/gridSize)}px;
            top: ${i * (300/gridSize)}px;
            opacity: 0;
            transform: scale(0);
            pointer-events: none;
          `;
          containerRef.current.appendChild(pixel);
          pixelElements.push(pixel);
        }
      }

      // Animate pixels in
      tl.to(pixelElements, {
        opacity: 1,
        scale: 1,
        duration: 0.02,
        stagger: 0.005,
        ease: "power2.out"
      })
      .call(() => {
        // Hide pixel image, show photo
        gsap.set(pixelImg, { opacity: 0 });
        gsap.set(photoImg, { opacity: 1 });
      })
      .to(pixelElements, {
        opacity: 0,
        scale: 0,
        duration: 0.02,
        stagger: 0.005,
        ease: "power2.in"
      })
      .call(() => {
        // Clean up pixels
        pixelElements.forEach(pixel => pixel.remove());
        setIsPixel(false);
      });

    } else {
      // Photo to Pixel transition
      const tl = gsap.timeline();
      
      // Create pixel grid effect
      const gridSize = 15;
      const pixelElements = [];
      
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const pixel = document.createElement('div');
          pixel.className = 'transition-pixel';
          pixel.style.cssText = `
            position: absolute;
            width: ${300/gridSize}px;
            height: ${300/gridSize}px;
            background-color: #4ade80;
            left: ${j * (300/gridSize)}px;
            top: ${i * (300/gridSize)}px;
            opacity: 0;
            transform: scale(0);
            pointer-events: none;
          `;
          containerRef.current.appendChild(pixel);
          pixelElements.push(pixel);
        }
      }

      // Animate pixels in
      tl.to(pixelElements, {
        opacity: 1,
        scale: 1,
        duration: 0.02,
        stagger: 0.005,
        ease: "power2.out"
      })
      .call(() => {
        // Hide photo, show pixel image
        gsap.set(photoImg, { opacity: 0 });
        gsap.set(pixelImg, { opacity: 1 });
      })
      .to(pixelElements, {
        opacity: 0,
        scale: 0,
        duration: 0.02,
        stagger: 0.005,
        ease: "power2.in"
      })
      .call(() => {
        // Clean up pixels
        pixelElements.forEach(pixel => pixel.remove());
        setIsPixel(true);
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="pixel-to-photo-container"
      onClick={handleClick}
      style={{
        width: '300px',
        height: '300px',
        position: 'relative',
        cursor: 'pointer',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '4px solid #4ade80',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}
    >
      <img
        ref={pixelRef}
        src={pixelImage}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 1,
          imageRendering: 'pixelated'
        }}
      />
      <img
        ref={photoRef}
        src={normalImage}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0
        }}
      />
    </div>
  );
};

export default PixelToPhoto;
