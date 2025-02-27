export interface GameState {
  sleepProgress: number
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

export interface Stats {
  actionsUsed: { [key: string]: number }
  monstersDefeated: number
  totalProgress: number
  highScore: number
}
