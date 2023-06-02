import React from 'react'
import { BsArrowDownUp } from "react-icons/bs";

const walletHistory = () => {
  return (
    <div className='bg-white shadow rounded mt-2'>
     <div className='row'>
       <div className='col'>
        <p className='p-3 fw-semibold'>Wallet Trasactions</p>
       </div>
       <div className='row'>
        <div className='col-1 text-end'>
          <p>Show</p>
        </div>
        <div className='col-1'>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected>10</option>
         <option value="1">25</option>
         <option value="2">50</option>
         <option value="3">100</option>
         </select>
        </div>
        <div className='col-4 text-start'>
          <p>entries</p>
        </div>

        <div className='col-6 text-end'>
         <label>Search: </label> <input type="search" name="search" id="search" />
        </div>
       </div>
     </div>
      <hr/>
      <div className='row container'>
        <div className="col-3 text-end"> 
          <p>Transfer Details
         <span className='mx-5'> <BsArrowDownUp /></span></p>
        </div>
        <div className="col-3 text-end"> 
          <p>Amount
         <span className='mx-5'> <BsArrowDownUp /></span></p>
        </div>
        <div className="col-3 text-end"> 
          <p>Status
         <span className='mx-5'> <BsArrowDownUp /></span></p>
        </div>
        <div className="col-3 text-end"> 
          <p>Date
         <span className='mx-5'> <BsArrowDownUp /></span></p>
        </div>

        </div> 
      <hr />
        <div className='row'>
          <div className="col-12 text-center">No matching records found</div>
        </div>
        <hr />
        <div className='row p-2 w-100'>
          <div className="col-8 text-start">Showing 0 to 0 of 0 entries (filtered from 726,576 total entries)</div>
          <div className="col-4 text-end"><span className='border shadow btn btn-'>Previous</span> <span className='border shadow btn btn-'>Next</span></div>
        </div>
    
      <div>

      </div>


  </div>
  )
}

export default walletHistory