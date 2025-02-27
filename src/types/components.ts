export interface AchievementPopupProps {
  achievement: Achievement
}

export interface ActionButtonProps {
  action: Action
  onClick: (action: string) => void
  disabled?: boolean
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export interface MonsterDisplayProps {
  monster: string
  isAttacked: boolean
}

export interface PointsPopupProps {
  points: number
  position: { x: number; y: number }
  variant?: 'action' | 'victory'
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

// Import the base types we reference above
import { Achievement, Action } from './game'
