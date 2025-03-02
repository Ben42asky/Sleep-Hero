"use client"

import { useEffect, useState } from "react"

interface PointsPopupProps {
  points: number
  position: {
    x: number
    y: number
  }
  variant?: "action" | "victory"
}

export function PointsPopup({ points, position, variant = "action" }: PointsPopupProps) {
  const [opacity, setOpacity] = useState(1)
  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0)
      setTranslateY(-50)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const isPositive = points > 0
  const color = isPositive ? "text-green-600" : "text-red-600"
  const sign = isPositive ? "+" : ""
  const size = variant === "victory" ? "text-3xl" : "text-xl"

  return (
    <div
      className={`fixed pointer-events-none ${size} font-bold ${color} transition-all duration-1000 z-50`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      {sign}
      {points} {variant === "victory" ? "points!" : ""}
    </div>
  )
}

