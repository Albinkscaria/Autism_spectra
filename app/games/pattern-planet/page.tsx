'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

interface Pattern {
  id: number;
  type: string;
  sequence: string[];
  options: string[];
  correctAnswer: number;
  hint: string;
  explanation: string;
}

interface Mistake {
  sequence: string[];
  wrongAnswer: string;
  correctAnswer: string;
  explanation: string;
}

const PATTERNS: Pattern[] = [
  // --- Alternating ---
  {
    id: 1,
    type: 'Alternating',
    sequence: ['🔴', '🔵', '🔴', '🔵', '🔴', '?'],
    options: ['🔴', '🔵', '🟢', '🟡'],
    correctAnswer: 1,
    hint: 'The two colors take turns',
    explanation: 'The pattern alternates between red and blue',
  },
  {
    id: 2,
    type: 'Alternating',
    sequence: ['🐱', '🐶', '🐱', '🐶', '🐱', '?'],
    options: ['🐱', '🐶', '🐭', '🐸'],
    correctAnswer: 1,
    hint: 'Cat and dog keep switching',
    explanation: 'Cat and dog alternate one after the other',
  },
  {
    id: 3,
    type: 'Alternating',
    sequence: ['⬆️', '⬇️', '⬆️', '⬇️', '⬆️', '?'],
    options: ['⬆️', '⬇️', '⬅️', '➡️'],
    correctAnswer: 1,
    hint: 'Up then down, up then down',
    explanation: 'The arrows alternate between up and down',
  },
  // --- Repeating groups ---
  {
    id: 4,
    type: 'Repeating Group',
    sequence: ['⭐', '⭐', '🌙', '⭐', '⭐', '?'],
    options: ['⭐', '🌙', '☀️', '🌟'],
    correctAnswer: 1,
    hint: 'Two of one, then one of another',
    explanation: 'The group is: two stars then one moon, repeating',
  },
  {
    id: 5,
    type: 'Repeating Group',
    sequence: ['🍎', '🍊', '🍋', '🍎', '🍊', '?'],
    options: ['🍎', '🍊', '🍋', '🍇'],
    correctAnswer: 2,
    hint: 'Three fruits repeat in the same order',
    explanation: 'Apple, orange, lemon repeat as a group of three',
  },
  {
    id: 6,
    type: 'Repeating Group',
    sequence: ['🔺', '🔺', '🔺', '🔻', '🔺', '🔺', '🔺', '?'],
    options: ['🔺', '🔻', '🔶', '🔷'],
    correctAnswer: 1,
    hint: 'Three up, one down',
    explanation: 'Three triangles pointing up, then one pointing down',
  },
  {
    id: 7,
    type: 'Repeating Group',
    sequence: ['🌧️', '🌧️', '☀️', '🌧️', '🌧️', '?'],
    options: ['🌧️', '☀️', '⛅', '🌈'],
    correctAnswer: 0,
    hint: 'Two rain then sun, what comes after sun?',
    explanation: 'The group is two rain then one sun — after sun comes rain again',
  },
  // --- Growing / Shrinking ---
  {
    id: 8,
    type: 'Growing',
    sequence: ['A', 'B', 'B', 'C', 'C', 'C', '?'],
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 3,
    hint: 'Each letter appears one more time than the last',
    explanation: 'A×1, B×2, C×3, so next is D×4 — starting with D',
  },
  {
    id: 9,
    type: 'Growing',
    sequence: ['🌟', '🌟', '🌟', '🌟', '🌟', '?'],
    options: ['🌟', '⭐', '✨', '💫'],
    correctAnswer: 0,
    hint: 'The same item keeps appearing — how many so far?',
    explanation: 'Five stars so far — the sixth continues the growing sequence',
  },
  {
    id: 10,
    type: 'Growing',
    sequence: ['🟢', '🟢', '🟡', '🟢', '🟢', '🟢', '🟡', '🟢', '🟢', '🟢', '🟢', '?'],
    options: ['🟢', '🟡', '🔴', '🔵'],
    correctAnswer: 1,
    hint: 'Green count increases before each yellow',
    explanation: '2 greens, yellow, 3 greens, yellow, 4 greens — next is yellow',
  },
  // --- Number sequences ---
  {
    id: 11,
    type: 'Number Sequence',
    sequence: ['2', '4', '6', '8', '10', '?'],
    options: ['11', '12', '14', '16'],
    correctAnswer: 1,
    hint: 'Add 2 each time',
    explanation: 'Even numbers: each number increases by 2',
  },
  {
    id: 12,
    type: 'Number Sequence',
    sequence: ['1', '3', '5', '7', '9', '?'],
    options: ['10', '11', '12', '13'],
    correctAnswer: 1,
    hint: 'Odd numbers in order',
    explanation: 'Odd numbers: each number increases by 2',
  },
  {
    id: 13,
    type: 'Number Sequence',
    sequence: ['1', '1', '2', '3', '5', '?'],
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    hint: 'Add the two numbers before it',
    explanation: 'Fibonacci: 1+1=2, 1+2=3, 2+3=5, 3+5=8',
  },
  {
    id: 14,
    type: 'Number Sequence',
    sequence: ['100', '90', '80', '70', '60', '?'],
    options: ['55', '50', '45', '40'],
    correctAnswer: 1,
    hint: 'Counting down by 10',
    explanation: 'Each number decreases by 10',
  },
  {
    id: 15,
    type: 'Number Sequence',
    sequence: ['1', '2', '4', '8', '16', '?'],
    options: ['18', '24', '32', '64'],
    correctAnswer: 2,
    hint: 'Each number doubles',
    explanation: 'Each number is multiplied by 2: 16×2=32',
  },
  {
    id: 16,
    type: 'Number Sequence',
    sequence: ['3', '6', '9', '12', '15', '?'],
    options: ['16', '17', '18', '20'],
    correctAnswer: 2,
    hint: 'Multiples of 3',
    explanation: 'The 3 times table: add 3 each time',
  },
  // --- Alphabet ---
  {
    id: 17,
    type: 'Alphabet',
    sequence: ['Z', 'Y', 'X', 'W', 'V', '?'],
    options: ['U', 'T', 'S', 'R'],
    correctAnswer: 0,
    hint: 'Going backwards through the alphabet',
    explanation: 'The alphabet in reverse order: Z, Y, X, W, V, U',
  },
  {
    id: 18,
    type: 'Alphabet',
    sequence: ['A', 'C', 'E', 'G', 'I', '?'],
    options: ['J', 'K', 'L', 'M'],
    correctAnswer: 1,
    hint: 'Skip every other letter',
    explanation: 'Every second letter of the alphabet: A, C, E, G, I, K',
  },
  {
    id: 19,
    type: 'Alphabet',
    sequence: ['A1', 'B2', 'C3', 'D4', '?'],
    options: ['E5', 'D5', 'E4', 'F5'],
    correctAnswer: 0,
    hint: 'Letter and number both go up by one',
    explanation: 'Each step the letter and number both increase by one',
  },
  // --- Shape / Size ---
  {
    id: 20,
    type: 'Size',
    sequence: ['🔵', '🔵', '🔵', '🟣', '🔵', '🔵', '🔵', '🔵', '🟣', '?'],
    options: ['🔵', '🟣', '🟢', '🔴'],
    correctAnswer: 0,
    hint: 'Blue count grows before each purple',
    explanation: '3 blues, purple, 4 blues, purple — next is blue (5th blue)',
  },
  {
    id: 21,
    type: 'Shape',
    sequence: ['🔼', '🔽', '🔼', '🔼', '🔽', '🔼', '🔼', '🔼', '?'],
    options: ['🔼', '🔽', '◀️', '▶️'],
    correctAnswer: 1,
    hint: 'Up arrows increase by one before each down',
    explanation: '1 up, 1 down, 2 up, 1 down, 3 up — next is 1 down',
  },
  // --- Nature / Story ---
  {
    id: 22,
    type: 'Story',
    sequence: ['🌱', '🌿', '🌳', '🌱', '🌿', '?'],
    options: ['🌱', '🌿', '🌳', '🌸'],
    correctAnswer: 2,
    hint: 'A plant grows through stages',
    explanation: 'Seedling → leaves → tree, then the cycle repeats',
  },
  {
    id: 23,
    type: 'Story',
    sequence: ['🌞', '🌤️', '⛅', '🌥️', '☁️', '?'],
    options: ['🌞', '🌧️', '⛈️', '🌈'],
    correctAnswer: 1,
    hint: 'The sky gets more and more cloudy',
    explanation: 'Weather progresses from sunny to rainy step by step',
  },
  {
    id: 24,
    type: 'Story',
    sequence: ['🐣', '🐥', '🐔', '🐣', '🐥', '?'],
    options: ['🐣', '🐥', '🐔', '🦆'],
    correctAnswer: 2,
    hint: 'A chick grows up, then the cycle starts again',
    explanation: 'Egg hatches → chick → chicken, repeating',
  },
  {
    id: 25,
    type: 'Story',
    sequence: ['🌑', '🌒', '🌓', '🌔', '🌕', '?'],
    options: ['🌑', '🌖', '🌗', '🌘'],
    correctAnswer: 1,
    hint: 'The moon is getting fuller',
    explanation: 'Moon phases go from new moon to full moon: next is waning gibbous 🌖',
  },
  // --- Rainbow / Color ---
  {
    id: 26,
    type: 'Color',
    sequence: ['🟥', '🟧', '🟨', '🟩', '🟦', '?'],
    options: ['🟥', '🟪', '🟫', '⬛'],
    correctAnswer: 1,
    hint: 'Think of a rainbow',
    explanation: 'Rainbow order: red, orange, yellow, green, blue, purple',
  },
  {
    id: 27,
    type: 'Color',
    sequence: ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '🔴', '🟠', '?'],
    options: ['🔴', '🟡', '🟢', '🔵'],
    correctAnswer: 1,
    hint: 'Rainbow colors repeating from the start',
    explanation: 'The full rainbow sequence repeats: after orange comes yellow',
  },
  // --- Mixed emoji logic ---
  {
    id: 28,
    type: 'Logic',
    sequence: ['🍕', '🍕', '🍔', '🍕', '🍕', '🍔', '🍕', '🍕', '?'],
    options: ['🍕', '🍔', '🌮', '🍟'],
    correctAnswer: 1,
    hint: 'Two pizzas then a burger',
    explanation: 'The group is two pizzas then one burger, repeating',
  },
  {
    id: 29,
    type: 'Logic',
    sequence: ['😀', '😐', '😢', '😀', '😐', '?'],
    options: ['😀', '😐', '😢', '😡'],
    correctAnswer: 2,
    hint: 'Happy, neutral, sad — repeating',
    explanation: 'Three emotions repeat in order: happy, neutral, sad',
  },
  {
    id: 30,
    type: 'Logic',
    sequence: ['🏠', '🌳', '🏠', '🌳', '🌳', '🏠', '🌳', '🌳', '🌳', '?'],
    options: ['🏠', '🌳', '🌲', '🏡'],
    correctAnswer: 0,
    hint: 'Trees between houses increase by one each time',
    explanation: 'House, 1 tree, house, 2 trees, house, 3 trees — next is house',
  },
  // --- Spatial / Direction ---
  {
    id: 31,
    type: 'Direction',
    sequence: ['➡️', '⬇️', '⬅️', '⬆️', '➡️', '⬇️', '⬅️', '?'],
    options: ['➡️', '⬇️', '⬅️', '⬆️'],
    correctAnswer: 3,
    hint: 'Arrows go around in a clockwise square',
    explanation: 'Right, down, left, up — a clockwise cycle repeating',
  },
  {
    id: 32,
    type: 'Direction',
    sequence: ['⬆️', '⬆️', '➡️', '⬆️', '⬆️', '➡️', '⬆️', '?'],
    options: ['⬆️', '➡️', '⬇️', '⬅️'],
    correctAnswer: 0,
    hint: 'Two ups then a right — what comes after the second up?',
    explanation: 'Two ups then one right repeating — after the second up comes another up',
  },
  // --- Seasons / Time ---
  {
    id: 33,
    type: 'Seasons',
    sequence: ['🌸', '☀️', '🍂', '❄️', '🌸', '☀️', '?'],
    options: ['🌸', '☀️', '🍂', '❄️'],
    correctAnswer: 2,
    hint: 'Four seasons cycling',
    explanation: 'Spring, summer, autumn, winter — repeating cycle',
  },
  {
    id: 34,
    type: 'Time',
    sequence: ['🌅', '🌞', '🌆', '🌙', '🌅', '🌞', '?'],
    options: ['🌅', '🌞', '🌆', '🌙'],
    correctAnswer: 2,
    hint: 'Times of day cycling',
    explanation: 'Dawn, day, dusk, night — repeating cycle of a day',
  },
  // --- Mixed number + emoji ---
  {
    id: 35,
    type: 'Mixed',
    sequence: ['1️⃣', '2️⃣', '3️⃣', '1️⃣', '2️⃣', '?'],
    options: ['1️⃣', '2️⃣', '3️⃣', '4️⃣'],
    correctAnswer: 2,
    hint: 'Numbers 1, 2, 3 keep repeating',
    explanation: 'The numbers 1, 2, 3 repeat as a group',
  },
  {
    id: 36,
    type: 'Mixed',
    sequence: ['🔴', '🔴', '🔵', '🔴', '🔴', '🔴', '🔵', '?'],
    options: ['🔴', '🔵', '🟢', '🟡'],
    correctAnswer: 0,
    hint: 'Red count grows before each blue',
    explanation: '2 reds, blue, 3 reds, blue — next is red (4th red)',
  },
  // --- Animal patterns ---
  {
    id: 37,
    type: 'Animals',
    sequence: ['🐟', '🐟', '🐠', '🐟', '🐟', '🐠', '🐟', '?'],
    options: ['🐟', '🐠', '🐡', '🦈'],
    correctAnswer: 0,
    hint: 'Two fish then a tropical fish',
    explanation: 'Two plain fish then one tropical fish — after the second fish comes another fish',
  },
  {
    id: 38,
    type: 'Animals',
    sequence: ['🐘', '🐘', '🐘', '🦁', '🐘', '🐘', '🐘', '?'],
    options: ['🐘', '🦁', '🐯', '🦒'],
    correctAnswer: 1,
    hint: 'Three elephants then a lion',
    explanation: 'Three elephants then one lion, repeating',
  },
  // --- Weather ---
  {
    id: 39,
    type: 'Weather',
    sequence: ['☀️', '☀️', '🌧️', '☀️', '☀️', '☀️', '🌧️', '?'],
    options: ['☀️', '🌧️', '⛅', '🌈'],
    correctAnswer: 0,
    hint: 'Sun count grows before each rain',
    explanation: '2 suns, rain, 3 suns, rain — next is sun (4th sun)',
  },
  // --- Complex logic ---
  {
    id: 40,
    type: 'Complex',
    sequence: ['🔵', '🔴', '🔵', '🔵', '🔴', '🔵', '🔵', '🔵', '?'],
    options: ['🔵', '🔴', '🟢', '🟡'],
    correctAnswer: 1,
    hint: 'Blue count between reds increases each time',
    explanation: '1 blue, red, 2 blues, red, 3 blues — next is red',
  },
];

