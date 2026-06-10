'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGameStore } from '@/lib/stores/gameStore';
import Link from 'next/link';

interface EmotionScenario {
  id: number;
  emotion: string;
  emoji: string;
  scenario: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation: string;
}

interface Mistake {
  scenario: string;
  emoji: string;
  wrongAnswer: string;
  correctAnswer: string;
  explanation: string;
}

const SCENARIOS: EmotionScenario[] = [
  // Easy Level (Basic emotions)
  {
    id: 1,
    emotion: 'Happy',
    emoji: '😊',
    scenario: 'Someone just received a gift they really wanted',
    options: ['Happy', 'Sad', 'Angry', 'Scared'],
    correctAnswer: 0,
    difficulty: 'easy',
    explanation: 'Feeling happy means experiencing joy and pleasure',
  },
  {
    id: 2,
    emotion: 'Sad',
    emoji: '😢',
    scenario: 'A person lost their favorite toy',
    options: ['Excited', 'Sad', 'Surprised', 'Proud'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'Feeling sad means experiencing unhappiness or sorrow',
  },
  {
    id: 3,
    emotion: 'Angry',
    emoji: '😠',
    scenario: 'Someone took their turn without asking',
    options: ['Happy', 'Confused', 'Angry', 'Calm'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'Feeling angry means experiencing strong displeasure or frustration',
  },
  {
    id: 4,
    emotion: 'Scared',
    emoji: '😨',
    scenario: 'A loud unexpected noise happened nearby',
    options: ['Bored', 'Tired', 'Hungry', 'Scared'],
    correctAnswer: 3,
    difficulty: 'easy',
    explanation: 'Feeling scared means experiencing fear or worry about danger',
  },
  // Medium Level (Complex emotions)
  {
    id: 5,
    emotion: 'Excited',
    emoji: '🤩',
    scenario: 'Tomorrow is their birthday party',
    options: ['Excited', 'Worried', 'Lonely', 'Frustrated'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'Feeling excited means experiencing enthusiasm and eagerness',
  },
  {
    id: 6,
    emotion: 'Surprised',
    emoji: '😲',
    scenario: 'They found something unexpected in their bag',
    options: ['Sleepy', 'Surprised', 'Jealous', 'Guilty'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'Feeling surprised means experiencing astonishment at something unexpected',
  },
  {
    id: 7,
    emotion: 'Confused',
    emoji: '😕',
    scenario: 'The instructions for a game are unclear',
    options: ['Proud', 'Ashamed', 'Confused', 'Relieved'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'Feeling confused means being uncertain or unable to understand',
  },
  {
    id: 8,
    emotion: 'Proud',
    emoji: '😌',
    scenario: 'They finished a difficult puzzle all by themselves',
    options: ['Embarrassed', 'Anxious', 'Disgusted', 'Proud'],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation: 'Feeling proud means experiencing satisfaction from achievements',
  },
  // Hard Level (Subtle emotions)
  {
    id: 9,
    emotion: 'Worried',
    emoji: '😟',
    scenario: 'They have a test tomorrow and feel unprepared',
    options: ['Worried', 'Cheerful', 'Content', 'Amused'],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Feeling worried means experiencing anxiety about something',
  },
  {
    id: 10,
    emotion: 'Calm',
    emoji: '😌',
    scenario: 'Sitting quietly and listening to gentle music',
    options: ['Panicked', 'Calm', 'Furious', 'Shocked'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Feeling calm means experiencing peace and tranquility',
  },
  {
    id: 11,
    emotion: 'Relieved',
    emoji: '😮‍💨',
    scenario: 'They finally found their lost homework',
    options: ['Disappointed', 'Relieved', 'Envious', 'Bored'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Feeling relieved means experiencing comfort after worry or stress',
  },
  {
    id: 12,
    emotion: 'Frustrated',
    emoji: '😤',
    scenario: 'They tried many times but the puzzle piece won\'t fit',
    options: ['Delighted', 'Grateful', 'Frustrated', 'Hopeful'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Feeling frustrated means experiencing annoyance when unable to achieve something',
  },
];

const QUESTIONS_PER_LEVEL = 4;
const TOTAL_LEVELS = 3;

export default function EmotionExplorerPage() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentQuestionInLevel, setCurrentQuestionInLevel] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showRetryOptions, setShowRetryOptions] = useState(false);
  const [showLevelComplete, setShowLevelComplete] = useState(false);
  const [showGameComplete, setShowGameComplete] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [mistakes, setMistakes] = useState<Mistake[]>([]);
  const [hasRetried, setHasRetried] = useState(false);
  const [disabledOptions, setDisabledOptions] = useState<number[]>([]);
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);
  
  const { updateProgress, awardBadge, getGameProgress } = useGameStore();
  
  const progress = getGameProgress('emotion-explorer');
  
  // Calculate current scenario index
  const currentScenarioIndex = (currentLevel - 1) * QUESTIONS_PER_LEVEL + currentQuestionInLevel;
  const currentScenario = SCENARIOS[currentScenarioIndex];
  const isCorrect = selectedAnswer === currentScenario?.correctAnswer;
  
  // Load saved progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('emotion-explorer-progress');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setCurrentLevel(data.level || 1);
        setCurrentQuestionInLevel(data.questionInLevel || 0);
        setCorrectCount(data.correctCount || 0);
      } catch (e) {
        console.error('Failed to load saved progress', e);
      }
    }
  }, []);
  
  // Save progress to localStorage whenever it changes
  useEffect(() => {
    const data = {
      level: currentLevel,
      questionInLevel: currentQuestionInLevel,
      correctCount,
    };
    localStorage.setItem('emotion-explorer-progress', JSON.stringify(data));
  }, [currentLevel, currentQuestionInLevel, correctCount]);
  
  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setShowRetryOptions(false);
    setHasRetried(false);
    setDisabledOptions([]);
    setIsAnswerLocked(false);
  }, [currentScenarioIndex]);
  
  // Initialize game progress
  useEffect(() => {
    if (!progress) {
      updateProgress('emotion-explorer', {
        score: 0,
      });
    }
  }, [progress, updateProgress]);
  
  const handleAnswerSelect = (index: number) => {
    // Prevent multiple selections
    if (isAnswerLocked || showFeedback || disabledOptions.includes(index)) return;
    
    setSelectedAnswer(index);
    const isAnswerCorrect = index === currentScenario.correctAnswer;
    
    if (isAnswerCorrect) {
      // Correct answer
      setIsAnswerLocked(true);
      setShowFeedback(true);
      
      // If answered correctly after retry, don't count as mistake but mark as "answered with hint"
      if (!hasRetried) {
        const newCorrectCount = correctCount + 1;
        setCorrectCount(newCorrectCount);
        
        // Award badges
        if (newCorrectCount === 5) {
          awardBadge({
            id: 'emotion-5',
            gameId: 'emotion-explorer',
            name: 'Emotion Learner',
            description: 'Correctly identified 5 emotions',
          });
        }
        if (newCorrectCount === 10) {
          awardBadge({
            id: 'emotion-10',
            gameId: 'emotion-explorer',
            name: 'Emotion Expert',
            description: 'Correctly identified 10 emotions',
          });
        }
      }
      
      // Update progress - just track score for badges
      updateProgress('emotion-explorer', {
        score: correctCount,
      });
      
      // Auto-advance after 1200ms only for correct answers
      setTimeout(() => {
        advanceToNext();
      }, 1200);
    } else {
      // Wrong answer
      if (!hasRetried) {
        // First wrong attempt - show retry options
        setShowRetryOptions(true);
        setDisabledOptions([index]);
      } else {
        // Second wrong attempt - reveal answer and mark as mistake
        setIsAnswerLocked(true);
        setShowFeedback(true);
        
        // Add to mistakes
        const mistake: Mistake = {
          scenario: currentScenario.scenario,
          emoji: currentScenario.emoji,
          wrongAnswer: currentScenario.options[index],
          correctAnswer: currentScenario.emotion,
          explanation: currentScenario.explanation,
        };
        setMistakes([...mistakes, mistake]);
      }
    }
  };
  
  const handleTryAgain = () => {
    setShowRetryOptions(false);
    setSelectedAnswer(null);
    setHasRetried(true);
  };
  
  const handleSeeAnswer = () => {
    setShowRetryOptions(false);
    setIsAnswerLocked(true);
    setShowFeedback(true);
    setSelectedAnswer(currentScenario.correctAnswer);
    
    // Mark as mistake
    const mistake: Mistake = {
      scenario: currentScenario.scenario,
      emoji: currentScenario.emoji,
      wrongAnswer: currentScenario.options[selectedAnswer!],
      correctAnswer: currentScenario.emotion,
      explanation: currentScenario.explanation,
    };
    setMistakes([...mistakes, mistake]);
  };
  
  const advanceToNext = () => {
    const isLastQuestionInLevel = currentQuestionInLevel === QUESTIONS_PER_LEVEL - 1;
    const isLastLevel = currentLevel === TOTAL_LEVELS;
    
    if (isLastQuestionInLevel && isLastLevel) {
      setShowGameComplete(true);
    } else if (isLastQuestionInLevel) {
      setShowLevelComplete(true);
      setTimeout(() => {
        setCurrentLevel(currentLevel + 1);
        setCurrentQuestionInLevel(0);
        setShowLevelComplete(false);
      }, 2000);
    } else {
      setCurrentQuestionInLevel(currentQuestionInLevel + 1);
    }
  };
  
  const handleRestart = () => {
    setCurrentLevel(1);
    setCurrentQuestionInLevel(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setShowRetryOptions(false);
    setShowLevelComplete(false);
    setShowGameComplete(false);
    setCorrectCount(0);
    setMistakes([]);
    setHasRetried(false);
    setDisabledOptions([]);
    setIsAnswerLocked(false);
    localStorage.removeItem('emotion-explorer-progress');
    
    updateProgress('emotion-explorer', {
      score: 0,
    });
  };
  
  const getLevelName = (level: number) => {
    switch (level) {
      case 1: return 'Easy';
      case 2: return 'Medium';
      case 3: return 'Hard';
      default: return 'Easy';
    }
  };
  
  // Show game complete screen
  if (showGameComplete) {
    const stars = mistakes.length === 0 ? 3 : mistakes.length <= 2 ? 2 : 1;
    
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Card className="p-12 text-center">
          <div className="text-9xl mb-6">🎊</div>
          <h2 className="text-4xl font-bold mb-4 text-slate-800">
            Well Done!
          </h2>
          <p className="text-2xl text-slate-700 mb-6">
            You completed all levels of Emotion Explorer!
          </p>
          
          {/* Stars */}
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3].map((star) => (
              <span key={star} className="text-6xl">
                {star <= stars ? '⭐' : '☆'}
              </span>
            ))}
          </div>
          
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-xl font-semibold text-slate-800 mb-2">
              Final Score: {correctCount} out of {SCENARIOS.length}
            </p>
            <p className="text-lg text-slate-600">
              {mistakes.length === 0 ? 'Perfect round! 🎉' : `You've learned to recognize ${SCENARIOS.length} different emotions!`}
            </p>
          </div>
          
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
                      <div className="text-5xl">{mistake.emoji}</div>
                      <div className="flex-1">
                        <p className="text-slate-700 mb-2 italic">"{mistake.scenario}"</p>
                        <p className="text-sm text-slate-600 mb-1">
                          You picked: <span className="font-medium text-orange-700">{mistake.wrongAnswer}</span>
                        </p>
                        <p className="text-sm text-slate-600 mb-2">
                          Correct answer: <span className="font-medium text-green-700">{mistake.correctAnswer}</span>
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
            <Button onClick={handleRestart} size="lg" className="px-8 text-black">
              Play Again
            </Button>
            <Link href="/games">
              <Button size="lg" variant="outline">
                Back to Games
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }
  
  // Show level complete screen
  if (showLevelComplete) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Card className="p-12 text-center">
          <div className="text-9xl mb-6 animate-bounce">🌟</div>
          <h2 className="text-3xl font-bold mb-4 text-slate-800">
            Level {currentLevel} Complete!
          </h2>
          <p className="text-xl text-slate-600 mb-6">
            Great work! Moving to {getLevelName(currentLevel + 1)} level...
          </p>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-500"
              style={{ width: '100%' }}
            />
          </div>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-4xl">
        <div className="mb-6 lg:mb-8">
          <Link href="/games" className="text-primary hover:text-primary/80 mb-4 inline-block font-semibold text-sm sm:text-base">
            ← Back to Games
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-text-primary">
            Emotion Explorer
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary">
            Learn to recognize and understand different emotions
          </p>
        </div>
      
      {/* Score Display */}
      <div className="mb-6 lg:mb-8 text-center">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3 sm:p-4 inline-block max-w-full">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-base sm:text-lg font-bold text-slate-800">
              Score: {correctCount}
            </span>
            <span className="text-xs sm:text-sm text-slate-600">
              Level {currentLevel} ({getLevelName(currentLevel)}) - Question {currentQuestionInLevel + 1} of {QUESTIONS_PER_LEVEL}
            </span>
          </div>
        </div>
      </div>
      
      {/* Game Card */}
      <Card className="p-4 sm:p-6 lg:p-8 bg-white" key={currentScenarioIndex}>
        <div className="text-center mb-6 lg:mb-8">
          <div className="text-6xl sm:text-7xl lg:text-9xl mb-4 lg:mb-6" role="img" aria-label={currentScenario.emotion}>
            {currentScenario.emoji}
          </div>
          <p className="text-lg sm:text-xl text-text-primary mb-2 font-semibold px-2">
            {currentScenario.scenario}
          </p>
          <p className="text-base sm:text-lg text-text-secondary px-2">
            How might this person be feeling?
          </p>
        </div>
        
        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
          {currentScenario.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={isAnswerLocked || showFeedback || disabledOptions.includes(index) || showRetryOptions}
              variant={
                showFeedback && index === currentScenario.correctAnswer
                  ? 'default'
                  : showFeedback && index === selectedAnswer
                  ? 'outline'
                  : 'outline'
              }
              className={`h-14 sm:h-16 text-base sm:text-lg transition-all ${
                showFeedback && index === currentScenario.correctAnswer
                  ? 'bg-green-100 border-green-500 text-green-800 hover:bg-green-100'
                  : disabledOptions.includes(index)
                  ? 'bg-orange-50 border-orange-300 opacity-50 cursor-not-allowed'
                  : showFeedback && index === selectedAnswer && !isCorrect
                  ? 'bg-orange-50 border-orange-300'
                  : ''
              }`}
            >
              {option}
            </Button>
          ))}
        </div>
        
        {/* Retry Options */}
        {showRetryOptions && (
          <div className="p-4 sm:p-6 rounded-lg mb-6 bg-blue-50 border-2 border-blue-200">
            <p className="text-base sm:text-lg font-medium mb-4 text-slate-800">
              Oops! Not quite. Would you like to try again?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button onClick={handleTryAgain} size="lg" variant="outline" className="w-full sm:w-auto">
                Try Again
              </Button>
              <Button onClick={handleSeeAnswer} size="lg" variant="outline" className="w-full sm:w-auto">
                See Answer
              </Button>
            </div>
          </div>
        )}
        
        {/* Feedback */}
        {showFeedback && !showRetryOptions && (
          <div className={`p-4 sm:p-6 rounded-lg transition-all ${
            isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-orange-50 border-2 border-orange-200'
          }`}>
            <p className="text-base sm:text-lg font-medium mb-2 text-slate-800">
              {isCorrect ? (hasRetried ? '🎉 Good effort!' : '🎉 Great job!') : 'Almost there!'}
            </p>
            <p className="text-sm sm:text-base text-slate-700">
              {isCorrect
                ? `You're right! This person is feeling ${currentScenario.emotion.toLowerCase()}.`
                : `The answer is ${currentScenario.emotion.toLowerCase()}. ${currentScenario.explanation}`}
            </p>
          </div>
        )}
        
        {/* Next Button — only shown when answer was wrong (See Answer) */}
        {showFeedback && !showRetryOptions && !isCorrect && (
          <div className="flex justify-center mt-4">
            <Button onClick={advanceToNext} size="lg" className="px-6 sm:px-8 text-black w-full sm:w-auto">
              Next →
            </Button>
          </div>
        )}
      </Card>
      </div>
    </div>
  );
}
