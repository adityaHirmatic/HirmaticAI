import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Briefcase, Calculator, Heart } from 'lucide-react';

const CandidatesPage = () => {
  const resources = [
    {
      icon: <FileText size={40} />,
      title: 'Resume Building',
      desc: 'ATS-optimized resumes that get you past the bots and into human hands.',
      link: '/services/resume-building',
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Interview Prep',
      desc: 'Upload your resume for a free review and personalized feedback within 24 hours.',
      link: '/upload-resume',
    },
    {
      icon: <Calculator size={40} />,
      title: 'Salary Guide',
      desc: 'Know your worth. Get real-time salary data for your role, experience, and location.',
      link: '/tools/salary-calculator',
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="hero" data-testid="candidates-hero" style={{ padding: '120px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1
            data-testid="candidates-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              marginBottom: '24px',
              lineHeight: '1.2',
            }}
          >
            Build Your Dream Role
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: '#A8DADC',
              maxWidth: '700px',
              margin: '0 auto 40px',
            }}
          >
            Optimize your resume, master interviews, negotiate like a pro.
          </p>
        </div>
      </section>

      {/* Career Resources */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            Career Resources
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
            }}
          >
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.link}
                data-testid={`resource-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ color: '#b31b1b', marginBottom: '20px' }}>{resource.icon}</div>
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{resource.title}</h3>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>{resource.desc}</p>
                <div style={{ color: '#b31b1b', fontWeight: 600, marginTop: '20px' }}>
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Laid Off Section */}
      <section
        className="section"
        data-testid="layoff-support-section"
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
          color: '#FFFFFF',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <Heart size={60} style={{ color: '#b31b1b', marginBottom: '24px' }} />
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', marginBottom: '24px' }}>
            Been Laid Off?
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#A8DADC', marginBottom: '32px' }}>
            We've been there. Get a free 30-minute career strategy call. No strings attached. Let's
            figure out your next move together.
          </p>
          <Link
            to="/services/layoff-support"
            data-testid="layoff-support-cta"
            className="btn btn-primary"
            style={{ fontSize: '18px', padding: '16px 40px' }}
          >
            Get Support
          </Link>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="section" style={{ background: '#F5F5F5' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            Success Stories
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
            }}
          >
            {[
              {
                quote: 'Hirmatic helped me land my dream ML role in 3 weeks. The resume review was game-changing.',
                author: 'Sarah K., ML Engineer',
              },
              {
                quote: 'After my layoff, their career coaching gave me clarity and confidence. Back on my feet now!',
                author: 'Michael R., Senior Developer',
              },
              {
                quote: 'The salary calculator helped me negotiate $25K more than the initial offer. Worth every penny!',
                author: 'Jennifer L., Data Scientist',
              },
            ].map((testimonial, index) => (
              <div key={index} data-testid={`testimonial-${index}`} className="card">
                <p
                  style={{
                    fontSize: '16px',
                    fontStyle: 'italic',
                    color: '#666',
                    marginBottom: '16px',
                    lineHeight: '1.6',
                  }}
                >
                  "{testimonial.quote}"
                </p>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#b31b1b' }}>
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CandidatesPage;