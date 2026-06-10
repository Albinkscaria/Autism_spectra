'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { useGameStore } from '@/lib/stores/gameStore';

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  href: string;
}

export function GameCard({ id, title, description, thumbnail, href }: GameCardProps) {
  const [mounted, setMounted] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [badgesList, setBadgesList] = useState<any[]>([]);
  
  useEffect(() => {
    setMounted(true);
    
    // Get data from store after mount
    const progress = useGameStore.getState().getGameProgress(id);
    const badges = useGameStore.getState().getBadgesByGame(id);
    
    setCompletionPercentage(Math.min(progress?.completionPercentage || 0, 100));
    setBadgesList(badges);
    
    // Subscribe to store changes
    const unsubscribe = useGameStore.subscribe((state) => {
      const newProgress = state.progress[id];
      const newBadges = state.badges.filter((b) => b.gameId === id);
      
      setCompletionPercentage(Math.min(newProgress?.completionPercentage || 0, 100));
      setBadgesList(newBadges);
    });
    
    return () => unsubscribe();
  }, [id]);
  
  if (!mounted) {
    return (
      <Card className="overflow-hidden h-full">
        <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
          <span className="text-4xl sm:text-5xl lg:text-6xl" role="img" aria-label={title}>
            {thumbnail}
          </span>
        </div>
        <div className="p-4 sm:p-6 flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-800">{title}</h3>
          <p className="text-sm sm:text-base text-slate-600 mb-4 flex-1">{description}</p>
          <div className="text-center">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              Unlimited Play
            </span>
          </div>
        </div>
      </Card>
    );
  }
  
  return (
    <Link href={href}>
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer h-full">
        <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
          <span className="text-4xl sm:text-5xl lg:text-6xl" role="img" aria-label={title}>
            {thumbnail}
          </span>
        </div>
        <div className="p-4 sm:p-6 flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-800">{title}</h3>
          <p className="text-sm sm:text-base text-slate-600 mb-4 flex-1">{description}</p>
          
          {/* Badges */}
          {badgesList.length > 0 && (
            <div className="flex gap-1 sm:gap-2 flex-wrap mb-3">
              {badgesList.map((badge) => (
                <span
                  key={badge.id}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"
                  title={badge.description}
                >
                  🏆 <span className="hidden sm:inline ml-1">{badge.name}</span>
                </span>
              ))}
            </div>
          )}
          
          <div className="text-center">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              Unlimited Play
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
