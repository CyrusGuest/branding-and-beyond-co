import { Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import { MenuContextProvider } from './context/MenuContext'

function App() {
  return (
    <MenuContextProvider>    
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </MenuContextProvider>
  )
}

export default App
