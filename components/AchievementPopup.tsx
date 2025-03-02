"use client"

import { useState, useEffect } from "react"
import type { Achievement } from "./types"
import { Award, Star, TrendingUp, Moon } from "lucide-react"

interface AchievementPopupProps {
  achievement: Achievement
}

export function AchievementPopup({ achievement }: AchievementPopupProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
    const timer = setTimeout(() => {
      setShow(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award className="w-6 h-6 text-yellow-500" />
      case "star":
        return <Star className="w-6 h-6 text-yellow-500" />
      case "trending-up":
        return <TrendingUp className="w-6 h-6 text-yellow-500" />
      case "moon":
        return <Moon className="w-6 h-6 text-yellow-500" />
      default:
        return <Award className="w-6 h-6 text-yellow-500" />
    }
  }

  return (
    <div
      className={`bg-white border border-[#0d3c26]/20 rounded-lg shadow-lg p-4 transition-all duration-500 transform ${
        show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className="bg-[#daf2ce] p-2 rounded-full">{getIcon(achievement.icon)}</div>
        <div>
          <h4 className="font-bold text-[#0d3c26]">Achievement Unlocked!</h4>
          <p className="text-sm text-[#0d3c26]/70">{achievement.title}</p>
        </div>
      </div>
      <p className="mt-2 text-xs text-[#0d3c26]/60">{achievement.description}</p>
    </div>
  )
}

