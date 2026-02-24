import React from 'react';

const AboutMe = () => {
  const skills = [
    { name: 'Lenguajes de programación', level: 85 },
    { name: 'Frameworks y librerías', level: 75 },
    { name: 'Bases de datos', level: 80 },
    { name: 'Redes y hardware', level: 80 },
    { name: 'Bash y PowerShell', level: 85 },
    { name: 'Sistemas y administración', level: 85 },
    { name: 'Grado Violonchelo', level: 70 },
    { name: 'Mecanografia intermedia', level: 90 }
  ];

  return (
    <section id="sobre-mi" className="about-me-section" style={{ 
  paddingTop: '150px', 
  minHeight: '100vh',
  paddingBottom: '100px'
 }}>
      <div style={{ 
        maxWidth: '1200px', 
        width: '100%', 
        margin: '0 auto', 
        padding: '0 2rem'
      }}>
        <h2 className="text-4xl font-bold mb-16 text-white text-center">
          Sobre Mí
        </h2>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          gap: '10rem',
          width: '100%',
          marginBottom: '100px'
        }}>
          {/* Columna izquierda - Texto más ancho */}
          <div style={{ 
            width: '70%', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '3rem' 
          }}>
            <div className="about-text">
              <h3 className="text-2xl font-semibold text-white mb-12">Descripcion</h3>
              <p className="text-lg text-white mb-8">
                Soy Fran, un chico de Dos Hermanas apasionado por la informática y siempre curioso por seguir aprendiendo cosas nuevas. Me considero una persona muy activa, trabajadora y resolutiva; me involucro al máximo en lo que hago y siempre busco la forma de solucionar los retos que se me ponen por delante.
              </p>
              <p className="text-lg text-white mb-8">
                Fuera de la pantalla, el deporte es clave en mi rutina diaria desde hace años, y guardo un gran cariño a mi etapa en el conservatorio de música. Para desconectar, mi plan ideal es organizar un buen viaje, descubrir sitios nuevos y exprimir al máximo el tiempo con mi familia y mis amigos.
              </p>
            </div>
          </div>
          
          {/* Columna derecha - Habilidades en dos columnas */}
          <div style={{ 
            width: '30%', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '3rem' 
          }}>
            <h3 className="text-2xl font-semibold text-white mb-12">Habilidades</h3>
            <div style={{ display: 'flex', gap: '2rem', width: '100%' }}>
              <div style={{ flex: '1' }}>
                {skills.slice(0, 4).map((skill, index) => (
                  <div key={index} className="skill-item" style={{ marginBottom: '2rem' }}>
                    <div className="skill-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar" style={{ 
                      width: '120px', 
                      height: '14px', 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                      borderRadius: '7px',
                      overflow: 'hidden',
                      flexShrink: 0
                    }}>
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`, 
                          height: '100%', 
                          backgroundColor: '#ff4d4d',
                          borderRadius: '7px',
                          transition: 'width 1s ease-in-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ flex: '1' }}>
                {skills.slice(4).map((skill, index) => (
                  <div key={index} className="skill-item" style={{ marginBottom: '2rem' }}>
                    <div className="skill-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar" style={{ 
                      width: '120px', 
                      height: '14px', 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                      borderRadius: '7px',
                      overflow: 'hidden',
                      flexShrink: 0
                    }}>
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`, 
                          height: '100%', 
                          backgroundColor: '#ff4d4d',
                          borderRadius: '7px',
                          transition: 'width 1s ease-in-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
