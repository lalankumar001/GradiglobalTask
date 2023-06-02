import React from 'react'
import Send from '../../../assets/FundSendIcon.svg'
import Wallet from '../../../assets/Fundinvestment.svg' 
import Withdrawal from '../../../assets/Fundwithdrawal.svg'

const FacilityComponent = () => {
  return (
    <div className='bg-white shadow rounded'>
      <div className='row text-black p-3'>
        <div className='col'>
           <span className='p-3'><img src={Send} alt="svg" width='50'/></span>
           <p className='text-info'>Transfer Fund
            <br/>
          <span className='text-black p-3'>USD 0 </span>
           </p>
          </div>
        <div className='col p-2'>
          <span className='p-3'><img src={Wallet} alt="svg" width='50' /></span>
        <p className='text-info'> Fund Wallet </p>
        </div>
        <div className='col p-2'>
          <span className='p-3'><img src={Withdrawal} alt="svg" width='50' /></span>
          <p className='text-info'>Withdraw fund
            <br/>
          <span className='text-black p-3'>USD 0 </span>
           </p>
        </div>

      </div>
    </div>
  )
}

export default FacilityComponent