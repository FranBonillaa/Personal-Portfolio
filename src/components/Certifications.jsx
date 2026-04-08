import React, { useState } from 'react';

const certifications = [
  {
    title: "Google AI Essentials",
    issuer: "Google · Coursera",
    date: "Oct 2025",
    image: "/cert_google_ai.jpg",
  },
  {
    title: "Iniciación al Desarrollo con IA",
    issuer: "BIG School · Midudev",
    date: "Mar 2026",
    image: "/cert_bigschool_ia.jpg",
  },
];

const VISIBLE = 2;

const Certifications = () => {
  const [index, setIndex] = useState(0);

  const canPrev = index > 0;
  const canNext = index + VISIBLE < certifications.length;

  const prev = () => { if (canPrev) setIndex(i => i - 1); };
  const next = () => { if (canNext) setIndex(i => i + 1); };

  const visible = certifications.slice(index, index + VISIBLE);

  return (
    <section
      id="certificaciones"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 500,
      }}
    >
      <h2 className="section-title" style={{ position: 'relative', zIndex: 500 }}>
        Licencias y Certificaciones
      </h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', width: '100%', maxWidth: '900px' }}>
        {/* Flecha izquierda */}
        <button
          onClick={prev}
          disabled={!canPrev}
          style={{
            background: canPrev ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            flexShrink: 0,
            cursor: canPrev ? 'pointer' : 'default',
            color: canPrev ? '#fff' : 'rgba(255,255,255,0.25)',
            fontSize: '1.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
          }}
        >
          ‹
        </button>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${visible.length}, 1fr)`,
            gap: '1.5rem',
            flex: 1,
          }}
        >
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
              <img
                src={cert.image}
                alt={cert.title}
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div style={{ padding: '1rem 1.5rem 1.25rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.35rem' }}>
                  {cert.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.25rem' }}>
                  {cert.issuer}
                </p>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        <button
          onClick={next}
          disabled={!canNext}
          style={{
            background: canNext ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            flexShrink: 0,
            cursor: canNext ? 'pointer' : 'default',
            color: canNext ? '#fff' : 'rgba(255,255,255,0.25)',
            fontSize: '1.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
          }}
        >
          ›
        </button>
      </div>

      {/* Indicador de posición */}
      {certifications.length > VISIBLE && (
        <div style={{ display: 'flex', gap: '6px', marginTop: '1.5rem' }}>
          {Array.from({ length: certifications.length - VISIBLE + 1 }).map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: i === index ? '#fff' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Certifications;
