'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGameStore } from '@/lib/stores/gameStore';
import Link from 'next/link';

interface Scenario {
  id: number;
  title: string;
  situation: string;
  responses: string[];
  bestResponse: number;
  feedback: string;
  betterResponseExplanation: string;
}

interface Mistake {
  title: string;
  situation: string;
  chosenResponse: string;
  recommendedResponse: string;
  explanation: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: 'Ordering Food',
    situation: 'You are at a restaurant and the waiter asks what you would like to order.',
    responses: [
      'Point at the menu without saying anything',
      '"I would like the pasta, please"',
      'Say nothing and wait',
      'Ask for everything on the menu',
    ],
    bestResponse: 1,
    feedback: 'Great! Being polite and clear helps the waiter understand your order.',
    betterResponseExplanation: 'Speaking clearly and politely helps the waiter serve you better',
  },
  {
    id: 2,
    title: 'Asking for Help',
    situation: 'You cannot find your classroom and need directions.',
    responses: [
      'Wander around hoping to find it',
      'Sit down and wait',
      '"Excuse me, can you help me find room 204?"',
      'Follow random people',
    ],
    bestResponse: 2,
    feedback: 'Perfect! Asking politely for help is a great way to get the information you need.',
    betterResponseExplanation: 'Asking for help directly and politely is the most effective way to find what you need',
  },
  {
    id: 3,
    title: 'Making Small Talk',
    situation: 'A classmate sits next to you and says "Hi, how are you?"',
    responses: [
      'Ignore them completely',
      '"I\'m good, thanks! How are you?"',
      'Walk away immediately',
      'Tell them your entire life story',
    ],
    bestResponse: 1,
    feedback: 'Wonderful! Responding with a greeting and asking back shows you are friendly.',
    betterResponseExplanation: 'Responding warmly and asking back helps build friendly connections',
  },
  {
    id: 4,
    title: 'Joining a Group',
    situation: 'You see some classmates playing a game and want to join.',
    responses: [
      'Push your way into the group',
      'Stand far away and stare',
      '"Can I play with you?"',
      'Take their game pieces',
    ],
    bestResponse: 2,
    feedback: 'Excellent! Asking permission to join shows respect and good manners.',
    betterResponseExplanation: 'Asking to join shows respect for others and makes them more likely to welcome you',
  },
  {
    id: 5,
    title: 'Handling Interruption',
    situation: 'Someone interrupts you while you are talking.',
    responses: [
      'Yell at them to stop',
      'Stop talking and never speak again',
      '"Excuse me, I was still talking. May I finish?"',
      'Interrupt them back louder',
    ],
    bestResponse: 2,
    feedback: 'Great job! Calmly asserting yourself is a respectful way to handle interruptions.',
    betterResponseExplanation: 'Calmly expressing your needs helps others understand without creating conflict',
  },
  {
    id: 6,
    title: 'Receiving a Compliment',
    situation: 'Someone says "I really like your shirt!"',
    responses: [
      '"Thank you! I like it too"',
      'Say nothing and walk away',
      '"Your shirt is ugly"',
      'Take off your shirt',
    ],
    bestResponse: 0,
    feedback: 'Perfect! Saying thank you is a kind way to accept a compliment.',
    betterResponseExplanation: 'Accepting compliments graciously makes both people feel good',
  },
  {
    id: 7,
    title: 'Disagreeing Politely',
    situation: 'A friend suggests watching a movie you do not like.',
    responses: [
      '"That movie is terrible and you have bad taste"',
      'Agree even though you do not want to',
      '"I\'m not a fan of that one. How about we watch something else?"',
      'Leave without saying anything',
    ],
    bestResponse: 2,
    feedback: 'Excellent! You can disagree while still being respectful and suggesting alternatives.',
    betterResponseExplanation: 'Offering alternatives while being respectful helps find solutions everyone enjoys',
  },
  {
    id: 8,
    title: 'Waiting Your Turn',
    situation: 'There is a line at the water fountain and you are thirsty.',
    responses: [
      'Push everyone out of the way',
      'Wait patiently in line',
      'Complain loudly about waiting',
      'Give up and leave',
    ],
    bestResponse: 1,
    feedback: 'Great! Waiting your turn shows patience and respect for others.',
    betterResponseExplanation: 'Patience and taking turns helps everyone get what they need fairly',
  },
  {
    id: 9,
    title: 'Apologizing',
    situation: 'You accidentally bump into someone in the hallway.',
    responses: [
      'Keep walking without acknowledging it',
      'Blame them for being in your way',
      '"I\'m sorry, excuse me"',
      'Bump into them again',
    ],
    bestResponse: 2,
    feedback: 'Perfect! Apologizing when you make a mistake shows good character.',
    betterResponseExplanation: 'Apologizing quickly helps repair small mistakes and shows consideration',
  },
  {
    id: 10,
    title: 'Sharing Space',
    situation: 'Someone sits in "your spot" at the lunch table.',
    responses: [
      'Tell them to move immediately',
      'Sit somewhere else without making a scene',
      'Stand and stare at them',
      'Take their lunch',
    ],
    bestResponse: 1,
    feedback: 'Great! Being flexible about seating shows maturity and adaptability.',
    betterResponseExplanation: 'Being flexible and adaptable helps avoid unnecessary conflicts',
  },
  {
    id: 11,
    title: 'Expressing Needs',
    situation: 'The classroom is too loud and you are feeling overwhelmed.',
    responses: [
      'Scream at everyone to be quiet',
      'Suffer in silence',
      'Raise your hand and say "May I step outside for a moment?"',
      'Run out of the room',
    ],
    bestResponse: 2,
    feedback: 'Excellent! Communicating your needs calmly helps others understand and support you.',
    betterResponseExplanation: 'Expressing your needs clearly and calmly helps you get the support you need',
  },
  {
    id: 12,
    title: 'Ending a Conversation',
    situation: 'You need to leave but someone is still talking to you.',
    responses: [
      'Walk away while they are mid-sentence',
      '"It was nice talking to you, but I need to go now"',
      'Pretend to fall asleep',
      'Cover your ears',
    ],
    bestResponse: 1,
    feedback: 'Perfect! Politely excusing yourself is a respectful way to end a conversation.',
    betterResponseExplanation: 'Politely ending conversations maintains good relationships while respecting your time',
  },
];

