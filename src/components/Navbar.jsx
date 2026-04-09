import { useLanguage, translations } from '@/context/LanguageContext';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].navbar;

  const navItems = [
    { id: 'sobre-mi',        label: t.sobreMi },
    { id: 'mi-albun',        label: t.miAlbum },
    { id: 'tecnologias',     label: t.tecnologias },
    { id: 'experiencia',     label: t.experiencia },
    { id: 'proyectos',       label: t.proyectos },
    { id: 'certificaciones', label: t.certificaciones },
    { id: 'contacto',        label: t.contacto },
  ];

  const languages = [
    { code: 'ES', label: 'Español' },
    { code: 'EN', label: 'English' },
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
