import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.line} />
      <div style={styles.container}>
        <div style={styles.left}>
          <span style={styles.logo}>
            <span style={{ color: '#00d4ff' }}>P</span>AL<span style={{ color: '#7b2fff' }}>.</span>
          </span>
          <p style={styles.copy}>
            © {year} Pal Rawal. Built with <FiHeart size={12} style={{ color: '#ff2d78', display: 'inline', margin: '0 3px', verticalAlign: 'middle' }} /> &amp; React.
          </p>
        </div>

        <p style={styles.mono}>// always_building();</p>

        <div style={styles.socials}>
          {[
            { icon: FiGithub, href: 'https://github.com/palrawal08', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/pal-rawal-816a02358/', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:palrawal45@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={styles.socialLink} title={label}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#00d4ff';
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2rem',
    position: 'relative',
  },
  line: {
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(123,47,255,0.2), transparent)',
    marginBottom: '2rem',
    maxWidth: 1200,
    margin: '0 auto 2rem',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    padding: '0 2rem',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
  },
  logo: {
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: '1.4rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    color: 'var(--text-primary)',
  },
  copy: {
    color: 'var(--text-secondary)',
    fontSize: '0.83rem',
  },
  mono: {
    fontFamily: "'JetBrains Mono', monospace",
    color: 'rgba(136,146,176,0.4)',
    fontSize: '0.78rem',
    letterSpacing: '0.05em',
  },
  socials: {
    display: 'flex',
    gap: '0.625rem',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '34px',
    height: '34px',
    borderRadius: '4px',
    border: '1px solid rgba(0,212,255,0.15)',
    color: 'var(--text-secondary)',
    transition: 'all 0.25s ease',
  },
};

export default Footer;
