import React from 'react'
import { MdContentCopy} from "react-icons/md";

const KycCompontnt = () => {
  return (
    <div className='bg-white shadow rounded'>
      <div className='row text-black p-3'>
        <div className='col mt-4 p-3 mx-2'>
           <span className='fs-3'><MdContentCopy /> </span>
          </div>
        <div className='col'>
           <p >
            <span className='mx-3 fw-bold'>KYC Approved</span>
            <br />
            Share referral link and get 100 USD as bonus
            <br /> 
           <span className='text-info'> Copy Referral Link </span>
           </p>
        </div>

      </div>
    </div>
  )
}

export default KycCompontnt