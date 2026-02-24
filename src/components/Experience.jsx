import React from 'react';

const Experience = () => {
  const experiences = [
    {
      position: "Técnico en Sistemas Microinformáticos y Redes",
      company: "Revolution Store (Sicilia, Italia)",
      period: "Mar 2024 - Jun 2024",
      description: "Prácticas Erasmus en entorno técnico real. Mantenimiento y reparación de equipos, instalación de sistemas operativos y eliminación de malware. Desarrollo de autonomía y resolución de problemas en un contexto internacional."
    },
    {
      position: "Frontend Developer", 
      company: "Digital Agency",
      period: "2022 - 2023",
      description: "Creación de interfaces de usuario modernas y responsivas"
    },
    {
      position: "Junior Developer",
      company: "Startup Tech",
      period: "2021 - 2022", 
      description: "Primeros pasos en el desarrollo web y aprendizaje continuo"
    }
  ];

  return (
    <section id="experiencia" className="experience-section">
      <div style={{ width: '95%', maxWidth: 'none', margin: '0 auto', padding: '0 2rem' }}>
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Experiencia
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-blue-400">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-400">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
