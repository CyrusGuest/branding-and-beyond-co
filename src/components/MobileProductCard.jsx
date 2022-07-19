import React from 'react'
import roofIcon from '../../images/roof-icon.svg'
import cart from '../../images/cart.svg'
import price from '../../images/price.svg'

const ProductCard = () => {
  return (
    <div className='font-Poppins w-11/12 py-6 px-6 flex bg-white rounded-lg text-flower-yellow drop-shadow-lg mt-14'>
      <img className='w-2/5 h-2/5 my-auto odd:rounded-lg drop-shadow-lg' src={roofIcon}/>
      <div className='ml-5'>
        <h3 className='font-bold'>roof repair</h3>
        <p>full restoration and repair</p>
        <div className='flex mx-0 py-0 mt-2 '>
          <img className='mr-3 cursor-pointer drop-shadow-lg' src={cart} alt=""/>
          <img src={price} alt="" />
        </div>
        <p className='mt-2 text-xs'>contact us today for an estimate on your roof!</p>
      </div>
    </div>
  )
}

export default ProductCard