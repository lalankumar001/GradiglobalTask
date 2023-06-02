import React from 'react'
import Wheel from '../../../assets/Wheel.png'

const Wheels = () => {
  return (
    <div className='HomePage'>
      <span className='fw-bold text-dark'>Dear Customers,</span>
      <div className='p-3 mb-2'>
        <p>Global Business Pay (https://www.globalbusinesspays.com/) is a global payment solutions provider offering instant, safe and convenient payment services to customers and businesses across the globe.
           Since its foundation, Global Business Pay has successfully provided end-to-end, account and card-based payment solutions to businesses and individuals worldwide, offering an instant, safe and fast means of moving money around the world.
           So our business partner decided to credit some small amount to play “Wheel of Fortune” game to promote the Global Business Pay Company globalize. You can withdraw this money in any bank or BTC wallet any time.</p>
      </div>
      <div>
        <span className='text-danger'>We are always available to answer your questions. You can reach us via email us at <span className='text-primary'> support@globalbusinesspays.com </span></span>
      </div>
      <div className='row mt-2 p-2'>
           <div className='col text-center'>
            <span className='fw-semibold'>Spin the wheel to examine your fate</span>
         <img src={Wheel} alt="img" width='450' className='shadow w-75 mx-5 mt-2' />
           </div>
           <div className='col text-center mt-2 card p-3'>
            <span className='fw-semibold my-2'>Top 10 list</span>
            <table className="table text-center border shadow">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">First</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Prize</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">Prize</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">Prize</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">Prize</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">Prize</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">Prize</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">Prize</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">Prize</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">Prize</th>
      <td>Mark</td>
    </tr>

  </tbody>
</table>

<div className='card p-4'>
<span className='fw-semibold'>Last 5 Transactions</span>
  <table className="table text-center border shadow">
  <thead>
    <tr>
      <th scope="col">Prize</th>
      <th scope="col">150 USD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Winnig Date</th>
      <td>02 Jun 2033</td>
    </tr>
  </tbody>
</table>
</div>
           </div>
           

      </div>
    </div>
  )
}

export default Wheels