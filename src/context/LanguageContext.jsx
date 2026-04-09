import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const translations = {
  ES: {
    navbar: {
      sobreMi: 'Sobre Mí',
      miAlbum: 'Mi Albúm',
      tecnologias: 'Tecnologias',
      experiencia: 'Experiencia',
      proyectos: 'Proyectos',
      certificaciones: 'Certificaciones',
      contacto: 'Contacto',
    },
    aboutMe: {
      title: 'Sobre Mí',
      descriptionLabel: 'Descripción',
      skillsLabel: 'Habilidades',
      p1: 'Soy Fran, apasionado por la informática y siempre dispuesto a seguir aprendiendo cosas nuevas. Me considero una persona muy activa, trabajadora y resolutiva; me involucro al máximo en lo que hago y siempre busco la forma de solucionar los retos que se presentan.',
      p2: 'Fuera de la pantalla, el deporte es clave en mi rutina diaria desde hace años, y guardo un gran cariño a mi etapa en el conservatorio de música. Para desconectar, mi plan ideal es organizar un buen viaje, descubrir sitios nuevos y exprimir al máximo el tiempo con mi familia y mis amigos.',
      skills: [
        { name: 'Lenguajes de programación', level: 85 },
        { name: 'Frameworks y librerías', level: 75 },
        { name: 'Bases de datos', level: 80 },
        { name: 'Redes y hardware', level: 80 },
        { name: 'Aprendizaje autónomo', level: 92 },
        { name: 'Resolución de problemas', level: 88 },
        { name: 'Pensamiento lógico', level: 90 },
        { name: 'Bash y PowerShell', level: 85 },
        { name: 'Sistemas y administración', level: 85 },
        { name: 'Mecanografía táctil', level: 90 },
        { name: 'Constancia y disciplina', level: 95 },
        { name: 'Creatividad técnica', level: 80 },
        { name: 'Trabajo bajo presión', level: 85 },
      ],
    },
    experience: {
      title: 'Experiencia',
      items: [
        {
          position: 'Técnico en Sistemas Microinformáticos y Redes',
          company: 'Revolution Store (Sicilia, Italia)',
          period: 'Mar 2024 - Jun 2024',
          description: 'Técnico en prácticas Erasmus responsable del mantenimiento integral de equipos, configuración de sistemas y eliminación de amenazas de seguridad. Experiencia clave en el desarrollo de autonomía profesional y resolución de problemas técnicos complejos dentro de un entorno de trabajo internacional y exigente.',
        },
        {
          position: 'Técnico en Desarrollador de Aplicaciones Multiplataforma',
          company: 'Instituto de Biomedicina Sevilla (Sevilla, España)',
          period: 'Feb 2026 - May 2026',
          description: 'Desarrollo de aplicaciones en Java (NetBeans) para la gestión de escalas biomédicas y automatización de datos con Python (Pandas). Colaboración en el mantenimiento de herramientas internas y gestión de bases de datos orientadas a grafos con Neo4j.',
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      githubBtn: 'Ver en GitHub',
      items: [
        {
          title: 'Portafolio',
          description: 'Diseño y desarrollo de mi espacio personal en la web. Este portafolio ha sido creado para reflejar mi identidad profesional y mostrar mis proyectos más destacados como desarrollador Full Stack. Enfocado en un diseño moderno, rendimiento optimizado y una experiencia de usuario fluida.',
          image: '/project1.png',
          github: 'https://github.com/FranBonillaa/Personal-Portfolio',
        },
        {
          title: 'Bonifit',
          description: 'Diseño y desarrollo de mi Trabajo de Fin de Grado, una aplicación Full Stack integral de fitness. Permite explorar una biblioteca de ejercicios, guardar favoritos y crear rutinas personalizadas. Incluye un perfil de usuario detallado y gráficas interactivas para monitorizar la evolución del peso y la grasa corporal.',
          image: '/project2.png',
          github: 'https://github.com/FranBonillaa/BoniFit',
        },
      ],
    },
    technologies: {
      title: 'Tecnologías',
      databases: 'Bases de Datos',
      tools: 'Herramientas',
      systems: 'Sistemas y Redes',
    },
    album: {
      title: 'Mi Albúm',
    },
    certifications: {
      title: 'Licencias y Certificaciones',
    },
    contact: {
      title: 'Contacto',
      heading: '¿Tienes un proyecto en mente?',
      subheading: 'Estoy listo para colaborar contigo. Hablemos y lo hacemos realidad juntos.',
      sendMessage: 'Enviar mensaje',
      downloadCV: 'Descargar CV',
    },
  },

  EN: {
    navbar: {
      sobreMi: 'About Me',
      miAlbum: 'My Album',
      tecnologias: 'Technologies',
      experiencia: 'Experience',
      proyectos: 'Projects',
      certificaciones: 'Certifications',
      contacto: 'Contact',
    },
    aboutMe: {
      title: 'About Me',
      descriptionLabel: 'Description',
      skillsLabel: 'Skills',
      p1: "I'm Fran, passionate about technology and always eager to keep learning new things. I consider myself a very active, hardworking and resourceful person; I give my all in everything I do and always look for ways to solve the challenges that arise.",
      p2: 'Outside the screen, sport has been a key part of my daily routine for years, and I have great fondness for my time at the music conservatory. To unwind, my ideal plan is to organise a good trip, discover new places and make the most of the time with my family and friends.',
      skills: [
        { name: 'Programming languages', level: 85 },
        { name: 'Frameworks & libraries', level: 75 },
        { name: 'Databases', level: 80 },
        { name: 'Networks & hardware', level: 80 },
        { name: 'Self-learning', level: 92 },
        { name: 'Problem solving', level: 88 },
        { name: 'Logical thinking', level: 90 },
        { name: 'Bash & PowerShell', level: 85 },
        { name: 'Systems & administration', level: 85 },
        { name: 'Touch typing', level: 90 },
        { name: 'Consistency & discipline', level: 95 },
        { name: 'Technical creativity', level: 80 },
        { name: 'Working under pressure', level: 85 },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          position: 'IT Systems and Networks Technician',
          company: 'Revolution Store (Sicily, Italy)',
          period: 'Mar 2024 - Jun 2024',
          description: 'Erasmus internship technician responsible for full equipment maintenance, system configuration and security threat removal. Key experience in developing professional autonomy and solving complex technical problems within a demanding international work environment.',
        },
        {
          position: 'Multiplatform Application Developer Technician',
          company: 'Institute of Biomedicine of Seville (Seville, Spain)',
          period: 'Feb 2026 - May 2026',
          description: 'Development of Java (NetBeans) applications for biomedical scale management and data automation with Python (Pandas). Collaboration on the maintenance of internal tools and graph-oriented database management with Neo4j.',
        },
      ],
    },
    projects: {
      title: 'Projects',
      githubBtn: 'View on GitHub',
      items: [
        {
          title: 'Portfolio',
          description: 'Design and development of my personal web space. This portfolio was created to reflect my professional identity and showcase my most notable projects as a Full Stack developer. Focused on modern design, optimised performance and a smooth user experience.',
          image: '/project1.png',
          github: 'https://github.com/FranBonillaa/Personal-Portfolio',
        },
        {
          title: 'Bonifit',
          description: 'Design and development of my Final Degree Project, a comprehensive Full Stack fitness application. It allows users to explore an exercise library, save favourites and create personalised routines. Includes a detailed user profile and interactive charts to track weight and body fat evolution.',
          image: '/project2.png',
          github: 'https://github.com/FranBonillaa/BoniFit',
        },
      ],
    },
    technologies: {
      title: 'Technologies',
      databases: 'Databases',
      tools: 'Tools',
      systems: 'Systems & Networks',
    },
    album: {
      title: 'My Album',
    },
    certifications: {
      title: 'Licenses & Certifications',
    },
    contact: {
      title: 'Contact',
      heading: 'Have a project in mind?',
      subheading: "I'm ready to collaborate with you. Let's talk and make it happen together.",
      sendMessage: 'Send message',
      downloadCV: 'Download CV',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ES');
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
