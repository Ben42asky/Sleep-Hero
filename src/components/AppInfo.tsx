import { CHALLENGES } from '../data/challenges'
import { ACHIEVEMENTS } from '../data/achievements'
import { Info, Medal, Trophy, Timer, Target, Star } from 'lucide-react'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom'

export function AppInfo() {
  const navigate = useNavigate()
  const gameState = JSON.parse(localStorage.getItem('gameState') || '{}')
  const completedChallenges = gameState.challengeNumber || 0
  const totalPoints = gameState.totalPoints || 0
  const achievements = gameState.achievements || ACHIEVEMENTS

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      {/* Navigation Buttons */}
      <div className="flex gap-4 mb-8">
        <Button
          variant="secondary"
          onClick={() => navigate('/main-menu')}
          size="sm"
          leftIcon={<Trophy className="w-4 h-4" />}
        >
          Back to Menu
        </Button>
        <Button
          variant="secondary"
          onClick={() => navigate('/')}
          size="sm"
          leftIcon={<Star className="w-4 h-4" />}
        >
          Back to Home
        </Button>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Info className="w-8 h-8 text-pink-600" />
        <h1 className="text-3xl font-bold text-gray-900">Sleep Hero - Game Information</h1>
      </div>

      <div className="space-y-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-pink-50 rounded-xl p-4 flex items-center gap-3">
            <Trophy className="w-6 h-6 text-pink-600" />
            <div>
              <div className="text-sm text-gray-600">Total Points</div>
              <div className="text-xl font-bold text-pink-600">{totalPoints}</div>
            </div>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 flex items-center gap-3">
            <Target className="w-6 h-6 text-purple-600" />
            <div>
              <div className="text-sm text-gray-600">Challenges Complete</div>
              <div className="text-xl font-bold text-purple-600">{completedChallenges}/{CHALLENGES.length}</div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
            <Medal className="w-6 h-6 text-blue-600" />
            <div>
              <div className="text-sm text-gray-600">Achievements</div>
              <div className="text-xl font-bold text-blue-600">
                {achievements.filter(a => a.unlocked).length}/{achievements.length}
              </div>
            </div>
          </div>
        </div>

        {/* Challenges Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            Available Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CHALLENGES.map((challenge, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl border-2 ${
                  index <= completedChallenges 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl">{challenge.monster.split(' ')[0]}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{challenge.title}</h3>
                    <p className="text-sm text-gray-600">Base Points: {challenge.basePoints}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Available Actions: {challenge.actions.length}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Medal className="w-6 h-6 text-yellow-500" />
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className={`p-4 rounded-xl border-2 ${
                  achievement.unlocked 
                    ? 'border-purple-200 bg-purple-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Rules */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Timer className="w-6 h-6 text-yellow-500" />
            How to Play
          </h2>
          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <p className="text-gray-700">
              Sleep Hero is a game where you battle sleep-related challenges using various actions. 
              Each action can either help or hurt your sleep progress.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Complete challenges by reaching 100% sleep progress</li>
              <li>Use positive actions to increase sleep progress</li>
              <li>Avoid negative actions that decrease progress</li>
              <li>Earn points for good choices and completing challenges</li>
              <li>Unlock achievements for special accomplishments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
