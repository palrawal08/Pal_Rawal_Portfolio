import React, { useEffect, useRef } from 'react';

/* ── Custom Cursor ──────────────────────────────────────────────── */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    let raf;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '50px';
        ringRef.current.style.height = '50px';
        ringRef.current.style.borderColor = '#7b2fff';
        ringRef.current.style.background = 'rgba(123,47,255,0.08)';
      }
    };
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '40px';
        ringRef.current.style.height = '40px';
        ringRef.current.style.borderColor = '#00d4ff';
        ringRef.current.style.background = 'transparent';
      }
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', width: 8, height: 8, borderRadius: '50%',
        background: '#00d4ff', pointerEvents: 'none', zIndex: 99999,
        boxShadow: '0 0 8px #00d4ff', transition: 'background 0.2s',
        top: 0, left: 0, willChange: 'transform',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', width: 40, height: 40, borderRadius: '50%',
        border: '1.5px solid #00d4ff', pointerEvents: 'none', zIndex: 99998,
        top: 0, left: 0, willChange: 'transform',
        transition: 'width 0.2s, height 0.2s, border-color 0.2s, background 0.2s',
        mixBlendMode: 'screen',
      }} />
    </>
  );
};

export default CustomCursor;
