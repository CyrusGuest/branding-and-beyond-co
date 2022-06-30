import React from 'react'
import sunflowerBouquet from '../../images/sunflower-bouquet.png'
import cart from '../../images/cart.svg'
import price from '../../images/price.svg'

const ProductCard = () => {
  return (
    <div className='font-Poppins w-11/12 py-6 px-6 flex bg-white rounded-lg text-flower-yellow drop-shadow-lg mt-14'>
      <img className='w-2/5 h-2/5 rounded-lg drop-shadow-lg' src={sunflowerBouquet}/>
      <div className='ml-5'>
        <h3 className='font-bold'>aqueous sunflora</h3>
        <p>8 flower bundle</p>
        <div className='flex mx-0 py-0 mt-4 '>
          <img className='mr-3 cursor-pointer drop-shadow-lg' src={cart} alt=""/>
          <img src={price} alt="" />
        </div>
        <p className='mt-2 text-xs'>free shipping on orders $59.99 and above!</p>
      </div>
    </div>
  )
}

export default ProductCard