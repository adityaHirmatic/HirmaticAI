import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const EmployersPage = () => {
  const [quizAnswers, setQuizAnswers] = useState({
    timeline: '',
    domain: '',
    stage: '',
  });
  const [quizResult, setQuizResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuizSubmit = async (e) => {
    e.preventDefault();
    if (!quizAnswers.timeline || !quizAnswers.domain || !quizAnswers.stage) {
      toast.error('Please answer all questions');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API}/quiz/calculate`, quizAnswers);
      setQuizResult(response.data);
      toast.success('Quiz completed!');
    } catch (error) {
      toast.error('Failed to calculate result. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$4,500',
      period: '/month',
      features: [
        '2 placements per month',
        'Email support',
        'Standard sourcing',
        'Basic reporting',
      ],
      cta: 'Get Started',
      featured: false,
    },
    {
      name: 'Growth',
      price: '$7,500',
      period: '/month',
      features: [
        '5 placements per month',
        'Slack support',
        'Custom sourcing strategy',
        'Advanced analytics',
        'Dedicated recruiter',
      ],
      cta: 'Most Popular',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited placements',
        'Priority support 24/7',
        'AI-powered analytics',
        'Dedicated account manager',
        'Custom SLAs',
      ],
      cta: 'Contact Sales',
      featured: false,
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Audit',
      desc: '20-minute discovery call to understand your needs, culture, and technical requirements.',
    },
    {
      step: '2',
      title: 'Strategy',
      desc: '1-week deep research into your market, competitors, and ideal candidate profiles.',
    },
    {
      step: '3',
      title: 'Source',
      desc: '2-3 weeks of active sourcing, screening, and presenting top-tier candidates.',
    },
    {
      step: '4',
      title: 'Close',
      desc: '1-2 weeks of interview coordination, negotiation support, and offer management.',
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="hero" data-testid="employers-hero" style={{ padding: '120px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1
            data-testid="employers-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              marginBottom: '24px',
              lineHeight: '1.2',
            }}
          >
            Precision Hiring for
            <br />
            <span style={{ color: '#E63946' }}>Growth-Stage Tech Companies</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: '#A8DADC',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Build your engineering team in weeks, not months. Strategic hiring that scales with your
            ambition.
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="section" data-testid="quiz-section" style={{ background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 38px)',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Are You Ready to Hire?
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px', fontSize: '16px' }}>
            Take this 30-second quiz to get a personalized recommendation.
          </p>

          <form onSubmit={handleQuizSubmit} data-testid="employer-quiz-form" className="card">
            {/* Timeline */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>
                When do you need to hire?
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Urgent (30 days)', 'Planned (90 days)', 'Strategic (6+ months)'].map((option) => (
                  <label key={option} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="timeline"
                      value={option.split(' ')[0].toLowerCase()}
                      checked={quizAnswers.timeline === option.split(' ')[0].toLowerCase()}
                      onChange={(e) => setQuizAnswers({ ...quizAnswers, timeline: e.target.value })}
                      data-testid={`timeline-${option.split(' ')[0].toLowerCase()}`}
                      style={{ marginRight: '12px', width: '20px', height: '20px' }}
                    />
                    <span style={{ fontSize: '16px' }}>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Domain */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>
                Which domain(s) are you hiring for?
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['AI/ML', 'Robotics', 'Cybersecurity', 'Manufacturing', 'IoT', 'Multiple'].map((option) => (
                  <label key={option} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="domain"
                      value={option}
                      checked={quizAnswers.domain === option}
                      onChange={(e) => setQuizAnswers({ ...quizAnswers, domain: e.target.value })}
                      data-testid={`domain-${option.toLowerCase().replace('/', '-')}`}
                      style={{ marginRight: '12px', width: '20px', height: '20px' }}
                    />
                    <span style={{ fontSize: '16px' }}>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Stage */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>
                What stage is your company?
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Seed', 'Series A', 'Series B+', 'Scale-up'].map((option) => (
                  <label key={option} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="stage"
                      value={option}
                      checked={quizAnswers.stage === option}
                      onChange={(e) => setQuizAnswers({ ...quizAnswers, stage: e.target.value })}
                      data-testid={`stage-${option.toLowerCase().replace(/\+/g, 'plus').replace(/\s+/g, '-')}`}
                      style={{ marginRight: '12px', width: '20px', height: '20px' }}
                    />
                    <span style={{ fontSize: '16px' }}>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              data-testid="quiz-submit-button"
              className="btn btn-primary"
              disabled={loading}
              style={{ width: '100%', fontSize: '18px' }}
            >
              {loading ? 'Calculating...' : 'Get My Recommendation'}
            </button>
          </form>

          {/* Quiz Result */}
          {quizResult && (
            <div
              data-testid="quiz-result"
              className="card"
              style={{
                marginTop: '32px',
                background: quizResult.level === 'HIGH' ? '#E63946' : '#F5F5F5',
                color: quizResult.level === 'HIGH' ? '#FFFFFF' : '#1A1A1A',
              }}
            >
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Your Result</h3>
              <p style={{ fontSize: '18px', marginBottom: '8px' }}>
                <strong>Intent Level:</strong> {quizResult.level}
              </p>
              <p style={{ fontSize: '18px', marginBottom: '24px' }}>
                <strong>Score:</strong> {quizResult.score}/100
              </p>
              <p style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>
                {quizResult.recommendation}
              </p>
              <Link
                to="/contact"
                data-testid="quiz-cta"
                className="btn"
                style={{
                  background: quizResult.level === 'HIGH' ? '#FFFFFF' : '#E63946',
                  color: quizResult.level === 'HIGH' ? '#E63946' : '#FFFFFF',
                }}
              >
                Contact Us Now
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Pricing */}
      <section className="section" style={{ background: '#F5F5F5' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            Pricing That Scales With You
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                data-testid={`pricing-tier-${tier.name.toLowerCase()}`}
                className="card"
                style={{
                  border: tier.featured ? '3px solid #E63946' : 'none',
                  position: 'relative',
                }}
              >
                {tier.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#E63946',
                      color: '#FFFFFF',
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{tier.name}</h3>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '42px', fontWeight: 700, color: '#E63946' }}>{tier.price}</span>
                  <span style={{ fontSize: '16px', color: '#666' }}>{tier.period}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        marginBottom: '12px',
                        fontSize: '15px',
                      }}
                    >
                      <Check size={20} style={{ color: '#E63946', flexShrink: 0, marginTop: '2px' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  data-testid={`pricing-cta-${tier.name.toLowerCase()}`}
                  className="btn"
                  style={{
                    width: '100%',
                    background: tier.featured ? '#E63946' : 'transparent',
                    color: tier.featured ? '#FFFFFF' : '#E63946',
                    border: tier.featured ? 'none' : '2px solid #E63946',
                  }}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            How It Works
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px',
            }}
          >
            {howItWorks.map((item, index) => (
              <div key={index} data-testid={`how-it-works-${item.step}`} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: '#E63946',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    fontWeight: 700,
                    margin: '0 auto 20px',
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmployersPage;