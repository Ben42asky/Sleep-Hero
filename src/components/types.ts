export interface Achievement {
  id: string
  title: string
  name: string
  description: string
  points: number
  icon: string
  unlocked: boolean
}

export interface Action {
  id: string
  name: string
  label: string
  sleepEffect: number
  points: number
  used: boolean
}

export interface Challenge {
  id: string
  title: string
  monster: string
  basePoints: number
  actions: Action[]
}

export interface GameState {
  sleepProgress: number
  points: number
  totalPoints: number
  challengeNumber: number
  currentChallenge: Challenge
  achievements: Achievement[]
  isGameOver: boolean
  isVictory: boolean
}

export interface Monster {
  id: string
  name: string
  health: number
  attack: number
}

export interface Progress {
  current: number
  total: number
}

export interface Score {
  value: number
  max: number
}

export interface AchievementPopupProps {
  achievement: Achievement
}

export interface ActionButtonProps {
  action: Action
  onClick: (action: Action) => void
  disabled?: boolean
}

export interface ActionContainerProps {
  actions: Action[]
  onAction: (action: Action) => void
  disabled?: boolean
}

export interface MonsterDisplayProps {
  monster: string
  isAttacked: boolean
}

export interface ProgressBarProps {
  value: number
  max: number
  label: string
  color: string
}

export interface ScoreDisplayProps {
  points: number
  totalPoints: number
}

export interface PointsPopupProps {
  points: number
  position: { x: number; y: number }
  variant?: "action" | "victory"
}

