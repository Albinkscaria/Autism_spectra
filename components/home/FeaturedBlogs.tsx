'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Brain, Heart, BookOpen } from 'lucide-react';

export default function FeaturedBlogs() {
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

  const blogs = [
    {
      category: 'Research',
      title: 'Understanding Sensory Processing in Autism',
      excerpt: 'New research reveals how sensory differences affect daily life and what helps most.',
      author: 'Dr. Sarah Ahmed',
      gradient: 'linear-gradient(135deg,#4A90D9,#6BA8E0)',
      icon: Brain,
    },
    {
      category: 'Parenting',
      title: '5 Strategies for Supporting Your Child at Home',
      excerpt: 'Practical, evidence-based approaches that parents can start using today.',
      author: 'Speelans AI Team',
      gradient: 'linear-gradient(135deg,#5BBF8E,#7DD4A8)',
      icon: Heart,
    },
    {
      category: 'Education',
      title: 'How Visual Schedules Transform Daily Routines',
      excerpt: 'Why visual structure works and how to create one that fits your child.',
      author: 'Dr. Priya Kumar',
      gradient: 'linear-gradient(135deg,#F9A86C,#FBB98A)',
      icon: BookOpen,
    },
  ];

  return (
    <section ref={sectionRef} style={{ background: 'white', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="fade-up">
          <div style={{ color: '#4A90D9', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', marginBottom: '12px' }}>
            LATEST ARTICLES
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#2D3748', marginBottom: '8px' }}>
            Latest from the Blog
          </h2>
          <p style={{ color: '#718096', fontSize: '17px' }}>
            Insights, research and stories from the autism community
          </p>
        </div>

        {/* Blog Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {loading ? (
            // Skeleton loaders
            [1, 2, 3].map((i) => (
              <div key={i} className="skeleton" style={{
                background: 'linear-gradient(90deg, #E2EBF6 25%, #F0F7FF 50%, #E2EBF6 75%)',
                backgroundSize: '400px 100%',
                animation: 'shimmer 1.8s infinite',
                borderRadius: '20px',
                height: '380px',
              }} />
            ))
          ) : (
            blogs.map((blog, index) => {
              const Icon = blog.icon;
              return (
                <div
                  key={blog.title}
                  className="fade-up"
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(74,144,217,0.08)',
                    border: '1px solid #E2EBF6',
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Color Banner */}
                  <div style={{
                    height: '140px',
                    background: blog.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon size={48} color="white" />
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '24px' }}>
                    {/* Category Badge */}
                    <div style={{
                      display: 'inline-block',
                      background: '#EBF5FF',
                      color: '#4A90D9',
                      padding: '4px 12px',
                      borderRadius: '50px',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}>
                      {blog.category}
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#2D3748',
                      marginTop: '12px',
                      lineHeight: 1.4,
                    }}>
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p style={{
                      fontSize: '14px',
                      color: '#718096',
                      marginTop: '8px',
                      lineHeight: 1.6,
                    }}>
                      {blog.excerpt}
                    </p>

                    {/* Footer */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '16px',
                    }}>
                      <span style={{ fontSize: '13px', color: '#718096' }}>
                        {blog.author}
                      </span>
                      <Link href="/blog" style={{
                        color: '#4A90D9',
                        fontWeight: 600,
                        fontSize: '14px',
                        textDecoration: 'none',
                      }}>
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
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
