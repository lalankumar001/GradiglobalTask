import React from 'react'
import '../../../App.css'
import AtmCard from '../../../assets/AtmCardFront.png'

const VisaCard = () => {
  return (
<div className='HomePage shadow'>
      <div className='text-danger p-5'>
        <p>Any Help: support@globalbusinesspays.com</p>
      </div>
       <div className='text-center container shadow w-75 p-5 mt-2'>
            <img src={AtmCard} alt="svg" width='350'/>
            <br />
            <span className='btn btn- w-100 mt-4 p-2 mb-4'>Kyc <span className='border btn btn-danger'> Verified.</span> You are eligible to activate visa card. Click Here to activate.</span>
             </div>
             <br />
    </div>

  )
}

export default VisaCard