import React, { useEffect, useRef, useState } from 'react';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

/* ── Hero ───────────────────────────────────────────────────────── */
const TITLES = [
  'Software Engineer',
  'ML Engineer',
  'Data Analyst',
  'Full Stack Developer',
  'Problem Solver',
];

const Hero = () => {
  const canvasRef = useRef(null);
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  // ── Typing effect ──
  useEffect(() => {
    const current = TITLES[titleIdx];
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        }, 40);
        return () => clearTimeout(t);
      } else {
        setTitleIdx(i => (i + 1) % TITLES.length);
        setTyping(true);
      }
    }
  }, [charIdx, typing, titleIdx]);

  // ── Particle canvas ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Create particles
    const N = 120;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      color: Math.random() > 0.5 ? '#00d4ff' : '#7b2fff',
      alpha: Math.random() * 0.6 + 0.2,
    }));

    // Mouse position for interactive effect
    let mx = W / 2, my = H / 2;
    const onMouse = (e) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMouse);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw connections
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        // Mouse interaction
        const dx = particles[i].x - mx;
        const dy = particles[i].y - my;
        const mdist = Math.sqrt(dx * dx + dy * dy);
        if (mdist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(123, 47, 255, ${0.2 * (1 - mdist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', `, ${p.alpha})`).replace('rgb', 'rgba').replace('#00d4ff', 'rgba(0,212,255,').replace('#7b2fff', 'rgba(123,47,255,') + ')';
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Grid overlay */}
      <div className="hero-grid" />

      {/* Radial glow */}
      <div className="hero-glow" />

      {/* Content */}
      <div className="hero-content">
        {/* Status badge */}
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>Available for opportunities</span>
        </div>

        {/* Intro */}
        <p className="hero-intro">Hello, World! 👋</p>

        {/* Name */}
        <h1 className="hero-name">
          I'm <span className="gradient-text">Pal Rawal</span>
        </h1>

        {/* Typed title */}
        <div className="hero-title">
          <span className="title-prefix">{'<'}</span>
          <span className="title-text">{displayed}</span>
          <span className="cursor-blink">|</span>
          <span className="title-suffix">{' />'}</span>
        </div>

        {/* Bio */}
        <p className="hero-bio">
          Building intelligent systems at the intersection of{' '}
          <em>AI</em>, <em>Full-Stack Development</em> &amp; <em>Data Science</em>.
          Passionate about crafting solutions that push boundaries.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View Projects <FiArrowRight />
          </button>
          <a className="btn-outline" href="/resume.pdf" download="Pal_Rawal_Resume.pdf">
            Download CV <FiDownload />
          </a>
        </div>

        {/* Social links */}
        <div className="hero-socials">
          <a href="https://github.com/palrawal08" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/pal-rawal-816a02358/" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:palrawal45@gmail.com" className="social-link" title="Email">
            <FiMail />
          </a>
          <div className="social-line" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" onClick={() => scrollTo('about')}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>

      {/* Floating decorative elements */}
      <div className="hero-deco deco-1">{'{ }'}</div>
      <div className="hero-deco deco-2">{'</>'}</div>
      <div className="hero-deco deco-3">{'[ ]'}</div>
    </section>
  );
};

export default Hero;
