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
