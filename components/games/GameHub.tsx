'use client';

import { GameCard } from './GameCard';

const GAMES = [
  {
    id: 'emotion-explorer',
    title: 'Emotion Explorer',
    description: 'Learn to recognize and understand different emotions through facial expressions and scenarios.',
    thumbnail: '😊',
    href: '/games/emotion-explorer',
  },
  {
    id: 'pattern-planet',
    title: 'Pattern Planet',
    description: 'Discover patterns and sequences to strengthen logical thinking and problem-solving skills.',
    thumbnail: '🔷',
    href: '/games/pattern-planet',
  },
  {
    id: 'daily-life-simulator',
    title: 'Daily Life Simulator',
    description: 'Practice everyday social situations in a safe, supportive environment.',
    thumbnail: '🏪',
    href: '/games/daily-life-simulator',
  },
  {
    id: 'focus-bubbles',
    title: 'Focus Bubbles',
    description: 'Improve concentration and attention with this calming, interactive bubble-popping game.',
    thumbnail: '🫧',
    href: '/games/focus-bubbles',
  },
  {
    id: 'word-bridge',
    title: 'Word Bridge',
    description: 'Build vocabulary and language connections by finding words that link concepts together.',
    thumbnail: '🌉',
    href: '/games/word-bridge',
  },
  {
    id: 'routine-builder',
    title: 'Routine Builder',
    description: 'Create and organize daily routines to build structure and independence.',
    thumbnail: '📅',
    href: '/games/routine-builder',
  },
];

export function GameHub() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {GAMES.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </div>
  );
}
