'use client';

import { useState } from 'react';
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

function BlogCard({ post }: {
  post: {
    id: string;
    title: string;
    slug: string;
    content: string;
    category: string;
    readTimeMins: number;
    likesCount: number;
    publishedAt: Date | null;
    author: { fullName: string; avatarUrl: string | null };
  };
}) {
  const excerpt = post.content.slice(0, 120) + '...';
  const bgColor = CATEGORY_COLORS[post.category] ?? '#EBF5FF';
  const textColor = CATEGORY_TEXT[post.category] ?? '#4A90D9';

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(74,144,217,0.08)',
        overflow: 'hidden',
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
        <div style={{
          height: '160px',
          background: `linear-gradient(135deg, ${bgColor}, ${bgColor}cc)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
        }}>
          {post.category === 'Research' ? '🔬' :
           post.category === 'Parenting Tips' ? '👨‍👩‍👧' :
           post.category === 'Personal Stories' ? '💬' :
           post.category === 'Therapist Insights' ? '🧠' :
           post.category === 'Legal & Rights' ? '⚖️' :
           post.category === 'School & Education' ? '🏫' :
           post.category === 'Adult Autism' ? '🌟' : '💡'}
        </div>
        <div style={{ padding: '24px' }}>
          <span style={{
            display: 'inline-block',
            background: bgColor,
            color: textColor,
            padding: '4px 14px',
            borderRadius: '50px',
            fontSize: '12px',
            fontWeight: 600,
            marginBottom: '12px',
          }}>
            {post.category}
          </span>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#2D3748',
            marginBottom: '10px',
            lineHeight: 1.4,
          }}>
            {post.title}
          </h3>
          <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.6, marginBottom: '16px' }}>
            {excerpt}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px', color: '#A0AEC0' }}>
            <span>By {post.author.fullName}</span>
            <span>{post.readTimeMins} min read · ❤️ {post.likesCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function BlogFilters({
  categories,
  selected,
  onChange,
}: {
  categories: string[];
  selected: string | null;
  onChange: (cat: string | null) => void;
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
      <button
        onClick={() => onChange(null)}
        style={{
          padding: '8px 20px',
          borderRadius: '50px',
          border: '2px solid',
          borderColor: selected === null ? '#4A90D9' : '#E2E8F0',
          background: selected === null ? '#4A90D9' : 'white',
          color: selected === null ? 'white' : '#718096',
          fontWeight: 600,
          fontSize: '14px',
          cursor: 'pointer',
          transition: 'all 0.15s',
        }}
      >
        All
      </button>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          style={{
            padding: '8px 20px',
            borderRadius: '50px',
            border: '2px solid',
            borderColor: selected === cat ? '#4A90D9' : '#E2E8F0',
            background: selected === cat ? '#4A90D9' : 'white',
            color: selected === cat ? 'white' : '#718096',
            fontWeight: 600,
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.15s',
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: categoriesData } = trpc.blog.getCategories.useQuery();
  const { data, isLoading } = trpc.blog.list.useQuery({
    category: selectedCategory ?? undefined,
    limit: 20,
  });

  type BlogPost = {
    id: string;
    title: string;
    slug: string;
    content: string;
    category: string;
    readTimeMins: number;
    likesCount: number;
    publishedAt: Date | null;
    author: { fullName: string; avatarUrl: string | null };
  };

  const posts: BlogPost[] = (data?.posts ?? []) as BlogPost[];
  const categories: string[] = categoriesData ?? [];

  return (
    <div style={{ background: '#F0F7FF', minHeight: '100vh', fontFamily: 'Nunito, sans-serif' }}>
      <Navbar />
      <div style={{ padding: '60px 80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 800, color: '#2D3748', marginBottom: '16px' }}>
            Blog & News
          </h1>
          <p style={{ fontSize: '18px', color: '#718096', marginBottom: '40px' }}>
            Discover insights, tips, and the latest news about autism support and care.
          </p>

          <BlogFilters
            categories={categories}
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />

          {isLoading ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '32px',
            }}>
              {[...Array(6)].map((_, i) => (
                <div key={i} style={{
                  background: 'white',
                  borderRadius: '20px',
                  height: '360px',
                  opacity: 0.5,
                  animation: 'pulse 1.5s ease-in-out infinite',
                }} />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#718096' }}>
              <p style={{ fontSize: '18px' }}>No posts found in this category.</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '32px',
            }}>
              {posts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
