import React from 'react';
import { LiquidChrome } from '@/components/LiquidChrome';
import Navbar from '@/components/Navbar';
import PixelToPhoto from '@/components/PixelToPhoto';
import AboutMe from '@/components/AboutMe';
import PhotoGallery from '@/components/PhotoGallery';
import Technologies from '@/components/Technologies';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import './App.css';

function App() {
  return (
    <div className="app dark">
      <Navbar />
      
      <div style={{ width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ width: '100%', height: '100vh', pointerEvents: 'none' }}>
          <LiquidChrome
            baseColor={[0.5, 0.0, 0.9]}
            speed={0.2}
            amplitude={0.25}
            frequencyX={4.5}
            frequencyY={3.5}
            interactive
          />
        </div>
      </div>
      
      <main className="content">
        <div className="hero-section">
          <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto', padding: '0 2rem' }} className="hero-content gap-4">
            <div className="hero-text">
              <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.3', marginBottom: '2rem', textAlign: 'center', whiteSpace: 'nowrap' }}>Fran Bonilla</h1>
              <p className="hero-subtitle" style={{ fontSize: '1.5rem', fontWeight: '500', lineHeight: '1.2', color: '#00ff00', marginBottom: '2rem', textAlign: 'center' }}>Full Stack Software Developer</p>
            </div>
            <div className="hero-image"> 
              <PixelToPhoto
                pixelImage="/yo_pixel.png"
                normalImage="/yo_normal.jpg"
                alt="Fran Bonilla"
              />
            </div>
          </div>
        </div>
        
        <AboutMe />
        <PhotoGallery />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
