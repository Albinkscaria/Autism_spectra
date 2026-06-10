'use client';

import { useEffect, useRef } from 'react';

export default function StatsBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '500+', label: 'Families Supported' },
    { number: '50+', label: 'Verified Specialists' },
    { number: '6', label: 'Learning Games' },
    { number: '100+', label: 'Free Resources' },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, #4A90D9, #5BBF8E)',
        padding: '64px 40px',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        textAlign: 'center',
      }}>
        {stats.map((stat, index) => (
          <div key={stat.label} className="fade-up" style={{ transitionDelay: `${index * 100}ms` }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: 'white' }}>
              {stat.number}
            </div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', marginTop: '6px' }}>
              {stat.label}
            </div>
            {index < stats.length - 1 && (
              <div style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: '1px',
                height: '60px',
                background: 'rgba(255,255,255,0.3)',
              }} className="divider" />
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          position: relative;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .divider {
            display: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .fade-up {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
