import React, { useEffect, useRef, useState } from 'react';
import { FiCode, FiCpu, FiDatabase, FiZap } from 'react-icons/fi';
import './About.css';

/* ── Animated Counter ── */
const Counter = ({ end, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1800;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="stat-item">
      <span className="stat-number gradient-text">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

/* ── About ──────────────────────────────────────────────────────── */
const PASSIONS = [
  { icon: FiCpu, title: 'AI / ML', desc: 'Building intelligent systems with scikit-learn, TensorFlow & data pipelines.' },
  { icon: FiCode, title: 'Full-Stack', desc: 'Crafting end-to-end web applications with MERN stack & modern tooling.' },
  { icon: FiDatabase, title: 'Data Analytics', desc: 'Transforming raw data into actionable insights through visualization & SQL.' },
  { icon: FiZap, title: 'IoT & Hardware', desc: 'Bridging physical and digital worlds with Arduino & sensor integration.' },
];

const About = () => {
  const sectionRef = useRef(null);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <p className="section-subtitle">The engineer behind the code</p>

        <div className="about-grid">
          {/* Left – Bio */}
          <div className="about-bio">
            <div className="bio-card glass">
              <div className="bio-tag mono">// bio.txt</div>
              <p className="bio-text">
                I'm <strong>Pal Rawal</strong>, a B.Tech Computer Science student at LJ University (2023–2027)
                with a passion for building things that matter. I thrive at the intersection of
                <span className="accent"> Artificial Intelligence</span>,
                <span className="accent"> Full-Stack Web Development</span>, and
                <span className="accent"> Data Analytics</span>.
              </p>
              <p className="bio-text" style={{ marginTop: '1rem' }}>
                Whether I'm training ML models to predict real estate prices, architecting scalable food-ordering
                platforms, or programming RC cars with IoT sensors — I love turning complex problems into
                elegant, user-centered solutions.
              </p>
              <p className="bio-text" style={{ marginTop: '1rem' }}>
                Currently leveling up through Coursera &amp; IBM certifications while actively seeking
                internship opportunities to bring my skills into production environments.
              </p>

              {/* Quick facts */}
              <div className="bio-facts">
                {[
                  ['📍', 'Ahmedabad, India'],
                  ['🎓', 'B.Tech CS @ LJ University'],
                  ['💼', 'Open to Internships'],
                  ['🌐', 'palrawal45@gmail.com'],
                ].map(([icon, text]) => (
                  <div key={text} className="fact-row">
                    <span>{icon}</span>
                    <span className="fact-text">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right – Passions */}
          <div className="about-passions">
            <div className="passion-grid">
              {PASSIONS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="passion-card glass">
                  <div className="passion-icon">
                    <Icon size={22} />
                  </div>
                  <h4 className="passion-title">{title}</h4>
                  <p className="passion-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats glass">
          <Counter end={10} suffix="+" label="Projects Built" />
          <div className="stat-divider" />
          <Counter end={8} suffix="+" label="Technologies" />
          <div className="stat-divider" />
          <Counter end={5} suffix="+" label="Certifications" />
          <div className="stat-divider" />
          <Counter end={2} suffix="+" label="Years Coding" />
        </div>
      </div>
    </section>
  );
};

export default About;
