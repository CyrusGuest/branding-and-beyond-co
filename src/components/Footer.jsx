import React from 'react'
import pinterestLogo from '../../images/pinterest.svg'
import twitterLogo from '../../images/twitter.svg'
import instaLogo from '../../images/insta.svg'

const Footer = () => {
  return (
    <div className=' pl-6 md:flex'>
      <div className='my-8 flex'>

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

      <div className='mt-10 md:my-8 md:mx-16'>
        <h1 className='text-4xl font-bold text-flower-yellow'>get the latest news & offers</h1>

        <form action="" className='flex flex-col'>
          <input className='mt-6 w-4/5 text-2xl bg-flower-yellow rounded-lg pl-4 py-2 text-white placeholder:text-white outline-none drop-shadow-lg' placeholder='Email Address*' type="email" name="email" id="email" />
          <button className='mt-4 w-4/5 text-2xl mobile-btn text-flower-yellow bg-white hover:bg-flower-yellow hover:text-white' type="submit">subscribe</button>
        </form>
      </div>

      <div className='md:my-8 mt-10 mb-6'>
        <h1 className='text-4xl font-bold text-flower-yellow'>socials</h1>
        <ul className='mt-2 flex gap-2'>
          <li><img className='cursor-pointer' src={pinterestLogo} alt="" /></li>
          <li><img className='cursor-pointer' src={instaLogo} alt="" /></li>
          <li><img className='cursor-pointer' src={twitterLogo} alt="" /></li>
        </ul>
      </div>

      {/* <div className='flex mt-4 space-x-4 md:w-10'>
        <img className='cursor-pointer' src={pinterestLogo} alt="" />
        <img className='cursor-pointer' src={instaLogo} alt="" />
        <img className='cursor-pointer' src={twitterLogo} alt="" />
      </div> */}

    </div>
  )
}

export default Footer