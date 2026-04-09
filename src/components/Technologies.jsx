import { useLanguage, translations } from '@/context/LanguageContext';
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaLinux,
  FaWindows,
  FaGit,
  FaGithub,
  FaGitlab,
  FaDocker,
  FaAws,
  FaGoogle,
  FaFigma,
  FaCode
} from 'react-icons/fa';
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiReactos,
  SiExpress,
  SiKotlin,
  SiDjango,
  SiSpringboot,
  SiPhp,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiMariadb,
  SiOracle,
  SiNeo4J,
  SiVscodium,
  SiIntellijidea,
  SiEclipseide,
  SiKubernetes,
  SiPostman,
  SiNpm,
  SiVite,
  SiTrello,
  SiCisco,
  SiVirtualbox,
  SiProxmox,
  SiNginx,
  SiApache,
  SiGooglecloud,
  SiWireshark,
  SiGnu,
  SiDebian,
  SiUbuntu,
  SiKalilinux
} from 'react-icons/si';

const Technologies = () => {
  const { language } = useLanguage();
  const t = translations[language].technologies;
  const leftTech = [
    { name: "HTML5", icon: SiHtml5, color: "#E34C26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "React Native", icon: SiReactos, color: "#61DAFB" }
  ];

  const rightTech = [
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "XML", icon: FaCode, color: "#E37933" }
  ];

  const databasesTech = [
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "SQLite", icon: SiSqlite, color: "#003B57" },
    { name: "MariaDB", icon: SiMariadb, color: "#003545" },
    { name: "Oracle DB", icon: SiOracle, color: "#F80000" },
    { name: "Neo4j", icon: SiNeo4J, color: "#018BFF" },
    { name: "PL/SQL", icon: FaDatabase, color: "#C74634" }
  ];

  const toolsTech = [
    { name: "Git", icon: FaGit, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#181717" },
    { name: "GitLab", icon: FaGitlab, color: "#FC6D26" },
    { name: "VSCode", icon: SiVscodium, color: "#007ACC" },
    { name: "IntelliJ", icon: SiIntellijidea, color: "#000000" },
    { name: "Eclipse", icon: SiEclipseide, color: "#2C2255" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "npm", icon: SiNpm, color: "#CB3837" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Trello", icon: SiTrello, color: "#0079BF" },
    { name: "Figma", icon: FaFigma, color: "#F24E1E" }
  ];

  const systemsTech = [
    { name: "Linux", icon: FaLinux, color: "#FCC624" },
    { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
    { name: "Debian", icon: SiDebian, color: "#A81D33" },
    { name: "Kali Linux", icon: SiKalilinux, color: "#557C94" },
    { name: "Windows Server", icon: FaWindows, color: "#0078D4" },
    { name: "Bash", icon: SiGnu, color: "#000000" },
    { name: "PowerShell", icon: FaWindows, color: "#5391FE" },
    { name: "Cisco", icon: SiCisco, color: "#1BA0D7" },
    { name: "VirtualBox", icon: SiVirtualbox, color: "#183A61" },
    { name: "Proxmox", icon: SiProxmox, color: "#E57000" },
    { name: "Nginx", icon: SiNginx, color: "#009639" },
    { name: "Apache", icon: SiApache, color: "#D22128" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Google Cloud", icon: FaGoogle, color: "#4285F4" },
    { name: "Wireshark", icon: SiWireshark, color: "#1679A7" },
    { name: "Nmap", icon: FaGit, color: "#000000" }
  ];

  return (
    <section id="tecnologias" className="technologies-section">
      <div className="tech-container">
        <h2 className="tech-title">
          <span className="tech-title-text">{t.title}</span>
          <div className="tech-title-decoration"></div>
        </h2>

        {/* Un único grid — todas las tarjetas en el mismo contexto */}
        <div className="tech-all-cards-grid">

          {[
            { title: 'Frontend', items: leftTech },
            { title: 'Backend', items: rightTech },
            { title: t.databases, items: databasesTech },
            { title: t.tools, items: toolsTech },
          ].map(({ title, items }) => (
            <div key={title} className="tech-column">
              <div className="tech-column-header">
                <h3 className="column-title">{title}</h3>
              </div>
              <div className="tech-items-grid">
                {items.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <div className="tech-icon-container">
                      <div className="tech-icon" style={{ backgroundColor: tech.color }}>
                        <tech.icon className="tech-real-icon" />
                      </div>
                    </div>
                    <div className="tech-info">
                      <h4 className="tech-name">{tech.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Sistemas y Redes — ocupa las 2 columnas */}
          <div className="tech-column tech-column-full">
            <div className="tech-column-header">
              <h3 className="column-title">{t.systems}</h3>
            </div>
            <div className="tech-items-grid">
              {systemsTech.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-icon-container">
                    <div className="tech-icon" style={{ backgroundColor: tech.color }}>
                      <tech.icon className="tech-real-icon" />
                    </div>
                  </div>
                  <div className="tech-info">
                    <h4 className="tech-name">{tech.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Technologies;
