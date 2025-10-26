import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/employers', label: 'For Employers' },
    { to: '/candidates', label: 'For Candidates' },
    { to: '/blog', label: 'Resources' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      data-testid="main-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: isScrolled ? '#0A0A0A' : '#0A0A0A',
        boxShadow: isScrolled ? '0 2px 12px rgba(0,0,0,0.2)' : 'none',
        transition: 'all 0.3s',
      }}
    >
      <nav className="container" style={{ padding: '16px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link
            to="/"
            data-testid="logo-link"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              color: '#FFFFFF',
              textDecoration: 'none',
              letterSpacing: '1px',
            }}
          >
            HIRMATIC
          </Link>

          {/* Desktop Navigation */}
          <div
            style={{
              display: 'none',
              gap: '32px',
              alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  color: location.pathname === link.to ? '#E63946' : '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#E63946')}
                onMouseLeave={(e) =>
                  (e.target.style.color = location.pathname === link.to ? '#E63946' : '#FFFFFF')
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/company/hirmatic"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="linkedin-button"
              style={{
                background: '#E63946',
                color: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.background = '#d32735')}
              onMouseLeave={(e) => (e.target.style.background = '#E63946')}
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-button"
            style={{
              display: 'block',
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '8px',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            data-testid="mobile-menu"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginTop: '24px',
              paddingTop: '24px',
              borderTop: '1px solid #333',
            }}
            className="mobile-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  color: location.pathname === link.to ? '#E63946' : '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 600,
                  padding: '12px 0',
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/company/hirmatic"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-linkedin-button"
              style={{
                background: '#E63946',
                color: '#FFFFFF',
                padding: '12px 20px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 600,
                marginTop: '8px',
              }}
            >
              <Linkedin size={20} />
              Follow on LinkedIn
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;