import React from 'react'
import '../../App.css'
import { FaUserAlt } from "react-icons/fa";
import { BsFillCalendarDateFill,BsCashCoin} from "react-icons/bs";

const LoanRequest = () => {
  return (
<div className='HomePage shadow'>
  <br />
       <div className='text-start container shadow w-50 mt-4 p-2'>
      <h6 className='p-2'>Request For Loan</h6>
       <span className='mt-5'>Full Name</span>
       <form className="row gy-2 gx-3 align-items-center mt-1">
       <div className="input-group">
           <div className="input-group-text fw-bold"><FaUserAlt /></div>
           <input type="text" name="name" id="name" className='form-control' />
        </div>
     <span className='mt-2'>Address</span>
     <div className="input-group">
           <div className="input-group-text fw-bold"><FaUserAlt /></div>
           <input type="text" name="name" id="name" className='form-control' />
      </div>
     <span className='mt-2'>DOB</span>
     <div className="input-group">
           <div className="input-group-text fw-bold"><BsFillCalendarDateFill /></div>
           <input type="date" name="name" id="name" className='form-control' />
      </div>
     <span className='mt-2'>Business Name</span>
     <div className="input-group">
           <div className="input-group-text fw-bold"><FaUserAlt /></div>
           <input type="text" name="name" id="name" className='form-control' />
        </div>
     <span className='mt-2'>Annual Revenue</span>
         <div className="input-group">
           <div className="input-group-text fw-bold"><BsCashCoin /></div>
          <select class="form-select" aria-label="Default select example">
            <option selected>0 $ to 1 million $ </option>
            <option value="1">1 million $ to 5 million $</option>
            <option value="1">5 million $ to 15 million $</option>
            <option value="1">15 million $ to 50 million $</option>
            <option value="1">50 million $ to 100 million $</option>
            <option value="1">100 million $ +</option>
            
            </select>
     </div>
     <span className='mt-2'>Amount Required</span>
         <div className="input-group">
           <div className="input-group-text fw-bold"><BsCashCoin /></div>
          <select class="form-select" aria-label="Default select example">
            <option selected>1 million $</option>
            <option value="1">10 million $</option>
            <option value="1">100 million $</option>
            </select>
     </div>
     <span className='mt-2'>Tenure</span>
         <div className="input-group">
           <div className="input-group-text fw-bold"><FaUserAlt /></div>
          <select class="form-select" aria-label="Default select example">
            <option selected>6 months</option>
            <option value="1">1 year</option>
            <option value="1">2 year</option>
            <option value="1">3 year</option>
            <option value="1">4 year</option>
            </select>
     </div>
     <span className='p-2 mx-1'>
      <input type="checkbox" name="check" id="check" /> 6% annual interest rate will apply
     </span>
     <span>Attachment</span>
     <input type="file" name="Fileupload" id="fileupload" />
     <span className='text-danger'>1. Company incorporate Doc (PDF)</span>
     <span className='text-danger'>2. Project Report (PDF)</span>
</form>
            <br />
            <span className='btn btn-info w-100 mt-4 p-2 mb-4'>Send Your Request</span>
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

export default LoanRequest