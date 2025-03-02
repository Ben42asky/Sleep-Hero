"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Moon, Trophy, Award, Info, HelpCircle } from "lucide-react"
import { Button } from "@/components/Button"
import { CHALLENGES } from "@/data/challenges"
import { ACHIEVEMENTS } from "@/data/achievements"
import type { Achievement } from "@/components/types"

export default function MainMenu() {
  const router = useRouter()
  const [achievements, setAchievements] = useState<Achievement[]>(ACHIEVEMENTS)
  const [totalPoints, setTotalPoints] = useState(0)
  const [challengeNumber, setChallengeNumber] = useState(0)

  useEffect(() => {
    const savedState = localStorage.getItem("gameState")
    if (savedState) {
      const parsedState = JSON.parse(savedState)
      setTotalPoints(parsedState.totalPoints || 0)
      setChallengeNumber(parsedState.challengeNumber || 0)
      setAchievements(parsedState.achievements || ACHIEVEMENTS)
    }
  }, [])

  const startGame = () => {
    router.push("/gameplay")
  }

  const resetProgress = () => {
    localStorage.removeItem("gameState")
    setTotalPoints(0)
    setChallengeNumber(0)
    setAchievements(ACHIEVEMENTS)
  }

  const unlockedAchievements = achievements.filter((a) => a.unlocked)

  return (
    <div className="min-h-screen bg-[#f0f7ff] text-[#0d3c26] p-4">
      <div className="max-w-3xl mx-auto pt-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#daf2ce] rounded-full flex items-center justify-center mr-3">
              <Moon className="w-6 h-6 text-[#0d3c26]" />
            </div>
            <h1 className="text-2xl font-bold">Sleep Hero</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => router.push("/how-to-play")}
              variant="secondary"
              leftIcon={<HelpCircle className="w-5 h-5" />}
            >
              How to Play
            </Button>
            <div className="flex items-center bg-white rounded-full px-4 py-1 shadow-sm">
              <Trophy className="w-5 h-5 text-yellow-600 mr-2" />
              <span className="font-bold">{totalPoints} pts</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Sleep Challenges</h2>
            <div className="space-y-4">
              {CHALLENGES.map((challenge, index) => (
                <div
                  key={challenge.id}
                  className={`p-4 rounded-lg border ${
                    index === challengeNumber
                      ? "border-[#0d3c26] bg-[#daf2ce]/20"
                      : index < challengeNumber
                        ? "border-gray-200 bg-gray-50"
                        : "border-gray-200"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{challenge.title}</h3>
                    {index < challengeNumber && (
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Completed</div>
                    )}
                  </div>
                  <p className="text-sm text-[#0d3c26]/70 mt-1">{challenge.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button onClick={startGame} variant="primary">
                {challengeNumber === 0
                  ? "Start First Challenge"
                  : challengeNumber < CHALLENGES.length
                    ? "Continue Journey"
                    : "Replay Challenges"}
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-[#0d3c26] mr-2" />
                <h2 className="text-xl font-bold">Achievements</h2>
                <span className="ml-auto bg-[#0d3c26] text-white text-xs px-2 py-1 rounded-full">
                  {unlockedAchievements.length}/{achievements.length}
                </span>
              </div>

              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-3 rounded-lg border ${
                      achievement.unlocked ? "border-yellow-200 bg-yellow-50" : "border-gray-200 opacity-70"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          achievement.unlocked ? "bg-yellow-100" : "bg-gray-100"
                        }`}
                      >
                        <Trophy className={`w-4 h-4 ${achievement.unlocked ? "text-yellow-600" : "text-gray-400"}`} />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{achievement.title}</h3>
                        <p className="text-xs text-[#0d3c26]/70">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Info className="w-5 h-5 text-[#0d3c26] mr-2" />
                <h2 className="text-xl font-bold">About Sleep Hero</h2>
              </div>

              <p className="text-sm text-[#0d3c26]/70 mb-4">
                Sleep Hero helps you learn effective techniques to improve your sleep quality through fun, interactive
                challenges.
              </p>

              <div className="flex justify-between">
                <Button onClick={resetProgress} variant="secondary">
                  Reset Progress
                </Button>

                <Button onClick={() => router.push("/")} variant="secondary">
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

