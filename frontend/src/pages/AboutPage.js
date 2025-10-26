import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Trophy, Target, Heart, TrendingUp } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AboutPage = () => {
  const [stats, setStats] = useState(null);

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

  const reasons = [
    {
      icon: <TrendingUp size={40} />,
      title: 'Speed Without Compromise',
      desc: '6-14 day placements with 94% offer acceptance. We move fast without sacrificing quality or culture fit.',
    },
    {
      icon: <Target size={40} />,
      title: 'Multi-Domain Expertise',
      desc: 'Deep knowledge across AI/ML, robotics, cybersecurity, manufacturing, and IoT. We speak your technical language.',
    },
    {
      icon: <Heart size={40} />,
      title: 'Culture Fit Obsession',
      desc: 'We don\'t just match resumes to job descriptions. We find people who will thrive in your unique environment.',
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="hero" data-testid="about-hero" style={{ padding: '120px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1
            data-testid="about-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              marginBottom: '24px',
              lineHeight: '1.2',
            }}
          >
            You Don't Need Our Story.
            <br />
            <span style={{ color: '#b31b1b' }}>You Need Our Results.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: '#A8DADC',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            We're not here to tell you about our journey. We're here to accelerate yours.
          </p>
        </div>
      </section>

      {/* By The Numbers */}
      {stats && (
        <section className="section" data-testid="stats-section" style={{ background: '#FFFFFF' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '48px' }}>
              By The Numbers
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '40px',
              }}
            >
              <div data-testid="stat-total-placements" className="card">
                <div style={{ fontSize: '52px', fontWeight: 700, color: '#b31b1b', marginBottom: '12px' }}>
                  {stats.total_placements}+
                </div>
                <div style={{ fontSize: '18px', color: '#666', fontWeight: 600 }}>Engineers Placed</div>
              </div>
              <div data-testid="stat-avg-time" className="card">
                <div style={{ fontSize: '52px', fontWeight: 700, color: '#b31b1b', marginBottom: '12px' }}>
                  {stats.avg_time_to_offer}
                </div>
                <div style={{ fontSize: '18px', color: '#666', fontWeight: 600 }}>Days Avg Time-to-Offer</div>
              </div>
              <div data-testid="stat-client-retention" className="card">
                <div style={{ fontSize: '52px', fontWeight: 700, color: '#b31b1b', marginBottom: '12px' }}>
                  {stats.client_retention}%
                </div>
                <div style={{ fontSize: '18px', color: '#666', fontWeight: 600 }}>Client Retention</div>
              </div>
              <div data-testid="stat-domains" className="card">
                <div style={{ fontSize: '52px', fontWeight: 700, color: '#b31b1b', marginBottom: '12px' }}>5</div>
                <div style={{ fontSize: '18px', color: '#666', fontWeight: 600 }}>Industry Domains</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="section" style={{ background: '#F5F5F5' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            Why Companies Choose Hirmatic
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
            }}
          >
            {reasons.map((reason, index) => (
              <div key={index} data-testid={`reason-${index}`} className="card">
                <div style={{ color: '#b31b1b', marginBottom: '20px' }}>{reason.icon}</div>
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{reason.title}</h3>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
          color: '#FFFFFF',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <Trophy size={60} style={{ color: '#b31b1b', marginBottom: '24px' }} />
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', marginBottom: '24px' }}>
            Our Mission
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#A8DADC' }}>
            To be the most trusted hiring partner for companies building breakthrough technology. We
            believe great teams are built through precision, speed, and genuine human connection—not
            algorithms and automation alone.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;