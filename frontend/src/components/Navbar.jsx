import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import lightMode from '../../images/light-mode.svg'
import darkMode from '../../images/dark-mode.svg'
import menuDots from '../../images/menu-dots.svg'

const Navbar = () => {
  let { MobileNavOpen, setMobileNavOpen } = useContext(AppContext)
  let { LightMode, setLightMode } = useContext(AppContext)
  
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setLightMode(false)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const switchLightMode = () => {
    setLightMode(!LightMode)
    if (localStorage.theme === "light") {
      localStorage.theme = "dark"
      document.documentElement.classList.add('dark')
    } else {
      localStorage.theme = "light"
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className='flex'>
      <Link to="/"><div className='flex ml-2'>
        <img src={logo} alt="" className='cursor-pointer' />
        <h1 className='text-2xl font-bold text-brand-primary my-auto cursor-pointer lg:inline ml-2' >krale branding</h1>
      </div></Link>

      <div className='my-auto ml-auto hidden md:inline'>
        <ul className='flex gap-6 mr-6 text-xl text-brand-primary font-bold '>
          <li className='my-auto'><Link to="/packages">packages</Link></li>
          <li className='my-auto'><Link to="/aboutus">about us</Link></li>
          <li className='my-auto'><Link to="/contactus">contact us</Link></li>
          <Link to="/signin"><li className='my-auto cursor-pointer dark:hover:bg-brand-secondary hover:bg-white dark:hover:text-brand-primary hover:text-brand-primary bg-brand-primary text-white dark:text-brand-secondary drop-shadow-lg py-2 mt-1 px-6 font-semibold rounded-md transition duration-300'>sign in</li></Link>
          {LightMode ? <li className='my-auto'><img src={lightMode} alt="" className='transition-all cursor-pointer' onClick={switchLightMode} /></li> : <li className='my-auto'><img src={darkMode} alt="" className='transition-all cursor-pointer' onClick={switchLightMode} /></li>}
        </ul>
      </div>
      <img onClick={() => setMobileNavOpen(!MobileNavOpen)} src={menuDots} alt="" className='my-auto ml-auto mr-4 float-right cursor-pointer md:hidden' />
    </div>
  )
}

export default Navbar