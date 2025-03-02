"use client"

import { useState, useEffect } from "react"
import type { Monster } from "./types"
import { Brain, Activity } from "lucide-react"

interface MonsterDisplayProps {
  monster: Monster
  isAttacked: boolean
}

export function MonsterDisplay({ monster, isAttacked }: MonsterDisplayProps) {
  const [animation, setAnimation] = useState("")

  useEffect(() => {
    if (isAttacked) {
      setAnimation("animate-bounce")
      const timer = setTimeout(() => setAnimation(""), 500)
      return () => clearTimeout(timer)
    }
  }, [isAttacked])

  // Placeholder SVG for monsters
  const renderMonsterSvg = () => {
    if (monster.name === "Anxiety Monster") {
      return (
        <div className="relative w-48 h-48 bg-[#f0f7ff] rounded-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-[#0d3c26]/20 animate-pulse"></div>
          <Activity className="w-24 h-24 text-[#0d3c26] animate-pulse" />
          <div className="absolute top-6 right-6">
            <div className="w-16 h-16 bg-[#daf2ce] rounded-full flex items-center justify-center">
              <Activity className="w-8 h-8 text-[#0d3c26]" />
            </div>
          </div>
          <div className="absolute bottom-8 left-6">
            <div className="w-12 h-12 bg-[#daf2ce] rounded-full flex items-center justify-center">
              <Activity className="w-6 h-6 text-[#0d3c26]" />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="relative w-48 h-48 bg-[#f0f7ff] rounded-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-[#0d3c26]/20 animate-spin-slow"></div>
          <Brain className="w-24 h-24 text-[#0d3c26]" />
          <div className="absolute top-0 right-12 animate-float">
            <div className="w-12 h-12 bg-[#daf2ce] rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-[#0d3c26]" />
            </div>
          </div>
          <div className="absolute bottom-4 left-0 animate-float-delay">
            <div className="w-10 h-10 bg-[#daf2ce] rounded-full flex items-center justify-center">
              <Brain className="w-5 h-5 text-[#0d3c26]" />
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${animation}`}>{renderMonsterSvg()}</div>
      <h3 className="mt-4 text-xl font-bold text-[#0d3c26]">{monster.name}</h3>
      <p className="mt-2 text-sm text-[#0d3c26]/70 max-w-md text-center">{monster.description}</p>
    </div>
  )
}

