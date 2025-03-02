export interface Monster {
    name: string
    image: string
    description: string
  }
  
  export interface Action {
    id: string
    name: string
    description: string
    sleepEffect: number
    points: number
    icon: string
    used?: boolean
    type: "positive" | "negative"
  }
  
  export interface Challenge {
    id: string
    title: string
    description: string
    monster: Monster
    actions: Action[]
  }
  
  export interface Achievement {
    id: string
    title: string
    description: string
    icon: string
    unlocked: boolean
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
  
  