import { useLanguage, translations } from '@/context/LanguageContext';

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language].aboutMe;

  return (
    <section id="sobre-mi" className="about-me-section">
      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 2rem' }}>
        <h2 className="section-title">{t.title}</h2>

        <div className="about-main-flex" style={{ display: 'flex', justifyContent: 'center', gap: '4rem', width: '100%', marginBottom: '100px' }}>

          {/* Columna izquierda */}
          <div className="about-col-left" style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div className="about-text">
              <h3 className="text-2xl font-semibold text-white mb-12">{t.descriptionLabel}</h3>
              <p className="text-lg text-white mb-8" style={{ lineHeight: '2.4', maxWidth: '420px', margin: '0 auto' }}>
                {t.p1}
              </p>
              <p className="text-lg text-white mb-8" style={{ lineHeight: '2.4', maxWidth: '420px', margin: '0 auto' }}>
                {t.p2}
              </p>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="about-col-right" style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <h3 className="text-2xl font-semibold text-white mb-12">{t.skillsLabel}</h3>
            <div style={{ display: 'flex', gap: '2.5rem', width: '100%' }}>
              {[t.skills.slice(0, 7), t.skills.slice(7)].map((group, gi) => (
                <div key={gi} style={{ flex: 1 }}>
                  {group.map((skill, index) => (
                    <div key={index} style={{ marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <span style={{ color: 'white', fontWeight: 500, fontSize: '0.85rem' }}>{skill.name}</span>
                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{skill.level}%</span>
                      </div>
                      <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${skill.level}%`, height: '100%', backgroundColor: '#ccff00', borderRadius: '4px', transition: 'width 1s ease-in-out' }} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
