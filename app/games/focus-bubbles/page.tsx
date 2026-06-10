'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGameStore } from '@/lib/stores/gameStore';
import Link from 'next/link';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const COLORS = [
  'bg-blue-200',
  'bg-green-200',
  'bg-purple-200',
  'bg-pink-200',
  'bg-yellow-200',
  'bg-cyan-200',
];

export default function FocusBubblesPage() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [score, setScore] = useState(0);
  const [missedTaps, setMissedTaps] = useState(0);
  const [totalTaps, setTotalTaps] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const [streak, setStreak] = useState(0);
  const [gameTime, setGameTime] = useState(0);
  
  const bubbleIdRef = useRef(0);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const spawnIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const gameTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const { updateProgress, awardBadge, getGameProgress } = useGameStore();
  const progress = getGameProgress('focus-bubbles');
  
  useEffect(() => {
    // Initialize progress if not exists
    if (!progress) {
      updateProgress('focus-bubbles', {
        score: 0,
        highScore: 0,
      });
    }
  }, [progress, updateProgress]);
  
  const spawnBubble = () => {
    if (!gameAreaRef.current || isPaused) return;
    
    const area = gameAreaRef.current.getBoundingClientRect();
    const size = Math.random() * 40 + 40; // 40-80px
    
    const newBubble: Bubble = {
      id: bubbleIdRef.current++,
      x: Math.random() * (area.width - size),
      y: Math.random() * (area.height - size),
      size,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
    
    setBubbles(prev => [...prev, newBubble]);
    
    // Remove bubble after 3 seconds if not clicked
    setTimeout(() => {
      setBubbles(prev => prev.filter(b => b.id !== newBubble.id));
    }, 3000);
  };
  
  const handleBubbleClick = (bubbleId: number) => {
    setBubbles(prev => prev.filter(b => b.id !== bubbleId));
    const newScore = score + 1;
    const newStreak = streak + 1;
    const newTotalTaps = totalTaps + 1;
    setScore(newScore);
    setStreak(newStreak);
    setTotalTaps(newTotalTaps);
    
    // Update progress - just keep badges, remove completion percentage
    const currentHighScore = progress?.highScore || 0;
    const newHighScore = Math.max(newScore, currentHighScore);
    const accuracy = Math.round((newScore / newTotalTaps) * 100);
    
    updateProgress('focus-bubbles', {
      score: newScore,
      highScore: newHighScore,
      accuracy,
    });
    
    // Award badges
    if (newScore === 50) {
      awardBadge({
        id: 'bubbles-50',
        gameId: 'focus-bubbles',
        name: 'Bubble Popper',
        description: 'Popped 50 bubbles',
      });
    }
    if (newScore === 100) {
      awardBadge({
        id: 'bubbles-100',
        gameId: 'focus-bubbles',
        name: 'Bubble Master',
        description: 'Popped 100 bubbles',
      });
    }
    if (newScore === 500) {
      awardBadge({
        id: 'bubbles-500',
        gameId: 'focus-bubbles',
        name: 'Bubble Legend',
        description: 'Popped 500 bubbles',
      });
    }
  };
  
  const handleMissedClick = () => {
    setMissedTaps(missedTaps + 1);
    setTotalTaps(totalTaps + 1);
  };
  
  const startGame = () => {
    setIsPlaying(true);
    setIsPaused(false);
    setShowEndScreen(false);
    setScore(0);
    setMissedTaps(0);
    setTotalTaps(0);
    setStreak(0);
    setGameTime(0);
    setBubbles([]);
    
    // Spawn bubbles at increasing rate
    let spawnRate = 1500; // Start at 1.5 seconds
    const spawnBubbles = () => {
      if (!isPaused) {
        spawnBubble();
      }
      spawnRate = Math.max(500, spawnRate - 10); // Gradually increase speed
      spawnIntervalRef.current = setTimeout(spawnBubbles, spawnRate);
    };
    spawnBubbles();
    
    // Game timer
    gameTimerRef.current = setInterval(() => {
      setGameTime(prev => prev + 1);
    }, 1000);
  };
  
  const pauseGame = () => {
    setIsPaused(true);
    if (spawnIntervalRef.current) {
      clearTimeout(spawnIntervalRef.current);
    }
    if (gameTimerRef.current) {
      clearInterval(gameTimerRef.current);
    }
  };
  
  const resumeGame = () => {
    setIsPaused(false);
    startGame();
  };
  
  const stopGame = () => {
    setIsPlaying(false);
    setIsPaused(false);
    setShowEndScreen(true);
    setBubbles([]);
    if (spawnIntervalRef.current) {
      clearTimeout(spawnIntervalRef.current);
    }
    if (gameTimerRef.current) {
      clearInterval(gameTimerRef.current);
    }
    
    // Save accuracy to localStorage
    const accuracy = totalTaps > 0 ? Math.round((score / totalTaps) * 100) : 0;
    localStorage.setItem('focus-bubbles-accuracy', accuracy.toString());
  };
  
  useEffect(() => {
    return () => {
      if (spawnIntervalRef.current) {
        clearTimeout(spawnIntervalRef.current);
      }
      if (gameTimerRef.current) {
        clearInterval(gameTimerRef.current);
      }
    };
  }, []);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-6xl">
      <div className="mb-6 lg:mb-8">
        <Link href="/games" className="text-blue-600 hover:text-blue-700 mb-4 inline-block text-sm sm:text-base">
          ← Back to Games
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800">
          Focus Bubbles
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Improve concentration with this calming bubble-popping game
        </p>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8">
        <Card className="p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-slate-600 mb-1">Score</p>
          <p className="text-xl sm:text-2xl font-bold text-slate-800">{score}</p>
        </Card>
        <Card className="p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-slate-600 mb-1">High Score</p>
          <p className="text-xl sm:text-2xl font-bold text-slate-800">{progress?.highScore || 0}</p>
        </Card>
        <Card className="p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-slate-600 mb-1">Streak</p>
          <p className="text-xl sm:text-2xl font-bold text-slate-800">{streak}</p>
        </Card>
        <Card className="p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-slate-600 mb-1">Time</p>
          <p className="text-xl sm:text-2xl font-bold text-slate-800">{formatTime(gameTime)}</p>
        </Card>
      </div>
      
      {/* Game Area */}
      <Card className="p-3 sm:p-4 mb-4 sm:mb-6">
        <div
          ref={gameAreaRef}
          onClick={(e) => {
            // Check if click was on background (not a bubble)
            if (e.target === e.currentTarget && isPlaying && !isPaused) {
              handleMissedClick();
            }
          }}
          className="relative w-full h-80 sm:h-96 lg:h-125 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg overflow-hidden"
          style={{ touchAction: 'none' }}
        >
          {!isPlaying && !showEndScreen && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-4">🫧</p>
                <p className="text-xl text-slate-700 mb-6">
                  Click the bubbles as they appear!
                </p>
                <Button onClick={startGame} size="lg" className="bg-blue-500 hover:bg-blue-600 text-black">
                  Start Game
                </Button>
              </div>
            </div>
          )}
          
          {showEndScreen && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-95">
              <div className="text-center max-w-md p-8">
                <p className="text-6xl mb-4">🎊</p>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Game Complete!</h3>
                
                {/* Stats */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
                  <p className="text-lg font-semibold text-slate-800 mb-3">
                    Bubbles Popped: {score}
                  </p>
                  <p className="text-lg font-semibold text-slate-800 mb-3">
                    Missed/Wrong Taps: {missedTaps}
                  </p>
                  <p className="text-lg font-semibold text-slate-800 mb-3">
                    Accuracy: {totalTaps > 0 ? Math.round((score / totalTaps) * 100) : 0}%
                  </p>
                </div>
                
                {/* Encouragement */}
                <p className="text-lg text-slate-700 mb-6">
                  {totalTaps > 0 && Math.round((score / totalTaps) * 100) >= 90
                    ? 'Amazing focus today! 🌟'
                    : totalTaps > 0 && Math.round((score / totalTaps) * 100) >= 70
                    ? 'Great effort, keep practising! 💪'
                    : 'Nice try! Every session gets better! 🎯'}
                </p>
                
                {/* Stars */}
                <div className="flex justify-center gap-2 mb-6">
                  {[1, 2, 3].map((star) => {
                    const accuracy = totalTaps > 0 ? Math.round((score / totalTaps) * 100) : 0;
                    const stars = accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1;
                    return (
                      <span key={star} className="text-5xl">
                        {star <= stars ? '⭐' : '☆'}
                      </span>
                    );
                  })}
                </div>
                
                <div className="flex justify-center gap-4">
                  <Button onClick={startGame} size="lg" variant="outline" className="bg-blue-500 hover:bg-blue-600 text-black">
                    Play Again
                  </Button>
                  <Link href="/games">
                    <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-black">
                      Back to Games
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          {isPaused && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-2xl text-slate-800 mb-6">Game Paused</p>
                <div className="flex gap-4">
                  <Button onClick={resumeGame} size="lg">
                    Resume
                  </Button>
                  <Button onClick={stopGame} size="lg" variant="outline">
                    End Game
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {bubbles.map(bubble => (
            <button
              key={bubble.id}
              onClick={() => handleBubbleClick(bubble.id)}
              className={`absolute rounded-full ${bubble.color} opacity-70 hover:opacity-90 transition-all duration-200 hover:scale-110 cursor-pointer border-2 border-white shadow-lg`}
              style={{
                left: `${bubble.x}px`,
                top: `${bubble.y}px`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                animation: 'float 3s ease-in-out',
              }}
              aria-label="Pop bubble"
            />
          ))}
        </div>
      </Card>
      
      {/* Controls */}
      {isPlaying && !isPaused && (
        <div className="flex justify-center gap-4">
          <Button onClick={pauseGame} size="lg" variant="outline">
            ⏸ Pause
          </Button>
          <Button onClick={stopGame} size="lg" variant="outline">
            ⏹ End Game
          </Button>
        </div>
      )}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
