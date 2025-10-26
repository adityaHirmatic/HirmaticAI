import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft } from 'lucide-react';

const HRTechPost = () => {
  return (
    <div>
      <Header />
      <div className="container" style={{ maxWidth: '800px', padding: '60px 20px' }}>
        <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#E63946', textDecoration: 'none', marginBottom: '32px', fontWeight: 600 }}>
          <ArrowLeft size={20} /> Back to Blog
        </Link>
        
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-block', background: '#E63946', color: '#FFFFFF', padding: '6px 16px', borderRadius: '4px', fontSize: '14px', fontWeight: 600', marginBottom: '16px' }}>
            B2B • January 2025
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px', lineHeight: '1.2' }}>
            How HR Tech is Powering the AI Workforce Revolution
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#666', fontSize: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} /> 6 min read
            </div>
          </div>
        </div>

        <article style={{ fontSize: '18px', lineHeight: '1.8', color: '#1A1A1A' }}>
          <p style={{ marginBottom: '24px' }}>
            The AI revolution isn't just transforming products and services—it's fundamentally changing how companies build and manage their workforce. And at the center of this transformation is HR technology.
          </p>

          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>The AI Talent Crunch</h2>
          <p style={{ marginBottom: '24px' }}>
            Every company wants to be an AI company. From Fortune 500 enterprises to scrappy startups, the race is on to build AI capabilities. But there's a problem: there simply aren't enough AI engineers to go around.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Traditional HR approaches—post-and-pray recruiting, lengthy interview processes, rigid compensation structures—don't work in this market. Companies need new tools, new strategies, and new ways of thinking about talent.
          </p>

          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>The HR Tech Stack for AI Teams</h2>
          <p style={{ marginBottom: '24px' }}>
            Building an AI workforce requires a modern HR tech stack that can:
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '32px' }}>
            <li style={{ marginBottom: '12px' }}><strong>Source proactively</strong>: AI tools that identify passive candidates before they're actively looking</li>
            <li style={{ marginBottom: '12px' }}><strong>Screen intelligently</strong>: Technical assessment platforms that go beyond resume keywords</li>
            <li style={{ marginBottom: '12px' }}><strong>Interview efficiently</strong>: Video platforms with AI-powered analysis to spot communication patterns</li>
            <li style={{ marginBottom: '12px' }}><strong>Compensate competitively</strong>: Real-time salary benchmarking tools based on actual offer data</li>
            <li style={{ marginBottom: '12px' }}><strong>Onboard rapidly</strong>: Systems that get new hires productive in days, not weeks</li>
          </ul>

          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>Skills-Based Hiring at Scale</h2>
          <p style={{ marginBottom: '24px' }}>
            One of the biggest shifts in AI recruiting is the move from credential-based to skills-based hiring. Instead of requiring a Stanford PhD, companies are asking: "Can this person actually build what we need?"
          </p>

          <p style={{ marginBottom: '24px' }}>
            Modern HR tech makes skills-based hiring practical at scale through automated coding challenges, portfolio analysis, and take-home projects. This opens up the talent pool dramatically while improving hire quality.
          </p>

          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>The Data Advantage</h2>
          <p style={{ marginBottom: '24px' }}>
            HR tech platforms are sitting on goldmines of data about what works in AI hiring. Smart companies are using this data to continuously optimize their processes, learning from every hire, every interview, every offer accepted or declined.
          </p>

          <p style={{ marginBottom: '24px' }}>
            This creates a flywheel effect: better data leads to better hires, which generates more data, which enables even better hiring decisions. Companies that build this capability early gain a lasting competitive advantage.
          </p>

          <div style={{ marginTop: '64px', padding: '32px', background: '#F5F5F5', borderRadius: '12px', borderLeft: '4px solid #E63946' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Build Your AI Team Faster</h3>
            <p style={{ marginBottom: '24px', fontSize: '16px' }}>
              Our precision recruiting platform is built specifically for AI/ML hiring. See how we can help you compete for top talent.
            </p>
            <Link to="/employers" className="btn btn-primary">
              Explore Our Services
            </Link>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default HRTechPost;
