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

export interface Stats {
  actionsUsed: { [key: string]: number }
  monstersDefeated: number
  totalProgress: number
  highScore: number
}
