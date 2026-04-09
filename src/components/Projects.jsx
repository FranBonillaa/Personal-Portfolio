import { useState, useEffect } from 'react';
import { useLanguage, translations } from '@/context/LanguageContext';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  return (
    <section
      id="proyectos"
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

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : `repeat(${t.items.length}, 1fr)`,
          gap: isMobile ? '1.25rem' : '1.5rem',
          width: isMobile ? '92vw' : '82vw',
          maxWidth: isMobile ? '92vw' : '82vw',
          position: 'relative',
          zIndex: 500,
        }}
      >
        {t.items.map((project, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(10, 30, 10, 0.72)',
              backdropFilter: 'blur(12px)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.12)',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 500,
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
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: isMobile ? '180px' : '340px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div style={{ padding: isMobile ? '1rem 1.25rem' : '1.5rem 1.75rem 1.75rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.35rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.6rem' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: isMobile ? '0.85rem' : '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {project.description}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.25rem',
                  borderRadius: '9999px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                {t.githubBtn}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
