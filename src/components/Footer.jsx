import { useState } from 'react';
import { useLanguage, translations } from '@/context/LanguageContext';
import FadeIn from '@/components/FadeIn';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;

    const getSize = () => {
        const w = window.innerWidth;
        if (w < 768) return 'mobile';
        if (w < 1025) return 'tablet';
        return 'desktop';
    };
    const [size] = useState(getSize);
    const isMobile = size === 'mobile';

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
                backdropFilter: 'blur(10px)',
                padding: isMobile ? '2.5rem 1.5rem' : '3.5rem 2rem',
                position: 'relative',
                zIndex: 500,
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <FadeIn direction="up" duration={0.6}>
                    {/* Stats Section */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: isMobile ? '1.5rem' : '2.5rem',
                            flexWrap: 'wrap',
                            marginBottom: '2.5rem',
                            padding: '0 1rem',
                            textAlign: 'center',
                        }}
                    >
                        {t.stats.map((stat, idx) => (
                            <div key={idx}>
                                <div style={{ fontSize: '1.75rem', fontWeight: '700', color: '#86efac', marginBottom: '0.25rem' }}>
                                    {stat.value}
                                </div>
                                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.3' }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* Divider */}
                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', margin: '2rem 0' }} />

                {/* Tech Stack Section */}
                <FadeIn direction="up" duration={0.6} delay={0.1}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', color: '#86efac', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                            {t.techStackLabel}
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: isMobile ? '0.75rem' : '1rem',
                                flexWrap: 'wrap',
                                fontSize: isMobile ? '0.85rem' : '0.95rem',
                                color: 'rgba(255,255,255,0.8)',
                            }}
                        >
                            {t.techStack.map((tech, idx) => (
                                <span key={idx}>
                                    {tech}
                                    {idx < t.techStack.length - 1 && (
                                        <span style={{ margin: '0 0.5rem', color: 'rgba(255,255,255,0.3)' }}>•</span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* Divider */}
                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', margin: '2rem 0' }} />

                {/* Copyright & Back to Top */}
                <FadeIn direction="up" duration={0.6} delay={0.15}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '1.5rem',
                            fontSize: '0.875rem',
                            color: 'rgba(255,255,255,0.5)',
                        }}
                    >
                        <p style={{ margin: 0 }}>
                            © {new Date().getFullYear()} {t.copyrightName}. {t.copyrightText}
                        </p>
                        <button
                            onClick={scrollToTop}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1.25rem',
                                borderRadius: '9999px',
                                background: 'rgba(134, 239, 172, 0.15)',
                                border: '1px solid #86efac',
                                color: '#86efac',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#86efac';
                                e.currentTarget.style.color = '#000000';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(134, 239, 172, 0.15)';
                                e.currentTarget.style.color = '#86efac';
                            }}
                        >
                            {t.backToTop}
                            <FaArrowUp style={{ fontSize: '0.85rem' }} />
                        </button>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
};

export default Footer;
