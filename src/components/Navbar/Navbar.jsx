import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <Link to="/" onClick={() => setActiveSection('inicio')}>
            MiPortafolio
          </Link>
        </div>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveSection(item.id);
                setIsOpen(false);
              }}
            >
              {item.label}
            </Link>
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
