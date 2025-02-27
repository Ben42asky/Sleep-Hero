import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { PlayCircle } from 'lucide-react'

export function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-indigo-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-md mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-600">
              Sleep Hero
            </h1>
            <p className="text-xl text-gray-600">
              Help restore peace to the dreamland!
            </p>
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={() => navigate('/main-menu')}
              size="xl"
              fullWidth
              leftIcon={<PlayCircle />}
            >
              Start Adventure
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
