import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'mi-albúm', label: 'Mi Albúm' },
    { id: 'tecnologias', label: 'Tecnologias' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'certificaciones', label: 'Certificaciones' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit' }}
          >
            MiPortafolio
          </button>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleScrollToSection(item.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit' }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menú de navegación"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
