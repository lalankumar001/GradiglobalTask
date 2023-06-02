import React from 'react'
import { GrGoogleWallet } from "react-icons/gr";

const AccountComponent = () => {
  return (
    <div className='bg-dark shadow rounded'>
      <div className='row text-white p-3'>
        <div className='col'>
           <span className='fs-3'><GrGoogleWallet /></span>
           <p>Account No.
            <br/>
            <b>123456789</b>
           </p>
          </div>
        <div className='col p-4'>
        <p className='mx-4'> &nbsp; &nbsp;   USD 0.00
            <br/>
            <b>Total Balance</b>
           </p>
        </div>

      </div>
    </div>
  )
}

export default AccountComponent