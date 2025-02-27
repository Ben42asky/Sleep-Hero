import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { CHALLENGES } from '../data/challenges'
import { PointsPopup } from '../components/PointsPopup'
import { Trophy, ChevronRight, Home } from 'lucide-react'

export function Victory() {
  const navigate = useNavigate()
  const [showPointsPopup, setShowPointsPopup] = useState(true)
  const gameState = JSON.parse(localStorage.getItem('gameState') || '{}')
  const currentChallenge = CHALLENGES[gameState.challengeNumber || 0]
  const isGameComplete = (gameState.challengeNumber || 0) >= CHALLENGES.length - 1

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPointsPopup(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleNextChallenge = () => {
    const updatedGameState = {
      ...gameState,
      challengeNumber: (gameState.challengeNumber || 0) + 1,
      sleepProgress: 0,
      currentPoints: 0,
      actionHistory: []
    }
    localStorage.setItem('gameState', JSON.stringify(updatedGameState))
    navigate('/gameplay')
  }

  return (
    <div className="min-h-screen bg-indigo-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen py-16">
        <div className="max-w-md mx-auto flex flex-col items-center gap-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Trophy className="w-12 h-12 text-pink-500" />
              <h1 className="text-5xl font-bold text-pink-600">Victory!</h1>
            </div>
            <p className="text-xl text-gray-600 font-medium">
              You've mastered this sleep challenge!
            </p>
          </div>

          {/* Score Card */}
          <div className="w-full bg-white rounded-2xl shadow-lg p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Helpful Actions:</span>
                <span className="text-green-600 font-medium">
                  +{gameState.actionHistory?.filter(Boolean).length * 10} points
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Harmful Actions:</span>
                <span className="text-red-600 font-medium">
                  {gameState.actionHistory?.filter((x: boolean) => !x).length * -5} points
                </span>
              </div>
              <div className="h-px bg-gray-200 my-4" />
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Total Challenge Points:</span>
                <span className="text-2xl font-bold text-pink-500">
                  {gameState.currentPoints}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-4">
            {isGameComplete ? (
              <Button 
                onClick={() => navigate('/results')}
                size="lg"
                fullWidth
                variant="success"
                rightIcon={<ChevronRight />}
              >
                See Final Results
              </Button>
            ) : (
              <Button 
                onClick={handleNextChallenge}
                size="lg"
                fullWidth
                rightIcon={<ChevronRight />}
              >
                Next Challenge
              </Button>
            )}
            
            <Button 
              variant="ghost"
              onClick={() => navigate('/main-menu')}
              size="lg"
              fullWidth
              leftIcon={<Home />}
            >
              Back to Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Points Popup */}
      {showPointsPopup && (
        <PointsPopup
          points={gameState.currentPoints}
          position={{ x: window.innerWidth / 2, y: window.innerHeight / 2 }}
          variant="victory"
        />
      )}
    </div>
  )
}
