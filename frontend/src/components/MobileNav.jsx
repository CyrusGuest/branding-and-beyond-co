import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'
import arrow from '../../images/arrow.svg'
import logo from '../../images/logo.svg'
import menuDots from '../../images/menu-dots.svg'

const MobileNav = () => {
  let { setMobileNavOpen } = useContext(AppContext)

  return (
    <div className='fixed z-20 w-3/4 h-full bg-white dark:bg-brand-secondary right-0'>
      <div className='flex'>

        <img onClick={() => setMobileNavOpen(false)} src={arrow} alt="" className='cursor-pointer mr-8' />
        <img src={logo} alt="" className='cursor-pointer mx-auto' />
        <img onClick={() => setMobileNavOpen(false)} src={menuDots} alt="" className='cursor-pointer ml-auto mr-4' />

      </div>

      <div className='flex flex-col ml-6 mt-10 text-brand-primary  gap-10'>

        <ul className='text-2xl'>
          <h1 className='font-bold text-5xl'>shop</h1>
          <Link onClick={() => setMobileNavOpen(false)} to="/"><h4 className='mt-1'>home</h4></Link>
          <Link onClick={() => setMobileNavOpen(false)} to="/packages"><h4 className='mt-1'>packages</h4></Link>
        </ul>

        <ul className='text-2xl'>
          <h1 className='font-bold text-5xl'>company</h1>
          <Link onClick={() => setMobileNavOpen(false)} to="/aboutus"><h4 className='mt-1'>about us</h4></Link>
          <Link onClick={() => setMobileNavOpen(false)} to="/contactus"><h4 className='mt-1'>contact us</h4></Link>
          <Link onClick={() => setMobileNavOpen(false)} to="/policy"><h4 className='mt-1'>policy</h4></Link>
        </ul>

        <Link onClick={() => setMobileNavOpen(false)} className='mr-6 fixed bottom-10 w-8/12 text-3xl text-center cursor-pointer dark:hover:bg-brand-secondary hover:bg-white dark:hover:text-brand-primary hover:text-brand-primary bg-brand-primary text-white dark:text-brand-secondary drop-shadow-lg py-3 px-6 font-semibold rounded-md transition duration-300' to="/signin">sign in</Link>

      </div>
    </div>
  )
}

export default MobileNav