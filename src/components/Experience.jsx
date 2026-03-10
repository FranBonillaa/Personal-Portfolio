import React from 'react';

const Experience = () => {
  const experiences = [
    {
      position: "Técnico en Sistemas Microinformáticos y Redes",
      company: "Revolution Store (Sicilia, Italia)",
      period: "Mar 2024 - Jun 2024",
      description: "Técnico en prácticas Erasmus responsable del mantenimiento integral de equipos, configuración de sistemas y eliminación de amenazas de seguridad. Experiencia clave en el desarrollo de autonomía profesional y resolución de problemas técnicoscomplejos dentro de un entorno de trabajo internacional y exigente."
    },
    {
      position: "Técnico en Desarrollador de Aplicaciones Multiplataforma", 
      company: "Instituto de Biomedicina Sevilla (Sevilla, España)",
      period: "Feb 2026 - May 2026",
      description: "Desarrollo de aplicaciones en Java (NetBeans) para la gestión de escalas biomédicas y automatización de datos con Python (Pandas). Colaboración en el mantenimiento de herramientas internas y gestión de bases de datos orientadas a grafos con Neo4j."
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
              <div className="text-center mb-4">
                <h3 className="text-2xl font-semibold text-white">
                  {exp.position}
                </h3>
                <p className="text-xl text-blue-400">
                  {exp.company}
                </p>
              </div>
              <p className="text-gray-300 mb-4">
                {exp.description}
              </p>
              <div className="text-center pt-4 border-t border-gray-600">
                <span className="text-gray-400">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
