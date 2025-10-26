import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft } from 'lucide-react';

const ATSResumePost = () => {
  return (
    <div>
      <Header />
      <div className="container" style={{ maxWidth: '800px', padding: '60px 20px' }}>
        <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#E63946', textDecoration: 'none', marginBottom: '32px', fontWeight: 600 }}>
          <ArrowLeft size={20} /> Back to Blog
        </Link>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-block', background: '#A8DADC', color: '#0A0A0A', padding: '6px 16px', borderRadius: '4px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            B2C • January 2025
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px', lineHeight: '1.2' }}>
            How to Write an ATS-Proof Resume for AI/ML Jobs in 2025
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#666', fontSize: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} /> 5 min read
            </div>
          </div>
        </div>
        <article style={{ fontSize: '18px', lineHeight: '1.8', color: '#1A1A1A' }}>
          <p style={{ marginBottom: '24px' }}>
            Your resume has 6 seconds to make an impression. But before it reaches human eyes, it needs to survive the ATS (Applicant Tracking System). Here's how to write a resume that passes both filters.
          </p>
          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>The ATS Reality</h2>
          <p style={{ marginBottom: '24px' }}>
            75% of resumes never reach a human recruiter. They're filtered out by ATS software that scans for keywords, formatting, and structure. For AI/ML roles, this screening is even more aggressive because demand is so high.
          </p>
          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>Essential Elements</h2>
          <ul style={{ marginBottom: '24px', paddingLeft: '32px' }}>
            <li style={{ marginBottom: '12px' }}><strong>Simple formatting</strong>: No tables, columns, or graphics. Stick to standard fonts (Arial, Calibri, Times New Roman)</li>
            <li style={{ marginBottom: '12px' }}><strong>Keyword optimization</strong>: Mirror the job description's technical terms (PyTorch vs TensorFlow matters)</li>
            <li style={{ marginBottom: '12px' }}><strong>Clear section headers</strong>: Use standard labels like "Work Experience" not creative alternatives</li>
            <li style={{ marginBottom: '12px' }}><strong>Quantified achievements</strong>: "Improved model accuracy by 15%" beats "Built ML models"</li>
            <li style={{ marginBottom: '12px' }}><strong>Technical skills section</strong>: List every relevant language, framework, and tool explicitly</li>
          </ul>
          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>AI/ML Specific Tips</h2>
          <p style={{ marginBottom: '24px' }}>
            For ML roles, include your GitHub/portfolio prominently, specify model types you've worked with (transformers, CNNs, GANs), mention datasets and benchmarks, and highlight production deployments vs research projects. Context matters: companies want to know if you can ship, not just experiment.
          </p>
          <h2 style={{ fontSize: '32px', marginTop: '48px', marginBottom: '24px' }}>Testing Your Resume</h2>
          <p style={{ marginBottom: '24px' }}>
            Before sending your resume anywhere, test it through free ATS checkers online. Or better yet, get expert feedback. We review resumes daily and know exactly what top AI companies are looking for.
          </p>
          <div style={{ marginTop: '64px', padding: '32px', background: '#F5F5F5', borderRadius: '12px', borderLeft: '4px solid #E63946' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Get Your Free Resume Review</h3>
            <p style={{ marginBottom: '24px', fontSize: '16px' }}>
              Upload your resume and get expert feedback within 24 hours. No strings attached.
            </p>
            <Link to="/upload-resume" className="btn btn-primary">Upload Resume</Link>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default ATSResumePost;