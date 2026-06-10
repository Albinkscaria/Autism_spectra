'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useGameStore } from '@/lib/stores/gameStore';
import Link from 'next/link';

interface WordPair {
  id: number;
  word1: string;
  word2: string;
  bridges: string[];
  hint: string;
  explanation: string;
}

interface Mistake {
  word1: string;
  word2: string;
  wrongAnswer: string;
  correctAnswer: string;
  explanation: string;
}

const WORD_PAIRS: WordPair[] = [
  {
    id: 1,
    word1: 'Sun',
    word2: 'Moon',
    bridges: ['sky', 'space', 'celestial', 'orbit'],
    hint: 'Where do both the sun and moon appear?',
    explanation: 'Both the sun and moon are celestial bodies that appear in the sky',
  },
  {
    id: 2,
    word1: 'Book',
    word2: 'Movie',
    bridges: ['story', 'entertainment', 'narrative', 'fiction'],
    hint: 'What do books and movies both tell?',
    explanation: 'Both books and movies tell stories and provide entertainment',
  },
  {
    id: 3,
    word1: 'Cat',
    word2: 'Dog',
    bridges: ['pet', 'animal', 'mammal', 'companion'],
    hint: 'What category do cats and dogs belong to?',
    explanation: 'Both cats and dogs are common pets and companion animals',
  },
  {
    id: 4,
    word1: 'Rain',
    word2: 'Snow',
    bridges: ['weather', 'precipitation', 'water', 'clouds'],
    hint: 'What weather category includes both?',
    explanation: 'Both rain and snow are forms of precipitation that fall from clouds',
  },
  {
    id: 5,
    word1: 'Apple',
    word2: 'Orange',
    bridges: ['fruit', 'food', 'healthy', 'vitamin'],
    hint: 'What food group do they belong to?',
    explanation: 'Both apples and oranges are fruits that provide vitamins',
  },
  {
    id: 6,
    word1: 'Piano',
    word2: 'Guitar',
    bridges: ['instrument', 'music', 'sound', 'melody'],
    hint: 'What do you use them to make?',
    explanation: 'Both piano and guitar are musical instruments used to create music',
  },
  {
    id: 7,
    word1: 'Happy',
    word2: 'Sad',
    bridges: ['emotion', 'feeling', 'mood', 'expression'],
    hint: 'What are these both types of?',
    explanation: 'Both happy and sad are emotions or feelings people experience',
  },
  {
    id: 8,
    word1: 'Car',
    word2: 'Bicycle',
    bridges: ['vehicle', 'transportation', 'wheels', 'travel'],
    hint: 'How do people use both of these?',
    explanation: 'Both cars and bicycles are vehicles used for transportation',
  },
  {
    id: 9,
    word1: 'Teacher',
    word2: 'Student',
    bridges: ['school', 'education', 'learning', 'classroom'],
    hint: 'Where do you find both?',
    explanation: 'Both teachers and students are found in schools and classrooms',
  },
  {
    id: 10,
    word1: 'Hot',
    word2: 'Cold',
    bridges: ['temperature', 'sensation', 'feeling', 'thermal'],
    hint: 'What do these both describe?',
    explanation: 'Both hot and cold describe temperature sensations',
  },
  {
    id: 11,
    word1: 'Pen',
    word2: 'Pencil',
    bridges: ['writing', 'tool', 'stationery', 'draw'],
    hint: 'What do you do with both?',
    explanation: 'Both pens and pencils are writing tools used to draw or write',
  },
  {
    id: 12,
    word1: 'Ocean',
    word2: 'Lake',
    bridges: ['water', 'body', 'swim', 'nature'],
    hint: 'What are these both made of?',
    explanation: 'Both oceans and lakes are bodies of water',
  },
  {
    id: 13,
    word1: 'Doctor',
    word2: 'Nurse',
    bridges: ['medical', 'healthcare', 'hospital', 'care'],
    hint: 'What field do they both work in?',
    explanation: 'Both doctors and nurses work in healthcare and medical fields',
  },
  {
    id: 14,
    word1: 'Summer',
    word2: 'Winter',
    bridges: ['season', 'weather', 'year', 'climate'],
    hint: 'What are these both parts of?',
    explanation: 'Both summer and winter are seasons of the year',
  },
  {
    id: 15,
    word1: 'Laugh',
    word2: 'Cry',
    bridges: ['emotion', 'expression', 'reaction', 'feeling'],
    hint: 'What do people do to show these?',
    explanation: 'Both laughing and crying are emotional expressions or reactions',
  },
  {
    id: 16,
    word1: 'Bread',
    word2: 'Rice',
    bridges: ['food', 'carbohydrate', 'staple', 'grain'],
    hint: 'What food category do they belong to?',
    explanation: 'Both bread and rice are staple foods made from grains',
  },
  {
    id: 17,
    word1: 'Mountain',
    word2: 'Valley',
    bridges: ['landform', 'geography', 'terrain', 'nature'],
    hint: 'What are these both types of?',
    explanation: 'Both mountains and valleys are landforms or geographical features',
  },
  {
    id: 18,
    word1: 'Morning',
    word2: 'Evening',
    bridges: ['time', 'day', 'period', 'hour'],
    hint: 'What are these both parts of?',
    explanation: 'Both morning and evening are time periods of the day',
  },
  {
    id: 19,
    word1: 'Shirt',
    word2: 'Pants',
    bridges: ['clothing', 'wear', 'garment', 'fashion'],
    hint: 'What do you do with both?',
    explanation: 'Both shirts and pants are clothing items people wear',
  },
  {
    id: 20,
    word1: 'Phone',
    word2: 'Computer',
    bridges: ['technology', 'device', 'electronic', 'digital'],
    hint: 'What category do they belong to?',
    explanation: 'Both phones and computers are electronic technology devices',
  },
];

