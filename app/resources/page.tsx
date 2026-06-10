'use client';

import { useState } from 'react';
import { trpc } from '@/lib/trpc/client';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/home/Footer';

const CATEGORY_ICONS: Record<string, string> = {
  'Visual Schedules': '📅',
  'Communication Boards': '🗣️',
  'Social Stories': '📖',
  'IEP Resources': '🏫',
  'Sensory Support': '🎨',
  'Legal Resources': '⚖️',
};

const FILE_TYPE_ICONS: Record<string, string> = {
  pdf: '📄',
  doc: '📝',
  mp4: '🎬',
  default: '📎',
};

function getFileType(url: string) {
  const ext = url.split('.').pop()?.toLowerCase() ?? 'default';
  return FILE_TYPE_ICONS[ext] ?? FILE_TYPE_ICONS.default;
}

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [downloading, setDownloading] = useState<string | null>(null);

  type Resource = {
    id: string;
    title: string;
    description: string;
    category: string;
    fileUrl: string;
  };

  const { data: categoriesData } = trpc.resource.getCategories.useQuery();
  const categories: string[] = (categoriesData ?? []) as string[];
  const { data: resourcesData, isLoading } = trpc.resource.list.useQuery({
    category: selectedCategory ?? undefined,
  });
  const resources: Resource[] = (resourcesData ?? []) as Resource[];

  const downloadMutation = trpc.resource.download.useMutation();

  const handleDownload = async (id: string, title: string, fileUrl: string) => {
    setDownloading(id);
    try {
      await downloadMutation.mutateAsync({ id });
      // Trigger browser download
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = title;
      a.target = '_blank';
      a.click();
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div style={{ background: '#F0F7FF', minHeight: '100vh', fontFamily: 'Nunito, sans-serif' }}>
      <Navbar />
      <div style={{ padding: '60px 80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 800, color: '#2D3748', marginBottom: '16px' }}>
            Resource Library
          </h1>
          <p style={{ fontSize: '18px', color: '#718096', marginBottom: '40px', maxWidth: '700px', lineHeight: 1.7 }}>
            Access a curated collection of educational resources, toolkits, and guides for individuals with autism and their families.
          </p>

          {/* Category filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
            <button
              onClick={() => setSelectedCategory(null)}
              style={{
                padding: '8px 20px', borderRadius: '50px', border: '2px solid',
                borderColor: selectedCategory === null ? '#4A90D9' : '#E2E8F0',
                background: selectedCategory === null ? '#4A90D9' : 'white',
                color: selectedCategory === null ? 'white' : '#718096',
                fontWeight: 600, fontSize: '14px', cursor: 'pointer',
              }}
            >
              All
            </button>
            {categories.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 20px', borderRadius: '50px', border: '2px solid',
                  borderColor: selectedCategory === cat ? '#4A90D9' : '#E2E8F0',
                  background: selectedCategory === cat ? '#4A90D9' : 'white',
                  color: selectedCategory === cat ? 'white' : '#718096',
                  fontWeight: 600, fontSize: '14px', cursor: 'pointer',
                }}
              >
                {CATEGORY_ICONS[cat] ?? '📁'} {cat}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[...Array(4)].map((_, i) => (
                <div key={i} style={{ background: 'white', borderRadius: '16px', height: '90px', opacity: 0.5 }} />
              ))}
            </div>
          ) : resources.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#718096' }}>
              <p style={{ fontSize: '18px' }}>No resources found in this category.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {resources.map((resource: Resource) => (
                <div
                  key={resource.id}
                  style={{
                    background: 'white', borderRadius: '16px', padding: '24px',
                    boxShadow: '0 2px 12px rgba(74,144,217,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px',
                    border: '2px solid transparent', transition: 'border-color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = '#4A90D940'}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                    <div style={{
                      width: '50px', height: '50px', borderRadius: '12px',
                      background: '#EBF5FF', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '24px', flexShrink: 0,
                    }}>
                      {getFileType(resource.fileUrl)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 700, color: '#2D3748' }}>
                        {resource.title}
                      </h3>
                      <p style={{ margin: '0 0 6px', fontSize: '13px', color: '#718096', lineHeight: 1.5 }}>
                        {resource.description}
                      </p>
                      <span style={{
                        display: 'inline-block', background: '#EBF5FF', color: '#4A90D9',
                        padding: '2px 10px', borderRadius: '50px', fontSize: '12px', fontWeight: 600,
                      }}>
                        {CATEGORY_ICONS[resource.category] ?? '📁'} {resource.category}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(resource.id, resource.title, resource.fileUrl)}
                    disabled={downloading === resource.id}
                    style={{
                      padding: '10px 22px', borderRadius: '50px',
                      background: downloading === resource.id ? '#A0AEC0' : '#4A90D9',
                      color: 'white', border: 'none', fontWeight: 600,
                      fontSize: '14px', cursor: downloading === resource.id ? 'not-allowed' : 'pointer',
                      flexShrink: 0, transition: 'background 0.15s',
                    }}
                    aria-label={`Download ${resource.title}`}
                  >
                    {downloading === resource.id ? '⏳ Downloading...' : '⬇️ Download'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
