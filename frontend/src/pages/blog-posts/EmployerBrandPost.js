import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft } from 'lucide-react';

const EmployerBrandPost = () => {
  return (
    <div>
      <Header />
      <div className="container" style={{ maxWidth: '800px', padding: '60px 20px' }}>
        <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#E63946', textDecoration: 'none', marginBottom: '32px', fontWeight: 600 }}>
          <ArrowLeft size={20} /> Back to Blog
        </Link>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-block', background: '#E63946', color: '#FFFFFF', padding: '6px 16px', borderRadius: '4px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            B2B | January 2025
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px', lineHeight: '1.2' }}>
            Building Employer Brands That Rank in AI Search (AEO)
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#666', fontSize: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} /> 6 min read
            </div>
          </div>
        </div>
        <article style={{ fontSize: '18px', lineHeight: '1.8', color: '#1A1A1A' }}>
          <p style={{ marginBottom: '24px' }}>
            SEO is dead. Long live AEO. As AI-powered search engines like ChatGPT, Perplexity, and Gemini become the primary way people find information, employer branding strategies need to evolve. Welcome to Answer Engine Optimization.
          </p>
          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>What is AEO?</h2>
          <p style={{ marginBottom: '24px' }}>
            Answer Engine Optimization is the practice of optimizing your content to be the source that AI systems cite when answering questions about your industry, company, or opportunities. Instead of ranking #1 on Google, you want to be the answer ChatGPT gives when someone asks "What are the best AI companies to work for?"
          </p>
          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>Why This Matters for Recruiting</h2>
          <p style={{ marginBottom: '24px' }}>
            Top engineering candidates are increasingly using AI assistants for career research. They ask questions like "Which robotics companies have the best culture?" or "What's it like to work at [your company]?" If AI doesn't know about you, you don't exist to these candidates.
          </p>
          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>Building an AEO-Friendly Employer Brand</h2>
          <ul style={{ marginBottom: '24px', paddingLeft: '32px' }}>
            <li style={{ marginBottom: '12px' }}><strong>Create comprehensive content</strong>: Detailed pages about your culture, tech stack, and growth opportunities</li>
            <li style={{ marginBottom: '12px' }}><strong>Publish structured data</strong>: Use schema markup for job postings, team bios, and company information</li>
            <li style={{ marginBottom: '12px' }}><strong>Build authority</strong>: Guest posts, podcasts, and thought leadership that establish expertise</li>
            <li style={{ marginBottom: '12px' }}><strong>Encourage employee voices</strong>: Authentic stories from your team that AI can reference</li>
          </ul>
          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>The Competitive Edge</h2>
          <p style={{ marginBottom: '24px' }}>
            Most companies are still optimizing for Google while their target candidates have moved on to AI search. This creates a massive opportunity for early adopters to dominate mindshare with top talent. The time to start is now.
          </p>
          <div style={{ marginTop: '64px', padding: '32px', background: '#F5F5F5', borderRadius: '12px', borderLeft: '4px solid #E63946' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Build Your Employer Brand</h3>
            <p style={{ marginBottom: '24px', fontSize: '16px' }}>
              Need help creating an employer brand that attracts top AI/ML talent? Let's talk strategy.
            </p>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default EmployerBrandPost;