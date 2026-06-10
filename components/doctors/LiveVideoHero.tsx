'use client';

import { useEffect, useState } from 'react';

export default function LiveVideoHero() {
  const [showChat1, setShowChat1] = useState(false);
  const [showChat2, setShowChat2] = useState(false);
  const [showChat3, setShowChat3] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowChat1(true), 1000);
    const timer2 = setTimeout(() => setShowChat2(true), 2500);
    const timer3 = setTimeout(() => setShowChat3(true), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '500px',
        padding: '2rem',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '8%',
          left: '6%',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74, 144, 217, 0.2), transparent)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '55%',
          right: '10%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(91, 191, 142, 0.2), transparent)',
          animation: 'float 8s ease-in-out infinite 1s',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '16%',
          left: '12%',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249, 168, 108, 0.2), transparent)',
          animation: 'float 7s ease-in-out infinite 2s',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          fontSize: '24px',
          animation: 'twinkle 3s ease-in-out infinite',
        }}
      >
        {'\u2B50'}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '18%',
          left: '22%',
          fontSize: '20px',
          animation: 'twinkle 4s ease-in-out infinite 0.5s',
        }}
      >
        {'\u2728'}
      </div>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '760px',
          background: 'rgba(255, 255, 255, 0.94)',
          borderRadius: '28px',
          boxShadow: '0 40px 120px rgba(15, 23, 42, 0.12)',
          padding: '3rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: '#0f172a',
          }}
        >
          Live video consultations for autism care
        </h1>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: '#475569',
            marginBottom: '2rem',
          }}
        >
          Connect with verified specialists in a safe and supportive environment, with secure video sessions tailored to your needs.
        </p>
        <div
          style={{
            display: 'grid',
            gap: '1rem',
            alignItems: 'start',
          }}
        >
          <div
            style={{
              padding: '1rem 1.25rem',
              borderRadius: '18px',
              background: '#eef2ff',
              textAlign: 'left',
            }}
          >
            {showChat1 ? 'Hi there! Ready to book a personalized session?' : ''}
          </div>
          <div
            style={{
              padding: '1rem 1.25rem',
              borderRadius: '18px',
              background: '#dcfce7',
              textAlign: 'left',
            }}
          >
            {showChat2 ? 'I can help with routine planning and support strategies.' : ''}
          </div>
          <div
            style={{
              padding: '1rem 1.25rem',
              borderRadius: '18px',
              background: '#fff7ed',
              textAlign: 'left',
            }}
          >
            {showChat3 ? "Let's schedule a call with one of our trusted specialists." : ''}
          </div>
        </div>
      </div>
    </div>
  );
}
