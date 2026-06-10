'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { trpc } from '@/lib/trpc/client';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/home/Footer';

const CATEGORY_COLORS: Record<string, string> = {
  Research: '#E0F2FE',
  'Parenting Tips': '#DCFCE7',
  'Personal Stories': '#FEF3C7',
  'Therapist Insights': '#EDE9FE',
  'Legal & Rights': '#FFE4E6',
  'School & Education': '#DBEAFE',
  'Adult Autism': '#F0FDF4',
  'Tools & Technology': '#FFF7ED',
};

const CATEGORY_TEXT: Record<string, string> = {
  Research: '#0369A1',
  'Parenting Tips': '#15803D',
  'Personal Stories': '#92400E',
  'Therapist Insights': '#6D28D9',
  'Legal & Rights': '#BE123C',
  'School & Education': '#1D4ED8',
  'Adult Autism': '#166534',
  'Tools & Technology': '#C2410C',
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [liked, setLiked] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const { data: post, isLoading, isError } = trpc.blog.getBySlug.useQuery({ slug });

  useEffect(() => {
    const likedPosts: string[] = JSON.parse(localStorage.getItem('auticare_liked_posts') ?? '[]');
    setLiked(likedPosts.includes(slug));
  }, [slug]);

  const handleLike = () => {
    const likedPosts: string[] = JSON.parse(localStorage.getItem('auticare_liked_posts') ?? '[]');
    if (liked) {
      const updated = likedPosts.filter(s => s !== slug);
      localStorage.setItem('auticare_liked_posts', JSON.stringify(updated));
    } else {
      likedPosts.push(slug);
      localStorage.setItem('auticare_liked_posts', JSON.stringify(likedPosts));
    }
    setLiked(!liked);
  };

  const handleReadAloud = () => {
    if (!post) return;
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(`${post.title}. ${post.content}`);
    utterance.onend = () => setIsReading(false);
    window.speechSynthesis.speak(utterance);
    setIsReading(true);
  };

  if (isLoading) {
    return (
      <div style={{ background: '#F0F7FF', minHeight: '100vh', fontFamily: 'Nunito, sans-serif' }}>
        <Navbar />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px' }}>
          <div style={{ height: '40px', background: '#E2E8F0', borderRadius: '8px', marginBottom: '24px', opacity: 0.5 }} />
          <div style={{ height: '200px', background: '#E2E8F0', borderRadius: '16px', opacity: 0.5 }} />
        </div>
        <Footer />
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div style={{ background: '#F0F7FF', minHeight: '100vh', fontFamily: 'Nunito, sans-serif' }}>
        <Navbar />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
          <p style={{ fontSize: '20px', color: '#718096' }}>Post not found.</p>
          <Link href="/blog" style={{ color: '#4A90D9', fontWeight: 600 }}>← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const bgColor = CATEGORY_COLORS[post.category] ?? '#EBF5FF';
  const textColor = CATEGORY_TEXT[post.category] ?? '#4A90D9';

  return (
    <div style={{ background: '#F0F7FF', minHeight: '100vh', fontFamily: 'Nunito, sans-serif' }}>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <Link href="/blog" style={{ color: '#4A90D9', fontWeight: 600, fontSize: '15px', display: 'inline-block', marginBottom: '32px' }}>
          ← Back to Blog
        </Link>

        <span style={{
          display: 'inline-block',
          background: bgColor,
          color: textColor,
          padding: '4px 16px',
          borderRadius: '50px',
          fontSize: '13px',
          fontWeight: 600,
          marginBottom: '20px',
        }}>
          {post.category}
        </span>

        <h1 style={{ fontSize: '36px', fontWeight: 800, color: '#2D3748', marginBottom: '16px', lineHeight: 1.3 }}>
          {post.title}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px', color: '#A0AEC0', fontSize: '14px' }}>
          <span>By {post.author.fullName}</span>
          <span>·</span>
          <span>{post.readTimeMins} min read</span>
          {post.publishedAt && (
            <>
              <span>·</span>
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </>
          )}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
          <button
            onClick={handleReadAloud}
            style={{
              padding: '10px 20px',
              borderRadius: '50px',
              border: '2px solid #4A90D9',
              background: isReading ? '#4A90D9' : 'white',
              color: isReading ? 'white' : '#4A90D9',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
            }}
            aria-label={isReading ? 'Stop reading' : 'Read article aloud'}
          >
            {isReading ? '⏹ Stop Reading' : '🔊 Read Aloud'}
          </button>

          <button
            onClick={handleLike}
            style={{
              padding: '10px 20px',
              borderRadius: '50px',
              border: '2px solid',
              borderColor: liked ? '#E53E3E' : '#E2E8F0',
              background: liked ? '#FFF5F5' : 'white',
              color: liked ? '#E53E3E' : '#718096',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
            }}
            aria-label={liked ? 'Unlike this post' : 'Like this post'}
          >
            {liked ? '❤️ Liked' : '🤍 Like'} · {post.likesCount + (liked ? 1 : 0)}
          </button>
        </div>

        {/* Content */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 4px 20px rgba(74,144,217,0.08)',
          fontSize: '17px',
          lineHeight: 1.8,
          color: '#4A5568',
          whiteSpace: 'pre-wrap',
        }}>
          {post.content}
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {(post.tags as string[]).map((tag: string) => (
              <span key={tag} style={{
                padding: '4px 14px',
                background: '#EBF5FF',
                color: '#4A90D9',
                borderRadius: '50px',
                fontSize: '13px',
                fontWeight: 500,
              }}>
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
