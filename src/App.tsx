import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './screens/Home'
import { MainMenu } from './screens/MainMenu'
import { Gameplay } from './screens/Gameplay'
import { Victory } from './screens/Victory'
import { Results } from './screens/Results'
import { InfoScreen } from './screens/InfoScreen'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main-menu" element={<MainMenu />} />
        <Route path="/gameplay" element={<Gameplay />} />
        <Route path="/victory" element={<Victory />} />
        <Route path="/results" element={<Results />} />
        <Route path="/info" element={<InfoScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
