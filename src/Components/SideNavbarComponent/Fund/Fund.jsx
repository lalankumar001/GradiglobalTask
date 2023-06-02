import React from 'react'
import '../../../App.css'


const Fund = () => {
  return (
    <div className='HomePage shadow'>
      <div className='text-danger p-5'>
        <p>Any Help: support@globalbusinesspays.com</p>
      </div>
       <div className='text-start container shadow w-50 mt-4 p-2'>
      <h6 className='p-2'>Fund Wallet</h6>
       <span className='mt-5'>Amount</span>
       <form className="row gy-2 gx-3 align-items-center mt-1">
         <div className="input-group">
           <div className="input-group-text fw-bold">$</div>
          <input type="number" name="number" id="number" className='w-75 border'/>
     </div>
</form>
            <br />
            <span className='btn btn-info w-100 mt-4 p-2 mb-4'>Add to wallet</span>
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

export default Fund