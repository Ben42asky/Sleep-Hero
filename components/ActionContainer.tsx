"use client"

import { useMemo } from "react"
import type { Action } from "./types"
import { Button } from "./Button"
import { TreesIcon as Lungs, Activity, Brain, Smartphone, Repeat, Music, Pencil, Heart, Calendar } from "lucide-react"

interface ActionContainerProps {
  actions: Action[]
  onAction: (action: Action) => void
  disabled: boolean
}

export function ActionContainer({ actions, onAction, disabled }: ActionContainerProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "lungs":
        return <Lungs className="w-5 h-5" />
      case "activity":
        return <Activity className="w-5 h-5" />
      case "brain":
        return <Brain className="w-5 h-5" />
      case "smartphone":
        return <Smartphone className="w-5 h-5" />
      case "repeat":
        return <Repeat className="w-5 h-5" />
      case "music":
        return <Music className="w-5 h-5" />
      case "pencil":
        return <Pencil className="w-5 h-5" />
      case "heart":
        return <Heart className="w-5 h-5" />
      case "calendar":
        return <Calendar className="w-5 h-5" />
      default:
        return <Activity className="w-5 h-5" />
    }
  }

  // Randomize action order
  const randomizedActions = useMemo(() => {
    return [...actions].sort(() => Math.random() - 0.5)
  }, [actions])

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-center text-[#0d3c26] mb-6">Choose Your Actions Wisely</h3>
      <div className="grid grid-cols-1 gap-3 max-w-xl mx-auto">
        {randomizedActions.map((action) => (
          <Button
            key={action.id}
            onClick={() => onAction(action)}
            disabled={disabled || action.used}
            variant={action.used ? (action.type === "positive" ? "success" : "negative") : "neutral"}
            leftIcon={getIcon(action.icon)}
            className="w-full"
          >
            <div className="flex flex-col items-start">
              <span className="font-medium">{action.name}</span>
              <span className="text-sm opacity-80">{action.description}</span>
              {action.used && (
                <div className="flex items-center mt-1 text-xs">
                  <span
                    className={action.sleepEffect > 0 ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}
                  >
                    {action.sleepEffect > 0 ? "+" : ""}
                    {action.sleepEffect}% sleep
                  </span>
                </div>
              )}
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

