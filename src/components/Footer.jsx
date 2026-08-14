import { useState } from 'react';
import { useLanguage, translations } from '@/context/LanguageContext';
import FadeIn from '@/components/FadeIn';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

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

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/FranBonillaa', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://linkedin.com/in/franbonilla', label: 'LinkedIn' },
        { icon: FaEnvelope, href: 'mailto:contacto@franbonilla.dev', label: 'Email' },
    ];

    const navLinks = [
        { key: 'aboutMe', href: '#sobre-mi' },
        { key: 'projects', href: '#proyectos' },
        { key: 'experience', href: '#experiencia' },
        { key: 'contact', href: '#contacto' },
    ];

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
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                            gap: isMobile ? '2rem' : '3rem',
                            marginBottom: '2.5rem',
                        }}
                    >
                        {/* Navigation Links */}
                        <div>
                            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', color: '#86efac', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                                {t.navigation}
                            </h4>
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {navLinks.map((link) => (
                                    <a
                                        key={link.key}
                                        href={link.href}
                                        style={{
                                            color: 'rgba(255,255,255,0.7)',
                                            textDecoration: 'none',
                                            fontSize: '0.95rem',
                                            transition: 'color 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => (e.target.style.color = '#86efac')}
                                        onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.7)')}
                                    >
                                        {t.navItems[link.key]}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', color: '#86efac', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                                {t.social}
                            </h4>
                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={social.label}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '50%',
                                            background: 'rgba(255,255,255,0.08)',
                                            border: '1px solid rgba(255,255,255,0.15)',
                                            color: '#86efac',
                                            fontSize: '1.25rem',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(134, 239, 172, 0.2)';
                                            e.currentTarget.style.borderColor = '#86efac';
                                            e.currentTarget.style.transform = 'translateY(-3px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <social.icon />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Back to Top */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : 'flex-end', justifyContent: 'flex-start' }}>
                            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', color: '#86efac', marginBottom: '1rem', letterSpacing: '0.05em', visibility: 'hidden', height: '1.5rem' }}>
                                {/* Empty header for alignment */}
                            </h4>
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
                    </div>
                </FadeIn>

                {/* Divider */}
                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', margin: '2rem 0' }} />

                {/* Copyright */}
                <FadeIn direction="up" duration={0.6} delay={0.1}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            justifyContent: 'space-between',
                            alignItems: isMobile ? 'flex-start' : 'center',
                            gap: '1rem',
                            fontSize: '0.875rem',
                            color: 'rgba(255,255,255,0.5)',
                        }}
                    >
                        <p style={{ margin: 0 }}>
                            © {new Date().getFullYear()} {t.copyrightName}. {t.copyrightText}
                        </p>
                        <p style={{ margin: 0 }}>
                            {t.designedWith} ❤️ {t.designedBy}
                        </p>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
};

export default Footer;
