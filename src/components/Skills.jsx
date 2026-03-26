import React, { useEffect, useRef, useState } from 'react';
import { FiCode, FiLayers, FiTool, FiDatabase } from 'react-icons/fi';
import './Skills.css';

/* ── Skill data ── */
const SKILL_CATEGORIES = [
  {
    icon: FiCode,
    title: 'Languages',
    color: '#00d4ff',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'JavaScript', level: 82 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 80 },
      { name: 'C++', level: 65 },
    ],
  },
  {
    icon: FiLayers,
    title: 'Frameworks',
    color: '#7b2fff',
    skills: [
      { name: 'React.js', level: 82 },
      { name: 'Node.js', level: 78 },
      { name: 'Express.js', level: 75 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'Tkinter', level: 85 },
    ],
  },
  {
    icon: FiTool,
    title: 'Tools',
    color: '#00ffcc',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 92 },
      { name: 'Jupyter Notebook', level: 88 },
      { name: 'Postman', level: 72 },
      { name: 'Arduino IDE', level: 78 },
    ],
  },
  {
    icon: FiDatabase,
    title: 'Databases',
    color: '#ff2d78',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'MongoDB', level: 78 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
];

/* ── Progress Bar ── */
const SkillBar = ({ name, level, color, visible }) => (
  <div className="skill-bar-item">
    <div className="skill-bar-header">
      <span className="skill-name">{name}</span>
      <span className="skill-level" style={{ color }}>{level}%</span>
    </div>
    <div className="skill-bar-track">
      <div
        className="skill-bar-fill"
        style={{
          width: visible ? `${level}%` : '0%',
          background: `linear-gradient(90deg, ${color}99, ${color})`,
          boxShadow: `0 0 8px ${color}60`,
        }}
      />
    </div>
  </div>
);

/* ── Skill Category Card ── */
const SkillCard = ({ category }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const { icon: Icon, title, color, skills } = category;

  return (
    <div ref={ref} className="skill-card glass">
      <div className="skill-card-header">
        <div className="skill-card-icon" style={{ color, background: `${color}15`, border: `1px solid ${color}30` }}>
          <Icon size={20} />
        </div>
        <h3 className="skill-card-title">{title}</h3>
      </div>
      <div className="skill-bars">
        {skills.map((s, i) => (
          <div key={s.name} style={{ transitionDelay: `${i * 0.1}s` }}>
            <SkillBar {...s} color={color} visible={visible} />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Tech Badges ── */
const TECH_BADGES = [
  'Python','JavaScript','React','Node.js','MongoDB','MySQL',
  'PostgreSQL','Git','Machine Learning','MERN Stack',
  'Scikit-learn','Jupyter','Arduino','C++','Java','Express.js',
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="section-container">
      <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
      <p className="section-subtitle">Technologies I work with</p>

      <div className="skills-grid">
        {SKILL_CATEGORIES.map(cat => (
          <SkillCard key={cat.title} category={cat} />
        ))}
      </div>

      {/* Tech badges */}
      <div className="tech-badges-section">
        <p className="badges-label mono">// quick-look tech stack</p>
        <div className="tech-badges">
          {TECH_BADGES.map(tech => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
