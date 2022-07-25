import React, { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'
import customerIcon from '../../images/customer-icon.svg'
import darkCustomerIcon from '../../images/dark_mode/customer-icon.svg'

const MobileReviewCard = () => {
  let { LightMode } = useContext(MenuContext)

  return (
    <div className='font-Poppins w-4/5 py-10 px-4 bg-brand-primary rounded-lg mx-auto mt-20 mb-28 drop-shadow-lg md:hidden lg:hidden'>
      {LightMode ? <img className='w-3/5 mx-auto' src={customerIcon}/> : <img className='w-3/5 mx-auto' src={darkCustomerIcon}/>}
      <p className='dark:text-brand-secondary text-white text-center text-xl leading-10 pt-8'>“They brought me so many customers and completely refreshed my business' brand identity.” - anonymous customer
      </p>
    </div>
  )
}

export default MobileReviewCard