'use client';

import { use } from 'react';
import Link from 'next/link';
import { trpc } from '@/lib/trpc/client';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/home/Footer';

function PostCard({ post }: {
  post: {
    id: string;
    content: string;
    isAnonymous: boolean;
    createdAt: string | Date;
    user: { fullName: string; avatarUrl: string | null };
  };
}) {
  const displayName = post.isAnonymous ? 'Anonymous Member' : post.user.fullName;
  const initials = displayName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  const createdAt = typeof post.createdAt === 'string' ? new Date(post.createdAt) : post.createdAt;

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 2px 12px rgba(74,144,217,0.07)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
        <div style={{
          width: '42px', height: '42px', borderRadius: '50%',
          background: '#4A90D920', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '14px', fontWeight: 700, color: '#4A90D9', flexShrink: 0,
        }}>
          {initials}
        </div>
        <div>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#2D3748' }}>{displayName}</p>
          <p style={{ margin: 0, fontSize: '12px', color: '#A0AEC0' }}>
            {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
          </p>
        </div>
      </div>
      <p style={{ margin: 0, fontSize: '15px', color: '#4A5568', lineHeight: 1.7 }}>{post.content}</p>
    </div>
  );
}

export default function CirclePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data, isLoading, isError } = trpc.community.getCirclePosts.useQuery({ groupId: id });

  if (isLoading) {
    return (
      <div style={{ background: '#F0F7FF', minHeight: '100vh', fontFamily: 'Nunito, sans-serif' }}>
        <Navbar />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px' }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '16px', height: '120px', marginBottom: '16px', opacity: 0.5 }} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div style={{ background: '#F0F7FF', minHeight: '100vh', fontFamily: 'Nunito, sans-serif' }}>
        <Navbar />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
          <p style={{ fontSize: '20px', color: '#718096' }}>Circle not found.</p>
          <Link href="/community" style={{ color: '#4A90D9', fontWeight: 600 }}>← Back to Community</Link>
        </div>
        <Footer />
      </div>
    );
  }

  type CommunityPost = {
    id: string;
    content: string;
    isAnonymous: boolean;
    createdAt: string | Date;
    user: { fullName: string; avatarUrl: string | null };
  };

  const { group } = data;
  const posts = data.posts as CommunityPost[];

  return (
    <div style={{ background: '#F0F7FF', minHeight: '100vh', fontFamily: 'Nunito, sans-serif' }}>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <Link href="/community" style={{ color: '#4A90D9', fontWeight: 600, fontSize: '15px', display: 'inline-block', marginBottom: '32px' }}>
          ← Back to Community
        </Link>

        <div style={{ background: 'white', borderRadius: '20px', padding: '32px', boxShadow: '0 4px 20px rgba(74,144,217,0.08)', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#2D3748', marginBottom: '10px' }}>{group.name}</h1>
          <p style={{ fontSize: '15px', color: '#718096', marginBottom: '16px', lineHeight: 1.6 }}>{group.description}</p>
          <span style={{ fontSize: '14px', color: '#A0AEC0' }}>👥 {group.memberCount.toLocaleString()} members</span>
        </div>

        {/* Read-only notice */}
        <div style={{
          background: '#FFF7ED', border: '2px solid #FED7AA', borderRadius: '12px',
          padding: '14px 20px', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          <span>🔒</span>
          <p style={{ margin: 0, fontSize: '14px', color: '#92400E' }}>
            Posting requires an account. You are viewing in read-only mode.
          </p>
        </div>

        {posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#A0AEC0' }}>
            <p style={{ fontSize: '18px' }}>No posts yet. Be the first to share!</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {posts.map(post => <PostCard key={post.id} post={post} />)}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
