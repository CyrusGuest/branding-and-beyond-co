import React, { useContext } from 'react'
import logo from '../../images/logo.svg'
import darkLogo from '../../images/dark_mode/logo.svg'
import menuDots from '../../images/menu-dots.svg'
import darkMenuDots from '../../images/dark_mode/menu-dots.svg'
import arrow from '../../images/arrow.svg'
import darkArrow from '../../images/dark_mode/arrow.svg'
import { Link } from 'react-router-dom'
import { MenuContext } from '../context/MenuContext'

const MobileNav = () => {
  let { MobileNavOpen, setMobileNavOpen, LightMode } = useContext(MenuContext)

  return (
    <div className='fixed z-20 w-3/4 h-full bg-white dark:bg-brand-primary right-0'>
      <div className='flex '>
        {LightMode ? <img onClick={() => setMobileNavOpen(false)} src={arrow} alt="" className='cursor-pointer mr-8' /> : <img onClick={() => setMobileNavOpen(false)} src={darkArrow} alt="" className='cursor-pointer mr-8' />}
        {LightMode ? <img src={logo} alt="" className='cursor-pointer mx-auto' /> : <img src={darkLogo} alt="" className='cursor-pointer mx-auto' />}
        {LightMode ? <img onClick={() => setMobileNavOpen(!MobileNavOpen)} src={menuDots} alt="" className='cursor-pointer ml-auto mr-4' /> : <img onClick={() => setMobileNavOpen(!MobileNavOpen)} src={darkMenuDots} alt="" className='cursor-pointer ml-auto mr-4' />}
      </div>

      <div className='flex flex-col ml-6 mt-10 text-brand-primary dark:text-white gap-10'>
        <ul>
          <h1 className='font-bold text-5xl'>shop</h1>
          <div className='text-2xl'>
            <Link to="/flowers"><h4 className='mt-1'>flowers</h4></Link>
            <Link to="/giftshop"><h4 className='mt-1'>gift shop</h4></Link>
            <Link to="/specials"><h4 className='mt-1'>specials</h4>
            <Link to="/seasonaloffers"></Link><h4 className='mt-1'>seasonal offers</h4></Link>
          </div>
        </ul>

        <ul>
          <h1 className='font-bold text-5xl'>company</h1>
          <div className='text-2xl'>
          <Link to="/aboutus"><h4 className='mt-1'>about us</h4></Link>
          <Link to="/policy"><h4 className='mt-1'>policy</h4></Link>
          <Link to="/contactus"><h4 className='mt-1'>contact us</h4></Link>
          <Link to="/more"><h4 className='mt-1'>more</h4></Link>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav