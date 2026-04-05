import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con carrito de compras y pasarela de pago",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/project1.jpg",
      seed: "ecommerce42",
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con drag & drop y tiempo real",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      image: "/project2.jpg",
      seed: "taskapp77",
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard del tiempo con pronósticos y mapas interactivos",
      tech: ["JavaScript", "API REST", "Chart.js", "OpenWeather"],
      image: "/project3.jpg",
      seed: "weather13",
    },
  ];

  return (
    <section
      id="proyectos"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 500,
      }}
    >
      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 2.8rem)',
          fontWeight: '700',
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '3rem',
          position: 'relative',
          zIndex: 500,
        }}
      >
        Proyectos
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          width: '82vw',
          maxWidth: '82vw',
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
                height: '340px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div style={{ padding: '1.5rem 1.75rem 1.75rem', textAlign: 'center' }}>
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '0.6rem',
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: '0.95rem',
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
