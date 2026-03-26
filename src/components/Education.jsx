import React from 'react';
import { FiCalendar, FiAward, FiBookOpen } from 'react-icons/fi';
import './Education.css';

/* ── Data ── */
const EDUCATION = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'LJ University, Ahmedabad',
    period: '2023 – 2027',
    status: 'In Progress',
    statusColor: '#00ffcc',
    desc: 'Pursuing a comprehensive computer science degree with focus on software engineering, machine learning, and data structures & algorithms.',
    courses: ['Data Structures & Algorithms', 'Machine Learning', 'Database Management', 'Web Development', 'Computer Networks'],
    icon: '🎓',
  },
];

const CERTIFICATIONS = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera / DeepLearning.AI',
    year: '2024',
    color: '#00d4ff',
    badge: '🤖',
  },
  {
    title: 'Python for Data Science & AI',
    issuer: 'IBM / Coursera',
    year: '2024',
    color: '#7b2fff',
    badge: '🐍',
  },
  {
    title: 'Full-Stack Web Development',
    issuer: 'Coursera',
    year: '2023',
    color: '#00ffcc',
    badge: '🌐',
  },
  {
    title: 'Data Analysis with Python',
    issuer: 'IBM / Coursera',
    year: '2024',
    color: '#ff2d78',
    badge: '📊',
  },
  {
    title: 'Git & GitHub Essentials',
    issuer: 'GitHub Learning Lab',
    year: '2023',
    color: '#00d4ff',
    badge: '⚙️',
  },
];

/* ── Education ── */
const Education = () => (
  <section id="education" className="edu-section">
    <div className="section-container">
      <h2 className="section-title">Education &amp; <span className="gradient-text">Certifications</span></h2>
      <p className="section-subtitle">Academic journey and professional development</p>

      <div className="edu-grid">
        {/* Left – Education */}
        <div className="edu-left">
          <h3 className="edu-sub-heading">
            <FiBookOpen size={18} style={{ color: '#00d4ff' }} />
            Academic Background
          </h3>

          {EDUCATION.map((edu) => (
            <div key={edu.degree} className="edu-card glass">
              <div className="edu-card-top">
                <span className="edu-emoji">{edu.icon}</span>
                <div className="edu-status" style={{ color: edu.statusColor, borderColor: `${edu.statusColor}40`, background: `${edu.statusColor}10` }}>
                  {edu.status}
                </div>
              </div>

              <h4 className="edu-degree">{edu.degree}</h4>
              <p className="edu-institution">{edu.institution}</p>

              <div className="edu-period">
                <FiCalendar size={13} />
                <span>{edu.period}</span>
              </div>

              <p className="edu-desc">{edu.desc}</p>

              <div className="edu-courses">
                <p className="courses-label mono">// key courses</p>
                <div className="courses-list">
                  {edu.courses.map(c => (
                    <span key={c} className="course-tag">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right – Certifications */}
        <div className="edu-right">
          <h3 className="edu-sub-heading">
            <FiAward size={18} style={{ color: '#7b2fff' }} />
            Certifications
          </h3>

          <div className="cert-list">
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={cert.title}
                className="cert-card glass"
                style={{ '--cert-color': cert.color, animationDelay: `${i * 0.08}s` }}
              >
                <div className="cert-left">
                  <span className="cert-badge">{cert.badge}</span>
                </div>
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
                <div className="cert-year" style={{ color: cert.color }}>
                  {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
