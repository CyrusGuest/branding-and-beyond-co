import React from 'react'
import { Link } from 'react-router-dom'
import MobileReviewCard from './MobileReviewCard'
import DesktopReviewCard from './DesktopReviewCard'

const Hero = () => {
  return (
    <div>
      <h1 className='leading-10 mx-10 mt-10 text-center text-4xl font-bold text-brand-primary'>your one-stop-shop for everything advertising related</h1>
      <h3 className='leading-10 mt-8 mx-6 text-2xl text-[#999999] text-center '>krale branding - where <span className='text-brand-primary dark:text-brand-primary font-bold'>social media</span> is just the tip of the iceberg</h3>
    
      <div className='flex justify-center mt-10 space-x-6'>
        <Link to="/packages"><button className='text-2xl mobile-btn text-white dark:text-brand-secondary dark:hover:bg-brand-secondary dark:hover:text-brand-primary bg-brand-primary hover:bg-white hover:text-brand-primary'>our packages</button></Link>
        <Link to="/contactus"><button className='text-2xl mobile-btn dark:text-brand-primary dark:bg-brand-secondary dark:hover:bg-brand-primary dark:hover:text-brand-secondary text-brand-primary  bg-white hover:bg-brand-primary hover:text-white'>contact us</button></Link>
      </div>

      <MobileReviewCard />
      <DesktopReviewCard />

    </div>
  )
}

export default Hero