import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

/* ── Navbar ─────────────────────────────────────────────────────── */
const NAV_LINKS = ['Home','About','Skills','Projects','Resume','Education','Contact'];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setActive(id);
  };

  return (
    <>
      <nav style={{
        ...navStyles.nav,
        background: scrolled ? 'rgba(5,5,15,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : '1px solid transparent',
      }}>
        <div style={navStyles.container}>
          {/* Logo */}
          <div style={navStyles.logo} onClick={() => scrollTo('Home')}>
            <span style={navStyles.logoText}>
              <span style={{ color: '#00d4ff' }}>P</span>AL
              <span style={{ color: '#7b2fff' }}>.</span>
            </span>
          </div>

          {/* Desktop links */}
          <ul style={navStyles.links} className="nav-links-desktop">
            {NAV_LINKS.map(link => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  style={{
                    ...navStyles.link,
                    color: active === link ? '#00d4ff' : 'var(--text-secondary)',
                  }}
                  onMouseEnter={e => e.target.style.color = '#00d4ff'}
                  onMouseLeave={e => e.target.style.color = active === link ? '#00d4ff' : 'var(--text-secondary)'}
                >
                  <span style={navStyles.linkNum}>0{NAV_LINKS.indexOf(link) + 1}.</span>
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div style={navStyles.controls}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={navStyles.iconBtn}
              title="Toggle theme"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav-hamburger"
              style={navStyles.iconBtn}
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={navStyles.mobileMenu}>
          {NAV_LINKS.map((link, i) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                ...navStyles.mobileLink,
                animationDelay: `${i * 0.05}s`,
              }}
            >
              <span style={{ color: '#00d4ff', fontFamily: 'JetBrains Mono' }}>0{i+1}. </span>
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

const navStyles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    transition: 'all 0.3s ease',
  },
  container: {
    maxWidth: 1200, margin: '0 auto', padding: '1rem 2rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  logo: {
    cursor: 'none',
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: '1.8rem', fontWeight: 700, letterSpacing: '0.05em',
  },
  logoText: { color: 'var(--text-primary)' },
  links: {
    display: 'flex', listStyle: 'none', gap: '0.25rem', alignItems: 'center',
    '@media(max-width:768px)': { display: 'none' },
  },
  link: {
    background: 'none', border: 'none', fontFamily: "'Exo 2', sans-serif",
    fontSize: '0.9rem', fontWeight: 500, padding: '0.5rem 0.75rem',
    transition: 'color 0.2s', cursor: 'none', letterSpacing: '0.03em',
  },
  linkNum: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem', color: '#00d4ff', marginRight: '4px',
  },
  controls: { display: 'flex', alignItems: 'center', gap: '0.5rem' },
  iconBtn: {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(0,212,255,0.2)',
    borderRadius: '4px',
    color: 'var(--text-secondary)', padding: '0.5rem',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all 0.2s', cursor: 'none',
  },
  hamburger: {
    display: 'none',
    '@media(max-width:768px)': { display: 'flex' },
  },
  mobileMenu: {
    position: 'fixed', inset: 0, top: '70px',
    background: 'rgba(5,5,15,0.97)',
    backdropFilter: 'blur(20px)',
    zIndex: 999, display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
  },
  mobileLink: {
    background: 'none', border: 'none',
    color: 'var(--text-primary)', fontSize: '1.5rem',
    fontFamily: "'Rajdhani', sans-serif", fontWeight: 600,
    letterSpacing: '0.1em', cursor: 'none', padding: '0.5rem 1rem',
    animation: 'fadeInUp 0.4s ease forwards',
  },
};

export default Navbar;
