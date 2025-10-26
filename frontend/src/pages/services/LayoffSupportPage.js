import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Heart } from 'lucide-react';

const LayoffSupportPage = () => {
  const packages = [
    {
      name: 'Individual',
      price: '$1,500-3,000',
      duration: '3 months',
      features: ['Resume & LinkedIn optimization', 'Job search strategy', 'Interview coaching (5 sessions)', 'Networking guidance', 'Negotiation support'],
    },
    {
      name: 'Group',
      price: '$800-1,500/person',
      duration: 'Bulk 10+',
      features: ['All individual features', 'Group workshops', 'Peer support network', 'Employer resources', 'Volume discounts'],
      featured: true,
    },
    {
      name: 'Executive',
      price: '$5,000-8,000',
      duration: '6 months',
      features: ['Executive resume & branding', 'Board positioning', 'Executive coaching (12 sessions)', 'C-suite networking', 'Personal brand strategy', 'Unlimited support'],
    },
  ];

  return (
    <div>
      <Header />
      <section className="hero" style={{ padding: '120px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Heart size={60} style={{ color: '#b31b1b', margin: '0 auto 24px' }} />
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '24px' }}>
            Layoff Support & Outplacement
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#A8DADC', maxWidth: '700px', margin: '0 auto' }}>
            Compassionate support to help you land your next great opportunity.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="card" style={{ background: '#FFF5F5', border: '2px solid #b31b1b', marginBottom: '48px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#b31b1b' }}>Free 30-Minute Career Call</h3>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '24px' }}>
              Been laid off? Let's talk. No sales pitch. Just honest guidance on your next move.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Schedule Your Free Call
            </Link>
          </div>

          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', textAlign: 'center', marginBottom: '48px' }}>
            Support Packages
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {packages.map((pkg, i) => (
              <div key={i} className="card" style={{ border: pkg.featured ? '3px solid #b31b1b' : 'none', position: 'relative' }}>
                {pkg.featured && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#b31b1b', color: '#FFFFFF', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{pkg.name}</h3>
                <p style={{ color: '#666', marginBottom: '16px' }}>{pkg.duration}</p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '32px', fontWeight: 700, color: '#b31b1b' }}>{pkg.price}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                  {pkg.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '15px' }}>
                      <Check size={20} style={{ color: '#b31b1b', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn" style={{ width: '100%', background: pkg.featured ? '#b31b1b' : 'transparent', color: pkg.featured ? '#FFFFFF' : '#b31b1b', border: pkg.featured ? 'none' : '2px solid #b31b1b' }}>
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

export default LayoffSupportPage;