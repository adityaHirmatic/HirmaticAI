import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, TrendingUp, Heart } from 'lucide-react';

const CareersPage = () => {
  const values = [
    {
      icon: <Target size={40} />,
      title: 'Strategic Hiring',
      desc: 'We believe in precision over volume. Every placement matters.',
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Growing Team',
      desc: 'Join a fast-growing company at the intersection of HR tech and AI.',
    },
    {
      icon: <Heart size={40} />,
      title: 'Values-Driven',
      desc: 'Empathy, excellence, and integrity guide everything we do.',
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="hero" data-testid="careers-hero" style={{ padding: '120px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1
            data-testid="careers-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              marginBottom: '24px',
            }}
          >
            Help Us Build the Future
            <br />
            <span style={{ color: '#b31b1b' }}>of Hiring</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: '#A8DADC',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Join a team that's revolutionizing how companies find and hire exceptional engineering
            talent.
          </p>
        </div>
      </section>

      {/* Why Hirmatic */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            Why Hirmatic?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
            }}
          >
            {values.map((value, index) => (
              <div key={index} data-testid={`value-${index}`} className="card" style={{ textAlign: 'center' }}>
                <div style={{ color: '#b31b1b', marginBottom: '20px' }}>{value.icon}</div>
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{value.title}</h3>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section" style={{ background: '#F5F5F5' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              marginBottom: '24px',
            }}
          >
            Open Positions
          </h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px', lineHeight: '1.6' }}>
            We're building our team and will be posting open positions soon. In the meantime, we'd love
            to hear from talented individuals who are passionate about transforming the hiring industry.
          </p>

          <div className="card" style={{ textAlign: 'left', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#b31b1b' }}>
              Note: ATS Integration Coming Soon
            </h3>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '16px' }}>
              We'll be integrating PyjamaHR ATS here for seamless application management. Stay tuned!
            </p>
            <div
              style={{
                background: '#F5F5F5',
                padding: '16px',
                borderRadius: '6px',
                border: '2px dashed #E0E0E0',
              }}
            >
              <code style={{ fontSize: '14px', color: '#666' }}>[EMBED PYJAMAHR ATS CODE HERE]</code>
            </div>
          </div>

          <Link to="/contact" data-testid="careers-contact-cta" className="btn btn-primary" style={{ fontSize: '18px' }}>
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Culture */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
          color: '#FFFFFF',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', marginBottom: '24px' }}>Our Culture</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#A8DADC', marginBottom: '32px' }}>
            At Hirmatic, we value authenticity, ownership, and continuous learning. We're building a
            culture where everyone can do their best work and grow alongside the company. Remote-first,
            flexible, and always focused on impact.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;