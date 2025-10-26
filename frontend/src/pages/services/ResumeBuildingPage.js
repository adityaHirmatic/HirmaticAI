import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const ResumeBuildingPage = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '$150-200',
      level: 'Entry-Level',
      features: ['ATS optimization', '1 revision', 'LinkedIn profile tips', '3-5 day turnaround'],
    },
    {
      name: 'Professional',
      price: '$350-500',
      level: 'Mid-Career',
      features: ['ATS optimization', '2 revisions', 'Cover letter template', 'LinkedIn makeover', 'Interview prep guide', '2-3 day turnaround'],
      featured: true,
    },
    {
      name: 'Executive',
      price: '$700-1,200',
      level: 'C-Suite/Leadership',
      features: ['Executive formatting', '3 revisions', 'Custom cover letters', 'LinkedIn optimization', 'Personal branding strategy', 'Priority 24hr turnaround'],
    },
  ];

  return (
    <div>
      <Header />
      <section className="hero" style={{ padding: '120px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '24px' }}>
            Resume Building Services
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#A8DADC', maxWidth: '700px', margin: '0 auto' }}>
            ATS-optimized resumes that get you interviews, not rejections.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', textAlign: 'center', marginBottom: '48px' }}>
            Choose Your Package
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {tiers.map((tier, i) => (
              <div key={i} className="card" style={{ border: tier.featured ? '3px solid #E63946' : 'none', position: 'relative' }}>
                {tier.featured && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#E63946', color: '#FFFFFF', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{tier.name}</h3>
                <p style={{ color: '#666', marginBottom: '16px' }}>{tier.level}</p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '38px', fontWeight: 700, color: '#E63946' }}>{tier.price}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                  {tier.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '15px' }}>
                      <Check size={20} style={{ color: '#E63946', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn" style={{ width: '100%', background: tier.featured ? '#E63946' : 'transparent', color: tier.featured ? '#FFFFFF' : '#E63946', border: tier.featured ? 'none' : '2px solid #E63946' }}>
                  Order Now
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

export default ResumeBuildingPage;