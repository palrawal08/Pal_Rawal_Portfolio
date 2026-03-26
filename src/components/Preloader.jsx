import React, { useEffect, useState } from 'react';

/* ── Preloader ─────────────────────────────────────────────────── */
const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + Math.random() * 15;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const pct = Math.min(Math.round(progress), 100);

  return (
    <div style={styles.overlay}>
      {/* Grid background */}
      <div style={styles.grid} />

      {/* Scan line */}
      <div style={styles.scanLine} />

      {/* Center content */}
      <div style={styles.center}>
        {/* Rotating ring */}
        <div style={styles.ringOuter}>
          <div style={styles.ringInner} />
          <div style={styles.ringMid} />
          <div style={styles.dot} />
        </div>

        {/* Name */}
        <div style={styles.name}>
          <span style={styles.namePrimary}>PAL</span>
          <span style={styles.nameSecondary}> RAWAL</span>
        </div>

        {/* Tag */}
        <p style={styles.tag}>// initializing portfolio.exe</p>

        {/* Progress bar */}
        <div style={styles.barWrap}>
          <div style={{ ...styles.bar, width: `${pct}%` }} />
        </div>

        {/* Percentage */}
        <p style={styles.pct}>{pct}%</p>
      </div>

      {/* Corner decorations */}
      <div style={{ ...styles.corner, top: 24, left: 24, borderTop: '2px solid #00d4ff', borderLeft: '2px solid #00d4ff' }} />
      <div style={{ ...styles.corner, top: 24, right: 24, borderTop: '2px solid #7b2fff', borderRight: '2px solid #7b2fff' }} />
      <div style={{ ...styles.corner, bottom: 24, left: 24, borderBottom: '2px solid #7b2fff', borderLeft: '2px solid #7b2fff' }} />
      <div style={{ ...styles.corner, bottom: 24, right: 24, borderBottom: '2px solid #00d4ff', borderRight: '2px solid #00d4ff' }} />
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed', inset: 0,
    background: '#05050f',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 9999, overflow: 'hidden',
  },
  grid: {
    position: 'absolute', inset: 0,
    backgroundImage: 'linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)',
    backgroundSize: '50px 50px',
  },
  scanLine: {
    position: 'absolute', left: 0, right: 0, height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)',
    animation: 'scan 2s linear infinite',
    top: 0,
  },
  center: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem',
    position: 'relative', zIndex: 2,
  },
  ringOuter: {
    position: 'relative', width: 120, height: 120,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  ringInner: {
    position: 'absolute', inset: 0, borderRadius: '50%',
    border: '2px solid transparent',
    borderTopColor: '#00d4ff', borderRightColor: '#7b2fff',
    animation: 'spin 1.2s linear infinite',
  },
  ringMid: {
    position: 'absolute', inset: 16, borderRadius: '50%',
    border: '2px solid transparent',
    borderBottomColor: '#00ffcc', borderLeftColor: '#ff2d78',
    animation: 'spin 0.8s linear infinite reverse',
  },
  dot: {
    width: 20, height: 20, borderRadius: '50%',
    background: 'radial-gradient(circle, #00d4ff, #7b2fff)',
    boxShadow: '0 0 20px #00d4ff, 0 0 40px #7b2fff',
  },
  name: {
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    fontWeight: 700, letterSpacing: '0.2em',
  },
  namePrimary: { color: '#00d4ff', textShadow: '0 0 20px rgba(0,212,255,0.5)' },
  nameSecondary: { color: '#f0f4ff' },
  tag: {
    fontFamily: "'JetBrains Mono', monospace",
    color: 'rgba(136,146,176,0.7)', fontSize: '0.85rem', letterSpacing: '0.05em',
  },
  barWrap: {
    width: 280, height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 2,
    overflow: 'hidden',
  },
  bar: {
    height: '100%', borderRadius: 2,
    background: 'linear-gradient(90deg, #00d4ff, #7b2fff)',
    boxShadow: '0 0 8px #00d4ff',
    transition: 'width 0.1s ease',
  },
  pct: {
    fontFamily: "'JetBrains Mono', monospace",
    color: '#00d4ff', fontSize: '1.1rem',
    textShadow: '0 0 10px rgba(0,212,255,0.5)',
  },
  corner: { position: 'absolute', width: 20, height: 20 },
};

export default Preloader;
