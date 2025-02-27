import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CHALLENGES } from '../data/challenges'
import { ACHIEVEMENTS } from '../data/achievements'
import { GameState, Achievement, Action } from '../components/types'
import { ProgressBar } from '../components/ProgressBar'
import { ActionContainer } from '../components/ActionContainer'
import { MonsterDisplay } from '../components/MonsterDisplay'
import { ScoreDisplay } from '../components/ScoreDisplay'
import { AchievementPopup } from '../components/AchievementPopup'
import { Button } from '../components/Button'
import { RefreshCw, Home, Info } from 'lucide-react'

const INITIAL_GAME_STATE: GameState = {
  sleepProgress: 0,
  challengeNumber: 0,
  currentPoints: 0,
  totalPoints: 0,
  achievements: ACHIEVEMENTS,
  actionHistory: []
}

export function Gameplay() {
  const navigate = useNavigate()
  const [gameState, setGameState] = useState<GameState>(() => {
    const saved = localStorage.getItem('gameState')
    return saved ? JSON.parse(saved) : INITIAL_GAME_STATE
  })
  const [isMonsterAttacked, setIsMonsterAttacked] = useState(false)
  const [lastAchievement, setLastAchievement] = useState<Achievement | null>(null)
  const [actionFeedback, setActionFeedback] = useState<string>('')
  const [currentActions, setCurrentActions] = useState<Action[]>([])
  const [showRetryPrompt, setShowRetryPrompt] = useState(false)

  const currentChallenge = CHALLENGES[gameState.challengeNumber]

  useEffect(() => {
    setCurrentActions(currentChallenge.actions.map(action => ({ ...action, used: false })))
  }, [gameState.challengeNumber])

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(gameState))
  }, [gameState])

  const checkAchievements = () => {
    const newAchievements = [...gameState.achievements]
    let achievementUnlocked = false

    // First Victory
    if (!newAchievements[0].unlocked && gameState.challengeNumber === 0) {
      newAchievements[0].unlocked = true
      achievementUnlocked = true
      setLastAchievement(newAchievements[0])
    }

    // Perfect Battle
    if (!newAchievements[1].unlocked && !gameState.actionHistory.includes(false)) {
      newAchievements[1].unlocked = true
      achievementUnlocked = true
      setLastAchievement(newAchievements[1])
    }

    // High Scorer
    if (!newAchievements[2].unlocked && gameState.currentPoints >= 500) {
      newAchievements[2].unlocked = true
      achievementUnlocked = true
      setLastAchievement(newAchievements[2])
    }

    // Dream Master
    if (!newAchievements[3].unlocked && gameState.challengeNumber === CHALLENGES.length - 1) {
      newAchievements[3].unlocked = true
      achievementUnlocked = true
      setLastAchievement(newAchievements[3])
    }

    if (achievementUnlocked) {
      setGameState(prev => ({ ...prev, achievements: newAchievements }))
    }
  }

  const handleAction = (actionId: string) => {
    const action = currentActions.find(a => a.action === actionId)
    if (!action) return

    setCurrentActions(prev => 
      prev.map(a => a.action === actionId ? { ...a, used: true } : a)
    )

    setGameState(prev => {
      const newSleepProgress = Math.min(100, Math.max(0, prev.sleepProgress + action.sleepEffect))
      const newPoints = prev.currentPoints + action.points
      const newActionHistory = [...prev.actionHistory, action.sleepEffect > 0]

      // If sleep progress reaches 100, immediately handle victory
      if (newSleepProgress >= 100) {
        setTimeout(() => {
          setGameState(current => ({
            ...current,
            totalPoints: current.totalPoints + newPoints
          }))
          checkAchievements()
          navigate('/victory')
        }, 0)
      }

      return {
        ...prev,
        sleepProgress: newSleepProgress,
        currentPoints: newPoints,
        actionHistory: newActionHistory
      }
    })

    setIsMonsterAttacked(true)
    setTimeout(() => setIsMonsterAttacked(false), 500)

    setActionFeedback(
      action.sleepEffect > 0 
        ? "Good choice! Keep going!" 
        : "That didn't help with sleep..."
    )
    setTimeout(() => setActionFeedback(''), 2000)

    // Only check game continuation if we haven't reached 100%
    if (gameState.sleepProgress + action.sleepEffect < 100) {
      checkGameContinuation()
    }
  }

  const checkGameContinuation = () => {
    const positiveActionsRemaining = currentActions.some(
      action => action.sleepEffect > 0 && !action.used
    )
    
    if (!positiveActionsRemaining && gameState.sleepProgress < 100) {
      setShowRetryPrompt(true)
    }
  }

  const handleRetry = () => {
    setGameState(prev => ({
      ...prev,
      sleepProgress: 0,
      currentPoints: 0,
      actionHistory: []
    }))
    setCurrentActions(currentChallenge.actions.map(action => ({ ...action, used: false })))
    setShowRetryPrompt(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation Buttons */}
      <div className="fixed top-4 left-4 right-4 z-50 flex justify-between">
        <Button
          variant="ghost"
          onClick={() => navigate('/main-menu')}
          size="sm"
          className="backdrop-blur-sm bg-white/30"
          leftIcon={<Home />}
        >
          Menu
        </Button>
        <Button
          variant="ghost"
          onClick={() => navigate('/info')}
          size="sm"
          className="backdrop-blur-sm bg-white/30"
          leftIcon={<Info />}
        >
          Info
        </Button>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 pt-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl text-gray-900 font-medium">
              {currentChallenge.title}
            </h2>
            <div className="mt-4">
              <ScoreDisplay
                points={gameState.currentPoints}
                totalPoints={gameState.totalPoints}
              />
            </div>
          </div>
        </div>

        {/* Main Game Area */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Monster Display */}
          <div className="flex justify-center py-8">
            <MonsterDisplay
              monster={currentChallenge.monster}
              isAttacked={isMonsterAttacked}
            />
          </div>

          {/* Progress Section */}
          <div className="space-y-6">
            {actionFeedback && (
              <div className={`
                text-lg font-medium p-4 rounded-xl text-center
                ${actionFeedback.includes('Good') 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'}
              `}>
                {actionFeedback}
              </div>
            )}
            
            <ProgressBar
              value={gameState.sleepProgress}
              max={100}
              label="Sleep Progress"
              color="bg-orange-500"
            />
          </div>

          {/* Actions */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <ActionContainer
              actions={currentActions}
              onAction={handleAction}
            />
          </div>
        </div>

        {/* Retry Modal */}
        {showRetryPrompt && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center space-y-6">
              <RefreshCw className="w-16 h-16 mx-auto text-orange-500 animate-spin-slow" />
              <h3 className="text-2xl font-bold text-gray-900">
                Not Enough Sleep Progress!
              </h3>
              <p className="text-gray-600">
                You've used all your helpful actions but haven't reached 100% sleep progress. 
                Would you like to try this challenge again?
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Button
                  variant="outline"
                  onClick={() => navigate('/results')}
                  size="lg"
                  className="w-full bg-white text-pink-600 border-2 border-pink-600 hover:bg-pink-50"
                >
                  Give Up
                </Button>
                <Button
                  onClick={handleRetry}
                  size="lg"
                  className="w-full"
                >
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Achievement Popup */}
        {lastAchievement && (
          <div className="fixed bottom-4 right-4 z-50">
            <AchievementPopup achievement={lastAchievement} />
          </div>
        )}
      </div>
    </div>
  )
}