export default function DailyLifeSimulatorPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedResponse, setSelectedResponse] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showRetryOptions, setShowRetryOptions] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [mistakes, setMistakes] = useState<Mistake[]>([]);
  const [hasRetried, setHasRetried] = useState(false);
  const [disabledOptions, setDisabledOptions] = useState<number[]>([]);
  
  const { updateProgress, awardBadge, getGameProgress } = useGameStore();
  
  const currentScenario = SCENARIOS[currentIndex];
  const progress = getGameProgress('daily-life-simulator');
  
  // Reset state when scenario changes
  useEffect(() => {
    setSelectedResponse(null);
    setShowFeedback(false);
    setShowRetryOptions(false);
    setHasRetried(false);
    setDisabledOptions([]);
  }, [currentIndex]);
  
  useEffect(() => {
    // Initialize progress if not exists
    if (!progress) {
      updateProgress('daily-life-simulator', {
        scenariosCompleted: 0,
      });
    }
  }, [progress, updateProgress]);
  
  const handleResponseSelect = (index: number) => {
    if (showFeedback || disabledOptions.includes(index) || showRetryOptions) return;
    
    setSelectedResponse(index);
    const isBestResponse = index === currentScenario.bestResponse;
    
    if (isBestResponse || hasRetried) {
      // Best response or second attempt - show feedback and advance
      setShowFeedback(true);
      
      const newCompletedCount = completedCount + 1;
      setCompletedCount(newCompletedCount);
      
      // Update progress
      const completionPercentage = Math.round((currentIndex + 1) / SCENARIOS.length * 100);
      updateProgress('daily-life-simulator', {
        completionPercentage,
        scenariosCompleted: newCompletedCount,
      });
      
      // Award badges
      if (newCompletedCount === 5) {
        awardBadge({
          id: 'daily-5',
          gameId: 'daily-life-simulator',
          name: 'Social Explorer',
          description: 'Completed 5 social scenarios',
        });
      }
      if (newCompletedCount === 10) {
        awardBadge({
          id: 'daily-10',
          gameId: 'daily-life-simulator',
          name: 'Social Navigator',
          description: 'Completed 10 social scenarios',
        });
      }
      if (newCompletedCount === 12) {
        awardBadge({
          id: 'daily-12',
          gameId: 'daily-life-simulator',
          name: 'Social Expert',
          description: 'Completed all social scenarios',
        });
      }
      
      // If not best response on second attempt, add to mistakes
      if (!isBestResponse && hasRetried) {
        const mistake: Mistake = {
          title: currentScenario.title,
          situation: currentScenario.situation,
          chosenResponse: currentScenario.responses[index],
          recommendedResponse: currentScenario.responses[currentScenario.bestResponse],
          explanation: currentScenario.betterResponseExplanation,
        };
        setMistakes([...mistakes, mistake]);
      }
    } else {
      // First attempt and not best response - offer retry
      setShowRetryOptions(true);
      setDisabledOptions([index]);
    }
  };
  
  const handleTryAgain = () => {
    setShowRetryOptions(false);
    setSelectedResponse(null);
    setHasRetried(true);
  };
  
  const handleContinue = () => {
    setShowRetryOptions(false);
    setShowFeedback(true);
    
    const newCompletedCount = completedCount + 1;
    setCompletedCount(newCompletedCount);
    
    // Update progress
    const completionPercentage = Math.round((currentIndex + 1) / SCENARIOS.length * 100);
    updateProgress('daily-life-simulator', {
      completionPercentage,
      scenariosCompleted: newCompletedCount,
    });
    
    // Add to mistakes
    const mistake: Mistake = {
      title: currentScenario.title,
      situation: currentScenario.situation,
      chosenResponse: currentScenario.responses[selectedResponse!],
      recommendedResponse: currentScenario.responses[currentScenario.bestResponse],
      explanation: currentScenario.betterResponseExplanation,
    };
    setMistakes([...mistakes, mistake]);
  };
  
  const handleNext = () => {
    if (currentIndex < SCENARIOS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedResponse(null);
    setShowFeedback(false);
    setShowRetryOptions(false);
    setCompletedCount(0);
    setMistakes([]);
    setHasRetried(false);
    setDisabledOptions([]);
  };
  
  const isLastScenario = currentIndex === SCENARIOS.length - 1;
  const isBestResponse = selectedResponse === currentScenario.bestResponse;
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-4xl">
      <div className="mb-6 lg:mb-8">
        <Link href="/games" className="text-blue-600 hover:text-blue-700 mb-4 inline-block text-sm sm:text-base">
          ← Back to Games
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800">
          Daily Life Simulator
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Practice everyday social situations in a safe environment
        </p>
      </div>
      
      {/* Score Display */}
      <div className="mb-6 lg:mb-8 text-center">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3 sm:p-4 inline-block max-w-full">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-base sm:text-lg font-bold text-slate-800">
              Scenarios Completed: {completedCount}
            </span>
            <span className="text-xs sm:text-sm text-slate-600">
              Current: {currentScenario.title}
            </span>
          </div>
        </div>
      </div>
      
      {/* Game Card */}
      <Card className="p-4 sm:p-6 lg:p-8" key={currentIndex}>
        <div className="mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-800">
            {currentScenario.title}
          </h2>
          <div className="p-4 sm:p-6 bg-blue-50 rounded-lg mb-4 lg:mb-6">
            <p className="text-base sm:text-lg text-slate-700">
              {currentScenario.situation}
            </p>
          </div>
          <p className="text-base sm:text-lg text-slate-600 mb-4">
            What would be a good response?
          </p>
        </div>
        
        {/* Response Options */}
        <div className="space-y-3 mb-6">
          {currentScenario.responses.map((response, index) => (
            <Button
              key={index}
              onClick={() => handleResponseSelect(index)}
              disabled={showFeedback || disabledOptions.includes(index) || showRetryOptions}
              variant="outline"
              className={`w-full h-auto py-3 sm:py-4 px-4 sm:px-6 text-left justify-start whitespace-normal text-sm sm:text-base ${
                showFeedback && index === currentScenario.bestResponse
                  ? 'bg-green-100 border-green-500 hover:bg-green-100'
                  : disabledOptions.includes(index)
                  ? 'bg-orange-50 border-orange-300 opacity-50 cursor-not-allowed'
                  : showFeedback && index === selectedResponse
                  ? 'bg-blue-50 border-blue-300'
                  : ''
              }`}
            >
              <span>{response}</span>
            </Button>
          ))}
        </div>
        
        {/* Retry Options */}
        {showRetryOptions && (
          <div className="p-6 rounded-lg mb-6 bg-blue-50 border-2 border-blue-200">
            <p className="text-lg font-medium mb-2 text-slate-800">
              There may be a better response — want to try again?
            </p>
            <p className="text-sm text-slate-600 mb-4">
              Think about what might work even better in this situation.
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={handleTryAgain} size="lg" variant="outline">
                Try Again
              </Button>
              <Button onClick={handleContinue} size="lg" variant="outline">
                Continue
              </Button>
            </div>
          </div>
        )}
        
        {/* Feedback */}
        {showFeedback && !showRetryOptions && (
          <div className={`p-6 rounded-lg mb-6 ${
            isBestResponse ? 'bg-green-50 border-2 border-green-200' : 'bg-blue-50 border-2 border-blue-200'
          }`}>
            <p className="text-lg font-medium mb-2 text-slate-800">
              {isBestResponse ? '🎉 Excellent choice!' : '💙 Good thinking!'}
            </p>
            <p className="text-slate-700 mb-2">
              {isBestResponse
                ? currentScenario.feedback
                : `A great response here would be: "${currentScenario.responses[currentScenario.bestResponse]}"`}
            </p>
            {!isBestResponse && (
              <p className="text-slate-600 text-sm mt-2">
                {currentScenario.betterResponseExplanation}
              </p>
            )}
          </div>
        )}
        
        {/* Navigation */}
        {showFeedback && !showRetryOptions && (
          <div className="flex justify-center gap-4">
            {!isLastScenario ? (
              <Button onClick={handleNext} size="lg" className="px-8 text-black">
                Next Scenario →
              </Button>
            ) : (
              <div className="text-center w-full">
                <p className="text-xl font-semibold mb-4 text-slate-800">
                  🎊 You completed all scenarios!
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
                  {mistakes.length === 0 ? 'Perfect round! 🎉' : `You practiced ${SCENARIOS.length} different social situations!`}
                </p>
                
                {/* Mistake Review */}
                {mistakes.length > 0 && (
                  <div className="mb-8 text-left">
                    <h3 className="text-2xl font-semibold mb-4 text-slate-800 text-center">
                      Let's Review
                    </h3>
                    <div className="space-y-4">
                      {mistakes.map((mistake, index) => (
                        <Card key={index} className="p-6 bg-blue-50 border-2 border-blue-200">
                          <h4 className="font-semibold text-slate-800 mb-2">{mistake.title}</h4>
                          <p className="text-sm text-slate-600 mb-3 italic">"{mistake.situation}"</p>
                          <p className="text-sm text-slate-600 mb-1">
                            You chose: <span className="font-medium text-blue-700">{mistake.chosenResponse}</span>
                          </p>
                          <p className="text-sm text-slate-600 mb-2">
                            A great response here would be: <span className="font-medium text-green-700">{mistake.recommendedResponse}</span>
                          </p>
                          <p className="text-sm text-slate-500">{mistake.explanation}</p>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-center gap-4">
                  <Button onClick={handleRestart} size="lg" variant="outline">
                    Practice Again
                  </Button>
                  <Link href="/games">
                    <Button size="lg">
                      Back to Games
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}
