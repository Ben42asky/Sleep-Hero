import { useNavigate } from 'react-router-dom'
import { AppInfo } from '../components/AppInfo'
import { Button } from '../components/Button'

export function InfoScreen() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-indigo-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-8">
          <Button
            variant="secondary"
            onClick={() => navigate('/main-menu')}
            className="mb-8"
          >
            Back to Menu
          </Button>
        </div>

        {/* App Info Component */}
        <AppInfo />
      </div>
    </div>
  )
}
