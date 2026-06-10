'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/doctors', label: 'Therapists' },
    { href: '/games', label: 'Games' },
    { href: '/blog', label: 'Blog' },
    { href: '/community', label: 'Community' },
    { href: '/resources', label: 'Resources' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        height: '70px',
        background: 'white',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 80px',
        backdropFilter: 'blur(10px)',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Image
            src="/images/speelan-ai-logo.svg"
            alt="Speelans AI logo"
            width={56}
            height={56}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '15px',
                fontWeight: isActive(link.href) ? 700 : 500,
                color: isActive(link.href) ? '#4A90D9' : '#2D3748',
                textDecoration: 'none',
                position: 'relative',
                paddingBottom: '4px',
                borderBottom: isActive(link.href) ? '2px solid #4A90D9' : 'none',
                transition: 'color 200ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#4A90D9';
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.href)) {
                  e.currentTarget.style.color = '#2D3748';
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="desktop-nav">
          <Link href="/login">
            <button style={{
              background: 'transparent',
              color: '#2D3748',
              padding: '10px 20px',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 200ms',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#4A90D9'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#2D3748'}
            >
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button style={{
              background: '#4A90D9',
              color: 'white',
              padding: '10px 24px',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '14px',
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
              Sign Up
            </button>
          </Link>
        </div>

        {/* Talk to Aura Button — hidden, coming soon */}
        {/* <Link href="/community" className="desktop-nav">
          <button style={{
            background: '#4A90D9',
            color: 'white',
            padding: '10px 24px',
            borderRadius: '50px',
            fontWeight: 600,
            fontSize: '14px',
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
            Talk to Aura
          </button>
        </Link> */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={24} color="#2D3748" /> : <Menu size={24} color="#2D3748" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          background: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          padding: '20px',
        }} className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 16px',
                fontSize: '15px',
                fontWeight: isActive(link.href) ? 700 : 500,
                color: isActive(link.href) ? '#4A90D9' : '#2D3748',
                textDecoration: 'none',
                borderRadius: '8px',
                background: isActive(link.href) ? '#EBF5FF' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <button style={{
                width: '100%',
                background: 'transparent',
                color: '#2D3748',
                padding: '12px 16px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}>
                Login
              </button>
            </Link>
            <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
              <button style={{
                width: '100%',
                background: '#4A90D9',
                color: 'white',
                padding: '12px 16px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'center',
              }}>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          nav {
            padding: 0 20px !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
