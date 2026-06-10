'use client';

import Link from 'next/link';
import { trpc } from '@/lib/trpc/client';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/home/Footer';

const TYPE_COLORS: Record<string, { bg: string; text: string; emoji: string }> = {
  support: { bg: '#DCFCE7', text: '#15803D', emoji: '🤝' },
  professional: { bg: '#DBEAFE', text: '#1D4ED8', emoji: '🎓' },
};

function CircleCard({ circle }: {
  circle: {
    id: string;
    name: string;
    type: string;
    description: string;
    memberCount: number;
    _count: { posts: number };
  };
}) {
  const colors = TYPE_COLORS[circle.type] ?? { bg: '#EBF5FF', text: '#4A90D9', emoji: '💬' };

  return (
    <Link href={`/community/${circle.id}`} style={{ textDecoration: 'none' }}>
      <div
        style={{
          background: 'white',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: '0 4px 20px rgba(74,144,217,0.08)',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
          height: '100%',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(74,144,217,0.16)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(74,144,217,0.08)';
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '50%',
            background: colors.bg, display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '28px', flexShrink: 0,
          }}>
            {colors.emoji}
          </div>
          <div style={{ flex: 1 }}>
            <span style={{
              display: 'inline-block', background: colors.bg, color: colors.text,
              padding: '2px 12px', borderRadius: '50px', fontSize: '12px',
              fontWeight: 600, marginBottom: '6px', textTransform: 'capitalize',
            }}>
              {circle.type}
            </span>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#2D3748', margin: 0 }}>
              {circle.name}
            </h3>
          </div>
        </div>

        <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.6, marginBottom: '20px' }}>
          {circle.description}
        </p>

        <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: '#A0AEC0' }}>
          <span>👥 {circle.memberCount.toLocaleString()} members</span>
          <span>💬 {circle._count.posts} posts</span>
        </div>
      </div>
    </Link>
  );
}

type Circle = {
  id: string;
  name: string;
  type: string;
  description: string;
  memberCount: number;
  _count: { posts: number };
};

export default function CommunityPage() {
  const { data, isLoading } = trpc.community.listCircles.useQuery();
  const circles = (data ?? []) as Circle[];

  return (
    <div style={{ background: '#F0F7FF', minHeight: '100vh', fontFamily: 'Nunito, sans-serif' }}>
      <Navbar />
      <div style={{ padding: '60px 80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 800, color: '#2D3748', marginBottom: '16px' }}>
              Community Support Circles
            </h1>
            <p style={{ fontSize: '18px', color: '#718096', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Connect with others who understand your journey. Browse our safe, moderated communities.
            </p>
          </div>

          {/* Read-only notice */}
          <div style={{
            background: '#FFF7ED', border: '2px solid #FED7AA', borderRadius: '12px',
            padding: '16px 24px', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <span style={{ fontSize: '20px' }}>👁️</span>
            <p style={{ margin: 0, fontSize: '15px', color: '#92400E' }}>
              You are browsing in guest mode. Posts are read-only. Creating an account will allow you to post and engage with the community.
            </p>
          </div>

          {isLoading ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px' }}>
              {[...Array(4)].map((_, i) => (
                <div key={i} style={{ background: 'white', borderRadius: '20px', height: '220px', opacity: 0.5 }} />
              ))}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px' }}>
              {circles?.map(circle => <CircleCard key={circle.id} circle={circle} />)}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
