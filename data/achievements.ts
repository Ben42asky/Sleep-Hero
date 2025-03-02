import type { Achievement } from "../components/types"

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first-victory",
    title: "First Victory",
    description: "Complete your first sleep challenge",
    icon: "award",
    unlocked: false,
  },
  {
    id: "perfect-battle",
    title: "Perfect Battle",
    description: "Win without using any negative actions",
    icon: "star",
    unlocked: false,
  },
  {
    id: "high-scorer",
    title: "High Scorer",
    description: "Score 500+ points in one battle",
    icon: "trending-up",
    unlocked: false,
  },
  {
    id: "dream-master",
    title: "Dream Master",
    description: "Complete all sleep challenges",
    icon: "moon",
    unlocked: false,
  },
]

