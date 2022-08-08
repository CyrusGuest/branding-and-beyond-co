import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import SignUpForm from '../components/SignUpForm'
import Footer from '../components/Footer'

const SignUp = () => {
  let { MobileNavOpen } = useContext(AppContext)

  return (
    <div className='font-Poppin dark:bg-brand-secondary transition-all'>

      {MobileNavOpen ? <MobileNav  /> : ""}

      <div className={MobileNavOpen ? "opacity-50" : "opacity-100"}>

        <Navbar />

        <SignUpForm />

        <Footer />

      </div>

    </div>
  )
}

export default SignUp