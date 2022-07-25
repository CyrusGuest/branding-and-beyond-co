import React, { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Explore from '../components/Explore'
import DesktopExplore from '../components/DesktopExplore'
import Footer from '../components/Footer'

const Landing = () => {
  let { MobileNavOpen } = useContext(MenuContext)

  return (
    <div className='font-Poppin dark:bg-brand-secondary transition-all'>

      {MobileNavOpen ? <MobileNav  /> : ""}

      <div className={MobileNavOpen ? "opacity-50" : "opacity-100"}>

        <Navbar />

        <Hero />

        <Explore />

        <DesktopExplore />

        <Footer />

      </div>

    </div>
  )
}

export default Landing