"use client"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { MonsterDisplay } from "@/components/MonsterDisplay"
import { ActionContainer } from "@/components/ActionContainer"
import { ProgressBar } from "@/components/ProgressBar"
import { ScoreDisplay } from "@/components/ScoreDisplay"
import { PointsPopup } from "@/components/PointsPopup"
import { AchievementPopup } from "@/components/AchievementPopup"
import type { Action, GameState, Achievement } from "@/components/types"
import { CHALLENGES } from "@/data/challenges"
import { ACHIEVEMENTS } from "@/data/achievements"
import { Button } from "@/components/Button"
import { Trophy, ArrowRight } from "lucide-react"

export default function Gameplay() {
  const router = useRouter()
  const [gameState, setGameState] = useState<GameState>({
    sleepProgress: 0,
    points: 0,
    totalPoints: 0,
    challengeNumber: 0,
    currentChallenge: CHALLENGES[0],
    achievements: ACHIEVEMENTS,
    isGameOver: false,
    isVictory: false,
  })

  const [isAttacked, setIsAttacked] = useState(false)
  const [pointPopups, setPointPopups] = useState<{ points: number; position: { x: number; y: number }; id: number }[]>(
    [],
  )
  const [showAchievement, setShowAchievement] = useState<Achievement | null>(null)
  const [actionFeedback, setActionFeedback] = useState<{ title: string; message: string; visible: boolean }>({
    title: "",
    message: "",
    visible: false,
  })

  const getActionFeedback = useCallback((action: Action) => {
    if (action.type === "positive") {
      return {
        title: "Good Choice!",
        message: "This is an effective sleep technique that helps calm your mind and body.",
      }
    } else {
      return {
        title: "Not Helpful",
        message: "This action actually makes it harder to fall asleep. Try a different approach.",
      }
    }
  }, [])

  const handleAction = useCallback(
    (action: Action) => {
      setGameState((prev) => {
        const newState = {
          ...prev,
          currentChallenge: {
            ...prev.currentChallenge,
            actions: prev.currentChallenge.actions.map((a) => (a.id === action.id ? { ...a, used: true } : a)),
          },
        }

        const newSleepProgress = Math.max(0, Math.min(100, prev.sleepProgress + action.sleepEffect))
        const newPoints = prev.points + action.points

        const isVictory = newSleepProgress >= 100
        const remainingPositiveProgress = newState.currentChallenge.actions
          .filter((a) => !a.used && a.type === "positive")
          .reduce((sum, a) => sum + a.sleepEffect, 0)

        const isGameOver = isVictory || newSleepProgress + remainingPositiveProgress < 100

        return {
          ...newState,
          sleepProgress: newSleepProgress,
          points: newPoints,
          isGameOver,
          isVictory,
        }
      })

      const feedback = getActionFeedback(action)
      setActionFeedback({
        title: feedback.title,
        message: feedback.message,
        visible: true,
      })

      setTimeout(() => {
        setActionFeedback((prev) => ({ ...prev, visible: false }))
      }, 3000)

      setPointPopups((prev) => [
        ...prev,
        {
          points: action.points,
          position: {
            x: Math.random() * (window.innerWidth - 100) + 50,
            y: Math.random() * (window.innerHeight / 2) + 100,
          },
          id: Date.now(),
        },
      ])

      if (action.sleepEffect < 0) {
        setIsAttacked(true)
        setTimeout(() => setIsAttacked(false), 500)
      }
    },
    [getActionFeedback],
  )

  const resetChallenge = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      sleepProgress: 0,
      points: 0,
      currentChallenge: {
        ...CHALLENGES[prev.challengeNumber],
        actions: CHALLENGES[prev.challengeNumber].actions.map((action) => ({ ...action, used: false })),
      },
      isGameOver: false,
      isVictory: false,
    }))
  }, [])

  const handleNextChallenge = useCallback(() => {
    const nextChallengeNumber = gameState.challengeNumber + 1

    if (nextChallengeNumber < CHALLENGES.length) {
      setGameState({
        sleepProgress: 0,
        points: 0,
        totalPoints: 0, // Add this line
        challengeNumber: nextChallengeNumber,
        currentChallenge: CHALLENGES[nextChallengeNumber],
        achievements: gameState.achievements,
        isGameOver: false,
        isVictory: false,
      })
    } else {
      router.push("/main-menu")
    }
  }, [gameState.challengeNumber, gameState.achievements, router])

  const GameOverModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4 text-center">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Challenge Failed</h3>
        <p className="text-[#0d3c26]/80 mb-6">
          You can't reach 100% sleep progress with the remaining actions. Try again and choose your actions more
          carefully!
        </p>
        <Button onClick={resetChallenge} variant="primary" className="w-full">
          Try Again
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white text-[#0d3c26] p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Sleep Hero - Challenge {gameState.challengeNumber + 1}</h1>
          <h2 className="text-xl text-[#0d3c26]/80">{gameState.currentChallenge.title}</h2>
        </div>

        <div className="space-y-8">
          <div className="flex justify-center">
            <MonsterDisplay monster={gameState.currentChallenge.monster} isAttacked={isAttacked} />
          </div>

          <div className="space-y-4">
            <ProgressBar
              value={gameState.sleepProgress}
              max={100}
              label="Sleep Progress"
              color="bg-gradient-to-r from-[#0d3c26] to-[#1a5c3d]"
            />
            <ScoreDisplay points={gameState.points} />
          </div>

          <div className="bg-[#daf2ce]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#0d3c26]/10">
            {gameState.isGameOver ? (
              <div className="space-y-6 text-center">
                <h3 className="text-2xl font-bold text-[#0d3c26]">
                  {gameState.isVictory ? "Challenge Complete!" : "Game Over"}
                </h3>
                <p className="text-lg">
                  {gameState.isVictory ? `You earned ${gameState.points} points!` : "Better luck next time!"}
                </p>
                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                  {gameState.isVictory ? (
                    <Button onClick={handleNextChallenge} rightIcon={<ArrowRight className="w-5 h-5" />}>
                      {gameState.challengeNumber + 1 < CHALLENGES.length ? "Next Challenge" : "Back to Menu"}
                    </Button>
                  ) : (
                    <Button onClick={resetChallenge} variant="primary">
                      Try Again
                    </Button>
                  )}
                  <Button
                    variant="secondary"
                    onClick={() => router.push("/main-menu")}
                    leftIcon={<Trophy className="w-5 h-5" />}
                  >
                    Main Menu
                  </Button>
                </div>
              </div>
            ) : (
              <ActionContainer
                actions={gameState.currentChallenge.actions}
                onAction={handleAction}
                disabled={gameState.isGameOver}
              />
            )}
          </div>
        </div>
      </div>

      {pointPopups.map((popup) => (
        <PointsPopup
          key={popup.id}
          points={popup.points}
          position={popup.position}
          variant={gameState.isVictory ? "victory" : "action"}
        />
      ))}

      {showAchievement && (
        <div className="fixed bottom-4 right-4 z-50">
          <AchievementPopup achievement={showAchievement} />
        </div>
      )}

      {actionFeedback.visible && (
        <div className="fixed bottom-4 left-4 z-50 bg-white rounded-lg shadow-lg p-4 border border-[#0d3c26]/20 max-w-xs animate-fade-in">
          <h4 className={`font-bold ${actionFeedback.title.includes("Good") ? "text-green-600" : "text-red-600"}`}>
            {actionFeedback.title}
          </h4>
          <p className="text-sm text-[#0d3c26]/80 mt-1">{actionFeedback.message}</p>
        </div>
      )}

      {gameState.isGameOver && !gameState.isVictory && <GameOverModal />}
    </div>
  )
}

