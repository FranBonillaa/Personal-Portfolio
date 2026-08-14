import React, { useState, useEffect } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { LiquidChrome } from '@/components/LiquidChrome';
import Navbar from '@/components/Navbar';
import FadeIn from '@/components/FadeIn';
import PixelToPhoto from '@/components/PixelToPhoto';
import AboutMe from '@/components/AboutMe';
import PhotoGallery from '@/components/PhotoGallery';
import Technologies from '@/components/Technologies';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  return (
    <LanguageProvider>
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
              interactive={!isMobile}
            />
          </div>
        </div>

        <main className="content">
          <div className="hero-section">
            <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto', padding: '0 2rem' }} className="hero-content gap-4">
              <FadeIn direction="right" duration={0.8}>
                <div className="hero-text">
                  <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.3', marginBottom: '1.25rem', textAlign: 'center', whiteSpace: 'nowrap', color: '#ffffff' }}>Fran Bonilla</h1>
                  <p className="hero-subtitle" style={{ fontSize: '1.5rem', fontWeight: '500', lineHeight: '1.2', color: '#86efac', marginBottom: '1rem', textAlign: 'center' }}>Full Stack Software Developer</p>
                  <p style={{ fontSize: '1.05rem', fontWeight: '400', lineHeight: '1.7', color: 'rgba(255,255,255,0.82)', marginBottom: '2rem', textAlign: 'center', maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>
                    Desarrollo aplicaciones web modernas, rápidas y escalables con React, JavaScript, Node.js y soluciones impulsadas por IA.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href="#proyectos" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.8rem 1.5rem', borderRadius: '9999px', background: '#22d3ee', color: '#000000', fontWeight: '700', textDecoration: 'none', boxShadow: '0 10px 25px rgba(34,211,238,0.3)' }}>Ver proyectos</a>
                    <a href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.8rem 1.5rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.08)', color: '#ffffff', fontWeight: '600', border: '1px solid rgba(255,255,255,0.25)', textDecoration: 'none' }}>Contactar</a>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="left" duration={0.8} delay={0.2}>
                <div className="hero-image">
                  <PixelToPhoto
                    pixelImage="/yo_pixel.png"
                    normalImage="/yo_normal.jpg"
                    alt="Fran Bonilla"
                  />
                </div>
              </FadeIn>
            </div>
          </div>

          <AboutMe />
          <PhotoGallery />
          <Technologies />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
