import { useState, useEffect } from 'react';
import { useLanguage, translations } from '@/context/LanguageContext';
import FadeIn from '@/components/FadeIn';

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language].aboutMe;

  const getSize = () => {
    const w = window.innerWidth;
    if (w < 768) return 'mobile';
    if (w < 1025) return 'tablet';
    return 'desktop';
  };
  const [size, setSize] = useState(getSize);
  const isMobile = size === 'mobile';

  useEffect(() => {
    const fn = () => setSize(getSize());
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  return (
    <section id="sobre-mi" className="about-me-section">
      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <FadeIn direction="up" duration={0.6}>
          <h2 className="section-title">{t.title}</h2>
        </FadeIn>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          gap: isMobile ? '2.5rem' : '4rem',
          width: '100%',
          marginBottom: isMobile ? '3rem' : '100px',
        }}>

          {/* Descripción */}
          <FadeIn direction={isMobile ? 'up' : 'right'} duration={0.7} delay={0.1} style={{ width: isMobile ? '100%' : '50%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 className="text-2xl font-semibold text-white mb-12">{t.descriptionLabel}</h3>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: 'white',
                lineHeight: '1.8',
                textAlign: isMobile ? 'left' : 'left',
                margin: 0,
              }}>
                {t.p1}
              </p>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: 'white',
                lineHeight: '1.8',
                textAlign: 'left',
                margin: 0,
              }}>
                {t.p2}
              </p>
            </div>
          </FadeIn>

          {/* Habilidades */}
          <FadeIn direction={isMobile ? 'up' : 'left'} duration={0.7} delay={0.2} style={{ width: isMobile ? '100%' : '50%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 className="text-2xl font-semibold text-white mb-12">{t.skillsLabel}</h3>
              <div style={{ display: 'flex', gap: isMobile ? '1.5rem' : '2.5rem', width: '100%' }}>
                {[t.skills.slice(0, 7), t.skills.slice(7)].map((group, gi) => (
                  <div key={gi} style={{ flex: 1 }}>
                    {group.map((skill, index) => (
                      <div key={index} style={{ marginBottom: '1.25rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                          <span style={{ color: 'white', fontWeight: 500, fontSize: isMobile ? '0.75rem' : '0.85rem' }}>{skill.name}</span>
                          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: isMobile ? '0.7rem' : '0.8rem' }}>{skill.level}%</span>
                        </div>
                        <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: `${skill.level}%`, height: '100%', backgroundColor: '#22d3ee', borderRadius: '4px', transition: 'width 1s ease-in-out' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
