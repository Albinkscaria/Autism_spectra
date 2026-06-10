'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/games', label: 'Games' },
    { href: '/blog', label: 'Blog' },
    { href: '/community', label: 'Community' },
    { href: '/resources', label: 'Resources' },
  ];

  const supportLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' },
    { href: '/accessibility', label: 'Accessibility' },
  ];

  return (
    <footer style={{ background: '#2D3748', padding: '64px 80px 32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Top Section - 4 Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Column 1 - Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Image
                src="/images/speelan-ai-logo.svg"
                alt="Speelans AI logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span style={{ fontSize: '22px', fontWeight: 800, color: 'white' }}>Speelans AI</span>
            </div>
            <p style={{
              fontSize: '14px',
              color: '#A0AEC0',
              lineHeight: 1.6,
              maxWidth: '220px',
            }}>
              Support, connection and care for the autism community.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 200ms',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#4A90D9'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 200ms',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#4A90D9'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 200ms',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#4A90D9'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="#2D3748" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#2D3748" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: '16px', marginBottom: '16px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: '12px' }}>
                  <Link href={link.href} style={{
                    color: '#A0AEC0',
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color 200ms',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: '16px', marginBottom: '16px' }}>
              Support
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {supportLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: '12px' }}>
                  <Link href={link.href} style={{
                    color: '#A0AEC0',
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color 200ms',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: '16px', marginBottom: '16px' }}>
              Contact
            </h4>
            <div style={{ color: '#A0AEC0', fontSize: '14px', lineHeight: 1.8 }}>
              <a href="mailto:support@speelans.ai" style={{
                color: '#A0AEC0',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '8px',
                transition: 'color 200ms',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}
              >
                support@speelans.ai
              </a>
              <p style={{ margin: 0 }}>Mon–Fri, 9am–6pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '24px',
          textAlign: 'center',
        }}>
          <p style={{ color: '#718096', fontSize: '13px', margin: 0 }}>
            © 2025 Speelans AI. Built with care for the autism community.
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          footer {
            padding: 48px 20px 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}
