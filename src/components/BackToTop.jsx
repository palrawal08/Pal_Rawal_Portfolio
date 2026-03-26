import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      title="Back to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '44px',
        height: '44px',
        borderRadius: '4px',
        border: '1px solid rgba(0,212,255,0.3)',
        background: 'rgba(5,5,15,0.9)',
        backdropFilter: 'blur(10px)',
        color: '#00d4ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'none',
        zIndex: 4000,
        transition: 'all 0.3s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: visible ? 'auto' : 'none',
        boxShadow: visible ? '0 0 15px rgba(0,212,255,0.25)' : 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(0,212,255,0.15)';
        e.currentTarget.style.borderColor = 'rgba(0,212,255,0.6)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(5,5,15,0.9)';
        e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <FiArrowUp size={18} />
    </button>
  );
};

export default BackToTop;
