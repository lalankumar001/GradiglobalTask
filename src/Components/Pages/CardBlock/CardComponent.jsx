import React from 'react'
import { FaMinus } from "react-icons/fa";

const CardComponent = () => {
  return (
    <div className='bg-white shadow rounded'>
      <div className='row text-black p-2'>
        <div className='col-10 mt-2'>
          <p>Activate Visa Card</p>
            </div>
        <div className='col mt-1'>
           <p><FaMinus /></p>
        </div>
           <h6 className='mt-5'>KYC <span className='bg-primary text-white p-1 border'>Verified</span> <span className='text-info'> Click here </span> to proceed.</h6>
      </div>
    </div>
  )
}

export default CardComponent