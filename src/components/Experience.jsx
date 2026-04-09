import { useLanguage, translations } from '@/context/LanguageContext';

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section id="experiencia" className="experience-section">
      <div style={{ width: '95%', maxWidth: 'none', margin: '0 auto', padding: '0 2rem' }}>
        <h2 className="section-title">{t.title}</h2>

        <div className="space-y-8">
          {t.items.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-semibold text-white">{exp.position}</h3>
                <p className="text-xl text-blue-400">{exp.company}</p>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="text-center pt-4 border-t border-gray-600">
                <span className="text-gray-400">{exp.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
