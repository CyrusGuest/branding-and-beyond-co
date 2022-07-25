import React, { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import SignInForm from '../components/SignInForm'
import Footer from '../components/Footer'

const SignIn = () => {
  let { MobileNavOpen } = useContext(MenuContext)

  return (
    <div className='font-Poppin dark:bg-brand-secondary transition-all'>

      {MobileNavOpen ? <MobileNav  /> : ""}

      <div className={MobileNavOpen ? "opacity-50" : "opacity-100"}>

        <Navbar />

        <SignInForm />

        <Footer />

      </div>

    </div>
  )
}

export default SignIn