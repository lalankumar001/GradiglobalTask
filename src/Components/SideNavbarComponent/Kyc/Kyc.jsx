import React from 'react'
import '../../../App.css'
import Tick from '../../../assets/tick.svg'

const Kyc = () => {
  return (
    <div className='HomePage shadow'>
      <div className='text-danger p-5'>
        <p>Any Help: support@globalbusinesspays.com</p>
      </div>
       <div className='text-center container shadow w-50 p-5 mt-2'>
            <img src={Tick} alt="svg" width='200'/>
            <br />
            <span className='btn btn-info w-100 mt-4 p-2 mb-4'>Your KYC has been approved.</span>
            <br />
            <span className=''>Previous Uploads</span>
       </div>
       <br />
    </div>
  )
}

export default Kyc