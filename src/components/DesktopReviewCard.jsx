import React from 'react'
import customerIcon from '../../images/customer-icon.svg'
import roofIcon from '../../images/roof-icon.svg'
import price from '../../images/price.svg'

const DesktopReviewCard = () => {
  return (
    <div className='font-Poppins w-4/5 max-w-4xl bg-flower-yellow rounded-lg mx-auto mt-20 mb-40 drop-shadow-lg hidden md:flex'>

      <div className='p-8 min-w-min w-5/6'>
        <img className='w-3/5 mx-auto' src={customerIcon}/>
        <p className='text-white text-center md:text-base lg:text-xl leading-10 pt-8'>“They did a pheonmenal job repairing my roof. They even redid my gutters and siding!” - Anonymous Customer</p>
      </div>
      
      <div className='bg-white p-8 rounded-r-lg'>
        <img className='w-7/12 mx-auto' src={roofIcon}/>
        <div className='flex justify-center mx-auto mt-14'>
          <h1 className='text-flower-yellow font-bold text-2xl mr-3'>roof repair</h1>
          <img src={price} alt="" />
        </div>
        <p className='text-center text-sm text-flower-yellow'>contact us today for a quote on your roof</p>
        <div className='flex justify-center mt-4 gap-6'>
          <button className='text-lg mobile-btn text-white bg-flower-yellow hover:bg-white hover:text-flower-yellow'>learn more</button>
          <button className='text-lg mobile-btn text-flower-yellow bg-white hover:bg-flower-yellow hover:text-white'>contact us</button>
        </div>
      </div>

    </div>
  )
}

export default DesktopReviewCard