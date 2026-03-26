import React, { useState } from 'react';
import { FiDownload, FiX, FiMaximize2 } from 'react-icons/fi';
import './Resume.css';

/* ── Resume ─────────────────────────────────────────────────────── */
const Resume = () => {
  const [modal, setModal] = useState(false);

  return (
    <section id="resume" className="resume-section">
      <div className="section-container">
        <h2 className="section-title">My <span className="gradient-text">Resume</span></h2>
        <p className="section-subtitle">My professional background at a glance</p>

        <div className="resume-wrapper glass">
          {/* Preview area */}
          <div className="resume-preview">
            {/* Mock resume preview */}
            <div className="resume-mockup">
              <div className="mock-header">
                <div className="mock-name">PAL RAWAL</div>
                <div className="mock-sub">Software Engineer · ML Engineer · Data Analyst</div>
                <div className="mock-contact">palrawal45@gmail.com · github.com/palrawal08 · linkedin.com/in/pal-rawal-816a02358</div>
              </div>

              <div className="mock-section">
                <div className="mock-section-title">EDUCATION</div>
                <div className="mock-divider" />
                <div className="mock-entry">
                  <div className="mock-entry-title">B.Tech Computer Science</div>
                  <div className="mock-entry-sub">LJ University Ahmedabad · 2023 – 2027</div>
                </div>
              </div>

              <div className="mock-section">
                <div className="mock-section-title">TECHNICAL SKILLS</div>
                <div className="mock-divider" />
                <div className="mock-skills">
                  <div className="mock-skill-row"><span>Languages:</span> Python, JavaScript, Java, SQL, C++</div>
                  <div className="mock-skill-row"><span>Frameworks:</span> React, Node.js, Express, Scikit-learn, Tkinter</div>
                  <div className="mock-skill-row"><span>Databases:</span> MySQL, MongoDB, PostgreSQL</div>
                  <div className="mock-skill-row"><span>Tools:</span> Git, VS Code, Jupyter, Arduino</div>
                </div>
              </div>

              <div className="mock-section">
                <div className="mock-section-title">PROJECTS</div>
                <div className="mock-divider" />
                <div className="mock-entry">
                  <div className="mock-entry-title">Real Estate Management System</div>
                  <div className="mock-entry-sub">Python · Tkinter · Scikit-learn · ML price prediction</div>
                </div>
                <div className="mock-entry">
                  <div className="mock-entry-title">Food Ordering System</div>
                  <div className="mock-entry-sub">MERN Stack · Real-time ordering · Admin dashboards</div>
                </div>
                <div className="mock-entry">
                  <div className="mock-entry-title">Remote Control Car (Arduino)</div>
                  <div className="mock-entry-sub">Arduino · C++ · IoT Sensors · Wireless control</div>
                </div>
              </div>

              {/* Blur overlay with CTA */}
              <div className="resume-blur-overlay">
                <p className="blur-label mono">// full resume available below</p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="resume-actions">
            <a href="/resume.pdf" download="Pal_Rawal_Resume.pdf" className="btn-primary">
              <FiDownload /> Download PDF Resume
            </a>
            <button className="btn-outline" onClick={() => setModal(true)}>
              <FiMaximize2 /> Full Preview
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="resume-modal" onClick={() => setModal(false)}>
          <div className="resume-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(false)}>
              <FiX size={20} />
            </button>
            <div className="modal-preview">
              <p style={{ color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono', fontSize: '0.9rem' }}>
                📄 Resume preview — download the PDF for the complete document.
              </p>
              <a href="/resume.pdf" download="Pal_Rawal_Resume.pdf" className="btn-primary" style={{ marginTop: '1.5rem' }}>
                <FiDownload /> Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
