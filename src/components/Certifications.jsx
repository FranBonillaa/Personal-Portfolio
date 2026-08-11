import { useState, useEffect } from 'react';
import { useLanguage, translations } from '@/context/LanguageContext';
import FadeIn from '@/components/FadeIn';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const certifications = [
  {
    title: "Google AI Essentials",
    issuer: "Google · Coursera",
    date: "Oct 2025",
    image: "/cert_google_ai.jpg",
  },
  {
    title: "Introduction to AI Development",
    issuer: "BIG School · Midudev",
    date: "Mar 2026",
    image: "/cert_bigschool_ia.jpg",
  },
  {
    title: "Fundamentos de Angular",
    issuer: "OpenWebinars",
    date: "2025",
    image: "/cert_angular.jpg",
  },
  {
    title: "Iniciación al Desarrollo con IA",
    issuer: "BIG School · Midudev",
    date: "Mar 2026",
    image: "/cert_ia_desarrollo.jpg",
  },
  {
    title: "ChatGPT",
    issuer: "OpenAI",
    date: "2026",
    image: "/cert_chatgpt__generacion_de_texto_conversacional.jpg",
  },
  {
    title: "Bootstrap 4",
    issuer: "Responsive Layout",
    date: "2026",
    image: "/cert_bootstrap_4__maquetacion_responsive_y_layout.jpg",
  },
  {
    title: "Android App",
    issuer: "Android",
    date: "2026",
    image: "/cert_curso_crea_tu_primera_aplicacion_en_android.jpg",
  },
  {
    title: "Git",
    issuer: "Cursos online",
    date: "2026",
    image: "/cert_curso_de_git.jpg",
  },
  {
    title: "HTML5 y CSS3",
    issuer: "Cursos online",
    date: "2026",
    image: "/cert_curso_de_html5_y_css3.jpg",
  },
  {
    title: "JUnit 5",
    issuer: "Pruebas automáticas",
    date: "2026",
    image: "/cert_curso_de_introduccion_a_pruebas_automaticas_con_junit_5.jpg",
  },
  {
    title: "Kotlin",
    issuer: "Cursos online",
    date: "2026",
    image: "/cert_curso_de_kotlin.jpg",
  },
  {
    title: "JavaScript",
    issuer: "Cursos online",
    date: "2026",
    image: "/cert_fundamentos_de_javascript.jpg",
  },
  {
    title: "Bootstrap 5",
    issuer: "Cursos online",
    date: "2026",
    image: "/cert_dominando_bootstrap_5__desarrollo_de_sitios_web_responsive.jpg",
  },
  {
    title: "ChatGPT API",
    issuer: "OpenAI",
    date: "2026",
    image: "/cert_dominando_chatgpt_con_la_api_de_openai.jpg",
  },
  {
    title: "Fundamentos JS",
    issuer: "Cursos online",
    date: "2026",
    image: "/cert_fundamentos_de_javascript.jpg",
  },
  {
    title: "IA Fundamentals",
    issuer: "Cursos online",
    date: "2026",
    image: "/cert_fundamentos_de_la_inteligencia_artificial.jpg",
  },
  {
    title: "Prompt Engineering",
    issuer: "Cursos online",
    date: "2026",
    image: "/cert_introduccion_al_prompt_engineering.jpg",
  },
  {
    title: "IA Office",
    issuer: "Cursos online",
    date: "2026",
    image: "/cert_introduccion_a_la_ia_en_la_oficina.jpg",
  },
  {
    title: "Docker",
    issuer: "Cursos online",
    date: "2026",
    image: "/cert_introduccion_a_docker.jpg",
  },
];

const Certifications = () => {
  const { language } = useLanguage();
  const t = translations[language].certifications;

  const getSize = () => {
    const w = window.innerWidth;
    if (w < 768) return 'mobile';
    if (w < 1025) return 'tablet';
    return 'desktop';
  };
  const [size, setSize] = useState(getSize);
  const isMobile = size === 'mobile';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fn = () => {
      setSize(getSize());
      setIndex(0);
    };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const VISIBLE = isMobile ? 1 : 2;
  const canPrev = index > 0;
  const canNext = index + VISIBLE < certifications.length;

  const prev = () => { if (canPrev) setIndex(i => i - 1); };
  const next = () => { if (canNext) setIndex(i => i + 1); };

  const visible = certifications.slice(index, index + VISIBLE);

  const btnStyle = (enabled) => ({
    background: enabled ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '50%',
    width: isMobile ? '36px' : '48px',
    height: isMobile ? '36px' : '48px',
    flexShrink: 0,
    cursor: enabled ? 'pointer' : 'default',
    color: enabled ? '#fff' : 'rgba(255,255,255,0.25)',
    fontSize: isMobile ? '1.2rem' : '1.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s',
  });

  return (
    <section
      id="certificaciones"
      style={{
        minHeight: isMobile ? 'auto' : '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '3rem 1rem' : size === 'tablet' ? '4rem 1.5rem' : '6rem 2rem',
        position: 'relative',
        zIndex: 500,
      }}
    >
      <FadeIn direction="up" duration={0.6}>
        <h2 className="section-title" style={{ position: 'relative', zIndex: 500 }}>
          {t.title}
        </h2>
      </FadeIn>

      <FadeIn direction="up" delay={0.15} duration={0.7}>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1.5rem', width: '100%', maxWidth: isMobile ? '95vw' : size === 'tablet' ? '760px' : '900px' }}>
          <button onClick={prev} disabled={!canPrev} style={btnStyle(canPrev)} aria-label="Certificado anterior"><FaChevronLeft /></button>

          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${visible.length}, 1fr)`, gap: isMobile ? '0.75rem' : '1.5rem', flex: 1 }}>
            {visible.map((cert, i) => (
              <div
                key={index + i}
                style={{
                  background: 'rgba(10, 30, 10, 0.72)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
                <img src={cert.image} alt={cert.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'contain', background: '#0a0a0a', display: 'block' }} />
                <div style={{ padding: isMobile ? '0.75rem 1rem' : '1rem 1.5rem 1.25rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.3rem' }}>
                    {cert.title}
                  </h3>
                  <p style={{ fontSize: isMobile ? '0.8rem' : '0.88rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.2rem' }}>
                    {cert.issuer}
                  </p>
                  <p style={{ fontSize: isMobile ? '0.75rem' : '0.82rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                    {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button onClick={next} disabled={!canNext} style={btnStyle(canNext)} aria-label="Certificado siguiente"><FaChevronRight /></button>
        </div>

      </FadeIn>

      {certifications.length > VISIBLE && (
        <div style={{ display: 'flex', gap: '6px', marginTop: '1.25rem' }}>
          {Array.from({ length: certifications.length - VISIBLE + 1 }).map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: i === index ? '#fff' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer', transition: 'background 0.2s',
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Certifications;
