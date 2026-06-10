import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface GameProgress {
  gameId: string;
  completionPercentage: number;
  currentLevel?: number;
  score?: number;
  highScore?: number;
  accuracy?: number;
  scenariosCompleted?: number;
  wordsCompleted?: number;
  routinesCompleted?: number;
  lastPlayed?: string;
}

export interface Badge {
  id: string;
  gameId: string;
  name: string;
  description: string;
  earnedAt: string;
}

interface GameState {
  progress: Record<string, GameProgress>;
  badges: Badge[];
  updateProgress: (gameId: string, updates: Partial<GameProgress>) => void;
  awardBadge: (badge: Omit<Badge, 'earnedAt'>) => void;
  getGameProgress: (gameId: string) => GameProgress | undefined;
  getBadgesByGame: (gameId: string) => Badge[];
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      progress: {},
      badges: [],
      
      updateProgress: (gameId, updates) => {
        set((state) => ({
          progress: {
            ...state.progress,
            [gameId]: {
              ...state.progress[gameId],
              gameId,
              ...updates,
              lastPlayed: new Date().toISOString(),
            },
          },
        }));
      },
      
      awardBadge: (badge) => {
        const existingBadge = get().badges.find(
          (b) => b.id === badge.id && b.gameId === badge.gameId
        );
        
        if (!existingBadge) {
          set((state) => ({
            badges: [
              ...state.badges,
              {
                ...badge,
                earnedAt: new Date().toISOString(),
              },
            ],
          }));
        }
      },
      
      getGameProgress: (gameId) => {
        return get().progress[gameId];
      },
      
      getBadgesByGame: (gameId) => {
        return get().badges.filter((b) => b.gameId === gameId);
      },
    }),
    {
      name: 'auticare_game_progress',
      storage: createJSONStorage(() => {
        // Check if we're in the browser
        if (typeof window !== 'undefined') {
          return localStorage;
        }
        // Return a dummy storage for SSR
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
      partialize: (state) => ({
        progress: state.progress,
        badges: state.badges,
      }),
    }
  )
);
