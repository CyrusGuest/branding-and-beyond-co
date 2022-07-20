import React from 'react'
import MobileProductCard from './MobileProductCard'

const Explore = () => {
  return (
    <div className='bg-flower-yellow pt-20 pl-3 pb-20'>
      <h1 className='text-5xl leading-relaxed text-white mr-4'>Explore all the different roofing and housing services we offer.</h1>
      <h3 className='text-3xl leading-relaxed text-white mr-16 mt-8'>Roof replacement, roof repair, siding, and more! We've got it all.</h3>
    
      <button className='text-2xl mobile-btn mt-8 text-flower-yellow bg-white hover:bg-flower-yellow hover:text-white'>view more deals</button>

      <MobileProductCard />

    </div>
  )
}

export default Explore