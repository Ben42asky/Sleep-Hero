import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { PlayCircle, Info, ChevronLeft } from 'lucide-react'

export function MainMenu() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-indigo-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-md mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-600">
            Main Menu
          </h1>
          
          <div className="flex flex-col gap-4">
            <Button 
              onClick={() => navigate('/gameplay')}
              size="lg"
              fullWidth
              leftIcon={<PlayCircle />}
            >
              Start Game
            </Button>
            
            <Button 
              onClick={() => navigate('/info')}
              variant="outline"
              size="lg"
              fullWidth
              leftIcon={<Info />}
            >
              Game Information
            </Button>
            
            <Button 
              variant="ghost"
              onClick={() => navigate('/')}
              size="lg"
              fullWidth
              leftIcon={<ChevronLeft />}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
