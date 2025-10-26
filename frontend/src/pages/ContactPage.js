import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    budget: '',
    message: '',
    consent: false,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!formData.consent) {
      toast.error('Please consent to receive communications');
      return;
    }

    if (formData.message.length < 10) {
      toast.error('Message must be at least 10 characters');
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        budget: '',
        message: '',
        consent: false,
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Contact form error:', error);
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

  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="hero" data-testid="contact-hero" style={{ padding: '120px 0 80px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1
            data-testid="contact-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              marginBottom: '24px',
            }}
          >
            Let's Talk
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: '#A8DADC',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Ready to build your team or advance your career? Get in touch.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#FFFFFF', paddingTop: '0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '60px',
            }}
          >
            {/* Contact Form */}
            <div>
              <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Send Us a Message</h2>
              <form onSubmit={handleSubmit} data-testid="contact-form">
                <div style={{ marginBottom: '24px' }}>
                  <label
                    htmlFor="name"
                    style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    data-testid="contact-name"
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
                  <label
                    htmlFor="email"
                    style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    data-testid="contact-email"
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
                  <label
                    htmlFor="phone"
                    style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    data-testid="contact-phone"
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
                  <label
                    htmlFor="interest"
                    style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}
                  >
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    data-testid="contact-interest"
                    value={formData.interest}
                    onChange={handleChange}
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
                    <option value="">Select an option</option>
                    <option value="Recruiting Help">Recruiting Help</option>
                    <option value="Fractional CHRO">Fractional CHRO</option>
                    <option value="Resume Building">Resume Building</option>
                    <option value="Layoff Support">Layoff Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label
                    htmlFor="budget"
                    style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}
                  >
                    Budget / Timeline
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    data-testid="contact-budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g., $5K/month or Urgent - 30 days"
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
                  <label
                    htmlFor="message"
                    style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    data-testid="contact-message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your hiring needs or career goals..."
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: '2px solid #E0E0E0',
                      borderRadius: '6px',
                      fontSize: '16px',
                      fontFamily: 'Open Sans, sans-serif',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      name="consent"
                      data-testid="contact-consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      style={{ marginRight: '12px', marginTop: '4px', width: '20px', height: '20px' }}
                    />
                    <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
                      I consent to receive communications from Hirmatic about my inquiry. *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  data-testid="contact-submit"
                  className="btn btn-primary"
                  disabled={loading}
                  style={{ width: '100%', fontSize: '18px' }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Get In Touch</h2>
              <div style={{ marginBottom: '32px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    marginBottom: '24px',
                  }}
                >
                  <Mail size={24} style={{ color: '#b31b1b', flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Email</h3>
                    <a
                      href="mailto:contact@hirmatic.com"
                      data-testid="email-contact"
                      style={{ color: '#666', textDecoration: 'none' }}
                    >
                      contact@hirmatic.com
                    </a>
                    <br />
                    <a
                      href="mailto:sales@hirmatic.com"
                      data-testid="email-sales"
                      style={{ color: '#666', textDecoration: 'none' }}
                    >
                      sales@hirmatic.com
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    marginBottom: '24px',
                  }}
                >
                  <MapPin size={24} style={{ color: '#b31b1b', flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Location</h3>
                    <p style={{ color: '#666', margin: 0 }}>Serving companies globally</p>
                  </div>
                </div>
              </div>

              <div
                className="card"
                style={{ background: '#F5F5F5', border: '2px solid #b31b1b' }}
              >
                <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Response Time</h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>
                  We typically respond within 24 hours during business days. For urgent hiring needs,
                  please mention "URGENT" in your message subject.
                </p>
                <p style={{ color: '#b31b1b', fontWeight: 600, fontSize: '16px' }}>
                  Average response time: 4-6 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;