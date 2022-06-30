import { Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'

function App() {
  return (
    <>    
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  )
}

export default App
