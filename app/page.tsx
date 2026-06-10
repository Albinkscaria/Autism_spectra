'use client';

import Image from 'next/image';
import { Nunito } from 'next/font/google';
import { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/home/Hero';
import WhatWeOffer from '@/components/home/WhatWeOffer';
import StatsBanner from '@/components/home/StatsBanner';
import FeaturedDoctors from '@/components/home/FeaturedDoctors';
import FeaturedBlogs from '@/components/home/FeaturedBlogs';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/home/CTABanner';
import Footer from '@/components/home/Footer';

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

// --------------- Live particle canvas ---------------
function SplashCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const cx = W / 2;
    const cy = H / 2;

    interface P {
      x: number; y: number;
      radius: number;
      alpha: number;
      color: string;
      orbitR: number;
      orbitSpeed: number;
      orbitAngle: number;
      type: 'orbit' | 'float';
      vx: number; vy: number;
      trail: { x: number; y: number }[];
    }

    // Website palette — soft blues, greens, peach
    const COLORS = ['#4A90D9','#63b3ed','#5BBF8E','#68d391','#F9A86C','#90cdf4','#9ae6b4'];
    const particles: P[] = [];

    for (let i = 0; i < 55; i++) {
      const orbitR = 90 + Math.random() * 160;
      particles.push({
        x: cx, y: cy, vx: 0, vy: 0,
        radius: 1.2 + Math.random() * 2.2,
        alpha: 0.5 + Math.random() * 0.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        orbitR,
        orbitSpeed: (0.004 + Math.random() * 0.007) * (Math.random() > 0.5 ? 1 : -1),
        orbitAngle: Math.random() * Math.PI * 2,
        type: 'orbit',
        trail: [],
      });
    }

    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 0.8 + Math.random() * 1.4,
        alpha: 0.12 + Math.random() * 0.25,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        orbitR: 0, orbitSpeed: 0, orbitAngle: 0,
        type: 'float',
        trail: [],
      });
    }

    let t = 0;

    function draw() {
      if (canvas!.width !== window.innerWidth || canvas!.height !== window.innerHeight) {
        W = canvas!.width = window.innerWidth;
        H = canvas!.height = window.innerHeight;
      }

      // Light fade — matches white/light-blue bg
      ctx!.fillStyle = 'rgba(240,247,255,0.22)';
      ctx!.fillRect(0, 0, W, H);

      t += 0.01;

      for (const p of particles) {
        if (p.type === 'orbit') {
          p.orbitAngle += p.orbitSpeed;
          const r = p.orbitR + Math.sin(t * 2 + p.orbitAngle) * 10;
          p.x = cx + Math.cos(p.orbitAngle) * r;
          p.y = cy + Math.sin(p.orbitAngle) * r;
        } else {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
        }

        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 14) p.trail.shift();

        if (p.trail.length > 1) {
          ctx!.beginPath();
          ctx!.moveTo(p.trail[0].x, p.trail[0].y);
          for (let k = 1; k < p.trail.length; k++) ctx!.lineTo(p.trail[k].x, p.trail[k].y);
          ctx!.strokeStyle = p.color;
          ctx!.globalAlpha = p.alpha * 0.2;
          ctx!.lineWidth = p.radius * 0.7;
          ctx!.stroke();
        }

        const grd = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        grd.addColorStop(0, p.color);
        grd.addColorStop(1, 'transparent');
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.globalAlpha = p.alpha * 0.45;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = p.alpha;
        ctx!.fill();
        ctx!.globalAlpha = 1;
      }

      // Soft central bloom in brand blue
      const bloom = ctx!.createRadialGradient(cx, cy, 0, cx, cy, 140);
      bloom.addColorStop(0, 'rgba(74,144,217,0.10)');
      bloom.addColorStop(0.5, 'rgba(91,191,142,0.05)');
      bloom.addColorStop(1, 'transparent');
      ctx!.beginPath();
      ctx!.arc(cx, cy, 140, 0, Math.PI * 2);
      ctx!.fillStyle = bloom;
      ctx!.globalAlpha = 1;
      ctx!.fill();

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();
  }, []);

  useEffect(() => {
    init();
    return () => cancelAnimationFrame(rafRef.current);
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  );
}
// -----------------------------------------------------

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const hideTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (showSplash) {
    return (
      <div
        className={nunito.className}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: '#F0F7FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          opacity: fadeOut ? 0 : 1,
          transition: 'opacity 800ms ease',
        }}
      >
        <SplashCanvas />

        {/* Logo + text on top */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          animation: 'splashFadeUp 1s cubic-bezier(0.22,1,0.36,1) 0.3s both',
        }}>
          <Image
            src="/images/speelan-ai-logo.svg"
            alt="Speelans AI"
            width={120}
            height={120}
            className="object-contain"
            style={{ filter: 'drop-shadow(0 0 20px rgba(74,144,217,0.35))' }}
          />
          <div style={{
            marginTop: '18px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: 'rgba(45,55,72,0.5)',
            animation: 'splashFadeUp 1s ease 0.7s both',
          }}>
            Support · Connection · Care
          </div>
        </div>

        <style jsx global>{`
          @keyframes splashFadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className={nunito.className} style={{ background: '#F0F7FF' }}>
      <Navbar />
      <Hero />
      <WhatWeOffer />
      <StatsBanner />
      <FeaturedDoctors />
      <FeaturedBlogs />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
