import { ReactNode } from "react";

export interface Achievement {
  title: ReactNode;
  id: string;
  name: string;
  description: string;
  points: number;
  icon: string;
  unlocked: boolean;
}

export interface Action {
  action(action: any): void;
  id: string;
  name: string;
  execute: () => void;
  used: boolean;
  label: string;
}

export interface Monster {
  id: string;
  name: string;
  health: number;
  attack: number;
}

export interface Progress {
  current: number;
  total: number;
}

export interface Score {
  value: number;
  max: number;
}

export interface AchievementPopupProps {
  achievement: Achievement;
}

export interface ActionButtonProps {
  action: Action;
  onClick: (action: Action) => void;
  disabled: boolean;
}

export interface MonsterDisplayProps {
  monster: string;
  isAttacked: boolean;
}

export interface ProgressBarProps {
  value: number;
  max: number;
  label: string;
  color: string;
}

export interface ScoreDisplayProps {
  points: number;
  totalPoints: number;
}
