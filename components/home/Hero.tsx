'use client';

import Link from 'next/link';
import { CalendarDays, Gamepad2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '88vh',
        backgroundImage: 'url(/images/auti_1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 24px',
      }}
    >
      <div style={{ width: '100%', maxWidth: '900px' }}>
        <div
          style={{
            display: 'inline-flex',
            background: '#EBF5FF',
            color: '#4A90D9',
            borderRadius: '50px',
            padding: '8px 20px',
            fontSize: '13px',
            fontWeight: 600,
            marginBottom: '24px',
          }}
        >
          🧩 Autism Support Platform
        </div>

        <div style={{ marginTop: '16px' }}>
          <div style={{ fontSize: '52px', fontWeight: 800, color: '#2D3748', lineHeight: 1.05 }}>
            Support, Connection
          </div>
          <div style={{ fontSize: '52px', fontWeight: 800, color: '#2D3748', lineHeight: 1.05 }}>
            & Care for the
          </div>
          <div style={{ fontSize: '52px', fontWeight: 800, color: '#2D3748', lineHeight: 1.05 }}>
            Autism Community
          </div>
        </div>

        <p
          style={{
            fontSize: '18px',
            color: '#718096',
            maxWidth: '720px',
            lineHeight: 1.8,
            margin: '24px auto 0',
          }}
        >
          Connect with qualified specialists, access educational resources, and find support in a welcoming, sensory-friendly environment.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '36px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Link href="/doctors">
            <button
              style={{
                background: '#4A90D9',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <CalendarDays size={18} />
              Find a Specialist
            </button>
          </Link>

          <Link href="/games">
            <button
              style={{
                background: '#F9A86C',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Gamepad2 size={18} />
              Play & Learn
            </button>
          </Link>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '40px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {['✓ Verified Specialists', '✓ Sensory-Friendly', '✓ Free to Browse'].map((badge) => (
            <div
              key={badge}
              style={{
                background: '#EBF5FF',
                color: '#4A90D9',
                padding: '8px 18px',
                borderRadius: '50px',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