export default function WordBridgePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [showRetryOptions, setShowRetryOptions] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [mistakes, setMistakes] = useState<Mistake[]>([]);
  const [hasRetried, setHasRetried] = useState(false);
  
  const { updateProgress, awardBadge, getGameProgress } = useGameStore();
  
  const currentPair = WORD_PAIRS[currentIndex];
  const progress = getGameProgress('word-bridge');
  
  // Reset state when word pair changes
  useEffect(() => {
    setUserAnswer('');
    setShowFeedback(false);
    setShowRetryOptions(false);
    setIsCorrect(false);
    setShowHint(false);
    setHasRetried(false);
  }, [currentIndex]);
  
  useEffect(() => {
    // Initialize progress if not exists
    if (!progress) {
      updateProgress('word-bridge', {
        wordsCompleted: 0,
      });
    }
  }, [progress, updateProgress]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.trim() || showFeedback || showRetryOptions) return;
    
    const normalizedAnswer = userAnswer.toLowerCase().trim();
    const isAnswerCorrect = currentPair.bridges.some(
      bridge => bridge.toLowerCase() === normalizedAnswer
    );
    
    setIsCorrect(isAnswerCorrect);
    setAttempts(attempts + 1);
    
    if (isAnswerCorrect) {
      // Correct answer
      setShowFeedback(true);
      
      if (!hasRetried) {
        const newCorrectCount = correctCount + 1;
        setCorrectCount(newCorrectCount);
        
        // Update progress - just track for badges
        updateProgress('word-bridge', {
          wordsCompleted: newCorrectCount,
        });
        
        // Award badges
        if (newCorrectCount === 5) {
          awardBadge({
            id: 'word-5',
            gameId: 'word-bridge',
            name: 'Word Connector',
            description: 'Connected 5 word pairs',
          });
        }
        if (newCorrectCount === 10) {
          awardBadge({
            id: 'word-10',
            gameId: 'word-bridge',
            name: 'Word Builder',
            description: 'Connected 10 word pairs',
          });
        }
        if (newCorrectCount === 20) {
          awardBadge({
            id: 'word-20',
            gameId: 'word-bridge',
            name: 'Word Master',
            description: 'Connected all 20 word pairs',
          });
        }
      }
    } else {
      // Wrong answer
      if (!hasRetried) {
        // First wrong attempt - show retry options
        setShowRetryOptions(true);
      } else {
        // Second wrong attempt - reveal answer and mark as mistake
        setShowFeedback(true);
        
        // Add to mistakes
        const mistake: Mistake = {
          word1: currentPair.word1,
          word2: currentPair.word2,
          wrongAnswer: userAnswer,
          correctAnswer: currentPair.bridges[0],
          explanation: currentPair.explanation,
        };
        setMistakes([...mistakes, mistake]);
      }
    }
  };
  
  const handleTryAgain = () => {
    setShowRetryOptions(false);
    setUserAnswer('');
    setHasRetried(true);
  };
  
  const handleSeeAnswer = () => {
    setShowRetryOptions(false);
    setShowFeedback(true);
    setIsCorrect(false);
    
    // Add to mistakes
    const mistake: Mistake = {
      word1: currentPair.word1,
      word2: currentPair.word2,
      wrongAnswer: userAnswer,
      correctAnswer: currentPair.bridges[0],
      explanation: currentPair.explanation,
    };
    setMistakes([...mistakes, mistake]);
  };
  
  const handleNext = () => {
    if (currentIndex < WORD_PAIRS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const handleRestart = () => {
    setCurrentIndex(0);
    setUserAnswer('');
    setShowFeedback(false);
    setShowRetryOptions(false);
    setIsCorrect(false);
    setShowHint(false);
    setCorrectCount(0);
    setAttempts(0);
    setMistakes([]);
    setHasRetried(false);
  };
  
  const isLastPair = currentIndex === WORD_PAIRS.length - 1;
  const accuracyRate = attempts > 0 ? Math.round((correctCount / attempts) * 100) : 0;
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-4xl">
      <div className="mb-6 lg:mb-8">
        <Link href="/games" className="text-blue-600 hover:text-blue-700 mb-4 inline-block text-sm sm:text-base">
          ← Back to Games
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800">
          Word Bridge
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Build vocabulary by finding words that connect concepts
        </p>
      </div>
      
      {/* Score Display */}
      <div className="mb-6 lg:mb-8 text-center">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3 sm:p-4 inline-block max-w-full">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-base sm:text-lg font-bold text-slate-800">
              Words Connected: {correctCount}
            </span>
            <span className="text-xs sm:text-sm text-slate-600">
              Accuracy: {accuracyRate}%
            </span>
          </div>
        </div>
      </div>
      
      {/* Game Card */}
      <Card className="p-4 sm:p-6 lg:p-8" key={currentIndex}>
        <div className="mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 lg:mb-6 text-center text-slate-800">
            Find a word that connects these two words:
          </h2>
          
          {/* Word Display */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 lg:mb-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                {currentPair.word1}
              </div>
            </div>
            
            <div className="text-3xl sm:text-4xl lg:text-5xl text-slate-400 rotate-90 sm:rotate-0">
              ↔️
            </div>
            
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                {currentPair.word2}
              </div>
            </div>
          </div>
          
          {/* Hint Button */}
          {!showFeedback && (
            <div className="text-center mb-4 lg:mb-6">
              <Button
                onClick={() => setShowHint(!showHint)}
                variant="outline"
                size="sm"
                className="text-sm"
              >
                {showHint ? 'Hide Hint' : '💡 Need a Hint?'}
              </Button>
              {showHint && (
                <p className="mt-3 text-sm sm:text-base text-slate-600 italic px-4">
                  {currentPair.hint}
                </p>
              )}
            </div>
          )}
        </div>
        
        {/* Input Form */}
        {!showFeedback && !showRetryOptions && (
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type your connecting word..."
                className="text-base sm:text-lg flex-1"
                autoFocus
              />
              <Button type="submit" size="lg" disabled={!userAnswer.trim()} className="w-full sm:w-auto text-black">
                Submit
              </Button>
            </div>
          </form>
        )}
        
        {/* Retry Options */}
        {showRetryOptions && (
          <div className="p-6 rounded-lg mb-6 bg-blue-50 border-2 border-blue-200">
            <p className="text-lg font-medium mb-4 text-slate-800">
              Not quite! Try a different word?
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={handleTryAgain} size="lg" variant="outline">
                Try Again
              </Button>
              <Button onClick={handleSeeAnswer} size="lg" variant="outline">
                See Answer
              </Button>
            </div>
          </div>
        )}
        
        {/* Feedback */}
        {showFeedback && !showRetryOptions && (
          <div className={`p-6 rounded-lg mb-6 ${
            isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-orange-50 border-2 border-orange-200'
          }`}>
            <p className="text-lg font-medium mb-2 text-slate-800">
              {isCorrect ? (hasRetried ? '🎉 Good effort!' : '🎉 Perfect!') : 'Almost there!'}
            </p>
            <p className="text-slate-700 mb-2">
              {isCorrect
                ? `"${userAnswer}" is a great connection between ${currentPair.word1} and ${currentPair.word2}!`
                : `Some words that connect ${currentPair.word1} and ${currentPair.word2} are:`}
            </p>
            {!isCorrect && (
              <>
                <div className="flex flex-wrap gap-2 mt-3 mb-2">
                  {currentPair.bridges.map((bridge, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white rounded-full text-sm font-medium text-green-700 border border-green-300"
                    >
                      {bridge}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-500 mt-2">{currentPair.explanation}</p>
              </>
            )}
          </div>
        )}
        
        {/* Navigation */}
        {showFeedback && !showRetryOptions && (
          <div className="flex justify-center gap-4">
            {!isCorrect && !isLastPair ? (
              <Button onClick={handleNext} size="lg" className="px-8 text-black">
                Next Word Pair →
              </Button>
            ) : isCorrect && !isLastPair ? (
              <Button onClick={handleNext} size="lg" className="px-8 text-black">
                Next Word Pair →
              </Button>
            ) : isCorrect && isLastPair ? (
              <div className="text-center w-full">
                <p className="text-xl font-semibold mb-4 text-slate-800">
                  🎊 You completed all word pairs!
                </p>
                
                {/* Stars */}
                <div className="flex justify-center gap-2 mb-6">
                  {[1, 2, 3].map((star) => (
                    <span key={star} className="text-6xl">
                      {star <= (mistakes.length === 0 ? 3 : mistakes.length <= 2 ? 2 : 1) ? '⭐' : '☆'}
                    </span>
                  ))}
                </div>
                
                <p className="text-lg text-slate-600 mb-6">
                  {mistakes.length === 0 ? 'Perfect round! 🎉' : `Final Score: ${correctCount} correct out of ${attempts} attempts (${accuracyRate}% accuracy)`}
                </p>
                
                {/* Mistake Review */}
                {mistakes.length > 0 && (
                  <div className="mb-8 text-left">
                    <h3 className="text-2xl font-semibold mb-4 text-slate-800 text-center">
                      Let's Review
                    </h3>
                    <div className="space-y-4">
                      {mistakes.map((mistake, index) => (
                        <Card key={index} className="p-6 bg-orange-50 border-2 border-orange-200">
                          <div className="flex items-start gap-4">
                            <div className="flex-1">
                              <p className="text-lg font-semibold text-slate-800 mb-2">
                                {mistake.word1} ↔️ {mistake.word2}
                              </p>
                              <p className="text-sm text-slate-600 mb-1">
                                You tried: <span className="font-medium text-orange-700">{mistake.wrongAnswer}</span>
                              </p>
                              <p className="text-sm text-slate-600 mb-2">
                                Correct connection: <span className="font-medium text-green-700">{mistake.correctAnswer}</span>
                              </p>
                              <p className="text-sm text-slate-500">{mistake.explanation}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-center gap-4">
                  <Button onClick={handleRestart} size="lg" variant="outline">
                    Play Again
                  </Button>
                  <Link href="/games">
                    <Button size="lg">
                      Back to Games
                    </Button>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </Card>
    </div>
  );
}
