export interface Action {
  action: string
  label: string
  sleepEffect: number  // Changed from monsterEffect
  points: number       // Points awarded for using this action
  used?: boolean      // Track if action has been used
}

export interface Challenge {
  title: string
  monster: string
  actions: Action[]
  basePoints: number  // Base points for completing the challenge
}

export interface GameState {
  sleepProgress: number  // Changed from monsterHealth
  challengeNumber: number
  selectedHero?: string
  currentPoints: number
  totalPoints: number
  achievements: Achievement[]
  actionHistory: boolean[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
}

export interface ScoreDisplayProps {
  points: number;
  totalPoints: number;
}

export interface Stats {
  actionsUsed: { [key: string]: number }
  monstersDefeated: number
  totalProgress: number
  highScore: number
}

// Add the necessary imports and types here if needed

export interface ProgressBarProps {
  value: number;
  max: number;
  label: string;
  color: string;
}

// Ensure this file contains the following export

export interface MonsterDisplayProps {
  monster: string;
  isAttacked: boolean;
}

export interface SomeOtherInterface {
  // other properties
}

export interface AchievementPopupProps {
  achievement: {
    icon: React.ReactNode;
    title: string;
  };
}

// Add your existing code here

export interface ActionButtonProps {
  action: {
    action: string;
    label: string;
    used: boolean;
  };
  onClick: (action: string) => void;
  disabled: boolean;
}