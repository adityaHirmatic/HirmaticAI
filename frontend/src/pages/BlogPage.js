import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Clock } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Future of AI Recruiting: Why Precision Beats Volume',
      excerpt:
        'How AI-powered hiring is shifting from resume screening to strategic talent acquisition. Learn why quality always trumps quantity.',
      link: '/blog/ai-recruiting-precision',
      category: 'B2B',
      readTime: '5 min',
      date: 'January 2025',
    },
    {
      title: 'How HR Tech is Powering the AI Workforce Revolution',
      excerpt:
        'Exploring the intersection of HR technology and AI talent acquisition. The tools and strategies that are transforming how companies build engineering teams.',
      link: '/blog/hr-tech-ai-workforce',
      category: 'B2B',
      readTime: '6 min',
      date: 'January 2025',
    },
    {
      title: 'Why Hybrid Hiring Systems Will Replace Traditional ATS',
      excerpt:
        'The applicant tracking system is evolving. Discover how hybrid systems combining AI and human expertise are the future of recruitment.',
      link: '/blog/hybrid-hiring-systems',
      category: 'B2B',
      readTime: '6 min',
      date: 'January 2025',
    },
    {
      title: 'Building Employer Brands That Rank in AI Search (AEO)',
      excerpt:
        'Answer Engine Optimization is the new SEO. Learn how to optimize your employer brand for AI-powered search engines like ChatGPT and Perplexity.',
      link: '/blog/employer-brand-aeo',
      category: 'B2B',
      readTime: '6 min',
      date: 'January 2025',
    },
    {
      title: 'How to Write an ATS-Proof Resume for AI/ML Jobs in 2025',
      excerpt:
        'Master the art of getting past applicant tracking systems and into human hands. A comprehensive guide for AI/ML engineers.',
      link: '/blog/ats-proof-resume-ai',
      category: 'B2C',
      readTime: '5 min',
      date: 'January 2025',
    },
    {
      title: 'Laid Off from Tech? Your 30-Day Career Comeback Plan',
      excerpt:
        'A step-by-step guide to bouncing back from a layoff. From mindset shifts to tactical job search strategies that work.',
      link: '/blog/layoff-comeback-plan',
      category: 'B2C',
      readTime: '7 min',
      date: 'January 2025',
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="hero" data-testid="blog-hero" style={{ padding: '120px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1
            data-testid="blog-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              marginBottom: '24px',
            }}
          >
            Talent Intelligence Hub
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: '#A8DADC',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Insights on hiring, recruitment, and the future of work.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
            }}
          >
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                to={post.link}
                data-testid={`blog-post-${index}`}
                className="card"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    background: post.category === 'B2B' ? '#E63946' : '#A8DADC',
                    color: post.category === 'B2B' ? '#FFFFFF' : '#0A0A0A',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 600,
                    marginBottom: '16px',
                    alignSelf: 'flex-start',
                  }}
                >
                  {post.category}
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '16px', lineHeight: '1.3' }}>{post.title}</h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                  {post.excerpt}
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '16px',
                    borderTop: '1px solid #E0E0E0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#666' }}>
                    <Clock size={16} />
                    {post.readTime}
                  </div>
                  <div style={{ color: '#E63946', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Read More <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
          color: '#FFFFFF',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', marginBottom: '24px' }}>Stay Updated</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#A8DADC', marginBottom: '32px' }}>
            Get the latest insights on hiring trends, career development, and HR tech delivered to your
            inbox.
          </p>
          <Link to="/contact" data-testid="newsletter-cta" className="btn btn-primary" style={{ fontSize: '18px' }}>
            Subscribe to Updates
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;