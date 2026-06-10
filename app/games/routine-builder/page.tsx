'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGameStore } from '@/lib/stores/gameStore';
import Link from 'next/link';

interface Activity {
  id: string;
  name: string;
  icon: string;
}

interface Routine {
  id: number;
  title: string;
  description: string;
  correctOrder: string[];
  activities: Activity[];
  explanation: string;
}

interface Mistake {
  title: string;
  userOrder: string[];
  correctOrder: string[];
  activities: Activity[];
}

const ROUTINES: Routine[] = [
  {
    id: 1,
    title: 'Morning Routine',
    description: 'Arrange these activities in the order you would do them in the morning',
    correctOrder: ['wake-up', 'brush-teeth', 'get-dressed', 'eat-breakfast', 'pack-bag'],
    activities: [
      { id: 'wake-up', name: 'Wake Up', icon: '🛏️' },
      { id: 'brush-teeth', name: 'Brush Teeth', icon: '🪥' },
      { id: 'get-dressed', name: 'Get Dressed', icon: '👕' },
      { id: 'eat-breakfast', name: 'Eat Breakfast', icon: '🍳' },
      { id: 'pack-bag', name: 'Pack Bag', icon: '🎒' },
    ],
    explanation: 'A good morning routine starts with waking up, then personal hygiene, getting dressed, eating, and preparing for the day',
  },
  {
    id: 2,
    title: 'Bedtime Routine',
    description: 'Arrange these activities in the order you would do them before bed',
    correctOrder: ['dinner', 'homework', 'shower', 'pajamas', 'brush-teeth', 'sleep'],
    activities: [
      { id: 'dinner', name: 'Eat Dinner', icon: '🍽️' },
      { id: 'homework', name: 'Do Homework', icon: '📚' },
      { id: 'shower', name: 'Take Shower', icon: '🚿' },
      { id: 'pajamas', name: 'Put on Pajamas', icon: '👘' },
      { id: 'brush-teeth', name: 'Brush Teeth', icon: '🪥' },
      { id: 'sleep', name: 'Go to Sleep', icon: '😴' },
    ],
    explanation: 'A good bedtime routine includes dinner, completing tasks, cleaning up, getting comfortable, and preparing for sleep',
  },
  {
    id: 3,
    title: 'School Preparation',
    description: 'Arrange these activities to get ready for school',
    correctOrder: ['wake-up', 'shower', 'breakfast', 'uniform', 'bag', 'leave'],
    activities: [
      { id: 'wake-up', name: 'Wake Up', icon: '⏰' },
      { id: 'shower', name: 'Shower', icon: '🚿' },
      { id: 'breakfast', name: 'Eat Breakfast', icon: '🥐' },
      { id: 'uniform', name: 'Wear Uniform', icon: '👔' },
      { id: 'bag', name: 'Pack School Bag', icon: '🎒' },
      { id: 'leave', name: 'Leave for School', icon: '🚌' },
    ],
    explanation: 'Getting ready for school means waking up, cleaning yourself, eating for energy, dressing appropriately, packing supplies, and heading out',
  },
  {
    id: 4,
    title: 'Homework Time',
    description: 'Arrange these activities for an effective homework session',
    correctOrder: ['snack', 'organize', 'homework', 'check', 'pack'],
    activities: [
      { id: 'snack', name: 'Have a Snack', icon: '🍎' },
      { id: 'organize', name: 'Organize Materials', icon: '📝' },
      { id: 'homework', name: 'Do Homework', icon: '✏️' },
      { id: 'check', name: 'Check Work', icon: '✅' },
      { id: 'pack', name: 'Pack for Tomorrow', icon: '🎒' },
    ],
    explanation: 'Effective homework time starts with a snack for energy, organizing materials, doing the work, checking it, and preparing for the next day',
  },
  {
    id: 5,
    title: 'Meal Preparation',
    description: 'Arrange these steps to prepare a meal',
    correctOrder: ['wash-hands', 'ingredients', 'cook', 'serve', 'clean'],
    activities: [
      { id: 'wash-hands', name: 'Wash Hands', icon: '🧼' },
      { id: 'ingredients', name: 'Get Ingredients', icon: '🥕' },
      { id: 'cook', name: 'Cook Food', icon: '🍳' },
      { id: 'serve', name: 'Serve Meal', icon: '🍽️' },
      { id: 'clean', name: 'Clean Up', icon: '🧽' },
    ],
    explanation: 'Safe meal preparation starts with washing hands, gathering ingredients, cooking, serving, and cleaning up afterwards',
  },
  {
    id: 6,
    title: 'Getting Ready to Go Out',
    description: 'Arrange these activities before leaving home',
    correctOrder: ['check-weather', 'choose-clothes', 'get-dressed', 'check-items', 'lock-door'],
    activities: [
      { id: 'check-weather', name: 'Check Weather', icon: '🌤️' },
      { id: 'choose-clothes', name: 'Choose Clothes', icon: '👗' },
      { id: 'get-dressed', name: 'Get Dressed', icon: '👕' },
      { id: 'check-items', name: 'Check Items', icon: '🔑' },
      { id: 'lock-door', name: 'Lock Door', icon: '🚪' },
    ],
    explanation: 'Before going out, check the weather to dress appropriately, choose and wear suitable clothes, gather necessary items, and secure your home',
  },
];

