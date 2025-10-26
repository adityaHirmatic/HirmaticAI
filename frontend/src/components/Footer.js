import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      data-testid="main-footer"
      style={{
        background: '#0A0A0A',
        color: '#FFFFFF',
        padding: '60px 0 30px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* About Column */}
          <div>
            <h3
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '20px',
                marginBottom: '16px',
                color: '#FFFFFF',
              }}
            >
              About Hirmatic
            </h3>
            <p style={{ color: '#999', fontSize: '14px', lineHeight: '1.6' }}>
              Precision hiring for companies building the future. We specialize in AI/ML, robotics,
              cybersecurity, manufacturing, and IoT talent acquisition.
            </p>
            <div style={{ marginTop: '20px' }}>
              <a
                href="https://www.linkedin.com/company/hirmatic"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-linkedin"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#E63946',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                <Linkedin size={18} />
                Follow us on LinkedIn
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '20px',
                marginBottom: '16px',
                color: '#FFFFFF',
              }}
            >
              Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { to: '/services/recruiting', label: 'Recruiting & Hiring' },
                { to: '/services/fractional-chro', label: 'Fractional CHRO' },
                { to: '/services/resume-building', label: 'Resume Building' },
                { to: '/services/layoff-support', label: 'Layoff Support' },
              ].map((link) => (
                <li key={link.to} style={{ marginBottom: '12px' }}>
                  <Link
                    to={link.to}
                    data-testid={`footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{
                      color: '#999',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#E63946')}
                    onMouseLeave={(e) => (e.target.style.color = '#999')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '20px',
                marginBottom: '16px',
                color: '#FFFFFF',
              }}
            >
              Resources
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { to: '/blog', label: 'Talent Intelligence Hub' },
                { to: '/tools/salary-calculator', label: 'Salary Calculator' },
                { to: '/upload-resume', label: 'Free Resume Review' },
                { to: '/careers', label: 'Careers at Hirmatic' },
              ].map((link) => (
                <li key={link.to} style={{ marginBottom: '12px' }}>
                  <Link
                    to={link.to}
                    data-testid={`footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{
                      color: '#999',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#E63946')}
                    onMouseLeave={(e) => (e.target.style.color = '#999')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '20px',
                marginBottom: '16px',
                color: '#FFFFFF',
              }}
            >
              Contact
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <a
                  href="mailto:contact@hirmatic.com"
                  data-testid="footer-contact-email"
                  style={{
                    color: '#999',
                    textDecoration: 'none',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Mail size={16} />
                  contact@hirmatic.com
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a
                  href="mailto:sales@hirmatic.com"
                  data-testid="footer-sales-email"
                  style={{
                    color: '#999',
                    textDecoration: 'none',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Mail size={16} />
                  sales@hirmatic.com
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link
                  to="/contact"
                  data-testid="footer-contact-form"
                  style={{
                    color: '#E63946',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  Contact Form →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid #333',
            paddingTop: '30px',
            textAlign: 'center',
          }}
        >
          <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
            © 2025 Hirmatic (A KSA INC Company). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;