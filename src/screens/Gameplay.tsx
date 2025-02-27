"use client"

import { useState, useEffect } from "react"
import { MonsterDisplay } from "../components/MonsterDisplay"
import { ActionContainer } from "../components/ActionContainer"
import { ProgressBar } from "../components/ProgressBar"
import { ScoreDisplay } from "../components/ScoreDisplay"
import { PointsPopup } from "../components/PointsPopup"
import { AchievementPopup } from "../components/AchievementPopup"
import type { Action, GameState, Achievement } from "../components/types"
import { CHALLENGES } from "../data/challenges"
import { ACHIEVEMENTS } from "../data/achievements"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import { Trophy, ArrowRight } from "lucide-react"

export function Gameplay() {
  const navigate = useNavigate()
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

  // Load game state from localStorage if available
  useEffect(() => {
    const savedState = localStorage.getItem("gameState")
    if (savedState) {
      const parsedState = JSON.parse(savedState)
      setGameState((prev) => ({
        ...prev,
        totalPoints: parsedState.totalPoints || 0,
        challengeNumber: parsedState.challengeNumber || 0,
        currentChallenge: CHALLENGES[parsedState.challengeNumber || 0],
        achievements: parsedState.achievements || ACHIEVEMENTS,
      }))
    }
  }, [])

  // Save game state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem(
      "gameState",
      JSON.stringify({
        totalPoints: gameState.totalPoints,
        challengeNumber: gameState.challengeNumber,
        achievements: gameState.achievements,
      }),
    )
  }, [gameState.totalPoints, gameState.challengeNumber, gameState.achievements])

  const handleAction = (action: Action) => {
    // Mark action as used
    setGameState((prev) => ({
      ...prev,
      currentChallenge: {
        ...prev.currentChallenge,
        actions: prev.currentChallenge.actions.map((a) => (a.id === action.id ? { ...a, used: true } : a)),
      },
    }))

    // Update sleep progress
    setGameState((prev) => {
      const newSleepProgress = Math.max(0, Math.min(100, prev.sleepProgress + action.sleepEffect))
      const newPoints = prev.points + action.points

      // Create point popup
      const popup = {
        points: action.points,
        position: {
          x: Math.random() * (window.innerWidth - 100) + 50,
          y: Math.random() * (window.innerHeight / 2) + 100,
        },
        id: Date.now(),
      }
      setPointPopups((prev) => [...prev, popup])

      // Check for victory
      if (newSleepProgress >= 100) {
        return {
          ...prev,
          sleepProgress: 100,
          points: newPoints,
          isGameOver: true,
          isVictory: true,
        }
      }

      return {
        ...prev,
        sleepProgress: newSleepProgress,
        points: newPoints,
      }
    })

    // Show attack animation
    if (action.sleepEffect < 0) {
      setIsAttacked(true)
      setTimeout(() => setIsAttacked(false), 500)
    }
  }

  // Handle game completion
  useEffect(() => {
    if (gameState.isGameOver && gameState.isVictory) {
      // Update total points
      setGameState((prev) => ({
        ...prev,
        totalPoints: prev.totalPoints + prev.points,
      }))

      // Check for achievements
      const newAchievements = [...gameState.achievements]

      // First sleep achievement
      if (!newAchievements[0].unlocked) {
        newAchievements[0].unlocked = true
        setShowAchievement(newAchievements[0])
      }

      // Perfect sleep achievement
      const usedNegativeAction = gameState.currentChallenge.actions.some(
        (action) => action.used && action.sleepEffect < 0,
      )
      if (!usedNegativeAction && !newAchievements[1].unlocked) {
        newAchievements[1].unlocked = true
        setShowAchievement(newAchievements[1])
      }

      // Update achievements
      setGameState((prev) => ({
        ...prev,
        achievements: newAchievements,
      }))
    }
  }, [gameState.isGameOver, gameState.isVictory, gameState.achievements, gameState.currentChallenge.actions])

  const handleNextChallenge = () => {
    const nextChallengeNumber = gameState.challengeNumber + 1

    if (nextChallengeNumber < CHALLENGES.length) {
      setGameState({
        sleepProgress: 0,
        points: 0,
        totalPoints: gameState.totalPoints,
        challengeNumber: nextChallengeNumber,
        currentChallenge: CHALLENGES[nextChallengeNumber],
        achievements: gameState.achievements,
        isGameOver: false,
        isVictory: false,
      })
    } else {
      // All challenges completed
      const newAchievements = [...gameState.achievements]
      if (!newAchievements[2].unlocked) {
        newAchievements[2].unlocked = true
        setShowAchievement(newAchievements[2])
      }

      setGameState((prev) => ({
        ...prev,
        achievements: newAchievements,
      }))

      // Navigate to completion screen or main menu
      navigate("/main-menu")
    }
  }

  // Remove point popups after animation
  useEffect(() => {
    if (pointPopups.length > 0) {
      const timer = setTimeout(() => {
        setPointPopups((prev) => prev.slice(1))
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [pointPopups])

  // Hide achievement popup after delay
  useEffect(() => {
    if (showAchievement) {
      const timer = setTimeout(() => {
        setShowAchievement(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showAchievement])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-2">
            Sleep Hero - Challenge {gameState.challengeNumber + 1}
          </h1>
          <h2 className="text-xl text-center text-blue-200">{gameState.currentChallenge.title}</h2>
        </div>

        {/* Game content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Monster */}
          <div className="md:col-span-2">
            <MonsterDisplay monster={gameState.currentChallenge.monster} isAttacked={isAttacked} />

            {/* Progress bar */}
            <div className="mt-8">
              <ProgressBar
                value={gameState.sleepProgress}
                max={100}
                label="Sleep Progress"
                color="bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>

            {/* Score display */}
            <div className="mt-4">
              <ScoreDisplay points={gameState.points} totalPoints={gameState.totalPoints} />
            </div>
          </div>

          {/* Right column - Actions */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
            {gameState.isGameOver ? (
              <div className="space-y-6 text-center">
                <h3 className="text-2xl font-bold text-yellow-300">
                  {gameState.isVictory ? "Challenge Complete!" : "Game Over"}
                </h3>
                <p className="text-lg">
                  {gameState.isVictory ? `You earned ${gameState.points} points!` : "Better luck next time!"}
                </p>
                <Button onClick={handleNextChallenge} rightIcon={<ArrowRight className="w-5 h-5" />}>
                  {gameState.challengeNumber + 1 < CHALLENGES.length ? "Next Challenge" : "Back to Menu"}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => navigate("/main-menu")}
                  leftIcon={<Trophy className="w-5 h-5" />}
                >
                  Main Menu
                </Button>
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

      {/* Point popups */}
      {pointPopups.map((popup) => (
        <PointsPopup
          key={popup.id}
          points={popup.points}
          position={popup.position}
          variant={gameState.isVictory ? "victory" : "action"}
        />
      ))}

      {/* Achievement popup */}
      {showAchievement && (
        <div className="fixed bottom-4 right-4 z-50">
          <AchievementPopup achievement={showAchievement} />
        </div>
      )}
    </div>
  )
}

