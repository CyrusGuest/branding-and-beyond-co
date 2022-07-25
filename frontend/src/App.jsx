import { Routes, Route } from 'react-router-dom'
import { MenuContextProvider } from './context/MenuContext'
import Landing from './pages/Landing'
import AboutUs from './pages/AboutUs'
import Packages from './pages/Packages'
import ContactUs from './pages/ContactUs'
import Policy from './pages/Policy'
import SignIn from './pages/SignIn'

function App() {
  return (
    <MenuContextProvider>    
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </MenuContextProvider>
  )
}

export default App
