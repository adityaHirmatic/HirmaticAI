import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const FractionalCHROPage = () => {
  const packages = [
    {
      name: 'Strategic',
      hours: '4 hrs/week',
      price: '$2,500/month',
      features: ['Monthly strategy sessions', 'Policy development', 'Compliance guidance', 'Email support'],
    },
    {
      name: 'Hands-On',
      hours: '8 hrs/week',
      price: '$4,500/month',
      features: ['Bi-weekly check-ins', 'Active hiring support', 'Culture initiatives', 'Slack support', 'Recruitment oversight'],
      featured: true,
    },
    {
      name: 'Full CHRO',
      hours: '12+ hrs/week',
      price: 'Custom',
      features: ['Weekly leadership meetings', 'Full HR operations', 'Strategic planning', 'Team building', 'Executive coaching'],
    },
  ];

  return (
    <div>
      <Header />
      <section className="hero" style={{ padding: '120px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '24px' }}>
            Fractional CHRO Services
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#A8DADC', maxWidth: '700px', margin: '0 auto' }}>
            Strategic HR leadership without the full-time commitment.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', textAlign: 'center', marginBottom: '48px' }}>
            Engagement Models
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {packages.map((pkg, i) => (
              <div key={i} className="card" style={{ border: pkg.featured ? '3px solid #E63946' : 'none' }}>
                {pkg.featured && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#E63946', color: '#FFFFFF', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>
                    FEATURED
                  </div>
                )}
                <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{pkg.name}</h3>
                <p style={{ color: '#666', marginBottom: '16px' }}>{pkg.hours}</p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '38px', fontWeight: 700, color: '#E63946' }}>{pkg.price}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                  {pkg.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '15px' }}>
                      <Check size={20} style={{ color: '#E63946', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn" style={{ width: '100%', background: pkg.featured ? '#E63946' : 'transparent', color: pkg.featured ? '#FFFFFF' : '#E63946', border: pkg.featured ? 'none' : '2px solid #E63946' }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FractionalCHROPage;