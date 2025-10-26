import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft } from 'lucide-react';

const AIRecruitingPost = () => {
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
            The Future of AI Recruiting: Why Precision Beats Volume
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#666', fontSize: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} /> 5 min read
            </div>
          </div>
        </div>

        <article style={{ fontSize: '18px', lineHeight: '1.8', color: '#1A1A1A' }}>
          <p style={{ marginBottom: '24px' }}>
            The recruiting industry is at a crossroads. For decades, the prevailing wisdom was simple: more candidates equal better hires. Companies would blast job postings across dozens of platforms, collect hundreds of resumes, and hope that somewhere in the haystack was their needle—the perfect candidate.
          </p>

          <p style={{ marginBottom: '24px' }}>
            But AI is changing everything. And not in the way most people think.
          </p>

          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>The Volume Trap</h2>
          <p style={{ marginBottom: '24px' }}>
            Traditional recruiting operates on a volume-based model. Post a job, get 500 applications, screen them down to 50, interview 10, hire 1. This approach made sense in the pre-AI era when human time was the bottleneck. The more resumes you could process, the better your odds of finding great talent.
          </p>

          <p style={{ marginBottom: '24px' }}>
            But volume creates its own problems:
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '32px' }}>
            <li style={{ marginBottom: '12px' }}>Qualified candidates get lost in the noise</li>
            <li style={{ marginBottom: '12px' }}>Hiring managers suffer from decision fatigue</li>
            <li style={{ marginBottom: '12px' }}>Time-to-hire stretches from weeks to months</li>
            <li style={{ marginBottom: '12px' }}>Culture fit becomes an afterthought</li>
          </ul>

          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>Enter AI-Powered Precision</h2>
          <p style={{ marginBottom: '24px' }}>
            The real revolution in AI recruiting isn't about screening more resumes faster. It's about precision targeting from the start. Instead of casting a wide net and filtering down, AI enables companies to identify and engage the exact candidates they need.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Think of it like the difference between mass marketing and account-based marketing. Mass marketing reaches millions hoping to convert hundreds. Account-based marketing identifies the 50 perfect customers and crafts personalized campaigns for each.
          </p>

          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>How Precision Recruiting Works</h2>
          <p style={{ marginBottom: '24px' }}>
            Modern AI recruiting tools can:
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '32px' }}>
            <li style={{ marginBottom: '12px' }}><strong>Analyze job requirements at a semantic level</strong> - Understanding not just keywords but the actual skills and experience needed</li>
            <li style={{ marginBottom: '12px' }}><strong>Map the talent landscape</strong> - Identifying where your ideal candidates currently work and what might motivate them to move</li>
            <li style={{ marginBottom: '12px' }}><strong>Predict culture fit</strong> - Analyzing communication patterns, work style preferences, and values alignment</li>
            <li style={{ marginBottom: '12px' }}><strong>Personalize outreach</strong> - Crafting messages that resonate with individual candidates based on their background and interests</li>
          </ul>

          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>Real-World Results</h2>
          <p style={{ marginBottom: '24px' }}>
            We've seen companies transition from volume-based to precision-based recruiting with dramatic results. One AI startup we worked with was receiving 800+ applications per engineering role but struggling to find qualified candidates. After implementing precision recruiting:
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '32px' }}>
            <li style={{ marginBottom: '12px' }}>Application volume dropped to 50 per role (by design)</li>
            <li style={{ marginBottom: '12px' }}>Qualified candidate rate jumped from 6% to 74%</li>
            <li style={{ marginBottom: '12px' }}>Time-to-hire decreased from 87 days to 14 days</li>
            <li style={{ marginBottom: '12px' }}>Offer acceptance rate increased from 61% to 94%</li>
          </ul>

          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>The Human Element</h2>
          <p style={{ marginBottom: '24px' }}>
            Here's what many AI recruiting vendors won't tell you: AI doesn't replace human recruiters. It amplifies them. The best recruiting teams use AI for precision targeting and data analysis, but rely on human judgment for the final, critical decisions.
          </p>

          <p style={{ marginBottom: '24px' }}>
            AI can tell you a candidate has the right skills and experience. Only a human can assess whether they'll thrive in your specific culture, mesh with your existing team dynamics, and share your company's vision for the future.
          </p>

          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>The Competitive Advantage</h2>
          <p style={{ marginBottom: '24px' }}>
            In competitive markets like AI/ML, robotics, and cybersecurity, top talent has options. They're not actively job searching—they're being courted by multiple companies simultaneously. In this environment, speed and personalization are everything.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Companies that embrace precision recruiting can:
          </p>
          <ul style={{ marginBottom: '24px', paddingLeft: '32px' }}>
            <li style={{ marginBottom: '12px' }}>Move faster than competitors (14 days vs 90+ days)</li>
            <li style={{ marginBottom: '12px' }}>Provide better candidate experiences (personalized vs generic)</li>
            <li style={{ marginBottom: '12px' }}>Make smarter offers (data-driven compensation intelligence)</li>
            <li style={{ marginBottom: '12px' }}>Achieve higher acceptance rates (94% vs industry average of 65%)</li>
          </ul>

          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>Looking Ahead</h2>
          <p style={{ marginBottom: '24px' }}>
            The future of recruiting isn't about processing more applications. It's about identifying the right candidates before they even apply, understanding what motivates them, and crafting opportunities they can't refuse.
          </p>

          <p style={{ marginBottom: '24px' }}>
            AI makes this possible at scale. But success still requires the human elements that technology can't replicate: empathy, judgment, and genuine relationship building.
          </p>

          <p style={{ marginBottom: '24px' }}>
            The companies that master this balance—AI-powered precision with human-centered execution—will win the war for talent in the AI age.
          </p>

          <div style={{ marginTop: '64px', padding: '32px', background: '#F5F5F5', borderRadius: '12px', borderLeft: '4px solid #E63946' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Ready to Transform Your Hiring?</h3>
            <p style={{ marginBottom: '24px', fontSize: '16px' }}>
              Learn how precision recruiting can help you build your engineering team faster and more effectively.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Schedule a Consultation
            </Link>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default AIRecruitingPost;