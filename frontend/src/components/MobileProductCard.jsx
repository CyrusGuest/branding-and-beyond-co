import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'
import roofIcon from '../../images/roof-icon.svg'
import cart from '../../images/cart.svg'
import darkCart from '../../images/dark_mode/cart.svg'
import price from '../../images/price.svg'

const ProductCard = ({ topCard }) => {
  let { LightMode } = useContext(AppContext)

  if (topCard) {
    return (
      <div className='font-Poppins md:mx-auto md:my-2 md:w-9/12 w-11/12 py-6 px-6 flex bg-white dark:bg-brand-secondary dark:text-brand-primary rounded-lg text-brand-primary drop-shadow-lg mt-14'>
        <img className='w-2/5 mx-auto md:max-w-xs' src={roofIcon}/>

        <div className='ml-5'>
          <h3 className='font-bold'>brand refresh</h3>
          <p>full rebrand and refresh</p>

          <div className='flex mx-0 py-0 mt-2 '>
            {LightMode ? <Link to="/packages"><img className='mr-3 cursor-pointer drop-shadow-lg' src={cart} alt="" /></Link> : <Link to="/packages"><img className='mr-3 cursor-pointer drop-shadow-lg' src={darkCart} alt="" /></Link>}
            <img src={price} alt="" />
          </div>

          <p className='mt-2 text-xs'>contact us today for an estimate on your refresh!</p>
        </div>

      </div>
    )
  }

  return (
    <div className='font-Poppins md:mx-auto md:ml-32 md:my-2 md:w-9/12 w-11/12 py-6 px-6 flex bg-white dark:bg-brand-secondary dark:text-brand-primary rounded-lg text-brand-primary drop-shadow-lg mt-14'>
      
      <div className='ml-5'>
        <h3 className='font-bold'>brand refresh</h3>
        <p>full rebrand and refresh</p>

        <div className='flex mx-0 py-0 mt-2 '>
          {LightMode ? <Link to="/packages"><img className='mr-3 cursor-pointer drop-shadow-lg' src={cart} alt="" /></Link> : <Link to="/packages"><img className='mr-3 cursor-pointer drop-shadow-lg' src={darkCart} alt="" /></Link>}
          <img src={price} alt="" />
        </div>

        <p className='mt-2 text-xs'>contact us today for an estimate on your refresh!</p>
      </div>

      <img className='w-2/5 mx-auto md:max-w-xs' src={roofIcon}/>
    </div>
  )
}

export default ProductCard