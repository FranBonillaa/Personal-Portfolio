import { useState, useEffect } from 'react';
import { useLanguage, translations } from '@/context/LanguageContext';
import FadeIn from '@/components/FadeIn';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  const getSize = () => {
    const w = window.innerWidth;
    if (w < 768) return 'mobile';
    if (w < 1025) return 'tablet';
    return 'desktop';
  };
  const [size, setSize] = useState(getSize);
  const isMobile = size === 'mobile';
  const isTablet = size === 'tablet';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fn = () => {
      setSize(getSize());
      setIndex(0);
    };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const VISIBLE = isMobile ? 1 : 2;
  const canPrev = index > 0;
  const canNext = index + VISIBLE < t.items.length;

  const prev = () => { if (canPrev) setIndex(i => i - 1); };
  const next = () => { if (canNext) setIndex(i => i + 1); };

  const visible = t.items.slice(index, index + VISIBLE);

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
      id="proyectos"
      style={{
        minHeight: isMobile ? 'auto' : '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '3rem 1rem' : isTablet ? '4rem 1.5rem' : '6rem 2rem',
        position: 'relative',
        zIndex: 500,
      }}
    >
      <FadeIn direction="up" duration={0.6}>
        <h2 className="section-title" style={{ position: 'relative', zIndex: 500 }}>
          {t.title}
        </h2>
      </FadeIn>

      <FadeIn direction="up" delay={0.15} duration={0.7} style={{ width: '100%' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '0.75rem' : '1.5rem',
        width: '100%',
        maxWidth: isMobile ? '95vw' : isTablet ? '90vw' : '82vw',
        margin: '0 auto',
        position: 'relative',
        zIndex: 500,
      }}>
        <button onClick={prev} disabled={!canPrev} style={btnStyle(canPrev)} aria-label="Proyecto anterior"><FaChevronLeft /></button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${visible.length}, 1fr)`,
          gap: isMobile ? '0.75rem' : '1.5rem',
          flex: 1,
        }}>
          {visible.map((project, i) => (
            <div
              key={index + i}
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
                  height: isMobile ? '180px' : isTablet ? '240px' : '340px',
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
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.55rem 1.25rem', borderRadius: '9999px',
                      background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
                      color: '#ffffff', fontSize: '0.88rem', fontWeight: '600',
                      textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    {t.githubBtn}
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.55rem 1.25rem', borderRadius: '9999px',
                        background: '#22d3ee', color: '#000000',
                        fontSize: '0.88rem', fontWeight: '700',
                        textDecoration: 'none', transition: 'background 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = '#67e8f9'}
                      onMouseLeave={e => e.currentTarget.style.background = '#22d3ee'}
                    >
                      {t.demoBtn}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={next} disabled={!canNext} style={btnStyle(canNext)} aria-label="Proyecto siguiente"><FaChevronRight /></button>
      </div>
      </FadeIn>

      {t.items.length > VISIBLE && (
        <div style={{ display: 'flex', gap: '6px', marginTop: '1.25rem' }}>
          {Array.from({ length: t.items.length - VISIBLE + 1 }).map((_, i) => (
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

export default Projects;
