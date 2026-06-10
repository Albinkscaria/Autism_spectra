'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FeaturedDoctors() {
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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
  }, [loading]);

  const doctors = [
    { initials: 'SA', name: 'Dr. Sarah Ahmed', specialty: 'ABA Therapist', rating: 4.9, fee: '$80/session' },
    { initials: 'MR', name: 'Dr. Michael Ross', specialty: 'Child Psychiatrist', rating: 4.8, fee: '$95/session' },
    { initials: 'PK', name: 'Dr. Priya Kumar', specialty: 'Speech Therapist', rating: 4.7, fee: '$70/session' },
  ];

  return (
    <section ref={sectionRef} style={{ background: '#F0F7FF', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="fade-up">
          <div style={{ color: '#4A90D9', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', marginBottom: '12px' }}>
            OUR SPECIALISTS
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#2D3748', marginBottom: '8px' }}>
            Meet Our Specialists
          </h2>
          <p style={{ color: '#718096', fontSize: '17px' }}>
            Verified professionals dedicated to autism care and support
          </p>
        </div>

        {/* Doctor Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          {loading ? (
            // Skeleton loaders
            [1, 2, 3].map((i) => (
              <div key={i} className="skeleton" style={{
                background: 'linear-gradient(90deg, #E2EBF6 25%, #F0F7FF 50%, #E2EBF6 75%)',
                backgroundSize: '400px 100%',
                animation: 'shimmer 1.8s infinite',
                borderRadius: '20px',
                height: '320px',
              }} />
            ))
          ) : (
            doctors.map((doctor, index) => (
              <div
                key={doctor.name}
                className="fade-up"
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  boxShadow: '0 4px 20px rgba(74,144,217,0.08)',
                  textAlign: 'center',
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Avatar */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: '#EBF5FF',
                  border: '3px solid #4A90D9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <span style={{ fontSize: '24px', fontWeight: 700, color: '#4A90D9' }}>
                    {doctor.initials}
                  </span>
                </div>

                {/* Name */}
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#2D3748' }}>
                  {doctor.name}
                </h3>

                {/* Specialty Badge */}
                <div style={{
                  display: 'inline-block',
                  marginTop: '8px',
                  background: '#EBF5FF',
                  color: '#4A90D9',
                  padding: '4px 14px',
                  borderRadius: '50px',
                  fontSize: '13px',
                  fontWeight: 600,
                }}>
                  {doctor.specialty}
                </div>

                {/* Star Rating */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginTop: '12px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#F6C90E">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span style={{ marginLeft: '4px', color: '#718096', fontSize: '14px' }}>
                    {doctor.rating}
                  </span>
                </div>

                {/* Fee */}
                <p style={{ color: '#718096', fontSize: '14px', marginTop: '8px' }}>
                  {doctor.fee}
                </p>

                {/* Book Now Button */}
                <button style={{
                  marginTop: '20px',
                  width: '100%',
                  background: '#4A90D9',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '15px',
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
                  Book Now
                </button>
              </div>
            ))
          )}
        </div>

        {/* View All Link */}
        {!loading && (
          <div style={{ textAlign: 'right' }}>
            <Link href="/doctors" style={{ color: '#4A90D9', fontWeight: 600, fontSize: '16px', textDecoration: 'none' }}>
              View All Specialists →
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .fade-up {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .skeleton {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
