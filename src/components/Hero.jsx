import React from 'react'
import MobileReviewCard from './MobileReviewCard'
import DesktopReviewCard from './DesktopReviewCard'

const Hero = () => {
  return (
    <div>
      <h1 className='leading-10 mx-10 mt-10 text-center text-4xl font-bold text-flower-yellow'>Your one-stop-shop for everything roofing related.</h1>
      <h3 className='leading-10 mt-8 mx-6 text-2xl text-[#999999] text-center'>Mainato Pro Construction - where <span className='text-flower-yellow font-bold'>roofing</span> is just the tip of the <span className='text-flower-yellow font-bold'>iceberg</span>.</h3>
    
      <div className='flex justify-center mt-10 space-x-6'>
        <button className='text-2xl mobile-btn text-white bg-flower-yellow hover:bg-white hover:text-flower-yellow'>learn more</button>
        <button className='text-2xl mobile-btn text-flower-yellow bg-white hover:bg-flower-yellow hover:text-white'>contact us</button>
      </div>

      <MobileReviewCard />
      <DesktopReviewCard />

    </div>
  )
}

export default Hero