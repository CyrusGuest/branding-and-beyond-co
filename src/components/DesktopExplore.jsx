import React from 'react'
import MobileProductCard from './MobileProductCard'

const DesktopExplore = () => {
  return (
    <div className='hidden md:flex bg-brand-primary py-20 pl-6'>
      <div className='my-auto max-w-3xl w-2/5 mx-auto'>
        <h1 className='text-5xl md:text-4xl lg:text-5xl leading-normal text-white dark:text-brand-secondary mr-4'>Explore all the different advertising and brand services we offer.</h1>
        <h3 className='text-2xl leading-normal text-white dark:text-brand-secondary mr-16 mt-8'>Social media, brand identity, advertisement, and more! We've got it all.</h3>
      
        <button className='text-2xl mobile-btn mt-8 text-brand-primary dark:bg-brand-secondary bg-white dark:hover:bg-brand-primary dark:hover:text-brand-secondary hover:bg-brand-primary hover:text-white'>view more deals</button>
      </div>
      <div className='mx-auto flex flex-col justify-center'>
        <MobileProductCard topCard={true} />
        <MobileProductCard />
      </div>
    </div>
  )
}

export default DesktopExplore