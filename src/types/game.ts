export interface Action {
  action: string
  label: string
  sleepEffect: number
  points: number
  used?: boolean
}

export interface Challenge {
  title: string
  monster: string
  actions: Action[]
  basePoints: number
}

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
