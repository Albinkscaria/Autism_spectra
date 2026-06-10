'use client';

import { Nunito } from 'next/font/google';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/home/Footer';
import { GameHub } from '@/components/games/GameHub';

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function GamesPage() {
  return (
    <div className={nunito.className} style={{ background: '#F0F7FF', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '60px 80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 800,
              marginBottom: '16px',
              color: '#2D3748',
            }}>
              Interactive Games
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#718096',
              maxWidth: '800px',
              lineHeight: 1.7,
            }}>
              Welcome to our collection of sensory-friendly games designed to support learning, 
              social skills, and emotional development. Each game uses positive reinforcement 
              and gentle guidance to create a safe, encouraging environment.
            </p>
          </div>
          
          <GameHub />
        </div>
      </div>
      <Footer />
    </div>
  );
}
