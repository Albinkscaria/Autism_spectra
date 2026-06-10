'use client';

import React, { useEffect, useRef } from 'react';
import { Stethoscope, Gamepad2, BookOpen, MessageCircle } from 'lucide-react';

export default function WhatWeOffer() {
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

  const cards: { icon: React.ElementType; iconBg: string; iconColor: string; title: string; description: string; comingSoon?: boolean }[] = [
    {
      icon: Stethoscope,
      iconBg: '#EBF5FF',
      iconColor: '#4A90D9',
      title: 'Connect with Specialists',
      description: 'Book verified autism specialists for video consultations from home.',
    },
    {
      icon: Gamepad2,
      iconBg: '#EDFBF4',
      iconColor: '#5BBF8E',
      title: 'Play & Learn Games',
      description: '6 specially designed games that build real-world skills in a calming way.',
    },
    {
      icon: BookOpen,
      iconBg: '#FFF4EC',
      iconColor: '#F9A86C',
      title: 'Read & Discover',
      description: 'Expert blogs, latest research, and news written for the autism community.',
    },
    {
      icon: MessageCircle,
      iconBg: '#F0EDFB',
      iconColor: '#9B8EC4',
      title: 'Aura AI Assistant',
      description: 'Our AI assistant trained for autism care is coming soon. Stay tuned!',
      comingSoon: true,
    },
  ];

  return (
    <section ref={sectionRef} style={{ background: 'white', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="fade-up">
          <div style={{ color: '#4A90D9', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', marginBottom: '12px' }}>
            OUR SERVICES
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#2D3748', marginBottom: '8px' }}>
            What We Offer
          </h2>
          <p style={{ color: '#718096', fontSize: '17px' }}>
            Everything your family needs, in one place
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="fade-up"
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  boxShadow: '0 4px 20px rgba(74,144,217,0.08)',
                  border: '1px solid #E2EBF6',
                  textAlign: 'center',
                  transition: 'transform 200ms, box-shadow 200ms',
                  transitionDelay: `${index * 100}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(74,144,217,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(74,144,217,0.08)';
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: card.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <Icon size={28} color={card.iconColor} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#2D3748', marginBottom: '10px' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.6 }}>
                  {card.description}
                </p>
                {card.comingSoon && (
                  <div style={{
                    marginTop: '14px',
                    display: 'inline-block',
                    background: '#FFF4EC',
                    color: '#F9A86C',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '4px 14px',
                    borderRadius: '50px',
                    letterSpacing: '0.5px',
                  }}>
                    Coming Soon
                  </div>
                )}
              </div>
            );
          })}
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
