import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Zap, Users, TrendingUp } from 'lucide-react';

const RecruitingPage = () => {
  const domains = [
    { icon: <Target size={32} />, title: 'AI/ML Engineering', desc: 'Deep learning, NLP, computer vision' },
    { icon: <Zap size={32} />, title: 'Robotics', desc: 'Autonomous systems, ROS, embedded' },
    { icon: <Users size={32} />, title: 'Cybersecurity', desc: 'AppSec, infrastructure security, compliance' },
    { icon: <TrendingUp size={32} />, title: 'Manufacturing Tech', desc: 'IoT, automation, Industry 4.0' },
  ];

  return (
    <div>
      <Header />
      <section className="hero" style={{ padding: '120px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '24px' }}>
            Recruiting & Hiring Excellence
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#A8DADC', maxWidth: '700px', margin: '0 auto' }}>
            Build exceptional engineering teams across cutting-edge technology domains.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', textAlign: 'center', marginBottom: '48px' }}>
            Our Domain Expertise
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            {domains.map((domain, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ color: '#E63946', marginBottom: '16px' }}>{domain.icon}</div>
                <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>{domain.title}</h3>
                <p style={{ color: '#666', fontSize: '15px' }}>{domain.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/employers" className="btn btn-primary" style={{ fontSize: '18px' }}>
              Explore Pricing & Services
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RecruitingPage;