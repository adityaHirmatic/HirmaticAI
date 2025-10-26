import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft } from 'lucide-react';

const LayoffComebackPost = () => {
  return (
    <div>
      <Header />
      <div className="container" style={{ maxWidth: '800px', padding: '60px 20px' }}>
        <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#E63946', textDecoration: 'none', marginBottom: '32px', fontWeight: 600 }}>
          <ArrowLeft size={20} /> Back to Blog
        </Link>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-block', background: '#A8DADC', color: '#0A0A0A', padding: '6px 16px', borderRadius: '4px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            B2C | January 2025
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px', lineHeight: '1.2' }}>
            Laid Off from Tech? Your 30-Day Career Comeback Plan
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#666', fontSize: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} /> 7 min read
            </div>
          </div>
        </div>
        <article style={{ fontSize: '18px', lineHeight: '1.8', color: '#1A1A1A' }}>
          <p style={{ marginBottom: '24px' }}>
            Getting laid off sucks. There's no sugar-coating it. But here's the truth: with the right approach, you can turn this setback into a career upgrade. This is your 30-day plan to bounce back stronger.
          </p>
          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>Week 1: Process and Prepare</h2>
          <p style={{ marginBottom: '24px' }}>
            <strong>Days 1-3: Feel Your Feelings</strong><br/>
            Give yourself permission to be angry, sad, or scared. Job loss is a real loss. Take a few days to process before jumping into action mode. Talk to friends, family, or a therapist.
          </p>
          <p style={{ marginBottom: '24px' }}>
            <strong>Days 4-7: Get Organized</strong><br/>
            Update your resume, refresh your LinkedIn, organize your finances, and calculate your runway. File for unemployment. Contact your network to let them know you're looking. This sets the foundation.
          </p>
          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>Week 2: Strategic Positioning</h2>
          <p style={{ marginBottom: '24px' }}>
            Don't just apply everywhere. Get strategic. What do you actually want? More money? Better work-life balance? Cutting-edge tech? Different domain? Use this as an opportunity to level up, not just lateral move.
          </p>
          <p style={{ marginBottom: '24px' }}>
            Update your resume to highlight achievements (not just responsibilities), optimize for ATS systems, create or update your portfolio/GitHub, and draft your "story" about why you're looking.
          </p>
          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>Week 3: Active Outreach</h2>
          <p style={{ marginBottom: '24px' }}>
            This is where most people fail. They apply to 100 jobs online and wonder why nothing happens. Instead: reach out to 10 specific people at 10 specific companies you actually want to work for. Skip HR. Talk to engineering managers, team leads, or engineers who do the work you want to do.
          </p>
          <p style={{ marginBottom: '24px' }}>
            Your message: "I'm exploring opportunities in [domain]. I've been following your work on [specific project]. Would love to learn more about what you're building." No ask. Just curiosity. Conversations lead to interviews.
          </p>
          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>Week 4: Interview Preparation</h2>
          <p style={{ marginBottom: '24px' }}>
            By week 4, you should have interviews scheduled. Practice your story, refresh your technical skills, review system design (for senior roles), prepare questions to ask, and research each company thoroughly. Mock interviews help tremendously.
          </p>
          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>The Mindset Shift</h2>
          <p style={{ marginBottom: '24px' }}>
            Here's the secret: approach this as a professional project, not a desperate scramble. 4-6 hours of focused effort daily beats 12 hours of anxiety-driven application spam. Quality over quantity. Always.
          </p>
          <p style={{ marginBottom: '24px' }}>
            Most people land within 45-90 days. Many find better opportunities than they had before. You will too. This is temporary.
          </p>
          <div style={{ marginTop: '64px', padding: '32px', background: '#F5F5F5', borderRadius: '12px', borderLeft: '4px solid #E63946' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Need Support?</h3>
            <p style={{ marginBottom: '24px', fontSize: '16px' }}>
              We offer free 30-minute career strategy calls for people affected by layoffs. Let's figure out your next move together.
            </p>
            <Link to="/services/layoff-support" className="btn btn-primary">Get Free Support</Link>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default LayoffComebackPost;