export default function RoutineBuilderPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userOrder, setUserOrder] = useState<string[]>([]);
  const [availableActivities, setAvailableActivities] = useState<Activity[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showRetryOptions, setShowRetryOptions] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [mistakes, setMistakes] = useState<Mistake[]>([]);
  const [hasRetried, setHasRetried] = useState(false);
  const [incorrectPositions, setIncorrectPositions] = useState<number[]>([]);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  
  const { updateProgress, awardBadge, getGameProgress } = useGameStore();
  
  const currentRoutine = ROUTINES[currentIndex];
  const progress = getGameProgress('routine-builder');
  
  useEffect(() => {
    // Initialize progress if not exists
    if (!progress) {
      updateProgress('routine-builder', {
        routinesCompleted: 0,
      });
    }
  }, [progress, updateProgress]);
  
  useEffect(() => {
    // Shuffle available activities when routine changes
    const shuffled = [...currentRoutine.activities].sort(() => Math.random() - 0.5);
    setAvailableActivities(shuffled);
    setUserOrder([]);
    setShowFeedback(false);
    setShowRetryOptions(false);
    setIsCorrect(false);
    setHasRetried(false);
    setIncorrectPositions([]);
    setIsAnswerRevealed(false);
  }, [currentIndex, currentRoutine]);
  
  const handleActivityClick = (activity: Activity) => {
    if (showFeedback || showRetryOptions) return;
    
    // Add to user order
    setUserOrder([...userOrder, activity.id]);
    // Remove from available
    setAvailableActivities(availableActivities.filter(a => a.id !== activity.id));
  };
  
  const handleRemoveActivity = (activityId: string, index: number) => {
    if (showFeedback || showRetryOptions) return;
    
    // Remove from user order
    const newUserOrder = userOrder.filter((_, i) => i !== index);
    setUserOrder(newUserOrder);
    
    // Add back to available
    const activity = currentRoutine.activities.find(a => a.id === activityId);
    if (activity) {
      const updatedActivities = [...availableActivities, activity];
      const orderedActivities = currentRoutine.activities.filter((a) =>
        updatedActivities.some((updated) => updated.id === a.id),
      );
      setAvailableActivities(orderedActivities);
    }
  };
  
  const handleSubmit = () => {
    if (userOrder.length !== currentRoutine.correctOrder.length) return;
    
    const correct = JSON.stringify(userOrder) === JSON.stringify(currentRoutine.correctOrder);
    setIsCorrect(correct);
    
    if (correct) {
      // Correct order
      setShowFeedback(true);
      
      if (!hasRetried) {
        const newCompletedCount = completedCount + 1;
        setCompletedCount(newCompletedCount);
        
        // Update progress - just track for badges
        updateProgress('routine-builder', {
          routinesCompleted: newCompletedCount,
        });
        
        // Award badges
        if (newCompletedCount === 3) {
          awardBadge({
            id: 'routine-3',
            gameId: 'routine-builder',
            name: 'Routine Starter',
            description: 'Built 3 routines',
          });
        }
        if (newCompletedCount === 6) {
          awardBadge({
            id: 'routine-6',
            gameId: 'routine-builder',
            name: 'Routine Master',
            description: 'Built all 6 routines',
          });
        }
      }
    } else {
      // Wrong order
      // Find incorrect positions
      const incorrect: number[] = [];
      userOrder.forEach((id, index) => {
        if (id !== currentRoutine.correctOrder[index]) {
          incorrect.push(index);
        }
      });
      setIncorrectPositions(incorrect);
      
      if (!hasRetried) {
        // First wrong attempt - show retry options
        setShowRetryOptions(true);
      } else {
        // Second wrong attempt - reveal answer and mark as mistake
        setShowFeedback(true);
        
        // Add to mistakes
        const mistake: Mistake = {
          title: currentRoutine.title,
          userOrder: [...userOrder],
          correctOrder: currentRoutine.correctOrder,
          activities: currentRoutine.activities,
        };
        setMistakes([...mistakes, mistake]);
      }
    }
  };
  
  const handleTryAgain = () => {
    setShowRetryOptions(false);
    setHasRetried(true);
    // Keep the current order so they can adjust
  };
  
  const handleSeeAnswer = () => {
    setShowRetryOptions(false);
    setShowFeedback(true);
    setIsCorrect(false);
    setIsAnswerRevealed(true);
    
    // Add to mistakes
    const mistake: Mistake = {
      title: currentRoutine.title,
      userOrder: [...userOrder],
      correctOrder: currentRoutine.correctOrder,
      activities: currentRoutine.activities,
    };
    setMistakes([...mistakes, mistake]);
  };
  
  const handleNext = () => {
    if (currentIndex < ROUTINES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const handleRestart = () => {
    setCurrentIndex(0);
    setCompletedCount(0);
    setMistakes([]);
  };
  
  const isLastRoutine = currentIndex === ROUTINES.length - 1;
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-5xl">
      <div className="mb-6 lg:mb-8">
        <Link href="/games" className="text-blue-600 hover:text-blue-700 mb-4 inline-block text-sm sm:text-base">
          ← Back to Games
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800">
          Routine Builder
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Create and organize daily routines to build structure
        </p>
      </div>
      
      {/* Score Display */}
      <div className="mb-6 lg:mb-8 text-center">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3 sm:p-4 inline-block max-w-full">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-base sm:text-lg font-bold text-slate-800">
              Routines Built: {completedCount}
            </span>
            <span className="text-xs sm:text-sm text-slate-600">
              Current: {currentRoutine.title}
            </span>
          </div>
        </div>
      </div>
      
      {/* Game Card */}
      <Card className="p-4 sm:p-6 lg:p-8">
        <div className="mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-slate-800">
            {currentRoutine.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {currentRoutine.description}
          </p>
        </div>
        
        {/* User's Order */}
        <div className="mb-6 lg:mb-8">
          <h3 className="text-base sm:text-lg font-medium mb-4 text-slate-700">
            Your Routine Order:
          </h3>
          <div className="min-h-24 sm:min-h-30 p-3 sm:p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
            {userOrder.length === 0 ? (
              <p className="text-slate-400 text-center py-6 sm:py-8 text-sm sm:text-base">
                Click activities below to add them to your routine
              </p>
            ) : (
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {userOrder.map((activityId, index) => {
                  const activity = currentRoutine.activities.find(a => a.id === activityId);
                  const isIncorrect = incorrectPositions.includes(index);
                  return activity ? (
                    <button
                      key={index}
                      onClick={() => handleRemoveActivity(activityId, index)}
                      disabled={showFeedback || showRetryOptions}
                      className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 transition-all shadow-sm text-sm sm:text-base ${
                        isIncorrect && showRetryOptions
                          ? 'bg-orange-50 border-orange-300'
                          : 'bg-white border-blue-300 hover:border-blue-400'
                      }`}
                    >
                      <span className="text-xl sm:text-2xl">{activity.icon}</span>
                      <span className="font-medium text-slate-800">{index + 1}. {activity.name}</span>
                      {!showFeedback && !showRetryOptions && (
                        <span className="text-slate-400 ml-1 sm:ml-2">✕</span>
                      )}
                    </button>
                  ) : null;
                })}
              </div>
            )}
          </div>
        </div>
        
        {/* Available Activities */}
        {!showFeedback && !showRetryOptions && availableActivities.length > 0 && (
          <div className="mb-6 lg:mb-8">
            <h3 className="text-base sm:text-lg font-medium mb-4 text-slate-700">
              Available Activities:
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {availableActivities.map((activity) => (
                <button
                  key={activity.id}
                  onClick={() => handleActivityClick(activity)}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-lg border-2 border-slate-300 hover:border-blue-400 hover:bg-blue-50 transition-all shadow-sm text-slate-800 text-sm sm:text-base"
                >
                  <span className="text-xl sm:text-2xl">{activity.icon}</span>
                  <span className="font-medium text-slate-800">{activity.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Submit Button */}
        {!showFeedback && !showRetryOptions && userOrder.length === currentRoutine.correctOrder.length && (
          <div className="flex justify-center mb-6">
            <Button onClick={handleSubmit} size="lg" className="px-8 text-black! text-lg font-bold">
              Check My Routine
            </Button>
          </div>
        )}
        
        {/* Retry Options */}
        {showRetryOptions && (
          <div className="p-6 rounded-lg mb-6 bg-blue-50 border-2 border-blue-200">
            <p className="text-lg font-medium mb-2 text-slate-800">
              Almost! A couple of steps are out of order. Want to try again?
            </p>
            <p className="text-sm text-slate-600 mb-4">
              The steps highlighted in orange need to be rearranged. Click them to remove and reorder.
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={handleTryAgain} size="lg" variant="outline" className="text-slate-800! text-lg font-bold">
                Try Again
              </Button>
              <Button onClick={handleSeeAnswer} size="lg" variant="outline" className="text-slate-800! text-lg font-bold">
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
              {isCorrect ? (hasRetried ? '🎉 Good effort!' : '🎉 Perfect routine!') : 'Almost there!'}
            </p>
            <p className="text-slate-700 mb-3">
              {isCorrect
                ? 'You arranged all the activities in a great order!'
                : 'Here is one good way to arrange this routine:'}
            </p>
            {!isCorrect && (
              <>
                <div className="flex flex-wrap gap-3 mt-4 mb-3">
                  {currentRoutine.correctOrder.map((activityId, index) => {
                    const activity = currentRoutine.activities.find(a => a.id === activityId);
                    return activity ? (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border-2 border-green-300"
                      >
                        <span className="text-2xl">{activity.icon}</span>
                        <span className="font-medium text-slate-800">{index + 1}. {activity.name}</span>
                      </div>
                    ) : null;
                  })}
                </div>
                <p className="text-sm text-slate-500">{currentRoutine.explanation}</p>
              </>
            )}
          </div>
        )}
        
        {/* Navigation */}
        {showFeedback && !showRetryOptions && (
          <div className="flex justify-center gap-4">
            {isCorrect && !isLastRoutine ? (
              <Button onClick={handleNext} size="lg" className="px-8 text-black font-bold">
                Next Routine →
              </Button>
            ) : !isCorrect && !isLastRoutine ? (
              <Button onClick={handleNext} size="lg" className="px-8 text-black font-bold">
                Next Routine →
              </Button>
            ) : isLastRoutine ? (
              <div className="text-center w-full">
                <p className="text-xl font-semibold mb-4 text-slate-800">
                  🎊 You completed all routines!
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
                  {mistakes.length === 0 ? 'Perfect round! 🎉' : `You built ${ROUTINES.length} different routines!`}
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
                          <h4 className="font-semibold text-slate-800 mb-3">{mistake.title}</h4>
                          
                          <div className="mb-3">
                            <p className="text-sm text-slate-600 mb-2 font-medium">Your order:</p>
                            <div className="flex flex-wrap gap-2">
                              {mistake.userOrder.map((activityId, idx) => {
                                const activity = mistake.activities.find(a => a.id === activityId);
                                return activity ? (
                                  <span key={idx} className="text-xs px-2 py-1 bg-white rounded border border-orange-300 text-slate-800">
                                    {idx + 1}. {activity.name}
                                  </span>
                                ) : null;
                              })}
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm text-slate-600 mb-2 font-medium">Correct order:</p>
                            <div className="flex flex-wrap gap-2">
                              {mistake.correctOrder.map((activityId, idx) => {
                                const activity = mistake.activities.find(a => a.id === activityId);
                                return activity ? (
                                  <span key={idx} className="text-xs px-2 py-1 bg-white rounded border border-green-300 text-slate-800">
                                    {idx + 1}. {activity.name}
                                  </span>
                                ) : null;
                              })}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-center gap-4">
                  <Button onClick={handleRestart} size="lg" variant="outline" className="text-slate-800! text-lg font-bold">
                    Build Again
                  </Button>
                  <Link href="/games">
                    <Button size="lg" className="text-black! text-lg font-bold">
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
