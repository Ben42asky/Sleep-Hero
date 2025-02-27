import type { Achievement } from "../components/types"

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first_sleep",
    name: "First Sleep",
    title: "First Sleep",
    description: "Complete your first sleep challenge",
    points: 50,
    icon: "🌙",
    unlocked: false,
  },
  {
    id: "perfect_sleep",
    name: "Perfect Sleep",
    title: "Perfect Sleep",
    description: "Complete a challenge without using any negative actions",
    points: 100,
    icon: "✨",
    unlocked: false,
  },
  {
    id: "sleep_master",
    name: "Sleep Master",
    title: "Sleep Master",
    description: "Complete all sleep challenges",
    points: 200,
    icon: "👑",
    unlocked: false,
  },
  {
    id: "point_collector",
    name: "Point Collector",
    title: "Point Collector",
    description: "Earn over 1000 total points",
    points: 150,
    icon: "💎",
    unlocked: false,
  },
]

