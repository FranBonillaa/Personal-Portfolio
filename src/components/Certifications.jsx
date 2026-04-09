import { useState, useEffect } from 'react';
import { useLanguage, translations } from '@/context/LanguageContext';

const certifications = [
  {
    title: "Google AI Essentials",
    issuer: "Google · Coursera",
    date: "Oct 2025",
    image: "/cert_google_ai.jpg",
  },
  {
    title: "Introduction to AI Development",
    issuer: "BIG School · Midudev",
    date: "Mar 2026",
    image: "/cert_bigschool_ia.jpg",
  },
];

const Certifications = () => {
  const { language } = useLanguage();
  const t = translations[language].certifications;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fn = () => {
      setIsMobile(window.innerWidth < 768);
      setIndex(0);
    };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const VISIBLE = isMobile ? 1 : 2;
  const canPrev = index > 0;
  const canNext = index + VISIBLE < certifications.length;

  const prev = () => { if (canPrev) setIndex(i => i - 1); };
  const next = () => { if (canNext) setIndex(i => i + 1); };

  const visible = certifications.slice(index, index + VISIBLE);

  const btnStyle = (enabled) => ({
    background: enabled ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '50%',
    width: isMobile ? '36px' : '48px',
    height: isMobile ? '36px' : '48px',
    flexShrink: 0,
    cursor: enabled ? 'pointer' : 'default',
    color: enabled ? '#fff' : 'rgba(255,255,255,0.25)',
    fontSize: isMobile ? '1.2rem' : '1.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s',
  });

  return (
    <section
      id="certificaciones"
      style={{
        minHeight: isMobile ? 'auto' : '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '3rem 1rem' : '6rem 2rem',
        position: 'relative',
        zIndex: 500,
      }}
    >
      <h2 className="section-title" style={{ position: 'relative', zIndex: 500 }}>
        {t.title}
      </h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1.5rem', width: '100%', maxWidth: isMobile ? '95vw' : '900px' }}>
        <button onClick={prev} disabled={!canPrev} style={btnStyle(canPrev)}>‹</button>

        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${visible.length}, 1fr)`, gap: isMobile ? '0.75rem' : '1.5rem', flex: 1 }}>
          {visible.map((cert, i) => (
            <div
              key={index + i}
              style={{
                background: 'rgba(10, 30, 10, 0.72)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.12)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img src={cert.image} alt={cert.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: isMobile ? '0.75rem 1rem' : '1rem 1.5rem 1.25rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.3rem' }}>
                  {cert.title}
                </h3>
                <p style={{ fontSize: isMobile ? '0.8rem' : '0.88rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.2rem' }}>
                  {cert.issuer}
                </p>
                <p style={{ fontSize: isMobile ? '0.75rem' : '0.82rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={next} disabled={!canNext} style={btnStyle(canNext)}>›</button>
      </div>

      {certifications.length > VISIBLE && (
        <div style={{ display: 'flex', gap: '6px', marginTop: '1.25rem' }}>
          {Array.from({ length: certifications.length - VISIBLE + 1 }).map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: i === index ? '#fff' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer', transition: 'background 0.2s',
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Certifications;
