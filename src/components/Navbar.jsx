import { useState } from 'react';

const Navbar = () => {
  const [language, setLanguage] = useState('ES');

  const navItems = [
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'mi-albun', label: 'Mi Albúm' },
    { id: 'tecnologias', label: 'Tecnologias' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'certificaciones', label: 'Certificaciones' },
    { id: 'contacto', label: 'Contacto' },
  ];
  const languages = [
    { code: 'ES', label: 'Español' },
    { code: 'EN', label: 'English' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links">
          {navItems.map((item) => (
            <a href={`#${item.id}`} key={item.id} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="language-selector">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-btn ${language === lang.code ? 'active' : ''}`}
              onClick={() => setLanguage(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
