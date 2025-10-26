import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Upload, FileText, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const UploadResumePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consent: false,
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (!selectedFile.name.toLowerCase().endsWith('.pdf')) {
        toast.error('Please upload a PDF file');
        return;
      }
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB');
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !file) {
      toast.error('Please fill in all required fields and upload your resume');
      return;
    }

    if (!formData.consent) {
      toast.error('Please consent to receive communications');
      return;
    }

    setLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      if (formData.phone) formDataToSend.append('phone', formData.phone);
      formDataToSend.append('resume', file);

      await axios.post(`${API}/upload-resume`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Resume uploaded successfully!');
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', consent: false });
      setFile(null);
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to upload resume. Please try again.');
      console.error('Upload error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const nextSteps = [
    {
      icon: <FileText size={32} />,
      title: 'Review',
      desc: 'ATS compatibility check and formatting analysis',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Feedback',
      desc: '3-5 specific recommendations to improve your resume',
    },
    {
      icon: <Upload size={32} />,
      title: 'Next Steps',
      desc: 'Suggest opportunities that match your profile',
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="hero" data-testid="upload-hero" style={{ padding: '120px 0 80px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1
            data-testid="upload-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              marginBottom: '24px',
            }}
          >
            Upload Your Resume for
            <br />
            <span style={{ color: '#E63946' }}>a Free Review</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: '#A8DADC',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Get expert feedback within 24 hours. No strings attached.
          </p>
        </div>
      </section>

      {/* Upload Form */}
      <section className="section" style={{ background: '#FFFFFF', paddingTop: '0' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          {!success ? (
            <form onSubmit={handleSubmit} data-testid="resume-upload-form" className="card">
              <h2 style={{ fontSize: '28px', marginBottom: '24px', textAlign: 'center' }}>
                Submit Your Resume
              </h2>

              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  data-testid="resume-name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: '2px solid #E0E0E0',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontFamily: 'Open Sans, sans-serif',
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  data-testid="resume-email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: '2px solid #E0E0E0',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontFamily: 'Open Sans, sans-serif',
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  data-testid="resume-phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: '2px solid #E0E0E0',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontFamily: 'Open Sans, sans-serif',
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="resume" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                  Resume (PDF only, max 5MB) *
                </label>
                <div
                  style={{
                    border: '2px dashed #E63946',
                    borderRadius: '8px',
                    padding: '40px 20px',
                    textAlign: 'center',
                    background: '#FFF5F5',
                    cursor: 'pointer',
                  }}
                  onClick={() => document.getElementById('resume').click()}
                >
                  <Upload size={48} style={{ color: '#E63946', margin: '0 auto 16px' }} />
                  <p style={{ fontSize: '16px', marginBottom: '8px', fontWeight: 600 }}>
                    {file ? file.name : 'Click to upload or drag and drop'}
                  </p>
                  <p style={{ fontSize: '14px', color: '#666' }}>PDF only, up to 5MB</p>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    data-testid="resume-file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                    style={{ display: 'none' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="consent"
                    data-testid="resume-consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    style={{ marginRight: '12px', marginTop: '4px', width: '20px', height: '20px' }}
                  />
                  <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
                    I consent to Hirmatic reviewing my resume and contacting me with feedback and
                    relevant opportunities. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                data-testid="resume-submit"
                className="btn btn-primary"
                disabled={loading}
                style={{ width: '100%', fontSize: '18px' }}
              >
                {loading ? 'Uploading...' : 'Submit Resume'}
              </button>
            </form>
          ) : (
            <div data-testid="success-message" className="card" style={{ textAlign: 'center' }}>
              <CheckCircle size={64} style={{ color: '#E63946', margin: '0 auto 24px' }} />
              <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Resume Received!</h2>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '24px' }}>
                Thank you for submitting your resume. Our team will review it and send you detailed
                feedback within 24 hours.
              </p>
              <button
                onClick={() => setSuccess(false)}
                data-testid="submit-another"
                className="btn btn-secondary"
              >
                Submit Another Resume
              </button>
            </div>
          )}
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section" style={{ background: '#F5F5F5' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            What Happens Next?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
            }}
          >
            {nextSteps.map((step, index) => (
              <div key={index} data-testid={`next-step-${index}`} className="card" style={{ textAlign: 'center' }}>
                <div style={{ color: '#E63946', marginBottom: '20px' }}>{step.icon}</div>
                <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UploadResumePage;