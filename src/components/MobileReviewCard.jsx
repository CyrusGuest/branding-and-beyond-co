import React from 'react'
import customerIcon from '../../images/customer-icon.svg'

const MobileReviewCard = () => {
  return (
    <div className='font-Poppins w-4/5 py-10 px-4 bg-flower-yellow rounded-lg mx-auto mt-20 mb-28 drop-shadow-lg'>
      <img className='w-3/5 mx-auto' src={customerIcon}/>
      <p className='text-white text-center text-xl leading-10 pt-8'>“They did a pheonmenal job repairing my roof. They even redid my gutters and siding!” - Anonymous Customer
      </p>
    </div>
  )
}

export default MobileReviewCard