import React from 'react'

import Recept from '../../../assets/Bills.svg'
import Recharge from '../../../assets/Recharge.svg'
import Voucher from '../../../assets/gift-voucher.svg'
import airoplane from '../../../assets/airplane.svg'
import game from '../../../assets/games.svg'
import More from '../../../assets/more.svg'



const FeaturesComponent = () => {
  return (
    <div className='bg-white shadow rounded mt-2'>
    <div className='row text-black p-3 text-center'>
      <div className='col p-2'>
         <span className='p-3'><img src={Recept} alt="svg" width='50'/></span>
         <p className='text-info'>Bills</p>
        </div>
      <div className='col p-2'>
        <span className='p-3'><img src={Recharge} alt="svg" width='50' /></span>
      <p className='text-info'>Recharge </p>
      </div>
      <div className='col p-2'>
        <span className='p-3'><img src={Voucher} alt="svg" width='50' /></span>
        <p className='text-info'>Vouchers</p>
      </div>
      <div className='col p-2'>
        <span className='p-3'><img src={airoplane} alt="svg" width='50' /></span>
        <p className='text-info'>Travel</p>
      </div>
      <div className='col p-2'>
        <span className='p-3'><img src={game} alt="svg" width='50' /></span>
        <p className='text-info'>Gaming</p>
      </div>
      <div className='col p-2'>
        <span className='p-3'><img src={More} alt="svg" width='50' /></span>
        <p className='text-info'>More</p>
      </div>

    </div>
  </div>
  )
}

export default FeaturesComponent