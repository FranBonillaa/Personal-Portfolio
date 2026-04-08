import { useState, useEffect } from 'react';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const projects = [
    {
      title: "Portafolio",
      description: "Diseño y desarrollo de mi espacio personal en la web. Este portafolio ha sido creado para reflejar mi identidad profesional y mostrar mis proyectos más destacados como desarrollador Full Stack. Enfocado en un diseño moderno, rendimiento optimizado y una experiencia de usuario fluida.",
      image: "/project1.png",
    },
    {
      title: "Bonifit",
      description: "Diseño y desarrollo de mi Trabajo de Fin de Grado, una aplicación Full Stack integral de fitness. Permite explorar una biblioteca de ejercicios, guardar favoritos y crear rutinas personalizadas. Incluye un perfil de usuario detallado y gráficas interactivas para monitorizar la evolución del peso y la grasa corporal.",
      image: "/project2.png",
    },
  ];

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
        Proyectos
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : `repeat(${projects.length}, 1fr)`,
          gap: isMobile ? '1.25rem' : '1.5rem',
          width: isMobile ? '92vw' : '82vw',
          maxWidth: isMobile ? '92vw' : '82vw',
          position: 'relative',
          zIndex: 500,
        }}
      >
        {projects.map((project, index) => (
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
              cursor: 'pointer',
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
              onError={e => {
                e.target.src = `https://picsum.photos/seed/${project.seed}/800/500`;
              }}
              style={{
                width: '100%',
                height: isMobile ? '180px' : '340px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div style={{ padding: isMobile ? '1rem 1.25rem' : '1.5rem 1.75rem 1.75rem', textAlign: 'center' }}>
              <h3
                style={{
                  fontSize: isMobile ? '1.1rem' : '1.35rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '0.6rem',
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: isMobile ? '0.85rem' : '0.95rem',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
