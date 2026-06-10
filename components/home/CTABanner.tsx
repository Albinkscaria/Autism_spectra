'use client';

import Link from 'next/link';

export default function CTABanner() {
  return (
    <section style={{
      background: '#2D3748',
      padding: '80px 40px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: 800,
          color: 'white',
          marginBottom: '12px',
        }}>
          Ready to Find Support?
        </h2>
        <p style={{
          fontSize: '17px',
          color: '#A0AEC0',
          marginBottom: '36px',
        }}>
          Join thousands of families already using Speelans AI for autism support and care.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/doctors">
            <button style={{
              background: '#4A90D9',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              transition: 'transform 150ms, box-shadow 150ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(74,144,217,0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              Find a Specialist
            </button>
          </Link>

          <Link href="/games">
            <button style={{
              background: 'transparent',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 600,
              border: '2px solid rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: 'border-color 150ms, background 150ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'white';
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
              e.currentTarget.style.background = 'transparent';
            }}
            >
              Explore Games
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
