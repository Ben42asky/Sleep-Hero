import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { CHALLENGES } from '../data/challenges'
import { Home, RefreshCw } from 'lucide-react'

export function Results() {
  const navigate = useNavigate()
  const gameState = JSON.parse(localStorage.getItem('gameState') || '{}')
  const completedChallenges = gameState.challengeNumber || 0
  const totalPoints = gameState.totalPoints || 0
  const achievements = gameState.achievements || []
  const unlockedAchievements = achievements.filter((a: any) => a.unlocked)

  const handleRestart = () => {
    localStorage.removeItem('gameState')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-indigo-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen py-16">
        <div className="max-w-md mx-auto space-y-8 text-center">
          <h1 className="text-5xl font-bold text-pink-500 mb-6">
            Game Over
          </h1>

          <div className="text-2xl text-gray-700 mb-4">
            Completed Challenges: {completedChallenges}/{CHALLENGES.length}
          </div>

          <div className="text-4xl font-bold text-pink-600 mb-8">
            Total Score: {totalPoints}
          </div>

          {unlockedAchievements.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-700">
                Achievements Earned
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {unlockedAchievements.map((achievement: any) => (
                  <div 
                    key={achievement.id}
                    className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-2"
                  >
                    <span className="text-4xl">
                      {achievement.icon}
                    </span>
                    <span className="font-medium text-gray-800 text-sm">
                      {achievement.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4 mt-12">
            <Button
              onClick={handleRestart}
              size="lg"
              fullWidth
              leftIcon={<RefreshCw />}
            >
              Play Again
            </Button>
            
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
    </div>
  )
}
