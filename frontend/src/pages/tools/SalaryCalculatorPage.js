import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DollarSign, TrendingUp } from 'lucide-react';

const SalaryCalculatorPage = () => {
  const [formData, setFormData] = useState({
    role: '',
    experience: '',
    location: '',
  });
  const [result, setResult] = useState(null);

  const salaryData = {
    'ML Engineer': {
      '0-3': { 'Bay Area': [120, 180], Seattle: [110, 160], NYC: [115, 170], Austin: [100, 145], Remote: [90, 130] },
      '3-7': { 'Bay Area': [180, 240], Seattle: [165, 220], NYC: [170, 230], Austin: [145, 195], Remote: [130, 175] },
      '7+': { 'Bay Area': [240, 350], Seattle: [220, 310], NYC: [230, 320], Austin: [195, 270], Remote: [175, 240] },
    },
    'Data Scientist': {
      '0-3': { 'Bay Area': [110, 165], Seattle: [100, 150], NYC: [105, 160], Austin: [90, 135], Remote: [80, 120] },
      '3-7': { 'Bay Area': [165, 220], Seattle: [150, 200], NYC: [160, 210], Austin: [135, 180], Remote: [120, 160] },
      '7+': { 'Bay Area': [220, 320], Seattle: [200, 280], NYC: [210, 290], Austin: [180, 250], Remote: [160, 220] },
    },
    'Senior Engineer': {
      '0-3': { 'Bay Area': [140, 200], Seattle: [130, 180], NYC: [135, 190], Austin: [115, 160], Remote: [100, 145] },
      '3-7': { 'Bay Area': [200, 280], Seattle: [180, 250], NYC: [190, 260], Austin: [160, 220], Remote: [145, 195] },
      '7+': { 'Bay Area': [280, 400], Seattle: [250, 350], NYC: [260, 370], Austin: [220, 310], Remote: [200, 280] },
    },
    'Robotics Engineer': {
      '0-3': { 'Bay Area': [130, 185], Seattle: [120, 170], NYC: [125, 175], Austin: [105, 150], Remote: [95, 135] },
      '3-7': { 'Bay Area': [185, 255], Seattle: [170, 230], NYC: [180, 240], Austin: [150, 205], Remote: [135, 180] },
      '7+': { 'Bay Area': [255, 370], Seattle: [230, 330], NYC: [240, 345], Austin: [205, 290], Remote: [185, 260] },
    },
    'Security Engineer': {
      '0-3': { 'Bay Area': [125, 175], Seattle: [115, 160], NYC: [120, 170], Austin: [100, 145], Remote: [90, 130] },
      '3-7': { 'Bay Area': [175, 245], Seattle: [160, 220], NYC: [170, 230], Austin: [145, 195], Remote: [130, 175] },
      '7+': { 'Bay Area': [245, 360], Seattle: [220, 320], NYC: [230, 335], Austin: [195, 285], Remote: [175, 255] },
    },
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!formData.role || !formData.experience || !formData.location) {
      return;
    }

    const salaryRange = salaryData[formData.role][formData.experience][formData.location];
    setResult({
      min: salaryRange[0],
      max: salaryRange[1],
      avg: Math.round((salaryRange[0] + salaryRange[1]) / 2),
    });
  };

  return (
    <div>
      <Header />

      <section className="hero" data-testid="salary-calculator-hero" style={{ padding: '120px 0 80px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <DollarSign size={60} style={{ color: '#E63946', margin: '0 auto 24px' }} />
          <h1
            data-testid="salary-calculator-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              marginBottom: '24px',
            }}
          >
            Salary Calculator
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: '#A8DADC',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Know your worth. Get real-time salary data for your role, experience, and location.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#FFFFFF', paddingTop: '0' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <form onSubmit={handleCalculate} data-testid="salary-calculator-form" className="card">
            <h2 style={{ fontSize: '28px', marginBottom: '32px', textAlign: 'center' }}>
              Calculate Your Salary Range
            </h2>

            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="role" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                Role *
              </label>
              <select
                id="role"
                name="role"
                data-testid="salary-role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '2px solid #E0E0E0',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontFamily: 'Open Sans, sans-serif',
                  cursor: 'pointer',
                }}
              >
                <option value="">Select your role</option>
                <option value="ML Engineer">ML Engineer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Senior Engineer">Senior Engineer</option>
                <option value="Robotics Engineer">Robotics Engineer</option>
                <option value="Security Engineer">Security Engineer</option>
              </select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="experience" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                Experience Level *
              </label>
              <select
                id="experience"
                name="experience"
                data-testid="salary-experience"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '2px solid #E0E0E0',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontFamily: 'Open Sans, sans-serif',
                  cursor: 'pointer',
                }}
              >
                <option value="">Select experience level</option>
                <option value="0-3">0-3 years (Entry-Level)</option>
                <option value="3-7">3-7 years (Mid-Level)</option>
                <option value="7+">7+ years (Senior)</option>
              </select>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label htmlFor="location" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                Location *
              </label>
              <select
                id="location"
                name="location"
                data-testid="salary-location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '2px solid #E0E0E0',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontFamily: 'Open Sans, sans-serif',
                  cursor: 'pointer',
                }}
              >
                <option value="">Select location</option>
                <option value="Bay Area">Bay Area</option>
                <option value="Seattle">Seattle</option>
                <option value="NYC">NYC</option>
                <option value="Austin">Austin</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <button
              type="submit"
              data-testid="salary-calculate-button"
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '18px' }}
            >
              Calculate Salary Range
            </button>
          </form>

          {result && (
            <div
              data-testid="salary-result"
              className="card"
              style={{
                marginTop: '32px',
                background: 'linear-gradient(135deg, #E63946 0%, #d32735 100%)',
                color: '#FFFFFF',
              }}
            >
              <h3 style={{ fontSize: '28px', marginBottom: '24px', textAlign: 'center' }}>
                Your Salary Range
              </h3>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <div style={{ fontSize: '52px', fontWeight: 700, marginBottom: '8px' }}>
                  ${result.min}K - ${result.max}K
                </div>
                <div style={{ fontSize: '20px', opacity: 0.9 }}>
                  Average: ${result.avg}K/year
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '24px',
                  borderRadius: '8px',
                }}
              >
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                  <TrendingUp size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>Negotiation Tips</h4>
                    <ul style={{ fontSize: '15px', lineHeight: '1.6', paddingLeft: '20px' }}>
                      <li>Always negotiate - companies expect it</li>
                      <li>Highlight your unique skills and achievements</li>
                      <li>Consider total compensation (equity, bonuses, benefits)</li>
                      <li>Research the company's funding stage and growth</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalaryCalculatorPage;
