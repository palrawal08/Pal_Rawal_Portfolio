import React, { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin, FiCheck, FiAlertCircle } from 'react-icons/fi';
import './Contact.css';

/* ── Contact ─────────────────────────────────────────────────────── */
const SOCIAL_LINKS = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'palrawal45@gmail.com',
    href: 'mailto:palrawal45@gmail.com',
    color: '#00d4ff',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'pal-rawal-816a02358',
    href: 'https://www.linkedin.com/in/pal-rawal-816a02358/',
    color: '#7b2fff',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'palrawal08',
    href: 'https://github.com/palrawal08',
    color: '#00ffcc',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Ahmedabad, India',
    href: null,
    color: '#ff2d78',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');
    // Simulate API call (replace with EmailJS or your endpoint)
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <p className="section-subtitle">Open to opportunities, collaborations, and conversations</p>

        <div className="contact-grid">
          {/* Left – Info */}
          <div className="contact-info">
            <div className="contact-intro glass">
              <div className="contact-intro-tag mono">// let's connect</div>
              <h3 className="contact-intro-title">
                Have a project in mind?<br />
                <span className="gradient-text">Let's build it.</span>
              </h3>
              <p className="contact-intro-text">
                I'm actively looking for internship and project opportunities. Whether you have a
                challenging problem to solve, a product to build, or just want to connect —
                my inbox is always open.
              </p>

              {/* Social links */}
              <div className="contact-links">
                {SOCIAL_LINKS.map(({ icon: Icon, label, value, href, color }) => (
                  <div key={label} className="contact-link-row">
                    <div className="contact-link-icon" style={{ color, background: `${color}15`, border: `1px solid ${color}25` }}>
                      <Icon size={16} />
                    </div>
                    <div className="contact-link-info">
                      <span className="contact-link-label">{label}</span>
                      {href ? (
                        <a href={href} target="_blank" rel="noreferrer" className="contact-link-value" style={{ color }}>
                          {value}
                        </a>
                      ) : (
                        <span className="contact-link-value" style={{ color }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div className="contact-form-wrap">
            <form className="contact-form glass" onSubmit={handleSubmit} noValidate>
              <div className="form-tag mono">// send_message()</div>

              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">Name *</label>
                  <input
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className="form-field">
                  <label className="form-label">Email *</label>
                  <input
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-field">
                <label className="form-label">Subject</label>
                <input
                  className="form-input"
                  type="text"
                  name="subject"
                  placeholder="Internship opportunity / Project collaboration"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label className="form-label">Message *</label>
                <textarea
                  className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                  name="message"
                  placeholder="Hey Pal, I'd love to discuss..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              {/* Status */}
              {status === 'success' && (
                <div className="form-status success">
                  <FiCheck /> Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">
                  <FiAlertCircle /> Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                className="btn-primary form-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>Sending <span className="sending-dots">...</span></>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
