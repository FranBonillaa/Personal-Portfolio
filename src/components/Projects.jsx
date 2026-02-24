import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con carrito de compras y pasarela de pago",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/project1.jpg"
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con drag & drop y tiempo real",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      image: "/project2.jpg"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard del tiempo con pronósticos y mapas interactivos",
      tech: ["JavaScript", "API REST", "Chart.js", "OpenWeather"],
      image: "/project3.jpg"
    }
  ];

  return (
    <section id="proyectos" className="projects-section">
      <div style={{ width: '95%', maxWidth: 'none', margin: '0 auto', padding: '0 2rem' }}>
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Proyectos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/project${index}/400/300.jpg`;
                  }}
                />
              </div>
              <div className="project-content">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
