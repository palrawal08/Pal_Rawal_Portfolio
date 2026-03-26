import React, { useRef, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiCpu, FiGlobe, FiZap } from 'react-icons/fi';
import './Projects.css';

/* ── Project data ── */
const PROJECTS = [
  {
    id: 1,
    title: 'Real Estate Management System',
    emoji: '🏠',
    category: 'ML + Desktop App',
    categoryColor: '#7b2fff',
    description:
      'A comprehensive GUI-based property management platform that leverages machine learning to predict real estate prices. Features intelligent property recommendations, buyer-seller matching, and dynamic market analytics.',
    features: [
      'ML-powered price prediction engine',
      'Interactive GUI with Tkinter',
      'Property management dashboard',
      'Data visualization & analytics',
    ],
    tech: ['Python', 'Tkinter', 'Scikit-learn', 'Pandas', 'MySQL'],
    github: 'https://github.com/palrawal08',
    demo: null,
    icon: FiCpu,
    gradient: 'linear-gradient(135deg, #7b2fff22, #00d4ff11)',
    border: '#7b2fff',
  },
  {
    id: 2,
    title: 'Food Ordering System',
    emoji: '🍔',
    category: 'Full-Stack MERN',
    categoryColor: '#00d4ff',
    description:
      'A full-featured food ordering platform built on the MERN stack with real-time order tracking, multi-restaurant dashboards, table reservation system, and integrated payment workflows.',
    features: [
      'Real-time order tracking',
      'Restaurant admin dashboard',
      'Table booking system',
      'JWT authentication',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io'],
    github: 'https://github.com/palrawal08',
    demo: null,
    icon: FiGlobe,
    gradient: 'linear-gradient(135deg, #00d4ff22, #00ffcc11)',
    border: '#00d4ff',
  },
  {
    id: 3,
    title: 'Remote Control Car',
    emoji: '🚗',
    category: 'IoT + Hardware',
    categoryColor: '#00ffcc',
    description:
      'A wireless-controlled Arduino-based RC car integrating ultrasonic sensors for obstacle detection, IR remote control, and real-time telemetry. Explores embedded systems and IoT sensor fusion.',
    features: [
      'Wireless Bluetooth control',
      'Ultrasonic obstacle detection',
      'Real-time sensor telemetry',
      'Customizable control modes',
    ],
    tech: ['Arduino', 'C++', 'Ultrasonic Sensors', 'Bluetooth', 'IoT'],
    github: 'https://github.com/palrawal08',
    demo: null,
    icon: FiZap,
    gradient: 'linear-gradient(135deg, #00ffcc22, #7b2fff11)',
    border: '#00ffcc',
  },
];

/* ── Tilt effect hook ── */
const useTilt = (ref) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(800px) rotateY(${dx * 8}deg) rotateX(${-dy * 6}deg) translateZ(10px)`;
    };
    const onLeave = () => {
      el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [ref]);
};

/* ── Project Card ── */
const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  useTilt(cardRef);
  const { icon: Icon } = project;

  return (
    <div ref={cardRef} className="project-card glass" style={{ '--card-border': project.border }}>
      {/* Top bar */}
      <div className="project-top-bar" style={{ background: project.gradient }}>
        <div className="project-emoji">{project.emoji}</div>
        <span className="project-category mono" style={{ color: project.categoryColor }}>
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        {/* Features */}
        <ul className="project-features">
          {project.features.map(f => (
            <li key={f}>
              <span style={{ color: project.categoryColor }}>▸</span> {f}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="project-tech">
          {project.tech.map(t => (
            <span key={t} className="tech-pill" style={{ borderColor: `${project.border}40`, color: project.border }}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            style={{ borderColor: project.border, color: project.border }}
          >
            <FiGithub /> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              style={{ background: project.border, color: '#fff', border: 'none' }}
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Projects ── */
const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="section-container">
      <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
      <p className="section-subtitle">Things I've built that I'm proud of</p>

      <div className="projects-grid">
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* More projects link */}
      <div className="projects-more">
        <p className="projects-more-text">More projects on GitHub →</p>
        <a
          href="https://github.com/palrawal08"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          <FiGithub /> View All on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
