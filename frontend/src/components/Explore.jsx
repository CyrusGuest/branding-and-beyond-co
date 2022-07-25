import React from 'react'
import { Link } from 'react-router-dom'
import MobileProductCard from './MobileProductCard'

const Explore = () => {
  return (
    <div className='bg-brand-primary pt-20 pl-3 pb-20 md:hidden'>
      <h1 className='text-5xl leading-relaxed text-white dark:text-brand-secondary mr-4'>Explore all the different advertising and brand services we offer.</h1>
      <h3 className='text-3xl leading-relaxed text-white dark:text-brand-secondary mr-16 mt-8'>Social media, brand identity, advertisement, and more! We've got it all.</h3>
    
      <Link to="/packages"><button className='text-2xl mobile-btn mt-8 text-brand-primary dark:text-brand-primary dark:bg-brand-secondary bg-white dark:hover:bg-brand-primary dark:hover:text-brand-secondary hover:bg-brand-primary hover:text-white'>view more packages</button></Link>

      <MobileProductCard />

    </div>
  )
}

export default Explore