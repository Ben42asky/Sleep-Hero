import { Achievement } from '../components/types'

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_victory',
    title: 'First Victory',
    description: 'Defeat your first monster',
    icon: '🏆',
    unlocked: false
  },
  {
    id: 'perfect_battle',
    title: 'Perfect Battle',
    description: 'Defeat a monster without losing energy',
    icon: '⭐',
    unlocked: false
  },
  {
    id: 'high_scorer',
    title: 'High Scorer',
    description: 'Score over 500 points in one battle',
    icon: '🌟',
    unlocked: false
  },
  {
    id: 'dream_master',
    title: 'Dream Master',
    description: 'Complete all challenges',
    icon: '👑',
    unlocked: false
  }
]
