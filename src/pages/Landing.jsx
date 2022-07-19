import React, { useState, useContext } from 'react'
import MobileReviewCard from '../components/MobileReviewCard'
import ProductCard from '../components/MobileProductCard'
import logo from '../../images/logo.svg'
import menuDots from '../../images/menu-dots.svg'
import twitterLogo from '../../images/twitter.svg'
import pinterestLogo from '../../images/pinterest.svg'
import instaLogo from '../../images/insta.svg'
import MobileNav from '../components/MobileNav'
import { MenuContext } from '../context/MenuContext'

const Landing = () => {
  let { MobileNavOpen, setMobileNavOpen } = useContext(MenuContext)

  return (
    <div className='font-Poppin'>

      {MobileNavOpen ? <MobileNav  props={{ MobileNavOpen, setMobileNavOpen }} /> : ""}

      <div className={MobileNavOpen ? "opacity-50" : "opacity-100"}>
        <div>
          <div className='flex'>
            <img src={logo} alt="" className='cursor-pointer' />
            <h1 className='text-2xl font-bold text-flower-yellow my-auto cursor-pointer' >Mainato Pro Construction</h1>
            <img onClick={() => setMobileNavOpen(!MobileNavOpen)} src={menuDots} alt="" className='my-auto ml-auto mr-8 float-right cursor-pointer' />
          </div>

          <h1 className='leading-10 mx-10 mt-10 text-center text-4xl font-bold text-flower-yellow'>Your one-stop-shop for everything roofing related.</h1>
          <h3 className='leading-10 mt-8 mx-6 text-3xl text-[#999999] text-center'>Where <span className='text-flower-yellow font-bold'>roofing</span> is just the tip of the <span className='text-flower-yellow font-bold'>iceberg</span>.</h3>
        
          <div className='flex justify-center mt-10 space-x-6'>
            <button className='text-2xl mobile-btn text-white bg-flower-yellow hover:bg-white hover:text-flower-yellow'>learn more</button>
            <button className='text-2xl mobile-btn text-flower-yellow bg-white hover:bg-flower-yellow hover:text-white'>contact us</button>
          </div>

          <MobileReviewCard />
        </div>

        <div className='bg-flower-yellow pt-20 pl-3 pb-20'>
          <h1 className='text-5xl leading-relaxed text-white mr-4'>Explore all the different roofing and housing services we offer.</h1>
          <h3 className='text-3xl leading-relaxed text-white mr-16 mt-8'>Roof replacement, roof repair, siding, and more! We've got it all.</h3>
        
          <button className='text-2xl mobile-btn mt-8 text-flower-yellow bg-white hover:bg-flower-yellow hover:text-white'>view more deals</button>

          <ProductCard />

        </div>

        <div className='pt-10 pb-10 pl-6'>
          <div className='flex'>
            <div className='mr-16'>
              <h1 className='text-4xl font-bold text-flower-yellow'>shop</h1>
              <ul>
                <li className='text-xl text-flower-yellow cursor-pointer mt-2'>deals</li>
                <li className='text-xl text-flower-yellow cursor-pointer mt-2'>gift shop</li>
                <li className='text-xl text-flower-yellow cursor-pointer mt-2'>specials</li>
                <li className='text-xl text-flower-yellow cursor-pointer mt-2'>seasonal offers</li>
              </ul>
            </div>

            <div>
              <h1 className='text-4xl font-bold text-flower-yellow'>company</h1>
              <ul>
                <li className='text-xl text-flower-yellow cursor-pointer mt-2'>about us</li>
                <li className='text-xl text-flower-yellow cursor-pointer mt-2'>policy</li>
                <li className='text-xl text-flower-yellow cursor-pointer mt-2'>contact us</li>
                <li className='text-xl text-flower-yellow cursor-pointer mt-2'>more</li>
              </ul>
            </div>
          </div>

          <div className='mt-10'>
            <h1 className='text-4xl font-bold text-flower-yellow'>get the latest news & offers</h1>

            <form action="" className='flex flex-col'>
              <input className='mt-6 w-4/5 text-2xl bg-flower-yellow rounded-lg pl-4 py-2 text-white placeholder:text-white outline-none drop-shadow-lg' placeholder='Email Address*' type="email" name="email" id="email" />
              <button className='mt-4 w-4/5 text-2xl mobile-btn text-flower-yellow bg-white hover:bg-flower-yellow hover:text-white' type="submit">subscribe</button>
            </form>
          </div>

          <h1 className='text-4xl font-bold text-flower-yellow mt-10'>socials</h1>
          <div className='flex mt-4 space-x-4'>
            <img className='cursor-pointer' src={pinterestLogo} alt="" />
            <img className='cursor-pointer' src={instaLogo} alt="" />
            <img className='cursor-pointer' src={twitterLogo} alt="" />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Landing

// <button className='mobile-btn text-white bg-flower-yellow hover:bg-white hover:text-flower-yellow'>order now</button>