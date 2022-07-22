import React, { useContext, useEffect } from 'react'
import { MenuContext } from '../context/MenuContext'
import logo from '../../images/logo.svg'
import menuDots from '../../images/menu-dots.svg'
import darkMenuDots from '../../images/dark_mode/menu-dots.svg'
import lightMode from '../../images/light-mode.svg'
import darkMode from '../../images/dark-mode.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  let { MobileNavOpen, setMobileNavOpen } = useContext(MenuContext)
  let { LightMode, setLightMode } = useContext(MenuContext)
  
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setLightMode(false)
      document.documentElement.classList.add('dark');
    }
  }, [])

  const switchLightMode = () => {
    setLightMode(!LightMode)
    if (localStorage.theme === "light") {
      localStorage.theme = "dark"
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = "light"
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <div className='flex'>
      <div className='flex ml-6'>
        <img src={logo} alt="" className='cursor-pointer' />
        <h1 className='text-2xl font-bold text-brand-primary my-auto cursor-pointer lg:inline ml-2' >krale branding</h1>
      </div>

      <div className='my-auto ml-auto hidden md:inline'>
        <ul className='flex gap-6 mr-6 text-xl text-brand-primary font-bold '>
          <li className='my-auto'><Link to="/aboutus">about us</Link></li>
          <li className='my-auto'><Link to="/deals">deals</Link></li>
          <li className='my-auto'><Link to="/contactus">contact us</Link></li>
          {LightMode ? <li className='my-auto'><img src={lightMode} alt="" className='transition-all cursor-pointer' onClick={switchLightMode} /></li> : <li className='my-auto'><img src={darkMode} alt="" className='transition-all cursor-pointer' onClick={switchLightMode} /></li>}
        </ul>
      </div>
      {LightMode ? <img onClick={() => setMobileNavOpen(!MobileNavOpen)} src={menuDots} alt="" className='my-auto ml-auto mr-4 float-right cursor-pointer md:hidden' /> : <img onClick={() => setMobileNavOpen(!MobileNavOpen)} src={darkMenuDots} alt="" className='my-auto ml-auto mr-4 float-right cursor-pointer md:hidden' />}
    </div>
  )
}

export default Navbar