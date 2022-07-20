import React, { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'
import logo from '../../images/logo.svg'
import menuDots from '../../images/menu-dots.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  let { MobileNavOpen, setMobileNavOpen } = useContext(MenuContext)

  return (
    <div className='flex'>
      <div className='flex ml-6'>
        <img src={logo} alt="" className='cursor-pointer' />
        <h1 className='text-2xl font-bold text-flower-yellow my-auto cursor-pointer lg:inline ml-2' >Mainato Pro Construction</h1>
      </div>

      <div className='my-auto ml-auto hidden md:inline'>
        <ul className='flex gap-6 mr-6 text-xl text-flower-yellow font-bold '>
          <li><Link to="/aboutus">about us</Link></li>
          <li><Link to="/deals">deals</Link></li>
          <li><Link to="/contactus">contact us</Link></li>
          {/* <li><Link to="/seasonaloffers">seasonal offers</Link></li> */}
        </ul>
      </div>
      <img onClick={() => setMobileNavOpen(!MobileNavOpen)} src={menuDots} alt="" className='my-auto ml-auto mr-8 float-right cursor-pointer md:hidden' />
    </div>
  )
}

export default Navbar