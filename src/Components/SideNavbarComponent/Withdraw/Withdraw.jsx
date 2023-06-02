import React from 'react'
import '../../../App.css'


const Withdraw = () => {
  return (
<div className='HomePage shadow'>
      <div className='text-danger p-5'>
        <p>Any Help: support@globalbusinesspays.com</p>
      </div>
       <div className='text-start container shadow w-50 mt-4 p-2'>
      <h6 className='p-2'>Withdrawal Request</h6>
       <span className='mt-5'>Account No</span>
       <form className="row gy-2 gx-3 align-items-center mt-1">
         <div className="input-group">
           <div className="input-group-text fw-bold">#</div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Bank Transfer</option>
            <option value="1">Bitcoin Wallet</option>
            <option value="2">Paypal</option>
            <option value="3">Payoneer</option>
            </select>
     </div>
</form>
            <br />
            <span className='btn btn-info w-100 mt-4 p-2 mb-1'>Proceed</span>
            <br />
            <br />  
       </div>
       <br />
       <br />
       <br />
       <br />
       <br />
    </div>

  )
}

export default Withdraw