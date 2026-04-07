const AboutMe = () => {
  const skills = [
    { name: 'Lenguajes de programación', level: 85 },
    { name: 'Frameworks y librerías', level: 75 },
    { name: 'Bases de datos', level: 80 },
    { name: 'Redes y hardware', level: 80 },
    { name: 'Aprendizaje autónomo', level: 92 },
    { name: 'Resolución de problemas', level: 88 },
    { name: 'Pensamiento lógico', level: 90 },
    { name: 'Bash y PowerShell', level: 85 },
    { name: 'Sistemas y administración', level: 85 },
    { name: 'Grado Violonchelo', level: 60 },
    { name: 'Mecanografia táctil', level: 90 },
    { name: 'Constancia y disciplina', level: 95 },
    { name: 'Creatividad técnica', level: 80 },
    { name: 'Trabajo bajo presión', level: 85 },
  ];

  return (
    <section id="sobre-mi" className="about-me-section">
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <h2 className="section-title">Sobre Mí</h2>

        <div className="about-main-flex" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '4rem',
          width: '100%',
          marginBottom: '100px'
        }}>
          {/* Columna izquierda */}
          <div className="about-col-left" style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem'
          }}>
            <div className="about-text">
              <h3 className="text-2xl font-semibold text-white mb-12">Descripcion</h3>
              <p className="text-lg text-white mb-8" style={{ lineHeight: '2.4', maxWidth: '420px', margin: '0 auto' }}>
                Soy Fran, un chico de Dos Hermanas apasionado por la informática y siempre curioso por seguir aprendiendo cosas nuevas. Me considero una persona muy activa, trabajadora y resolutiva; me involucro al máximo en lo que hago y siempre busco la forma de solucionar los retos que se me ponen por delante.
              </p>
              <p className="text-lg text-white mb-8" style={{ lineHeight: '2.4', maxWidth: '420px', margin: '0 auto' }}>
                Fuera de la pantalla, el deporte es clave en mi rutina diaria desde hace años, y guardo un gran cariño a mi etapa en el conservatorio de música. Para desconectar, mi plan ideal es organizar un buen viaje, descubrir sitios nuevos y exprimir al máximo el tiempo con mi familia y mis amigos.
              </p>
            </div>
          </div>

          {/* Columna derecha - Habilidades en dos columnas */}
          <div className="about-col-right" style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem'
          }}>
            <h3 className="text-2xl font-semibold text-white mb-12">Habilidades</h3>
            <div style={{ display: 'flex', gap: '2.5rem', width: '100%' }}>
              {[skills.slice(0, 7), skills.slice(7)].map((group, gi) => (
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
