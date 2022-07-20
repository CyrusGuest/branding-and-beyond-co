import React, { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'
import MobileNav from '../components/MobileNav'
import Hero from '../components/Hero'
import Explore from '../components/Explore'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Landing = () => {
  let { MobileNavOpen, setMobileNavOpen } = useContext(MenuContext)

  return (
    <div className='font-Poppin'>

      {MobileNavOpen ? <MobileNav  props={{ MobileNavOpen, setMobileNavOpen }} /> : ""}

      <div className={MobileNavOpen ? "opacity-50" : "opacity-100"}>

        <Navbar />

        <Hero />

        <Explore />

        <Footer />

      </div>

    </div>
  )
}

export default Landing