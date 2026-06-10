'use client';

import { useEffect, useRef } from 'react';

export default function Testimonials() {
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

  const testimonials = [
    {
      quote: 'Speelans AI helped us find the perfect therapist for our son within days. The platform is so easy to use and calming.',
      initials: 'RM',
      name: 'Riya Mehta',
      role: 'Parent of autistic child',
    },
    {
      quote: 'The games section is wonderful. My daughter plays Emotion Explorer every day and her progress has been remarkable.',
      initials: 'JL',
      name: 'James Liu',
      role: 'Father, using Speelans AI for 6 months',
    },
    {
      quote: 'As a speech therapist, I recommend Speelans AI to all my patients\' families. The resources are clinically accurate and free.',
      initials: 'PK',
      name: 'Dr. Priya Kumar',
      role: 'Speech Therapist on Speelans AI',
    },
  ];

  return (
    <section ref={sectionRef} style={{ background: '#F5FFF8', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="fade-up">
          <div style={{ color: '#5BBF8E', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', marginBottom: '12px' }}>
            TESTIMONIALS
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#2D3748' }}>
            What Families Are Saying
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="fade-up"
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '36px 28px',
                boxShadow: '0 4px 20px rgba(91,191,142,0.08)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Large Quote Mark */}
              <div style={{
                fontSize: '80px',
                lineHeight: 0.8,
                color: '#4A90D9',
                opacity: 0.2,
                fontFamily: 'Georgia, serif',
              }}>
                "
              </div>

              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '4px', marginTop: '16px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} style={{ fontSize: '18px', color: '#F6C90E' }}>★</span>
                ))}
              </div>

              {/* Quote Text */}
              <p style={{
                fontSize: '15px',
                color: '#2D3748',
                lineHeight: 1.7,
                marginTop: '12px',
                fontStyle: 'italic',
              }}>
                {testimonial.quote}
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#EBF5FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#4A90D9' }}>
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#2D3748' }}>
                    {testimonial.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#718096' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
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
        }
      `}</style>
    </section>
  );
}