export default function PatternPlanetPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSolved, setTotalSolved] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showRetryOptions, setShowRetryOptions] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hasRetried, setHasRetried] = useState(false);
  const [disabledOptions, setDisabledOptions] = useState<number[]>([]);

  const currentPattern = PATTERNS[currentIndex];
  const isCorrect = selectedAnswer === currentPattern.correctAnswer;

  useEffect(() => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setShowRetryOptions(false);
    setShowHint(false);
    setHasRetried(false);
    setDisabledOptions([]);
  }, [currentIndex]);

  const handleAnswerSelect = (index: number) => {
    if (showFeedback || disabledOptions.includes(index) || showRetryOptions) return;

    setSelectedAnswer(index);
    const isAnswerCorrect = index === currentPattern.correctAnswer;

    if (isAnswerCorrect) {
      setShowFeedback(true);
      setTotalSolved(prev => prev + 1);
    } else {
      if (!hasRetried) {
        setShowRetryOptions(true);
        setDisabledOptions([index]);
      } else {
        setShowFeedback(true);
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
    setShowFeedback(true);
    setSelectedAnswer(currentPattern.correctAnswer);
  };

  const handleNext = () => {
    // Loop back to start after last pattern
    setCurrentIndex((currentIndex + 1) % PATTERNS.length);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-4xl">
      <div className="mb-6 lg:mb-8">
        <Link href="/games" className="text-blue-600 hover:text-blue-700 mb-4 inline-block text-sm sm:text-base">
          ← Back to Games
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800">
          Pattern Planet
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Discover patterns and strengthen your logical thinking
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8 gap-3 sm:gap-4">
        <span className="text-xs sm:text-sm text-slate-600 bg-slate-100 px-3 sm:px-4 py-2 rounded-full">
          Pattern {currentIndex + 1} — Keep going!
        </span>
        <span className="text-xs sm:text-sm font-semibold text-slate-700 bg-blue-50 px-3 sm:px-4 py-2 rounded-full">
          ✅ Solved: {totalSolved}
        </span>
        <span className="text-xs sm:text-sm text-slate-500 bg-slate-100 px-3 sm:px-4 py-2 rounded-full">
          Type: {currentPattern.type}
        </span>
      </div>

      {/* Game Card */}
      <Card className="p-4 sm:p-6 lg:p-8" key={currentIndex}>
        <div className="mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 lg:mb-6 text-center text-slate-800">
            What comes next in this pattern?
          </h2>

          {/* Pattern Display */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-6 lg:mb-8 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
            {currentPattern.sequence.map((item, index) => (
              <div
                key={index}
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${
                  item === '?' ? 'text-slate-400' : ''
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Hint Button */}
          {!showFeedback && (
            <div className="text-center mb-4 lg:mb-6">
              <Button onClick={() => setShowHint(!showHint)} variant="outline" size="sm" className="text-sm">
                {showHint ? 'Hide Hint' : '💡 Need a Hint?'}
              </Button>
              {showHint && (
                <p className="mt-3 text-sm sm:text-base text-slate-600 italic px-4">{currentPattern.hint}</p>
              )}
            </div>
          )}
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {currentPattern.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showFeedback || disabledOptions.includes(index) || showRetryOptions}
              variant="outline"
              className={`h-20 sm:h-24 text-2xl sm:text-3xl lg:text-4xl ${
                showFeedback && index === currentPattern.correctAnswer
                  ? 'bg-green-100 border-green-500 hover:bg-green-100'
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
          <div className="p-6 rounded-lg mb-6 bg-blue-50 border-2 border-blue-200">
            <p className="text-lg font-medium mb-4 text-slate-800">
              Not quite! Try a different option?
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
              {isCorrect ? (hasRetried ? '🎉 Good effort!' : '🎉 Excellent work!') : 'Almost there!'}
            </p>
            <p className="text-slate-700">
              {isCorrect
                ? `You found the pattern! The answer is ${currentPattern.options[currentPattern.correctAnswer]}.`
                : `The correct answer is ${currentPattern.options[currentPattern.correctAnswer]}. ${currentPattern.explanation}`}
            </p>
          </div>
        )}

        {/* Navigation */}
        {showFeedback && !showRetryOptions && (
          <div className="flex justify-center">
            <Button onClick={handleNext} size="lg" className="px-8 text-black">
              Next Pattern →
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
