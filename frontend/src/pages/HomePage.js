import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Zap, Target, Handshake, Heart, ArrowRight, Rocket, Briefcase, FileText, Users } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const HomePage = () => {
  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [stats, setStats] = useState(null);
  const industries = ['AI/ML', 'Robotics', 'Cybersecurity', 'Manufacturing', 'IoT'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${API}/stats`);
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchStats();
  }, []);

  const valueProps = [
    { icon: <Zap size={32} />, title: 'Speed', desc: 'Placement in 6-14 days, not 60+' },
    { icon: <Target size={32} />, title: 'Precision', desc: 'Structured evaluation reduces bias' },
    { icon: <Handshake size={32} />, title: 'Strategic', desc: "We're your hiring strategist, not a vendor" },
    { icon: <Heart size={32} />, title: 'Empathy', desc: 'Resume building + layoff support' },
  ];

  const services = [
    { icon: <Rocket size={32} />, title: 'Recruiting & Hiring', link: '/employers' },
    { icon: <Briefcase size={32} />, title: 'Fractional CHRO', link: '/services/fractional-chro' },
    { icon: <FileText size={32} />, title: 'Resume Building', link: '/services/resume-building' },
    { icon: <Users size={32} />, title: 'Layoff Support', link: '/services/layoff-support' },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="hero" data-testid="hero-section" style={{ minHeight: '700px', padding: '100px 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1
              data-testid="hero-title"
              style={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                marginBottom: '24px',
                lineHeight: '1.2',
              }}
            >
              Precision Hiring for{' '}
              <span
                data-testid="rotating-industry"
                style={{
                  color: '#b31b1b',
                  display: 'inline-block',
                  minWidth: '200px',
                  transition: 'opacity 0.5s',
                }}
              >
                {industries[currentIndustry]}
              </span>
              <br />
              Companies Building the Future
            </h1>
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                color: '#A8DADC',
                marginBottom: '40px',
                lineHeight: '1.6',
              }}
            >
              We hire engineering teams in weeks, not months. Strategic partnerships. Zero compromise
              on culture fit.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/employers"
                data-testid="cta-start-hiring"
                className="btn btn-primary"
                style={{ fontSize: '18px', padding: '16px 40px' }}
              >
                Start Your Hiring Sprint <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </Link>
              <Link
                to="/about"
                data-testid="cta-see-results"
                className="btn btn-secondary"
                style={{ fontSize: '18px', padding: '16px 40px' }}
              >
                See Our Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '32px',
            }}
          >
            {valueProps.map((prop, index) => (
              <div
                key={index}
                data-testid={`value-prop-${prop.title.toLowerCase()}`}
                className="card"
                style={{ textAlign: 'center' }}
              >
                <div style={{ color: '#b31b1b', marginBottom: '16px' }}>{prop.icon}</div>
                <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>{prop.title}</h3>
                <p style={{ color: '#666', fontSize: '15px' }}>{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Performance Counter */}
      {stats && (
        <section className="section" data-testid="stats-section" style={{ background: '#F5F5F5' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '48px' }}>
              By The Numbers
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '40px',
              }}
            >
              <div data-testid="stat-engineers-placed">
                <div style={{ fontSize: '48px', fontWeight: 700, color: '#b31b1b', marginBottom: '8px' }}>
                  {stats.engineers_placed}+
                </div>
                <div style={{ fontSize: '16px', color: '#666' }}>Engineers Placed (Q4 2025)</div>
              </div>
              <div data-testid="stat-time-to-offer">
                <div style={{ fontSize: '48px', fontWeight: 700, color: '#b31b1b', marginBottom: '8px' }}>
                  {stats.avg_time_to_offer} Days
                </div>
                <div style={{ fontSize: '16px', color: '#666' }}>Average Time-to-Offer</div>
              </div>
              <div data-testid="stat-acceptance-rate">
                <div style={{ fontSize: '48px', fontWeight: 700, color: '#b31b1b', marginBottom: '8px' }}>
                  {stats.offer_acceptance_rate}%
                </div>
                <div style={{ fontSize: '16px', color: '#666' }}>Offer Acceptance Rate</div>
              </div>
              <div data-testid="stat-retention">
                <div style={{ fontSize: '48px', fontWeight: 700, color: '#b31b1b', marginBottom: '8px' }}>
                  {stats.client_retention}%
                </div>
                <div style={{ fontSize: '16px', color: '#666' }}>Client Retention</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Overview */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            Our Services
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '32px',
            }}
          >
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                data-testid={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ color: '#b31b1b', marginBottom: '16px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>{service.title}</h3>
                <div style={{ color: '#b31b1b', fontWeight: 600, marginTop: '16px' }}>
                  Learn More <ArrowRight size={16} style={{ display: 'inline', marginLeft: '4px' }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section
        className="section"
        data-testid="dual-cta-section"
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
          color: '#FFFFFF',
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <h3 style={{ fontSize: '28px', marginBottom: '16px' }}>For Employers</h3>
              <p style={{ color: '#A8DADC', marginBottom: '24px', fontSize: '16px' }}>
                Ready to build your engineering team?
              </p>
              <Link to="/employers" data-testid="cta-employers" className="btn btn-primary">
                Explore Hiring Services
              </Link>
            </div>
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <h3 style={{ fontSize: '28px', marginBottom: '16px' }}>For Candidates</h3>
              <p style={{ color: '#A8DADC', marginBottom: '24px', fontSize: '16px' }}>
                Optimize your career path
              </p>
              <Link to="/candidates" data-testid="cta-candidates" className="btn btn-secondary">
                Explore Career Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;