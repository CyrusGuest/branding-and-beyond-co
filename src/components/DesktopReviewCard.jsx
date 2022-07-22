import React, { useContext } from 'react'
import customerIcon from '../../images/customer-icon.svg'
import darkCustomerIcon from '../../images/dark_mode/customer-icon.svg'
import roofIcon from '../../images/roof-icon.svg'
import price from '../../images/price.svg'
import { MenuContext } from '../context/MenuContext'

const DesktopReviewCard = () => {
  let { LightMode } = useContext(MenuContext)

  return (
    <div className='font-Poppins w-4/5 max-w-4xl bg-brand-primary rounded-lg mx-auto mt-20 mb-40 drop-shadow-lg hidden md:flex'>

      <div className='p-8 min-w-min w-5/6'>
        {LightMode ? <img className='w-3/5 mx-auto' src={customerIcon}/> : <img className='w-3/5 mx-auto' src={darkCustomerIcon}/>}
        <p className='text-white dark:text-brand-secondary text-center md:text-base lg:text-xl leading-10 pt-8'>“They brought me so many customers and completely refreshed my business' brand identity.” - anonymous customer</p>
      </div>
      
      <div className='bg-white p-8 rounded-r-lg dark:bg-brand-secondary'>
        <img className='w-7/12 mx-auto' src={roofIcon}/>
        <div className='flex justify-center mx-auto mt-14'>
          <h1 className='text-brand-primary font-bold text-2xl mr-3'>brand refresh</h1>
          <img src={price} alt="" />
        </div>
        <p className='text-center text-sm text-brand-primary'>contact us today for an estimate on your refresh!</p>
        <div className='flex justify-center mt-4 gap-6'>
          <button className='text-lg mobile-btn dark:text-brand-secondary text-white bg-brand-primary dark:hover:bg-brand-secondary dark:hover:text-brand-primary hover:bg-white hover:text-brand-primary'>learn more</button>
          <button className='text-lg mobile-btn dark:bg-brand-secondary dark:hover:bg-brand-primary dark:hover:text-brand-secondary text-brand-primary bg-white hover:bg-brand-primary hover:text-white'>contact us</button>
        </div>
      </div>

    </div>
  )
}

export default DesktopReviewCard