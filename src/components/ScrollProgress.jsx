import { useEffect } from 'react';

const ScrollProgress = () => {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = (scrollTop / docHeight) * 100;
      if (bar) bar.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return null;
};

export default ScrollProgress;
